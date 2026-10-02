/**
 * Cloudflare Turnstile server-side verification. Dormant by design: if
 * TURNSTILE_SECRET_KEY isn't configured, callers should skip verification
 * entirely rather than block submissions — there is no frontend widget
 * wired up yet to produce a token (see the final report for what's needed
 * to activate this end-to-end).
 */
export async function verifyTurnstileToken(
  token: string | undefined,
  secretKey: string,
  remoteIp: string | undefined,
): Promise<boolean> {
  if (!token) return false;

  const form = new FormData();
  form.append("secret", secretKey);
  form.append("response", token);
  if (remoteIp) form.append("remoteip", remoteIp);

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });
    if (!res.ok) return false;
    const result = (await res.json()) as { success?: boolean };
    return result.success === true;
  } catch {
    return false;
  }
}
