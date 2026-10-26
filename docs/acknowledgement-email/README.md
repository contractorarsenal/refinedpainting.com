# Contact-form acknowledgement email — implementation notes

**Status: design and template only. Not live. Nothing in this repository sends email.**

`acknowledgement-email.html` is an email-compatible draft that introduces Gloria and includes her portrait. It is an implementation asset for review, not a working automation.

## What exists today (verified in source)

- Both forms (`src/components/sections/ContactForm.tsx`, `src/components/quote/QuoteModal.tsx`) submit through `src/hooks/useWeb3FormsSubmit.ts`.
- That hook posts JSON to `https://api.web3forms.com/submit`. It navigates to `/thank-you` and fires `generate_lead` only when the response has `success: true`.
- No acknowledgement is configured in the repository. There is no CRM, email-service-provider, or webhook integration in code.
- The lead destination inbox, and any auto-reply, are configured in the Web3Forms dashboard, which I cannot access. **[unverified]**

## What is needed before an acknowledgement can work

1. **Confirm the Web3Forms plan and dashboard options.** Check whether an auto-reply to the submitter is available on the current plan, and what sender name and reply-to it uses. **[unverified]** This is the simplest path if it is available.
2. **If Web3Forms cannot send it,** use a server-side step, for example a Cloudflare Pages Function that receives an accepted submission and calls an email provider. Its API key must be a Cloudflare secret, never a frontend value.
3. **Sender verification.** The sending domain must be verified (SPF/DKIM). That means DNS records on the live domain, which needs explicit authorization. It is out of scope for this pass.
4. **Portrait hosting.** `{{GLORIA_PORTRAIT_URL}}` needs a stable public HTTPS URL. Email clients cannot load the hashed build asset path reliably. Options: a published copy under `public/`, or the provider's asset store.
5. **Reply-to address.** `{{REPLY_TO_ADDRESS}}` must be confirmed. No business email address is published on the site (see CLAUDE.md §5), so do not invent one.

## Trigger rules

- Send **only after the form service accepts the submission.** A success message on screen, or the `/thank-you` navigation, is not proof of acceptance and must not trigger the email. The frontend success branch is also reachable by a refresh or by typing the URL in some flows, so it is not a safe trigger.
- **No duplicate sends.** Key each acknowledgement to a unique submission identifier, stored once. A retry or double-click must not send a second email. The client already guards against double-submit with `inFlightRef`, but that does not cover server retries.
- Do not include the message body or other submitted details in the acknowledgement unless the sender is confirmed. Keep it to the template.

## Copy rules

- Do **not** promise a response time. The site's existing "typically reaches out within one business day" line is an owner-decision claim and is not confirmed in this repository. Leave it unless the owner confirms it, and then align the email with that.
- The template says Gloria "helps with questions and with getting started on your free estimate." That matches her approved role and blurb in `src/lib/content.ts`.
- Maria is not named in the acknowledgement. She is the project coordinator after a job closes.

## Test plan (not run)

Send only to a test address that the owner approves, after the steps above are in place. Verify the portrait loads, the phone link works, the sender is correct, and a second submission with the same identifier sends nothing.

## Not done in this pass

No test emails sent, no live automation enabled, no recipient or account settings changed, and no DNS changed.
