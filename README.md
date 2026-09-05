# Refined Painting — Homepage Demo

A redesigned homepage concept for Refined Painting, a Seattle-area painting contractor.
Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

Other scripts:

```bash
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Structure

- `src/lib/content.ts` — all site copy, facts, and figures in one place (services, testimonials,
  FAQs, service areas, etc.). Nothing else in the codebase hardcodes business facts.
- `src/components/layout/` — header, mobile menu, mobile bottom CTA bar, footer.
- `src/components/sections/` — one file per homepage section, composed in `src/App.tsx`.
- `src/components/quote/` — the multi-step "Get a Free Estimate" modal (context, reducer-style
  state, and one component per step). Submission is simulated locally (`console.info` + a success
  screen) — see the comment in `QuoteModal.tsx` for where to wire up a real API/CRM.
- `src/components/ui/` — shared primitives (Button, Container, SectionHeading, Accordion, Stars,
  Mascot, PlaceholderPhoto).

## Placeholder imagery

Refined Painting did not supply project photography for this demo. Every photo slot (hero,
service cards, gallery, PNW-prep section, color consultation) uses `PlaceholderPhoto`, a branded
abstract placeholder clearly labeled "· sample" in the UI and flagged with a comment in
`src/components/ui/PlaceholderPhoto.tsx`. Swap those usages for real project photography before
launch — the real logo, mascot, and trust badges are already wired in from the live site.
