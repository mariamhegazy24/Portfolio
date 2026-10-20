import { NextResponse } from "next/server";
import { contactSchema, readMailConfig, sendContactEmail } from "@/lib/contact";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const MAX_BODY = 10_000;

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ ok: false, error: "Unsupported request." }, 415);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY) return json({ ok: false, error: "Request too large." }, 413);

  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(ip)) {
    return json({ ok: false, error: "Too many messages. Please try again later." }, 429);
  }

  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      errors[key] ??= issue.message;
    }
    return json({ ok: false, error: "Please check the highlighted fields.", errors }, 400);
  }

  // Honeypot filled: pretend success, send nothing.
  if (parsed.data.company) return json({ ok: true }, 200);

  const config = readMailConfig();
  if (!config) {
    console.error("[contact] Email delivery is not configured (missing env vars).");
    return json({ ok: false, error: "Messages can't be sent right now. Please email me directly." }, 503);
  }

  try {
    const sent = await sendContactEmail(config, parsed.data);
    if (!sent) {
      console.error("[contact] Email provider rejected the request.");
      return json({ ok: false, error: "Something went wrong sending your message. Please try again or email me directly." }, 502);
    }
  } catch {
    console.error("[contact] Email provider request failed.");
    return json({ ok: false, error: "Something went wrong sending your message. Please try again or email me directly." }, 502);
  }

  return json({ ok: true }, 200);
}
