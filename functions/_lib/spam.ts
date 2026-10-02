/**
 * Zero-infrastructure spam/abuse heuristics. No KV or database is
 * provisioned for this project, so the dedupe/rate-limit cache below lives
 * in the Worker isolate's module scope: it persists across requests handled
 * by the *same* warm isolate, which catches the common case (rapid
 * double-click, a basic bot hammering one edge location) but is explicitly
 * best-effort — it is not durable, not shared across isolates/regions, and
 * resets whenever the isolate recycles. True distributed rate limiting
 * would need Cloudflare KV or Durable Objects, which this phase intentionally
 * does not add (see the final report).
 */

const MIN_FORM_SECONDS = 3;
const RECENT_WINDOW_MS = 60_000;
const RECENT_MAX_ENTRIES = 500;

const recentSubmissions = new Map<string, number>();

function pruneRecent(now: number) {
  for (const [key, ts] of recentSubmissions) {
    if (now - ts > RECENT_WINDOW_MS) recentSubmissions.delete(key);
  }
  // Hard cap so a sustained attack can't grow this map unbounded within one isolate's lifetime.
  if (recentSubmissions.size > RECENT_MAX_ENTRIES) {
    const oldestFirst = [...recentSubmissions.entries()].sort((a, b) => a[1] - b[1]);
    for (const [key] of oldestFirst.slice(0, recentSubmissions.size - RECENT_MAX_ENTRIES)) {
      recentSubmissions.delete(key);
    }
  }
}

export function isHoneypotTripped(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

export function isSubmittedTooFast(formOpenedAt: unknown): boolean {
  const openedAt = typeof formOpenedAt === "number" ? formOpenedAt : Number(formOpenedAt);
  if (!Number.isFinite(openedAt)) return true; // missing/invalid timestamp is itself suspicious
  const elapsedSeconds = (Date.now() - openedAt) / 1000;
  return elapsedSeconds < MIN_FORM_SECONDS;
}

function recentKey(email: string, phoneDigits: string): string {
  return `${email.toLowerCase()}:${phoneDigits}`;
}

/**
 * Returns true if this exact (email, phone) pair had a SUCCESSFUL send
 * recorded within the last minute on this isolate. Checked before sending,
 * so a genuine retry after a failed attempt is never silently swallowed —
 * only a pair that already definitely succeeded short-circuits. This is
 * read-only; call recordSuccessfulSend after the real send confirms.
 */
export function wasRecentlySuccessful(email: string, phoneDigits: string): boolean {
  const now = Date.now();
  pruneRecent(now);
  const last = recentSubmissions.get(recentKey(email, phoneDigits));
  return last !== undefined && now - last < RECENT_WINDOW_MS;
}

export function recordSuccessfulSend(email: string, phoneDigits: string): void {
  const now = Date.now();
  pruneRecent(now);
  recentSubmissions.set(recentKey(email, phoneDigits), now);
}

/**
 * Very small per-IP request counter, same best-effort caveats as above.
 * Allows up to `limit` requests per `windowMs` per IP, per isolate.
 */
const ipHits = new Map<string, number[]>();

export function isRateLimited(ip: string, limit = 8, windowMs = 60_000): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < windowMs);
  hits.push(now);
  ipHits.set(ip, hits);
  if (ipHits.size > RECENT_MAX_ENTRIES) {
    const [oldestKey] = ipHits.keys();
    if (oldestKey) ipHits.delete(oldestKey);
  }
  return hits.length > limit;
}
