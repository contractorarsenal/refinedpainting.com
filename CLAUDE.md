# CLAUDE.md — Refined Painting

Operating instructions for this project. Read this first in every session. Keep responses concise and avoid full-repository scans.

Verified on 2026-10-15 from source files, `gh` queries, and live HTTP checks. Items marked **[unverified]** need confirmation in a dashboard or with the client.

---

## 1. Environments: read this before any deploy or "live" request

There are two separate environments. Never treat them as one.

| Environment | URL | What serves it | Status |
|---|---|---|---|
| **Live client site** | https://refinedpainting.co | **WordPress** (wp-content, wp-json, WP Defender in robots.txt) | Client's real public site. Verified via HTTP. |
| **React application** | https://refinedpainting-com.pages.dev (Pages project `refinedpainting-com`) | This repository, built and deployed by Cloudflare Pages | Verified. Serves the React build with the correct title and GA4 ID. |

- A push to `main` triggers a Cloudflare Pages deploy of the React app. It does **not** change refinedpainting.co, which still serves WordPress.
- **Do not describe a successful Pages deployment as a production-domain launch.**
- **[unverified]** Whether refinedpainting.co is attached to the Pages project in any way. Confirm in the Cloudflare dashboard. I have no dashboard access.

### Never do these without explicit, specific authorization for a migration
- Modify WordPress (themes, plugins, content, settings, or its database).
- Change DNS records.
- Add, remove, or change Cloudflare custom domains or redirects.
- Redirect or replace the production domain.
- Transfer, merge, or change analytics properties or ownership.

---

## 2. Remote development commands

| Command | Meaning |
|---|---|
| **Check website** | Read-only inspection. Ask which environment (React Pages site or live WordPress) only if the answer changes the task. |
| **Update website** | Implement and verify changes locally in this React project. **Do not push.** |
| **Push live** | Ambiguous while WordPress is the live domain. Explain the destination (Pages deploy from `main`, not the live domain) and **request explicit confirmation before pushing.** |
| **Deploy preview** | Deploy only to an authorized preview environment. Never change the production branch or live domain. |
| **Status** | Report branch, working tree, latest commit, open PRs, and outstanding work. |
| **Refresh context** | Inspect recent changes and this file. Do not rescan the repository. |

---

## 3. GitHub safety

- Repository: https://github.com/contractorarsenal/refinedpainting.com
- Default and deployment branch: `main`. Treat `main` as deployment-sensitive.
- Git is connected (verified): `origin` → the repo above, `main` tracks `origin/main`, repo-local author identity set. Global Git config is untouched.
- Prefer a feature branch for anything non-trivial.
- Never force-push. Never run `git reset --hard`, `git checkout --` on modified files, or `git clean` without explicit approval.
- Never discard uncommitted changes. Never overwrite another developer's work.
- Never merge PRs without permission. Never delete branches without permission.
- Never change deployment configuration or Cloudflare settings without approval.
- Never commit secrets, tokens, `.env` files, or customer data.
- Verify the deployment destination before any push.
- `gh` is authenticated as `contractorarsenal`. Never print tokens.
- Branch protection is **off** on `main`. Be extra careful with direct pushes.

### Current Git state
- `main` tracks `origin/main`. The Refined Painting project photo integration and the stable-id hydration fix are on `main` (see `git log -1`).
- Open PRs: check with `gh pr list`. PRs #4 and #5 are merged.
- Remote branch `feat/analytics-clarity-seo-fixes` is merged into `main`. **Do not delete without permission.**
- Remote branches `ace/change/*` are automated one-line test commits from the ACE Website Engine. They are not on `main`. **Do not merge or delete them without permission.**

---

## 4. Project architecture

### Stack (from `package.json`, `vite.config.ts`, `.node-version`)
- Node **22** (`.node-version`)
- React 19, TypeScript ~6.0, Vite 8, Tailwind CSS v4 (`@tailwindcss/vite`, configured in `src/index.css` via `@theme`)
- react-router 7 (`react-router-dom` also present), lucide-react icons
- oxlint for linting (`.oxlintrc.json`)
- Static prerendering: each route is rendered to its own HTML file (see §8)

### Scripts
- `npm install`: install dependencies (not yet run in this folder; `node_modules` absent)
- `npm run dev`: Vite dev server
- `npm run build`: `build:client` (`tsc -b` + `vite build`) → `build:ssr` (`vite build --ssr src/entry-server.tsx --outDir dist-ssr`) → `prerender` (`scripts/prerender.mjs`) → removes `dist-ssr`
- `npm run lint`: oxlint
- `npm run preview`: serve the built app

