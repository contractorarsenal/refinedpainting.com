# Refined Painting: Business Information Register

Updated 2026-11-04. Existing website copy is **not** independent proof of any fact. "Evidence" lists what supports the fact outside the site's own copy. "None on file" means the repository holds no owner document, certificate or third-party record for it.

Status: **Confirmed** (owner stated it), **Consistent** (the site agrees with itself, but no outside evidence), **Needs decision**.

| Fact or claim | Where it appears | Evidence | Status / decision needed |
|---|---|---|---|
| Business name: Refined Painting | `business.name` in `src/lib/content.ts`, JSON-LD, titles | Owner project; used throughout the brief | Confirmed |
| Phone (206) 258-7994 | `business.phone`, header, footer, Contact, JSON-LD (`+1-206-258-7994`) | None on file beyond the site | Consistent. Owner to confirm it's the right public number. |
| Address 7212 Linden Ave N, Seattle, WA 98103 | `business.address`, Contact page ("Address"), JSON-LD `PostalAddress` | None on file | Consistent. **Decision:** is it a public office customers may visit, or a business mailing address? The label was changed from "Office" to "Address" until confirmed. |
| Hours Mon–Sat 9 AM–5 PM | `business.hours` (footer, Contact, FAQ), JSON-LD `openingHoursSpecification` 09:00–17:00 Mon–Sat, `docs/acknowledgement-email/` (inactive) | Saturday closing at 5 PM confirmed by the owner (2026-11-05). BBB's 4 PM listing is an external profile that was not changed. | **Confirmed.** Site copy and JSON-LD agree. Decision: update the BBB listing (owner action, not done here). |
| Website areas served: 14 cities (Seattle, Bellevue, Bothell, Everett, Kenmore, Kirkland, Lake Stevens, Lynnwood, Marysville, Medina, Mercer Island, Redmond, Sammamish, Shoreline) | `serviceAreas` in `content.ts`, homepage summary, About/Contact strip, JSON-LD `areaServed` (same 14) | Live WordPress also lists these plus Palmer. Not independent proof. | Preserved unchanged. **Decision:** explicit website-coverage decision (keep all 14, trim, or add Palmer). |
| Ad targeting: Bellevue, Kirkland, Redmond, Sammamish; Seattle excluded | Not on the website. Owner brief only | Jay's instruction | Confirmed for ads. Not a website instruction. |
| "Serving Seattle and the Eastside"; "King & Snohomish Counties" | titles and descriptions on Home, Services, Contact, About, service pages; `index.html` | None on file | Consistent with the 14-city list. Revisit with the coverage decision. |
| Gloria: first contact (questions, estimates, getting started) | `teamMembers`, popup, About, Contact | Owner brief | Confirmed |
| Maria: Project Coordinator, coordinates once the customer moves forward | `teamMembers`, About | Owner brief says "after the job closes" | Site wording says "once you move forward". **Decision:** confirm "job closes" means the customer books, not job completion. Wording unchanged. |
| Victoria: name and role helping customers compare color options | Services page card (`promoBanner` in `content.ts`) | Confirmed by Jay | Confirmed |
| Victoria offer: "Complimentary with qualifying painting projects" | `promoBanner.support`; earlier copy said samples are brought to the home | None on file | **Needs decision:** what makes a project "qualifying" (minimum size, services, areas)? |
| Pricing: interior $2,500–$12,000, exterior $5,000–$20,000+ | FAQs in `content.ts` (cost questions for interior, exterior, general), Interior/Cabinet cost blog posts | None on file | **Needs decision:** owner-approved ranges, or remove. Blog posts are Seattle cost articles and carry their own figures; check them too. |
| `priceRange: "$$"` | JSON-LD in `index.html` | None on file | **Needs decision:** keep or remove. Unsupported schema value. |
| Google rating 5.0 stars from 242 Google reviews | `business.rating`, `business.reviewCount`, `reviewSummary` (hero, closing CTA), Reviews section, JSON-LD `aggregateRating` in `index.html` | Source: the business's Google listing, as reported by Jay on 2026-11-05 (replaces the earlier 227). No screenshot is stored in the repo, and the count changes as reviews arrive. | **Confirmed from the Google listing (owner-reported).** Update `business.reviewCount` and the `index.html` JSON-LD together when the count changes. Whether to keep `aggregateRating` is a separate decision (see below). |
| Testimonials in the Reviews section | `Reviews.tsx` | None on file | **Needs decision:** confirm each is a real, permitted review. |
| Licensed & Insured | UtilityBar, FinalCTA, trust strip, badge image, FAQ | Confirmed by Jay on 2026-11-05. No license number, insurer or certificate is on file, and none is shown on the site. | **Confirmed by the owner.** Do not add numbers or documents to the site unless the owner supplies them. |
| EPA Lead-Safe Certified | UtilityBar, trust strip, FAQ, About, badge image | Confirmed by Jay on 2026-11-05. No certification number or expiry is on file, and none is shown on the site. | **Confirmed by the owner.** Do not add a certificate number or expiry unless the owner supplies it. |
| Google Verified badge | trust strip, footer, Reviews | Badge image in repo only | **Needs decision:** proof of the Google badge/program. |
| Nextdoor Neighborhood Favorite badge | trust strip, footer, Reviews | Badge image in repo only | **Needs decision:** award year and proof. |
| 5-year workmanship warranty | hero, FAQ, About, process, `warranty` block in `content.ts` (including a "scheduled within 12 months of notification" term) | Live WordPress has a `/warranty/` page, which is also the owner's copy, not independent | **Needs decision:** owner-signed warranty terms. Decide what happens to the `/warranty/` URL. |
| First reply: "typically responds within about an hour during business hours" | Contact page and `contactReassurance`, one blog post (two sentences), `businessFaqs` on /faq | Confirmed by the owner (2026-11-05) as a typical first-reply time within business hours. Not a guarantee. | **Confirmed**, framed as typical and within Mon–Sat 9–5. It is not an estimate-delivery time. |
| Estimate promise: proposal "within 24–48 hours" | process steps, FAQ, two blog posts | None on file | **Still unconfirmed.** Left as written. Needs an owner decision: confirm a delivery time or approve neutral wording. |
| Scheduling promises: "2 to 4 weeks" interior, "3 to 7 days" commercial | FAQs in `content.ts` | None on file | **Needs decision:** confirm or soften. |
| "200+ homes painted", "200+ cabinets refinished" | `homesPainted`, `cabinetsRefinished` | None on file | **Needs decision:** project counts need support. |

