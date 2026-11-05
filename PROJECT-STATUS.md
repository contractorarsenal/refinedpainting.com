# Refined Painting: Project Status

Updated 2026-11-05. No credentials or keys in this file.

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
- Hours: Mon–Sat 9–5 is confirmed by the owner (Saturday closes at 5 PM) and agrees across footer, Contact, FAQ and JSON-LD. BBB reportedly lists 4 PM; the external listing was not changed.
- First reply: "typically within about an hour during business hours" is confirmed and now used consistently (Contact page, What Happens Next, FAQ, one blog post). It is not a guarantee or an estimate-delivery time.
- Contact details match between visible text and JSON-LD. Canonicals and sitemap use `https://refinedpainting.co`.
- Both forms had Seattle-flavored examples: ZIP "98103" (the office ZIP) and phone "(206) 555-0100". Replaced with neutral placeholders.
- Contact page labeled the Seattle address "Office". Relabeled "Address".
- Estimate-delivery promises ("proposal within 24–48 hours") remain unconfirmed in 5 places and were left as written.
- Full fact-by-fact evidence: `docs/BUSINESS-INFO-REGISTER.md`.

## Launch blockers (owner decisions or access)
1. Estimate-delivery timing: confirm "within 24–48 hours" or approve neutral wording.
2. Pricing ranges in FAQs and the two Seattle cost blog posts: approve or remove.
4. Google Verified and Nextdoor badges, and the 5-year warranty terms: proof or softened wording. Licensed, insured and EPA Lead-Safe are confirmed by Jay (no numbers on file).
5. Lead inbox: delivery confirmed by Jay. Not independently verified, and no test lead was sent for it.
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
- **`/service-areas/` hub:** restored as a new page listing all 14 approved cities (not a redirect). It links to a city only once that city page exists.
- **15 city pages** (`/service-areas/{seattle, bellevue, kirkland, redmond, sammamish, bothell, everett, kenmore, lake-stevens, lynnwood, marysville, medina, mercer-island, shoreline, palmer}-wa/`): still 404. No city has verified local material yet (see "Service-area hub and city pages"). Palmer is not in the site's city list.
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

## SEO, AEO and GEO review (2026-11-05, branch `seo-aeo-geo/response-time-and-metadata`)
**Already sound (checked on the built output, 20 pages):** one `<title>` and one description per page, no duplicates, one `<h1>` per page, canonicals and sitemap in the trailing-slash form, 18 sitemap URLs covering every indexable route, no broken internal links, `robots.txt` allows all crawlers, BreadcrumbList on content pages, Service schema on service pages, FAQPage on /faq.