Run only the checks relevant to a change. A full build takes longer, and lint is quick.

### Key directories
- `src/App.tsx`: all client routes and providers (QuoteModalProvider, PromoPopupProvider, and the global layout)
- `src/entry-server.tsx`, `src/entry-server/Document.tsx`: SSR entry. `getRoutes()` derives routes from the same data as the site.
- `src/lib/content.ts`: **all business facts and site copy.** Do not hardcode business facts elsewhere.
- `src/lib/analytics.ts`: GA4 IDs and conversion-event helpers
- `src/lib/formValidation.ts`: validation for name, email, and phone
- `src/pages/`: one page per route
- `src/components/layout/`: Header, MobileMenu, MobileCTABar, Footer, UtilityBar, FloatingContactButton, ConversionTracking, RouteAnalytics, ScrollToTop
- `src/components/sections/`: homepage sections, one file each, composed in `HomePage`
- `src/components/quote/`: 5-step estimate wizard (`QuoteModal.tsx`, `QuoteModalContext.tsx`, `quoteState.ts`, `steps/`)
- `src/components/promo/`: promo popup and its coordination with the quote modal
- `src/components/ui/`: shared primitives (Button, Container, SectionHeading, Accordion, FormField, ProjectImage, PlaceholderPhoto, etc.)
- `src/components/seo/PageSEO.tsx`: per-page `<title>`, description, canonical, OG, and robots tags
- `src/content/blog/` (posts, categories, `backlog.ts` internal planning only), `src/content/locations/` (unpublished location registry)
- `src/assets/images/`: logo, badges, project photos, team photos, hero video and poster
- `scripts/prerender.mjs`: writes `dist/<route>/index.html`, `dist/sitemap.xml`, `dist/404.html`
- `public/`: `robots.txt` (points to `https://refinedpainting.co/sitemap.xml`), `favicon.svg`, `refined-painting-logo.webp`

### Routes (from `src/App.tsx`)
`/`, `/services`, `/services/:slug`, `/projects`, `/about`, `/blog`, `/blog/category/:slug`, `/blog/:slug`, `/contact`, `/faq`, `/thank-you`, and `*` (404).

Service detail pages come from `serviceSlugs` in `src/lib/content.ts`.

Location pages (`/locations/:citySlug`) are **intentionally unpublished**. The file's header says a human must confirm content is ready before any route, sitemap entry, or link is added. Do not publish them without that confirmation.

---

## 5. Business facts (verified from `src/lib/content.ts` and `index.html`)

- **Name:** Refined Painting. Seattle-area painting contractor.
- **Address:** 7212 Linden Ave N, Seattle, WA 98103
- **Phone:** (206) 258-7994 (`tel:+12062587994`)
- **Email:** No business email address is published on the site. The only addresses in code are input placeholders.
- **Hours:** Monday–Saturday, 9 AM–5 PM
- **Services:** Interior, exterior, cabinet refinishing, commercial, deck & fence staining, carpentry/repairs
- **Service areas (14):** Seattle, Bellevue, Bothell, Everett, Kenmore, Kirkland, Lake Stevens, Lynnwood, Marysville, Medina, Mercer Island, Redmond, Sammamish, Shoreline. Schema `areaServed` matches this list.
- **Claims on site:** licensed and insured; EPA Lead-Safe certified; 5-year workmanship warranty (see `warranty` in `content.ts`); "Google Verified" and "Nextdoor Neighborhood Favorite" badges; 5.0 rating with 227 reviews; repaint-cycle guidance (exterior 7–12 years, decks 2–4 years).
- **Verify before relying on these in any new copy:** every claim above, especially the 227 review count, the 5.0 rating (hardcoded in `content.ts` and the homepage JSON-LD), the warranty terms, and the badges. Obtain proof from the client first.
- **Do not add new certifications, pricing, timelines, or awards** without verified source material. Blog backlog items must be fact-checked before publishing (see `src/content/blog/backlog.ts`).

---

## 6. Design system (extracted from `src/index.css` and components)

Do not redesign. Extend the existing tokens and patterns.

