# Refined Painting Homepage Demo

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

- `src/lib/content.ts`: all site copy, facts, and figures in one place (services, testimonials,
  FAQs, service areas, etc). Nothing else in the codebase hardcodes business facts.
- `src/components/layout/`: header (with a light/dark scroll transition), mobile menu, mobile
  bottom CTA bar, footer.
- `src/components/sections/`: one file per homepage section, composed in `src/App.tsx`.
- `src/components/quote/`: the multi-step "Get a Free Estimate" modal (context, reducer-style
  state, and one component per step). It can be opened pre-filled with a specific service via
  `openQuoteModal("cabinets")`. Submission is simulated locally (`console.info` plus a success
  screen); see the comment in `QuoteModal.tsx` for where to wire up a real API or CRM.
- `src/components/promo/`: the scroll/time-triggered promo popup and its coordination with the
  quote modal (only one of the two is ever shown at once).
- `src/components/ui/`: shared primitives (Button, Container, SectionHeading, Accordion, Stars,
  Mascot, ProjectImage, PlaceholderPhoto, DotGrid, Reveal).

## Imagery

Real Refined Painting project photography lives in `src/assets/images/projects/` and is used
throughout: the hero, all six service cards, the before/after comparison, the gallery, and the
Pacific Northwest and Local Trusted Partner sections. A handful of supporting sections
(the promo banner's paint swatches) remain illustrative rather than photographic by design.

The `PlaceholderPhoto` component (`src/components/ui/PlaceholderPhoto.tsx`) still exists for any
future slot that needs a photo before one is available; it renders an obviously-labeled duotone
placeholder rather than stock photography, so it's easy to find and swap out.