**Fixed:**
- Service-page descriptions were 200–243 characters (cut off in results). Each now has a `metaDescription` of about 150 characters built only from what the page says.
- Home title (78 chars) and description (189) shortened; the home description no longer repeats unverified credential claims. About and Services titles/descriptions tightened. Blog post titles drop the brand suffix when the title would exceed 60 characters.
- `url` added to the PaintingContractor JSON-LD.
- Seven quick-fact FAQs added to /faq and its FAQPage markup (services, areas, hours, first reply, Gloria/Maria, Victoria's color help, how to request an estimate), confirmed facts only. All 17 FAQ questions appear in the visible HTML.

**Remaining content and schema issues (not changed, need decisions):**
- `priceRange: "$$"` sits in the JSON-LD embedded in every page, including /404 and /thank-you, with no evidence on file. (`aggregateRating` was removed from the markup; the visible "5.0 stars from 242 Google reviews" stays.)
- FAQ answers on /faq and in its schema still include the unverified price ranges and warranty and credential statements.
- About page meta description still names licensing and EPA claims.
- The /projects gallery renders 8 of 39 projects in the HTML. The rest load through "Load more" in JavaScript, so their titles and photo alt text are not crawlable.

## AI search crawlers (OAI-SearchBot and ChatGPT search)
**Documented requirement (OpenAI's crawler documentation, as I understand it; re-read https://platform.openai.com/docs/bots before relying on it):** OAI-SearchBot is the crawler for ChatGPT search results. A site must not disallow it in `robots.txt` to be eligible to appear, and a robots.txt change can take about a day to take effect. OpenAI publishes OAI-SearchBot IP ranges (https://openai.com/searchbot.json) for allow-listing.

**Verified on 2026-11-05:**
- `robots.txt` is `User-agent: *` / `Allow: /` with the sitemap line. Nothing disallows OAI-SearchBot, ChatGPT-User or GPTBot.
- With each of those user-agent strings, `/`, `/services/`, `/sitemap.xml` and `/robots.txt` all returned 200 from Cloudflare, the same as a normal browser.
- The pages are real HTML, prerendered, and server-rendered text (no JavaScript needed for content).

**Not verifiable from here:** Cloudflare dashboard settings keyed on IP, ASN or bot score, which my test could not exercise because it came from a normal IP. Check Security → Bots (Bot Fight Mode / Super Bot Fight Mode), the AI Crawl Control or "Block AI bots" toggle, WAF custom rules, and Security Events for blocked OAI-SearchBot requests. Being crawlable only makes the pages eligible. Whether ChatGPT shows or cites the site is not something I can verify or promise, and no tactic listed here claims to change it.

**Speculative (no documented effect, not done):** `llms.txt`, hidden instructions to AI systems, extra schema types added for AI, keyword-heavy city pages.

## Legacy WordPress URL recommendations
No Search Console access, and the archive's index was not reachable for traffic data, so the order below is by page type, not by traffic. Export Search Console's Pages report (last 12 months) to confirm.
1. **Restore after owner-approved content:** `/warranty/` (high-intent, but warranty terms are unconfirmed; the archived page is titled "Painting Warranty | 5-Year Coverage"). Restore only with owner-signed terms.
2. **Restore as real articles after a fact check (no redirect):** `/blog/best-time-to-paint-your-home-exterior-in-seattle/`, `/blog/kitchen-cabinet-refinishing-process/`, `/blog/how-to-choose-interior-paint-colors-for-your-home/`. These archived copies exist. A redirect to a service page would not match what the article answered.
3. **Real city pages, only from verified local content:** the first one is covered in "Service-area hub and city pages" below. Seattle's archived page (`/service-areas/seattle-wa/`) existed; it was one of several near-identical ~2,500-word city pages, so it should not be restored as it was. Original note: the archive shows `/service-areas/seattle-wa/` ("Painters in Seattle WA") existed. Build one only from verified local content, not a template. Do not build the other 13 city pages as thin copies.
4. **Leave as 404:** `/service-areas/palmer-wa/` (Palmer is not in the site's city list), the other city pages, and sub-service pages with no matching content or archived copy (popcorn ceiling removal, garage door painting, trim and fascia, baseboard, finish carpentry), plus the remaining blog posts until a deliberate decision.

## Service-area hub and city pages (2026-11-05, branch `feat/service-areas-hub`)
**Shipped:** `/service-areas/` lists the 14 approved website cities (Seattle included) from `serviceAreas` in `content.ts`. "View All Service Areas" and the footer link point to it. `/about#service-areas` still works (the About and Contact strip keeps its id). The page is in the sitemap with a trailing-slash canonical. No city is a link yet. Ad targeting is not mentioned or changed.

**No pilot city page was built.** I checked the project photo source map (`docs/SOURCE_TO_ASSET_MAP.md`), the project registry, and the archived old WordPress city pages. No project is tagged to a city (the Drive folders are "House 1" to "House 31" with no location), no testimonial is tied to a city, and photos must not be placed in a city by inference. The archived Bellevue, Kirkland, Redmond, Sammamish, Seattle and Bothell pages were each about 2,500 words of the same shape (titles "Painters in X WA | ..."), so restoring them would recreate the thin, swapped-name pages we are avoiding.

**What the first city page needs (from the owner):**
1. Which Drive "House" folders are in that city. Three or more projects is a good minimum. City name only, never street numbers (photos with readable numbers were excluded on purpose).
2. A real review or testimonial from a customer in that city, with permission to show it.
3. Verified local context the business can speak to: common home styles or eras, HOA or historic-district rules it has dealt with, and anything distinct about scheduling there.
4. Confirmation the page should go live.

**Build order:** Bellevue, Kirkland, Redmond, Sammamish (the ad-targeted cities, and their original URLs existed), then whichever city the owner has the most tagged work in. Seattle follows the same rule. City pages use the original URL pattern `/service-areas/<city>-wa/`. Wiring steps are in the header of `src/content/locations/locations.ts`.