### Colors (`@theme` in `src/index.css`)
- Primary text and dark surfaces: `ink` `#14212c`, `ink-2` `#1e3040`, `charcoal` `#262a2d`, `near-black` `#0e1418`
- Accent: `teal` `#4fb0bb`, `teal-dark` `#2c8994`
- Warm neutrals: `warm-white` `#ffffff`, `off-white` `#f1f3f4`, `cream` `#f6efdf`, `cream-light` `#f8f5ee`, `cream-dark` `#ead9b8`, `sand` `#ede8de`
- Cool neutrals: `light-blue` `#e9f1f3`, `stone` `#e2e6e8`, `stone-dark` `#c6ccd0`
- Alerts and highlights: `crest` `#c23b30` (red, used for hover and active accents), `gold` `#e3a13a`

Common usage: `text-ink`, `text-ink/70` for secondary text, `bg-cream` and `bg-cream-light` for sections, `bg-ink` for dark sections, `text-teal-dark` for links on light backgrounds, `border-ink/10` for dividers.

### Typography
- **Display:** Barlow Condensed (`font-display`), weights 500–900. Used for headings and all buttons (93 uses).
- **Body:** Inter (`font-body`), weights 400–800.
- Loaded from Google Fonts in `index.html`.
- Base styles in `src/index.css` set headings to `font-display` in ink.

### Buttons (`src/components/ui/Button.tsx`)
- Variants: `primary` (teal, ink text), `secondary` (ink, white text), `ghost` (white with ink border), `outline-light`, `outline-dark`, `invert` (white with crest text, for red backgrounds).
- Sizes: `md`, `lg`
- Icons: `arrow` (default), `phone`, `none`
- Base: uppercase, `font-display` extrabold, `rounded` (small radius), tracked. Keep this style for new CTAs.
- Primary CTA text: "Get a Free Estimate" (`CTA.primary` in `content.ts`). Phone CTA: `Call (206) 258-7994`.

### Header and navigation
- Fixed header with a utility bar that collapses on scroll (`useScrolled(40)`).
- On the homepage, the header is transparent with white text over the video hero. On other pages it is light, with ink text.
- Once scrolled, the header becomes solid `ink` on every page.
- Desktop nav: Services, About (left), Projects, Contact (right). The Get a Free Estimate button opens the quote modal.
- Mobile: hamburger menu (`MobileMenu`) plus a bottom CTA bar on small screens (`MobileCTABar`). Main content has bottom padding on mobile for it.

### Responsive conventions
- Mobile first. Breakpoints used in the code are Tailwind's default `sm:`, `md:`, `lg:`, `xl:`.
- Common patterns: `sm:py-*`, `lg:py-*`, `sm:grid-cols-*`, `lg:grid-cols-*`, `sm:text-*`.
- Container and section spacing come from `ui/Container` and `ui/SectionHeading`.

### Section patterns
- Each homepage section is a standalone component in `components/sections/`, composed in `HomePage`.
- Section headings use `SectionHeading`. Cards use `border-ink/10`, `bg-cream-light` or `bg-warm-white`, and `shadow-card` (`--shadow-card`). Hover elevation uses `shadow-lift`.
- Scroll-reveal uses `ui/Reveal` and `hooks/useInView`.

### Images
- Real Refined Painting project photography is in `src/assets/images/projects/`. Team photos are in `assets/images/team/` (Gloria and Maria, the customer-service and project-coordinator photos).
- Use real photography where it exists. `PlaceholderPhoto` is an intentionally labelled duotone placeholder for slots that don't have a photo yet. Don't substitute stock imagery.
- Images are `.webp`. Use `loading="lazy"` for below-the-fold images, as existing components do.

### Content and design restrictions
- Copy lives in `src/lib/content.ts`.
- Do not add stock photos, invented testimonials, or invented statistics.

---

## 7. Forms and lead delivery (verified)

### Contact form (`src/components/sections/ContactForm.tsx`, used on `/contact`)
- Fields: first name, last name, email, phone, service (select), message. Required: names, email, phone, message.
- Validation in `ContactForm.tsx` plus `src/lib/formValidation.ts`.
- Submits via `fetch` to `https://api.web3forms.com/submit` (JSON). Payload includes `subject: "Refined Painting — Contact Form"` and `from_name: "Refined Painting Website"`.
- Success only when Web3Forms returns `success: true`. Then it calls `markPendingLead` and navigates to `/thank-you`.
- Native `<form>` attributes are kept as a no-JS fallback. `redirect` points to `/thank-you`.
- Honeypot: hidden `botcheck` checkbox, handled server-side by Web3Forms.

