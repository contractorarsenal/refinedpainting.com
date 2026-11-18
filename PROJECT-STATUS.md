# Refined Painting: Project Status

Updated 2026-11-17. No credentials or keys in this file.

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
- `/warranty/`: no warranty page exists. Warranty terms are also unconfirmed — restoring this one needs owner-signed terms, not just a rewrite. See "Missing-page investigation and repair" below.
- **`/service-areas/` hub:** restored as a new page listing all 14 approved cities (not a redirect). It links to a city only once that city page exists.
- **13 remaining city pages** (`/service-areas/{bellevue, redmond, sammamish, bothell, everett, kenmore, lake-stevens, lynnwood, marysville, medina, mercer-island, shoreline, palmer}-wa/`): still 404. Seattle and Kirkland are published; no other city has verified local material yet (see "Service-area hub and city pages"). Palmer is not in the site's city list.
- Sub-service pages the destination does not cover: `popcorn-ceiling-removal`, `garage-door-painting`, `trim-fascia-painting` (fascia not covered), `baseboard`, `finish-carpentry`.
- Remaining blog posts with no archived copy and no fact-checkable content: options per post are republish, redirect to a genuinely matching page, or leave as 404. Search Console data would show which carry traffic. (Four posts with archived copies were restored as rewrites — see below.)

None of these redirect to the homepage. WordPress admin, feed and login URLs also return 404, which is intended.

## Optional improvements (not blockers)
- Neutral timing wording (proposal in the register) once the owner confirms or declines a deadline.
- Victoria offer conditions, "200+" counts, scheduling-time FAQs, JSON-LD `priceRange`.
- Twitter card tags; the NAP duplicated in `index.html`.
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
1. **Restore after owner-approved content:** `/warranty/` (high-intent, but warranty terms are unconfirmed; the archived page is titled "Painting Warranty | 5-Year Coverage"). Restore only with owner-signed terms. Still open — see "Missing-page investigation and repair" below.
2. **Restore as real articles after a fact check (no redirect):** ~~`/blog/best-time-to-paint-your-home-exterior-in-seattle/`, `/blog/how-to-choose-interior-paint-colors-for-your-home/`~~ — done, see below, plus `/blog/interior-paint-finishes-for-each-room/` (same treatment). `/blog/kitchen-cabinet-refinishing-process/` still has an archived copy and was not requested this round; same approach would apply.
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

## City-page layout (branch `feat/city-page-layout`)
- **Done:** the visible "Home › Service Areas" breadcrumb is removed from the hub (the BreadcrumbList markup stays). A shared city-page layout (`CityPageLayout`) is built, with the homepage's outlined photo cards for "Our Services" (extracted into `ServicePhotoCard`; the homepage look is unchanged). The registry now has an entry for all 14 cities, all "needs-content". The route `/service-areas/:citySlug` and the sitemap list read the registry, so a city goes live only when marked "ready".
- **Not published:** no city page exists. Every city URL is still a 404, and the hub links to none.
- **Waiting on Jay:** layout approval, neighborhood names per city, project-to-city assignments, local review and context. The full proposal is `docs/CITY-PAGE-PROPOSAL.md`.
- **Layout preview:** the temporary sample page was used for review and has been removed. Its URL (`/service-areas/layout-preview/`) returns 404, and it is not in the sitemap. The last row of service cards is centered, matching the homepage. The hub has no visible breadcrumb.

## Seattle city page (branch `feat/seattle-city-page`)
- **Published:** `/service-areas/seattle-wa/` (the original WordPress URL). Jay approved Seattle and confirmed Refined Painting serves Greenwood, Ballard, Fremont, Wallingford, Queen Anne and Capitol Hill. The page is on the shared city layout: heading and estimate buttons, a short homeowner-focused services intro with the centered photo cards, one "Seattle Neighborhoods We Serve" section listing all six names, "How to Request an Estimate", and the closing CTA. The hub links to it, and it is in the sitemap with a trailing-slash canonical.
- **Skipped on purpose:** Recent Projects and the testimonial sections. No project location or Seattle review is verified. The service photos are existing illustrations and are not labeled as Seattle projects.
- **Copy limits:** the page repeats only confirmed facts (services, the six neighborhoods, the estimate request steps, the first-reply time "typically within about an hour during business hours"). It does not state an estimate-delivery time.
- **Still unpublished:** the other 13 city pages. Ad targeting is unchanged and is not mentioned on the page; Seattle's website coverage is separate from it.
- **To add later:** tagged Seattle projects (Drive "House" folders confirmed to be in Seattle, city name only), a permitted Seattle review, and any local context Jay can speak to.