## Estimate-delivery wording (still unconfirmed)

The first-reply time is now confirmed and applied (see the table). The proposal wording below is for estimate delivery only and has not been applied.

## Proposed neutral timing wording (for approval, not applied)

- Process step 1: "We'll visit your home, take measurements, and answer your questions, then send a detailed written proposal."
- Blog posts: replace "within one business day" and "24 to 48 hours" with "soon after" and "after the visit", with no deadline.
- Thank-you page already has no deadline ("contact you about the next step") and needs no change.

If the owner confirms a response time and a proposal time, use one wording everywhere. Today the two are consistent with each other but both are unconfirmed.

## Added 2026-11-05: quick-fact FAQs (`businessFaqs`)
Seven questions on /faq and in its FAQPage markup: services, areas served, hours, first-reply time, first contact (Gloria, then Maria), color help (Victoria's role only, no offer terms), and how to request an estimate. Each answer uses confirmed facts or constants from `content.ts`. They deliberately contain no pricing, credentials, review counts, warranty terms or estimate-delivery times.

## Added 2026-11-05: confirmations from Jay
- **Lead inbox delivery:** Jay confirmed that estimate and contact submissions reach the business inbox (Web3Forms destination). This is the owner's confirmation. It was not independently verified from this repo, and no test lead was sent for it.
- **Licensed, insured, EPA Lead-Safe:** confirmed by Jay. No credential numbers are recorded; do not invent any.
- **Google rating and count:** 5.0 stars from 242 Google reviews, from the Google listing.

## `aggregateRating` markup: eligibility review (2026-11-05)
The homepage JSON-LD declares `aggregateRating` (5.0, 242) on the business. My understanding of Google's review-snippet guidance (confirm against the current documentation at developers.google.com/search/docs/appearance/structured-data/review-snippet):
- Review rich results are not shown for a LocalBusiness or Organization when the rating is "self-serving", meaning the business marks up reviews about itself on its own site. This markup would therefore not earn star rich results in search.
- Ratings should come from users and be visible on the page. The figures here come from the Google listing, not from reviews collected on this site, so they fit the "ratings from other sources" concern.
- Recommendation: remove `aggregateRating` from the JSON-LD. The visible "5.0 stars from 242 Google reviews" text stays regardless. Removing the markup loses no rich-result eligibility, because the page wasn't eligible, and it removes the risk of a structured-data problem. Left in place with the corrected count until the owner decides.

