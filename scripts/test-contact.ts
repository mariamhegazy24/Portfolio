/** Logic tests for the contact form (validation, config, email payload, rate limit). Uses a mocked fetch: NO real email is sent. */
import assert from "node:assert/strict";
import { contactSchema, escapeHtml, readMailConfig, sendContactEmail } from "../lib/contact.ts";
import { rateLimit } from "../lib/rate-limit.ts";

const ok = { name: "Ada", email: "ada@example.com", message: "Hello, I'd like to talk about a role." };

// validation
assert.equal(contactSchema.safeParse(ok).success, true);
assert.equal(contactSchema.safeParse({ ...ok, email: "nope" }).success, false);
assert.equal(contactSchema.safeParse({ ...ok, name: "" }).success, false);
assert.equal(contactSchema.safeParse({ ...ok, name: "Ada\nBcc: evil@x.com" }).success, false, "header injection in name");
assert.equal(contactSchema.safeParse({ ...ok, message: "short" }).success, false);
assert.equal(contactSchema.safeParse({ ...ok, message: "x".repeat(4001) }).success, false);
assert.equal(contactSchema.safeParse({ ...ok, email: "a".repeat(250) + "@x.com" }).success, false);

// config
assert.equal(readMailConfig({}), null);
assert.equal(readMailConfig({ RESEND_API_KEY: "k", CONTACT_TO_EMAIL: "me@x.com" }), null);
const cfg = readMailConfig({ RESEND_API_KEY: "k", CONTACT_TO_EMAIL: "me@x.com", CONTACT_FROM_EMAIL: "Site <c@x.com>" });
assert.ok(cfg);

// payload: fixed recipient, reply_to, escaped html, server-only key
let captured: { url: string; init: RequestInit } | undefined;
const mock = (async (url: string, init: RequestInit) => {
  captured = { url, init };
  return new Response("{}", { status: 200 });
}) as unknown as typeof fetch;
const sent = await sendContactEmail(cfg!, { ...ok, name: "<b>Ada</b>" }, mock);
assert.equal(sent, true);
const body = JSON.parse(String(captured!.init.body));
assert.deepEqual(body.to, ["me@x.com"]);
assert.equal(body.reply_to, "ada@example.com");
assert.ok(!body.html.includes("<b>"), "html must be escaped");
assert.equal(escapeHtml(`<&">'`), "&lt;&amp;&quot;&gt;&#39;");
const failing = (async () => new Response("{}", { status: 422 })) as unknown as typeof fetch;
assert.equal(await sendContactEmail(cfg!, ok, failing), false);

// rate limit
const t = 1_000_000;
for (let i = 0; i < 5; i++) assert.equal(rateLimit("ip-a", 5, 60_000, t + i), true);
assert.equal(rateLimit("ip-a", 5, 60_000, t + 10), false);
assert.equal(rateLimit("ip-a", 5, 60_000, t + 70_000), true);
assert.equal(rateLimit("ip-b", 5, 60_000, t), true);

console.log("contact logic: all checks passed (mocked provider, no real email sent)");