### Estimate wizard (`src/components/quote/`, opened from any "Free Estimate" CTA via `openQuoteModal`)
- 5 steps (`TOTAL_STEPS = 5` in `quoteState.ts`): ZIP → service → details → timeline → contact.
- Can be pre-filled with a service via `openQuoteModal("cabinets")`.
- Final payload: `subject: "Refined Painting — New Estimate Request"`, plus name, email, phone, zip, service, timeline, details, `botcheck`.
- Same submit path and success logic as the contact form (`hooks/useWeb3FormsSubmit.ts`).

### Web3Forms
- Access key is hardcoded in **two places**: `src/components/sections/ContactForm.tsx` and `src/components/quote/QuoteModal.tsx`. A third copy, the endpoint, is in `src/hooks/useWeb3FormsSubmit.ts`.
- Web3Forms access keys are public by design. Still, do not swap the key or create a second form. If the key is rotated, update both files together.
- The lead destination inbox is configured in the Web3Forms dashboard, not in code. **[unverified]**
- Do not print the key value in chat or new files.

### Promo popup (`src/components/promo/`)
- Shown after a 12–18 second dwell or a 40–50% scroll depth, whichever comes first.
- Suppressed on `/contact` and `/thank-you`, and never shown while the quote modal is open.
- Dismissal stored in `sessionStorage` (`refinedPainting.promoPopupDismissed`).

---

## 8. Analytics, tracking, and conversions (verified in source)

### Google Analytics 4 (gtag.js)
- Measurement ID in source: **`G-X3HQQ4CQDB`**. Set in `index.html` (the inline gtag snippet) and in `src/lib/analytics.ts` (`GA_MEASUREMENT_ID`). Keep both in sync.
- `RouteAnalytics` sends SPA page views for route changes (the first pageview comes from the base snippet).
- Live WordPress site observed using **`G-TCE6S4DT0K`**. That is a different property. Ownership and which property is the client's real one are **[unverified]**. Do not merge, transfer, or change either property.

### Microsoft Clarity
- Project ID **`ywohcflaev`**, in `index.html` and mirrored in `src/lib/analytics.ts` (`CLARITY_PROJECT_ID`). Keep both in sync.

### Google Tag Manager, Meta Pixel
- **Not present** in the codebase (searched `src` and `index.html`).

### Conversion events (`src/lib/analytics.ts`)
- `generate_lead`: fires only after a confirmed Web3Forms success and the `/thank-you` mount. It is consumed via `sessionStorage` (`rp_pending_lead`), so a refresh or a typed URL does not fire it. Do not change this to a URL query-param trigger.
- `quote_modal_open`: fires on every quote modal open, from `openQuoteModal` (includes `preset_service` and `page_path`).
- `click_to_call`: delegated listener on any `tel:` link (`ConversionTracking.tsx`).
- `page_view`: SPA navigations via `RouteAnalytics`.

### Rules
- Do not modify analytics, tracking, or form behavior without explicit approval.
- Never send name, email, phone, or message content to analytics. The lead event only carries `form_type` and a service label.

---

## 9. SEO and structured data (verified)

- Per-page metadata: `PageSEO` sets `<title>`, description, canonical (`SITE_URL = https://refinedpainting.co`), OG tags, and `robots` (`index, follow`, or `noindex, follow` when `noindex` is passed). No Twitter card tags are set.
- The static `index.html` title and description are fallbacks. The prerender script strips them and replaces them with each route's own tags. Do not add a second `<title>` or description.
- Prerendering: `scripts/prerender.mjs` writes real HTML per route, so crawlers get content before JS runs.
- Sitemap: generated at build into `dist/sitemap.xml`. There is no committed `public/sitemap.xml`. `robots.txt` points to it.
- 404: prerendered `dist/404.html`. Its comments say Cloudflare Pages serves it with a 404 status. **[unverified]** against the live Pages project.
- `/thank-you` is prerendered and excluded from the sitemap.
- Structured data:
  - `index.html`: `PaintingContractor` JSON-LD (address, phone, hours, areaServed, aggregateRating).
  - `ServiceDetailPage`, `BlogPostPage`, `LocationPage`, `FaqPage`: BreadcrumbList and related schema.
- **Known schema concern:** `aggregateRating` (5.0 / 227) is hardcoded on the homepage JSON-LD. Verify it reflects real reviews before any change, and keep it accurate.
- `robots.txt` allows all crawlers.

