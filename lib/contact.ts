import { z } from "zod";

const noLineBreaks = (v: string) => !/[\r\n]/.test(v);

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name is too long.").refine(noLineBreaks, "Invalid name."),
  email: z.string().trim().max(254, "Email is too long.").pipe(z.email("Please enter a valid email address.")),
  message: z.string().trim().min(10, "Please write at least 10 characters.").max(4000, "Message is too long (4000 characters max)."),
  /** Honeypot: real visitors never see or fill this. */
  company: z.string().max(200).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

export type MailConfig = { apiKey: string; to: string; from: string };

export function readMailConfig(env: Record<string, string | undefined> = process.env): MailConfig | null {
  const apiKey = env.RESEND_API_KEY?.trim();
  const to = env.CONTACT_TO_EMAIL?.trim();
  const from = env.CONTACT_FROM_EMAIL?.trim();
  return apiKey && to && from ? { apiKey, to, from } : null;
}

/** Sends through Resend's HTTP API. Recipient comes only from server config, never from the visitor. */
export async function sendContactEmail(
  config: MailConfig,
  input: Pick<ContactInput, "name" | "email" | "message">,
  fetchImpl: typeof fetch = fetch,
): Promise<boolean> {
  const res = await fetchImpl("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${config.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: config.from,
      to: [config.to],
      reply_to: input.email,
      subject: `Portfolio message from ${input.name}`,
      text: `From: ${input.name} <${input.email}>\n\n${input.message}`,
      html: `<p><strong>${escapeHtml(input.name)}</strong> &lt;${escapeHtml(input.email)}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(input.message)}</p>`,
    }),
  });
  return res.ok;
}