## Kirkland page and Seattle exterior article (branch `feat/kirkland-page-and-seattle-article`)
- **Kirkland page** `/service-areas/kirkland-wa/` (the original URL) is built on the Seattle layout: heading, services intro with photo cards, How to Request an Estimate, closing CTA. The hub links to it and it is in the sitemap. **It has no neighborhoods, no projects and no testimonial,** so it is the same as Seattle minus the neighborhood section and carries no local claims. That makes it thin. Setting Kirkland back to `needs-content` in the registry unpublishes it.
- **Why no Kirkland project:** nothing in the project registry, `docs/SOURCE_TO_ASSET_MAP.md`, the Drive-folder names, or the client materials checked (Google post drafts, review folders, handoff notes) says a project was in Kirkland. The Google post drafts only mention Kirkland as a service city. Photos and filenames were not used to guess a location.
- **To add Kirkland projects, Jay needs to confirm for each:** which Drive "House" folder, that it was in Kirkland (city only, never a street number), and the scope (what was painted or refinished). A Kirkland review with permission to show it is optional. **Neighborhoods:** only the ones Jay confirms (the suggestions in `docs/CITY-PAGE-PROPOSAL.md` are not confirmed).
- **Seattle exterior article** restored at its original URL `/blog/how-often-should-you-repaint-your-homes-exterior-in-seattle/`, and listed on the Blog index. **It is a rewrite.** The original text could not be recovered: no WordPress export exists in the workspace, and the web archive has no snapshot of that URL. The rewrite covers siding, weather exposure, visible wear, prep and timing, with no pricing, credentials or project claims. It links to `/service-areas/seattle-wa/`, the exterior painting page and the estimate article. Owner review is needed. Its published date is the restore date, not the original date (unknown).
- **No redirect rule** touches either URL (`public/_redirects` has none for `/blog/` or `/service-areas/`).

## Missing-page investigation and repair (2026-11-16, branch `feat/kirkland-page-and-seattle-article`)
A client-reported audit (dated 2026-11-15) listed 9 city URLs, `/warranty/`, and 4 blog URLs as missing. Verified each against production before changing anything; none were soft-404s (every 404 below returns a real HTTP 404, not a 200 app shell).