---

## 10. Hosting and deployment

### Verified
- Git push to `main` on GitHub triggers a **Cloudflare Pages** check named "Cloudflare Pages". The check on `main` `72e88f7` succeeded (Deploy successful).
- Pages project name: **`refinedpainting-com`**.
- Each PR gets a preview deployment, shown as a Cloudflare check on its head commit. The stable Pages URL `https://refinedpainting-com.pages.dev` serves the current React build.
- No GitHub Actions workflows are present in the repository (`actions/workflows` count is 0).
- `.gitignore` excludes `.wrangler` and `.dev.vars`. No Wrangler config is committed.

### Inferred, not verified
- **Build command `npm run build` and output directory `dist`:** inferred from `package.json` and `scripts/prerender.mjs`. Check the Pages project settings before relying on them.
- **Node version 22:** from `.node-version`. Confirm the Pages build image uses it.
- **Production branch `main`:** inferred from the check on `main`. The production-branch setting is **[unverified]** in the dashboard.
- **Custom domain binding:** **[unverified]**. The live `refinedpainting.co` serves WordPress, and the Pages project's domain list has not been checked.

### Rules
- Do not change Pages settings, build configuration, environment variables, or domains without approval.
- Do not describe a Pages deploy as a production launch.

---

## 11. Development conventions

- Match the surrounding code's comment density, naming, and idiom. Many files carry explanatory comments on purpose. Keep them accurate when you change behavior.
- Business facts go in `src/lib/content.ts`, not in components.
- Shared primitives go in `src/components/ui/`. Reuse them before creating new ones.
- Do not add dependencies without approval.
- Keep images in `src/assets/images/` and reference them through imports, as the existing code does.
- Prefer targeted reads. Exclude `node_modules`, `dist`, `dist-ssr`, and caches.
- Do not generate DOM ids with `useId()` for elements rendered on the server (SVG pattern references, aria targets). Pass a stable, unique `id` prop from the call site, as `DotGrid` and `Accordion` do. The prerendered document shell (`Document`) is outside the client hydration root, so `useId()` values differ between server HTML and client hydration.
- Project photos are registered in `src/content/projects/projects.ts`. Each entry is one project, and `photos` lists its photos with the cover first. Optimized assets live in `src/assets/images/projects/<project>/` as `-sm` and `-lg` WebP files. The source-to-asset map is `docs/SOURCE_TO_ASSET_MAP.md`. Original Drive downloads are kept outside the repository and must not be committed.
- Run `npm run lint` after code changes. Run the build only when the change touches routing, prerendering, or SSR, or when you have been asked to verify a deploy.

---

## 12. Known issues and risks (supported by the repository)

1. **Live domain vs. React app.** `refinedpainting.co` serves WordPress. The React app is only visible at the Pages URL. See §1.
2. **Two GA4 properties.** Repo uses `G-X3HQQ4CQDB`. Live WordPress uses `G-TCE6S4DT0K`. Ownership is unresolved.
3. **Cloudflare custom-domain mapping unverified.** Needs dashboard confirmation.
4. **Public preview URLs.** `refinedpainting-com.pages.dev` and per-PR `*.refinedpainting-com.pages.dev` are public. Duplicate-content risk if indexed. Robots or noindex on these is **[unverified]**.
5. **No branch protection on `main`.** Direct pushes deploy.
6. **Merged branch not deleted:** `feat/analytics-clarity-seo-fixes` (fully merged into `main`).
7. **Web3Forms key duplicated** in two components, plus the endpoint in a hook. Rotation must touch all of them.
8. **Business claims need proof:** licensed and insured, EPA Lead-Safe, 5-year warranty, 227 reviews, 5.0 rating, the badges.
9. **Hardcoded aggregateRating in JSON-LD** on the homepage. See §9.
10. **Location pages unpublished** by design. Content not ready.
11. **Repository is public.** Do not commit anything sensitive.
12. **Dependencies not installed** in this folder. `node_modules` is absent, so the build and lint have not been run from this checkout.

---

## 13. Token-efficiency rules for future sessions

- Read this file first. Don't re-derive the facts above.
- Use filename searches and targeted reads. Avoid full-repo scans.
- Avoid subagents unless the task needs broad fan-out.
- Skip `node_modules`, `dist`, `dist-ssr`, caches, and generated files.
- Run only the checks relevant to the change.
- Keep final reports concise.
