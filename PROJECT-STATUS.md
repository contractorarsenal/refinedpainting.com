# Refined Painting: Project Status

Updated 2026-11-04. No credentials or keys in this file.

## Release status
- **Approved site:** `5e9afcd` merged to `main` by PR #7 as `12038c6`. Deployed by Cloudflare Pages to https://refinedpainting-com.pages.dev (success).
- **Live domain:** https://refinedpainting.co now serves this React build from Cloudflare Pages (verified over HTTP). `http`, `www` and `https://www` all 301 to `https://refinedpainting.co/`. MX and SPF records were unchanged at last check. Dashboard-side settings remain unverified.
- **URL form:** Cloudflare Pages serves every page at its trailing-slash URL (`/about/` is 200, `/about` is 308). Canonicals, `og:url`, sitemap URLs and schema URLs use the trailing-slash form (branch `launch-cleanup/trailing-slash-redirects`).
- **Prelaunch cleanup:** local branch `prelaunch/business-info-cleanup` from `origin/main`. Changes are uncommitted and unpushed, awaiting review.

## Separate concepts
- **Physical address:** 7212 Linden Ave N, Seattle, WA 98103. Public-office status unconfirmed (labeled "Address").
- **Website areas served:** 14 cities including Seattle. Unchanged pending an explicit website decision.
- **Ad targeting:** Bellevue, Kirkland, Redmond, Sammamish. Seattle excluded from ads only. This does not change website copy.

## Approved design restrictions
Do not redesign. Keep the approved hero video, Victoria card on `/services`, About team and Pledge layout, red "See the Difference" band, 8-per-page project gallery with lightbox deep links, and the existing form fields, validation and destination. Extend existing tokens only. No stock photos, invented testimonials or invented statistics.

## Verified findings (2026-11-04)
- Hours agree everywhere in the repo: Mon–Sat 9–5 (footer, Contact, JSON-LD). BBB reportedly says Saturday 4 PM. No owner record on file.
- Contact details match between visible text and JSON-LD. Canonicals and sitemap use `https://refinedpainting.co`.
- Both forms had Seattle-flavored examples: ZIP "98103" (the office ZIP) and phone "(206) 555-0100". Replaced with neutral placeholders.
- Contact page labeled the Seattle address "Office". Relabeled "Address".
- Timeline promises exist in 4+ places and are consistent with each other but unconfirmed.
- Full fact-by-fact evidence: `docs/BUSINESS-INFO-REGISTER.md`.

## Launch blockers (owner decisions or access)
1. Saturday closing time: 5 PM or 4 PM. Hours stay unchanged pending Jose's confirmation.
2. Pricing ranges in FAQs and the two Seattle cost blog posts: approve or remove.
3. Rating 5.0 / 227 reviews (also in `aggregateRating`): proof or removal.
4. Licensed and insured, EPA Lead-Safe, Google Verified, Nextdoor badges, and the 5-year warranty terms: proof or softened wording.
5. Lead inbox: confirm in Web3Forms that submissions reach the business. Not verified. No test lead was sent.
6. Analytics ownership: `G-X3HQQ4CQDB` (React) vs `G-TCE6S4DT0K` (WordPress).
7. Cloudflare dashboard checks: Pages custom domain state, apex and `www` records, WordPress origin for rollback. Not verified.
8. WordPress redirect decisions for the legacy URLs listed under "Legacy WordPress URLs" below.

## Legacy WordPress URLs
Redirects live in `public/_redirects` (Cloudflare Pages). Each is a single-hop 301 to a trailing-slash destination that returns 200.

**Redirected:**
- `/portfolio/` → `/projects/`
- `/services/interior-painting/ceiling-painting/` → `/services/interior-painting/` (page covers ceilings)
- `/services/exterior-painting/siding-painting/` → `/services/exterior-painting/` (page covers siding)
- `/services/cabinet-refinishing/cabinet-painting/` → `/services/cabinet-refinishing/`
- `/services/commercial-painting/office-painting/` → `/services/commercial-painting/` (page covers offices)
- `/services/carpentry-services/trim/` → `/services/carpentry-services/` (page covers trim repair and matching)
- `/sitemap_index.xml`, `/post-sitemap.xml`, `/page-sitemap.xml`, `/wp-sitemap.xml` → `/sitemap.xml`

**Left as 404, owner decision (no destination covers the old page's topic):**
- `/warranty/`: no warranty page exists. Warranty terms are also unconfirmed.
- `/service-areas/` and 15 city pages (`/service-areas/{seattle, bellevue, kirkland, redmond, sammamish, bothell, everett, kenmore, lake-stevens, lynnwood, marysville, medina, mercer-island, shoreline, palmer}-wa/`): location pages are intentionally unpublished. Palmer is not in the site's city list.
- Sub-service pages the destination does not cover: `popcorn-ceiling-removal`, `garage-door-painting`, `trim-fascia-painting` (fascia not covered), `baseboard`, `finish-carpentry`.
- 13 blog posts: none match the three posts on the site. Options per post: republish, redirect to a genuinely matching page, or leave as 404. Search Console data would show which carry traffic.

None of these redirect to the homepage. WordPress admin, feed and login URLs also return 404, which is intended.

## Optional improvements (not blockers)
- Neutral timing wording (proposal in the register) once the owner confirms or declines a deadline.
- Victoria offer conditions, "200+" counts, scheduling-time FAQs, JSON-LD `priceRange`.
- Twitter card tags; consolidating the duplicated Web3Forms key and the NAP in `index.html`.
- iPhone Safari hero playback test.

## Git housekeeping
Do not delete or merge: `ace/change/*`, `feat/analytics-clarity-seo-fixes`, `preview/mobile-fixes-2026-10-26`.