| URL | Found | Disposition |
|---|---|---|
| `/service-areas/kirkland-wa/` | Built on PR #16 (open, unmerged) | **Already fixed, unmerged.** Reused as-is. |
| `/blog/how-often-should-you-repaint-your-homes-exterior-in-seattle/` | Built on PR #16 (open, unmerged) | **Already fixed, unmerged.** Reused as-is. |
| `/blog/how-to-choose-interior-paint-colors-for-your-home/` | 404 live; web archive snapshot exists (byline not a confirmed current team member) | **Restored as a rewrite** in the site's own voice, same step-by-step guidance as the archive. No pricing, credentials, named staff or project claims. |
| `/blog/interior-paint-finishes-for-each-room/` | 404 live; web archive snapshot exists (same byline) | **Restored as a rewrite**, same treatment. |
| `/blog/best-time-to-paint-your-home-exterior-in-seattle/` | 404 live; web archive snapshot exists (same byline) | **Restored as a rewrite**. Matches the already-approved May–September FAQ guidance. |
| `/warranty/` | 404 live; web archive snapshot exists, titled "Painting Warranty \| 5-Year Coverage" | **Left as 404.** Warranty terms are unconfirmed (see Launch blocker #4); restoring this one is a content/legal decision for Jay, not a rewrite like the blog posts. |
| `/service-areas/everett-wa/`, `/mercer-island-wa/`, `/lake-stevens-wa/`, `/kenmore-wa/`, `/marysville-wa/`, `/bellevue-wa/`, `/sammamish-wa/`, `/redmond-wa/` | 404 live; no recoverable local content (no project, testimonial or neighborhood confirmed for any of them — same gap documented for Kirkland before PR #16) | **Left as 404**, same as the other 11 unpublished cities. Not a bug; needs owner-approved local content per city (see "Service-area hub and city pages"). Search Console impressions for these (recorded above, 2026-11-05 export) are useful for ordering future work, not for writing copy. |

**Not duplicated:** checked PR #16, `locations.ts`, `posts.ts` and `backlog.ts` before writing anything. Kirkland and the exterior-repaint article were already built on PR #16 and are reused unchanged. The backlog's "Best Time of Year to Paint a House Exterior in Seattle" entry is a different, not-yet-written idea (different proposed slug) and was left alone.

**No redirects added.** All three restored blog posts went back at their original URL with the same, correct content — a redirect was not needed. No city URL redirects to Seattle or the hub (several of the audited cities are not even ad-targeted, and conflating them with Seattle would misrepresent coverage).

**Verification:** lint clean, build produced 27 prerendered routes (was 22), sitemap has 27 URLs. All three new posts and Kirkland have self-referencing trailing-slash canonicals, `robots: index, follow`, correct unique titles/descriptions, and resolve from the hub, blog index, and each other's cross-links with no broken hrefs or redirect chains. Preview checks are in the PR.

**Open for Jay (business decisions, not implemented):**
1. `/warranty/`: owner-signed 5-year warranty terms (duration, exclusions) before any warranty page is restored.
2. The 8 city pages above: per-city local projects (which Drive "House" folder, confirmed city, scope), a permitted local testimonial, and verified local context — same checklist already open for Kirkland.

**Merged and deployed (2026-11-16):** PR #16 merged to `main` as `32f1254` (merge commit), Cloudflare Pages check succeeded. Verified against production (`https://refinedpainting.co`), not just the preview:
- Kirkland and all 4 restored articles return 200, `index, follow`, self-referencing trailing-slash canonicals, correct unique titles, no `X-Robots-Tag` (no accidental preview-noindex carried into production).
- Sitemap has 27 URLs (was 22) and includes all four; the hub links Kirkland and Seattle only; the blog index links all 4 restored posts.
- `/warranty/` and `/service-areas/bellevue-wa/` (representative of the still-unpublished pages) still return a genuine 404 with the site's own 404 page, not an empty 200 shell.
- Spot-checked `/`, `/services/`, `/services/interior-painting/`, `/contact/`, `/faq/`, `/thank-you/` for regressions — all 200. This PR touched no form, nav, or layout component, so no test lead was submitted.
- Kirkland's content gap (no neighborhoods/projects/testimonial section) was re-confirmed as intentional, not a bug: `CityPageLayout.tsx` only renders those sections when data is supplied, and Kirkland's registry entry supplies none, so the page ships without them rather than with placeholder or invented content.

## Search Console findings — HISTORICAL (export dated 2026-11-05, in `Downloads/`; not committed)
**These numbers are historical, not live.** They come from a one-time CSV export pulled 2026-11-05; no Search Console connector is available from this environment, so the figures below have not been, and cannot currently be, refreshed. Treat them as directional (which unpublished pages had *some* pre-existing visibility) rather than as current traffic, and re-pull the export before using these numbers to justify a go/no-go decision. Clicks / impressions / average position, period ending 2026-11-05.
- **Article restored this round:** the exterior repainting article, 3 clicks, 140 impressions, position 6.5 (the strongest blog page).
- **City pages by impressions** (candidates after Seattle and Kirkland): Kenmore 5,766 (position 8.8), Kirkland 3,149 (38.4), Lynnwood 3,046 (19.1), Shoreline 2,703 (23.8), Mercer Island 2,623 (25.9), Bellevue 2,240 (43.1), Everett 1,874 (22.6), Marysville 1,570 impressions with 3 clicks (18.9), Sammamish 1,719 (18.6). Palmer had 2 clicks on 56 impressions (not an approved city).
- **Other legacy URLs with clicks:** `/portfolio/` 5 clicks (already redirected), `/warranty/` 1 click on 142 impressions (position 8.1), `/blog/kitchen-cabinet-refinishing-process/` 1 click.
- Search Console also reports older URL variants (for example `/service-areas/painters-redmond-wa`, `/about-us`) as pages with redirects. They were not reviewed.
- **Kenmore query-level data: not available.** The 2026-11-05 export captured page-level totals (clicks/impressions/position per URL) only, not the Queries report, and that export is no longer present in `Downloads/` to re-check. No Search Console connector is authenticated in this environment, so the actual search terms driving Kenmore's 5,766 impressions cannot be pulled from here. To find out which queries they were, open the Search Console property directly (Performance → Pages → filter to `/service-areas/kenmore-wa` → Queries tab) and export that, or share it here.


## Content expansion: roadmap and batch 1 (2026-11-17, branch `feat/content-expansion-batch-1`)

### 0. PR #16 status check
Checked before any new work: PR #16 was already merged (`32f1254`, 2026-11-16) and verified live on `https://refinedpainting.co` in the prior session. Re-confirmed again now with live HTTP checks: `/service-areas/kirkland-wa/`, `/service-areas/seattle-wa/`, both restored articles, `/services/interior-painting/` and `/services/cabinet-refinishing/` all return 200. Nothing to finish on PR #16 — this batch builds on top of it from a new branch off `main`.

### 1. Research inputs actually available (and what's missing)
- **Search Console export** (2026-11-05, logged above under "Search Console findings") has real impressions/position data for 8 of the 9 originally-audited cities. Reused here rather than re-guessed.
- **"Seattle Maps grid" baseline**: not found. It is not in this repository, in `~/Downloads`, or anywhere else checked, and was not attached to this conversation. The ranking below does **not** use Maps-grid data for Seattle or anywhere else — flagging this so it isn't mistaken for a researched number. Send the actual file or export and it can be folded in.
- **Redmond-specific demand data**: not in the Search Console export either. Only a legacy URL variant (`/service-areas/painters-redmond-wa`) appears, logged as "not reviewed." Redmond is ranked below on its named priority and ad-targeting status alone, not on measured demand — call this out to Jay before treating it as equally evidenced as Bellevue or Sammamish.
- **Approved project library**: re-checked `src/content/projects/projects.ts`. No project is tagged with a city (confirmed — PR #19's "address fields" added a street-address field to the *lead-capture forms*, not to the published gallery, so this remains unverified for every city including Seattle and Kirkland). Cabinet Refinishing has exactly **one** tagged project (`cabinets-sage`) in the entire library; Interior Painting has eleven.

### 2. The five named cities, researched directly
| City | URL | Typical homeowner question | Demand evidence | Verified project proof | Related links |
|---|---|---|---|---|---|
| Seattle | `/service-areas/seattle-wa/` | "house painters Seattle," "exterior painting Capitol Hill" | Live; already ranked and getting the article cross-links added this round. | None tagged to Seattle specifically (six neighborhoods are owner-confirmed, but no photo is). | Now links to both Seattle exterior-repaint articles; hub links it. |
| Kirkland | `/service-areas/kirkland-wa/` | "painting contractor Kirkland WA" | 3,149 impressions, position 38.4 (SC export, historical, 2026-11-05). Live since PR #16. | None tagged to Kirkland. | Hub links it; no article is Kirkland-specific yet (backlog item exists, see #7 below). |
| Bellevue | `/service-areas/bellevue-wa/` | "house painters Bellevue," "cabinet refinishing Bellevue" | 2,240 impressions, position 43.1 (SC export, historical, 2026-11-05). A real impression count at a very weak position is the classic signature of a missing page competing on domain authority alone — restoring it is likely to move position, not just add a URL. Named priority + ad-targeted. | None yet. | Would link from hub; no Bellevue-specific article exists or is proposed (none needed — avoid writing one just to pad the grid). |
| Redmond | `/service-areas/redmond-wa/` | "painting contractor Redmond WA" | **Not found in the current Search Console export.** Named priority + ad-targeted only. | None yet. | Same as above. |
| Sammamish | `/service-areas/sammamish-wa/` | "exterior painters Sammamish" | 1,719 impressions, position 18.6 (SC export, historical, 2026-11-05) — already ranking respectably without a page, on the strength of the old WordPress URL. Named priority + ad-targeted. | None yet. | Same as above. |

All five city pages are blocked on the same input regardless of rank: a real local project tagged to that city, a permitted local testimonial, and verified local context (the same three-item checklist already documented in `src/content/locations/locations.ts` and `docs/CITY-PAGE-PROPOSAL.md`). Ranking them does not unblock them — see the Jesus/Jose list below.

### 3. Found opportunities outside the five named cities
The Search Console export (historical, 2026-11-05) also shows two unaudited, unpublished service-area cities with stronger demand signals than three of the five named ones: **Lynnwood** (3,046 impressions, position 19.1) and **Shoreline** (2,703, position 23.8). **Kenmore** (5,766 impressions, position 8.8) is the single strongest demand signal of any unpublished city on the whole site — well ahead of Kirkland, which is already live. These are flagged, not silently added to the plan, since the client's instructions named a different five; the ranked list below treats Kenmore as the top city-page opportunity on evidence, with Bellevue/Sammamish next by combined evidence + named priority, and notes where Lynnwood/Shoreline sit.

### 4. Ranked roadmap — next 10
1. **Kenmore city page** (`/service-areas/kenmore-wa/`) — strongest demand signal of any unpublished city (5,766 impressions, position 8.8, historical SC export, 2026-11-05 — see note above on re-pulling before relying on this). Blocked on local project/testimonial/context, same as every city page.
2. **Bellevue city page** — named priority, ad-targeted, real impressions at a very weak position (see table above).
3. **Sammamish city page** — named priority, ad-targeted, already ranking respectably without a page.
4. **Cabinet Refinishing photo gap** — the service page (improved this round) is capped at one approved project. This is the single biggest content gap blocking any further Cabinet Refinishing work (the page, a gallery, a case study, or a GBP series), and it is pure input, not design or code.
5. **"Cabinet Refinishing vs. Replacement" article** (already scoped in `src/content/blog/backlog.ts`) — directly answers a real comparison question, can draw on already-approved `content.ts` facts, and gives the thin Cabinet Refinishing page a second internal link once written.
6. **Redmond city page** — named priority, ad-targeted, but flagged above as the one city in this batch with no demand evidence on file. Recommend pulling a Redmond-specific Search Console query before writing it, so it isn't scoped on assumption alone.
7. **`/warranty/` restoration** — blocked purely on Jay's sign-off, not on research or code. It previously ranked at position 8.1 (142 impressions, 1 click), the best position of anything in the whole export, so restoring it is likely high-leverage once the terms are confirmed. Note: the 5-year warranty content already renders live at `/services/#warranty` from the same `warranty` object in `content.ts` — a possible low-effort option is redirecting the legacy URL there instead of writing a new page, but that is a call for Jay to approve explicitly, not something implemented unprompted here.
8. **Lynnwood city page** — found opportunity (§3), stronger evidence than 3 of the 5 named cities, not on anyone's named list.
9. **Shoreline city page** — same basis as Lynnwood.
10. **"Why Kirkland Homes Need Specialized Exterior Painting & Siding Care"** (already scoped in `backlog.ts`) — gives the live Kirkland page its first dedicated article, reusing only general PNW siding/moisture facts already approved; the backlog entry itself warns not to invent a Kirkland-specific project claim, which still holds.

Not recommended: filling Everett, Mercer Island, Marysville, Medina or the remaining cities right now — each has a real impression count but none stronger than what's already ranked above, and adding them now would be grid-filling rather than evidence-led.

### 5. Batch 1 — built today
- **Kirkland ⇄ Seattle cross-linking**: `/blog/best-time-to-paint-your-home-exterior-in-seattle/` now links to `/service-areas/seattle-wa/` (the other restored Seattle article already did). Added a `relatedArticles` field to the city-page registry (`locations.ts` → `CityPageLayout.tsx` → `LocationPage.tsx`) so Seattle's page now links back to both Seattle-specific articles under a new "Learn More" section — rendered conditionally like every other optional section on this layout, so Kirkland (which has no city-specific article yet) shows nothing extra. The Service Areas hub already linked Kirkland and Seattle only; unchanged.
- **Interior Painting page** (`/services/interior-painting/`): the single-photo "Real Projects" block is now a 3-photo gallery (green living room, blue-and-orange kitchen, staircase — all verified `Finished`-stage cover photos from existing approved projects), each with its own caption pulled directly from that photo's own verified alt text, not written copy. A "Get a Free Estimate" button sits directly under the gallery, in addition to the existing buttons higher on the page, so a mobile visitor scrolling through photos doesn't have to scroll back up.
- **Cabinet Refinishing page** (`/services/cabinet-refinishing/`): same treatment, but with its one approved photo (`cabinets-sage`) — the gallery renders as a single card rather than a 3-up grid, honestly reflecting that only one job is currently documented for this service. Same CTA placement.
- **Exterior Painting / Deck & Fence Staining**: unchanged — they still use the original single-hero-photo layout (not in scope this round).
- Verification: `npx tsc -b` clean, `npm run lint` clean (same five pre-existing warnings as before this branch, none new), `npm run build` produced the same 27 prerendered routes with no errors. Confirmed in the built HTML that both service pages render the new gallery/CTA and that Seattle's prerendered page contains both new article links.
- **Case study: not drafted.** The most photo-documented jobs in the library (`green-bungalow-trim`, 12 photos; `blue-craftsman-screened-porch`, 11; `blue-craftsman-deck`, 10; `gray-gambrel-home`, 9) show a real before → in-progress → finished arc, but `ProjectEntry` carries only an id, title, category and photos — no city, scope, timeline, materials, or challenge/outcome narrative. A trustworthy case study needs that narrative from the crew, not inference from what's visible in a photo. This is the first item on the Jesus/Jose list below; once one job has a confirmed city and crew narrative, `green-bungalow-trim` or `blue-craftsman-screened-porch` are the strongest candidates to write up first.

### 6. GBP post drafts (not published — for approval)
Both use already-live service URLs and existing approved photo assets; no new claims.

**Post 1 — Interior Painting** (caption revised 2026-11-17: the registry's own alt text for this photo — "Living room with green walls, a wood-plank ceiling and track lighting" — documents that the ceiling is wood-plank, not that the crew did any work on it. The original draft said "a cleaner look on the wood-plank ceiling," which implied finished ceiling work that isn't recorded anywhere. Rewritten to describe only what's visible and verified: the wall color.)
- Photo: `src/assets/images/projects/green-living-room-orange-entry/vaulted-living-room-green-walls-lg.webp` (same cover photo now used on the Interior Painting page gallery)
- Caption: "A fresh coat changes how a room feels. This living room now has green walls under a wood-plank ceiling — see more interior painting work and get a free estimate for your own space."
- CTA: Learn more → `https://refinedpainting.co/services/interior-painting/`

**Post 2 — Cabinet Refinishing** (checked against the registry: "refinished in sage green" matches this project's own verified title and alt text exactly — no change needed.)
- Photo: `src/assets/images/projects/cabinets-sage-green.webp`
- Caption: "Cabinet refinishing can give a kitchen a whole new look without a full remodel. These cabinets were refinished in sage green — see what's included and get a free estimate."
- CTA: Learn more → `https://refinedpainting.co/services/cabinet-refinishing/`

**Gallery captions checked too:** the three Interior Painting gallery captions and the one Cabinet Refinishing caption on the live pages are rendered directly from each photo's own registry alt text (see `ServiceDetailPage.tsx`), not written separately — so they carry the same verified wording already governed by `projects.ts`'s own rule ("alt text... describe[s] only what is visible"). Nothing to rewrite there.

### 7. One list for Jesus and Jose
Each question is tied to the specific page it unlocks. Using already-approved material in the meantime — not waiting on replies to keep moving.
1. **Cities**: which 2–3 cities do you want more leads from first — of Kenmore, Bellevue, Sammamish, Redmond (ranked above), or a different one? Unlocks: the next city page to build.
2. **Case study**: pick one completed job (any of `green-bungalow-trim`, `blue-craftsman-screened-porch`, `blue-craftsman-deck`, `gray-gambrel-home` — the four most photographed) and tell us its city, roughly when it was done, and one or two things the crew actually did (prep, repairs, number of coats, anything the homeowner asked for). Unlocks: the first project case study, and that project's city page gaining real proof.
3. **Cabinet Refinishing photos**: do you have before/after photos from any other cabinet refinishing job, even unpublished ones? Right now the whole site has exactly one documented cabinet job. Unlocks: a real Cabinet Refinishing gallery (today's page only has room for what's approved) and the "Refinishing vs. Replacement" article's own photo.
4. **Warranty terms**: are you ready to confirm the exact 5-year warranty language for a standalone `/warranty/` page, or should it just redirect to the existing `/services/#warranty` section instead? Unlocks: restoring the single best-performing legacy URL in the whole Search Console export.
5. **Kirkland specifics**: any Kirkland neighborhood names, a Kirkland customer review we can quote, or a Kirkland job to photograph? Unlocks: upgrading Kirkland's page past its current thin state, and gives the new Kirkland backlog article something real to point to.

### 8. Left alone, as instructed
JobNimbus, Make, Web3Forms, tracking, forms, animations and paid ad targeting were not touched. No city was redirected to Seattle or to the hub. No GBP post was published. Nothing was merged or deployed to production — this is a branch and PR for review.

## Content expansion: PR #20 finishing pass (2026-11-17, same branch)

### Mobile QA — Interior Painting and Cabinet Refinishing galleries
Tested both preview pages in a real mobile viewport (resized browser window down to ~320px CSS width, confirmed by the gallery actually switching to a single stacked column — at a wider ~640px+ window the `sm:grid-cols-3` class correctly kept it at 3-across, which is the intended behavior, not a bug).
- **Interior Painting** (`/services/interior-painting/`): 3-photo gallery stacks one per row at mobile width, each photo's caption readable underneath, "View All Projects" and "Get a Free Estimate" buttons stack cleanly above the sticky mobile CTA bar with no overlap.
- **Cabinet Refinishing** (`/services/cabinet-refinishing/`): single-photo card renders the same way, same button layout.
- **Both "Get a Free Estimate" buttons under the gallery were clicked and confirmed to open the 5-step Quote Modal** (lands on step 1, "Where is the project?"). Closed immediately afterward with the modal's own close button — no field was filled in and nothing was submitted.

### Caption accuracy check (requested follow-up)
Audited the gallery captions and both GBP drafts against the project registry (`src/content/projects/projects.ts`) for claims the photos don't actually support.
- **On-page gallery captions**: no change needed. Each caption is rendered directly from that photo's own `alt` field (`{photo.alt}` in `ServiceDetailPage.tsx`), and that alt text is already governed by the registry's own rule to describe only what's visible — it was never written as separate marketing copy.
- **GBP Post 1 (Interior Painting): rewritten.** The original caption said the project gave "a cleaner look on the wood-plank ceiling." The photo's alt text only documents that the ceiling *is* wood-plank — it doesn't say the crew refinished, painted, or otherwise worked on it. That's exactly the gap flagged: a photo showing a feature isn't proof work was done on that feature. Caption now only claims what's documented (new wall color) and describes the ceiling as a visible feature, not a completed scope item. New caption is in §6 above.
- **GBP Post 2 (Cabinet Refinishing): no change.** "Refinished in sage green" is the project's own verified title and alt text, not a new claim.

### Bellevue city page — brief (not implemented, not published)
Per `docs/CITY-PAGE-PROPOSAL.md`'s own template and the same three-item checklist every city page needs (`src/content/locations/locations.ts`).
- **URL:** `/service-areas/bellevue-wa/` (currently a genuine 404; stays that way until "ready")
- **Demand case:** 2,240 impressions, position 43.1 — historical SC export, 2026-11-05 (see note above; re-pull before relying on this). Named priority + ad-targeted city.
- **Suggested neighborhoods** (from the proposal doc, **not confirmed coverage** — Jay must approve, replace, or drop any of these before they appear on a page): Bridle Trails, Somerset, Newport Hills, Crossroads, Enatai, Downtown Bellevue.
- **Still needed before this can be built, let alone published:**
  1. Which Drive "House" folder(s) are a confirmed Bellevue job (three or more is a good minimum per the proposal; one is enough to stop the page being empty).
  2. A permitted customer review from a Bellevue homeowner, if one exists.
  3. Any local context Jay can personally speak to for Bellevue (one or two sentences — optional, same as Seattle's).
  4. Sign-off on which of the six suggested neighborhoods (if any) are real coverage.
- **What's already reusable once approved:** the exact same `CityPageLayout` component, the same conditional-rendering pattern (sections appear only when content exists), and the same registry wiring Kirkland and Seattle already use — so once the four items above are answered, building the page itself is a short, mechanical change, not new design or engineering work.
- This is a brief for review, not a draft page. No file in `locations.ts` was added or flipped to "ready" for Bellevue.

### Case study draft: "Green Bungalow Trim and Railings" (city withheld — not confirmed)
Prepared from `green-bungalow-trim`, the most-photographed job in the registry (12 photos — the clearest before → in-progress → finished arc of anything on file: siding, a detached garage, and a porch with railings and steps). **No city, date, square footage, materials, or timeline are included below — none of those are in the registry, and inventing any of them would violate the no-fabrication rule for this content.** If Jesus or Jose confirm the city and what the crew did (Jesus/Jose question #2), this becomes a real, fully-specified case study; until then, it's a photo-led draft using only each photo's own verified alt text.

**Working title:** Exterior Repaint: Bungalow, Garage, and Porch Trim *(no city in the title until one is confirmed)*

**Before**
- "Green bungalow side before the project with a window well"
- "Green detached garage before the project with a white door"
- "Porch railing and steps before the project"
- "Green bungalow front before the project with a planter box on the porch"
- "Porch railing and steps before the project beside a gate"

**In progress**
- "Worker sanding porch railings during trim work"
- "Drop cloth and tape on a porch deck during trim work"
- "Newly installed porch railing with wood steps during trim work"

**Finished**
- "Green bungalow siding with white window trim beside brick"
- "Green bungalow corner with white window trim and shrubs"
- "Green detached garage with a white door and gable trim"
- "Green bungalow front with white porch railings and steps"

**Draft copy** (visible facts only — no scope, timeline or location claims): "This job covered the main house, a detached garage, and the porch railings and steps, all finished in green with white trim. The in-progress photos show the porch railings being sanded and newly installed before the final coat. Before-and-after photos of the house, garage, and porch are below." No pricing, no duration, no named crew member, no city.

**Still needed to finish this for real:** the city (so it can also become that city's page's "Recent Projects" proof), and a sentence or two from the crew on what the job actually involved beyond what's visible (same as Jesus/Jose question #2). Not implemented as a page or route — this is a content draft for review only.

## Growth audit and page improvements (2026-11-17, branch `feat/seattle-case-study-and-page-improvements`, stacked on PR #20)

This branch is stacked on `feat/content-expansion-batch-1` (PR #20, unmerged) so it can reuse that PR's `CityPageLayout` `relatedArticles` plumbing instead of duplicating it. Its own PR is opened with PR #20 as the base branch — see the PR link in chat. **No change in this round touched PR #20's own files**, and the gallery/mobile-CTA/Seattle-article-link work PR #20 already has was preserved, not redone.

### Confirmed facts applied this round
- **Refined Painting serves Bellevue, WA** — already true in `serviceAreas` (`src/lib/content.ts`); no code change needed, just confirms Bellevue stays in scope for the brief below.
- **`green-bungalow-trim` was a Seattle project, completed in summer (exact month/year not confirmed)**, by Refined Painting's in-house painting crew. This is the **first project in the whole registry with a confirmed city**. Used to: populate Seattle's "Recent Projects" section for the first time (`localProjectImages` in `locations.ts`), write a real case-study blog post, and give the Exterior Painting page its first multi-photo gallery. No neighborhood, prep step, product, or scope beyond what the photos themselves show was added — the case study omits all of that, and uses "completed in summer" with no month, day, or year.

### 1. Search Console / GA4 audit
**No Google Search Console or GA4 connector is available in this environment** — there is no authenticated access to pull live Performance reports or GA4 Explorations from here, and the one-time CSV export referenced in earlier sessions (dated 2026-11-05) is no longer present in `Downloads/`. Nothing below is invented to fill that gap. Per your instruction, here's exactly what to export, plus everything that genuinely can be verified from source instead of guessed.

**Exports needed (Search Console, property `refinedpainting.co`):**
1. Performance → Search results → **Pages + Queries**, date range **last 28 complete days**, and the **same metric for the prior 28 days** (for the week-over-week comparison), plus a **90-day** view for context. State the exact start/end dates used when you export, so results stay comparable.
2. Filter queries containing: `interior paint*`, `exterior paint*`, `cabinet paint*`, `kitchen cabinet paint*`, `cabinet refinish*`, and `near me`. Export **Query + Page + Clicks + Impressions + CTR + Position** so each query can be matched to the URL it's actually landing on (not assumed).
3. Split branded vs. nonbranded: filter out any query containing `refined painting` (or close misspellings) into its own tab — the rest is nonbranded demand.
4. A dedicated **Queries** pull filtered to `Page` = `/service-areas/kenmore-wa` (and, while in there, Bellevue, Redmond, Sammamish) — this is the one specific gap flagged in the last round and still open.

**Exports needed (GA4, property tied to `G-X3HQQ4CQDB`):**
1. An Exploration: **Session default channel group = Organic Search**, dimension **Landing page + query string**, for the same last-28/prior-28/90-day ranges.
2. The **Events** report, **not** filtered to only "key events" — pull `generate_lead`, `quote_modal_open`, and `click_to_call` as separate rows (see verified definitions below for why they are not interchangeable).

**What each GA4 event actually measures — verified from `src/lib/analytics.ts` source, not assumed:**
- **`generate_lead`** — fires only after Web3Forms confirms a successful submission (never on a validation failure, never from a bookmarked or typed `/thank-you` URL — it's gated by a `sessionStorage` flag written at the moment of a real submit). Carries a `form_type` parameter (`"contact"` or `"quote"`) and an optional `service` label, **never** name/email/phone. **This is the one event that should be counted as an actual lead.** To break out contact vs. quote leads, segment this event by its own `form_type` parameter — the data already supports that split without any new tracking.
- **`quote_modal_open`** — fires every time the estimate modal opens, from any "Get a Free Estimate" button. **This is interest, not a lead** — most opens don't finish all 5 steps. Don't count this as a conversion in the scorecard below.
- **`click_to_call`** — fires on any `tel:` link click. This is call *intent* (the phone app opened), not a confirmed call or a booked job.
- **`page_view`** — standard SPA navigation tracking, not a conversion signal.

**GBP / Maps:** no Google Business Profile Insights connector is available either, so GBP post performance and Maps-pack scan results can't be reported this round, separately or otherwise. Both GBP post drafts prepared earlier remain unpublished, so there is no performance data to report for them yet regardless.

**What's already known without live access** (reused, not re-guessed): the historical Search Console page-level export from 2026-11-05, already labeled historical throughout this document (see "Search Console findings" section above).

### 2. Priority-search → landing-page map
No query-level click data is available this round (see above), so this map is built from the terms you named plus which page already exists for each — not from measured volume. Each maps to exactly one existing page; none gets a new page just for a "near me" variant.

| Priority search | Maps to | Why one page, not a new one |
|---|---|---|
| "interior painters [near me]" | `/services/interior-painting/` | Already the canonical interior page; "near me" is intent, not a location, and doesn't get its own URL. |
| "exterior painters [near me]" | `/services/exterior-painting/` | Same reasoning. Now has real project proof (see below). |
| "cabinet painting," "cabinet refinishing," "kitchen cabinet painters" | `/services/cabinet-refinishing/` | See decision below — same service, same page. |
| "painting contractor Seattle" / Seattle-specific exterior queries | `/service-areas/seattle-wa/` (+ the new case study) | Already live; now has its first real local proof. |
| "painting contractor Bellevue" | `/service-areas/bellevue-wa/` (not yet built) | Named priority + ad-targeted, but still content-blocked — see Bellevue decision below. |

### 3. "Cabinet painting" vs. "cabinet refinishing": covered together, on the same page
Checked against what the crew actually offers and what's already approved: `content.ts`'s own `videoAuthority` block (already live, already approved, used elsewhere on the site) uses the CTA label **"Get a Cabinet Painting Estimate"** right next to **"Learn About Cabinet Refinishing"** — the business already treats these as the same service under two names, not two different offerings. So: no second page. Added to `/services/cabinet-refinishing/`:
- The page's `overview` and `metaDescription` now name "cabinet painting" as the common term for the same service.
- A new FAQ: "Is cabinet painting the same as cabinet refinishing? — Yes. Many homeowners search for cabinet painting, but it's the same service we call cabinet refinishing..." (reuses only already-approved facts from `whatsIncluded`/`approach`, no new claims), which also feeds the page's FAQPage schema.

### 4. Scorecard
| Search term | Current landing page | Evidence | Next change |
|---|---|---|---|
| exterior painters / exterior repaint | `/services/exterior-painting/` | First confirmed local project (Seattle, summer, in-house crew) became available this round | **Done:** added a 2-photo gallery (was single hero photo) with a link to the new case study |
| cabinet painting / cabinet refinishing / kitchen cabinet painters | `/services/cabinet-refinishing/` | Business's own approved copy already uses both terms for one service | **Done:** synonym added to overview/meta description + new FAQ |
| painting contractor Seattle | `/service-areas/seattle-wa/` | Owner confirmed Seattle project this round — page's "Recent Projects" section had never had real photos before | **Done:** 2 real project photos added, case study cross-linked from the page |
| painting contractor Bellevue | `/service-areas/bellevue-wa/` (404) | Historical impressions at a very weak position (SC export, 2026-11-05) + named priority + ad-targeted, but zero verified local material even after this round's confirmed facts ("serves Bellevue" ≠ a Bellevue project/testimonial/context) | **Not done.** Brief kept ready; exact ask for Jose below. Not built as a preview — there isn't enough verified material to make it useful on its own yet. |
| interior painters [near me] | `/services/interior-painting/` | Gallery/CTA already added in PR #20 | No further change this round |

### 5. Top 3 actions, ranked by likely lead impact
1. **Seattle case study + Recent Projects unlock.** Seattle is already the highest-traffic page on the whole service-area side, and it had zero real project proof until today. Zero blockers — implemented and verified this round.
2. **Cabinet painting/refinishing synonym coverage.** Low effort, directly captures a second phrasing of real search intent on a page that's already indexed and already getting impressions (per the cabinet-cost article's existence). Zero blockers — implemented this round.
3. **Bellevue local proof.** Highest-potential item on the list (real historical impressions, named priority, ad-targeted) but ranked third because it isn't done — it depends entirely on Jose supplying one of the three inputs below. Nothing to implement yet without inventing content.

### 6. Bellevue: brief kept, not built — exact ask for Jose
Confirming "Refined Painting serves Bellevue, WA" is a service-area fact, not local proof, and the Seattle bungalow project is explicitly not substituted as Bellevue evidence. Ask Jose for **any one** of these (one is enough to stop the page being empty; per `docs/CITY-PAGE-PROPOSAL.md`, three or more projects is the good minimum):
1. Which Drive "House" folder(s) are a confirmed Bellevue job.
2. A permitted customer review from a Bellevue homeowner.
3. One or two sentences of local context Jay can personally speak to for Bellevue.
Also needs sign-off on which (if any) of the six suggested neighborhoods (Bridle Trails, Somerset, Newport Hills, Crossroads, Enatai, Downtown Bellevue) are real coverage. The page itself is mechanical to build once any one of these lands — same `CityPageLayout`, same registry pattern Seattle and Kirkland already use.

### 7. What's new vs. preserved
- **Preserved, unchanged:** PR #20's gallery layout, mobile CTA placement, and Seattle↔article cross-links. This round's branch is stacked on top of PR #20, not merged into it, and touches none of its files.
- **New this round:** the Seattle case study post, Seattle's first real local project photos, the Exterior Painting gallery + case study link, and the cabinet painting/refinishing synonym + FAQ.
- **Not done, left open:** Bellevue page (brief only), Kenmore/Redmond/Sammamish query-level data (no connector), GBP/Maps performance (no connector), everything else already logged as open in this file.
- Nothing merged, no GBP post published, no live form submitted, no change to JobNimbus, Make, tracking, animations, or paid targeting.

### Correction (2026-11-18): case study narrowed to confirmed trim work
On review, the case study's claim that the job "covered the main house siding, a detached garage, and the porch railings and steps" wasn't supported by the project's own records: the only in-progress (process) photos show work on the porch railings and steps, and the siding/garage are described as the same green in both the before and finished photos — i.e. unchanged. Retitled to **"Seattle Bungalow Trim Project: Porch Railings and Steps"** and narrowed the body copy to the railings/steps work that's actually documented. The house and garage before/after photos are still shown for context, not as a claim the crew worked on them. URL unchanged (`/blog/green-bungalow-exterior-repaint-seattle/`); updated everywhere the old title was referenced (post metadata, Seattle page's related-article link).
