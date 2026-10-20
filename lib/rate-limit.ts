/**
 * Minimal in-memory rate limiter (per server instance).
 * LIMITATION: on serverless hosting each instance has its own memory, so this is a best-effort
 * guard only. For stronger protection add a shared store (e.g. Upstash/Vercel KV) or a CAPTCHA.
 */
const hits = new Map<string, number[]>();

export function rateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000, now = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= windowMs)) hits.delete(k);
  }
  return true;
}
