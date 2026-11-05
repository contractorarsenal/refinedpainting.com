// LOCATION PAGE CONTENT REGISTRY — no city page is published yet.
//
// The /service-areas/ hub is live and lists every city in `serviceAreas`.
// It links to a city only when that city's entry below is "ready". The route
// /service-areas/:citySlug and the sitemap list are already wired to this
// registry, so flipping a city to "ready" is what publishes it. Until then
// its URL stays a 404 (never a placeholder page), and nothing links to it.
// City pages live at /service-areas/<city>-wa/ (the original WordPress URLs),
// see `cityPageHref`.
//
// Every city below is a verified website service area (cross-checked against
// `serviceAreas` in src/lib/content.ts), but none has the city-specific
// substance a real page needs: unique local project photos, local
// testimonials, or verified detail that isn't identical from one city to the
// next. Swapping a city name into otherwise-identical text across 14 pages is
// the doorway-page pattern Google penalizes, so it is not done here.
//
// To launch a city's page:
//   1. Get owner approval for the content (see docs/CITY-PAGE-PROPOSAL.md):
//      real projects tagged to the city, a permitted local testimonial,
//      verified local context, and any neighborhood names.
//   2. Fill in `localProjectImages` and/or `localTestimonial`,
//      `uniqueLocalContext`, and `neighborhoods`.
//   3. Clear every item out of `missingContentNeeded`.
//   4. Flip `status` to "ready".
// Step 4 is deliberately manual: a human confirms the content is actually
// ready, not just present. Do not assign a project to a city by guessing
// from a photo, and keep website coverage separate from ad targeting.

import { serviceAreas } from "../../lib/content";

export interface LocationProjectImage {
  src: string;
  alt: string;
}

export interface LocationTestimonial {
  quote: string;
  source: string;
}

/** A neighborhood section on a city page. Only add one after the owner has
 * approved both the name and the text. A neighborhood is a section inside its
 * city's page, never a page of its own, and listing one is a coverage claim. */
export interface LocationNeighborhood {
  name: string;
  /** Verified, owner-approved local note. No generic filler. */
  description: string;
}

export interface LocationContent {
  citySlug: string;
  cityName: string;
  /** Cross-checked against serviceAreas in src/lib/content.ts — true for every entry below. */
  verifiedServiceArea: boolean;
  status: "needs-content" | "ready";
  /** Real photos taken specifically in this city. Empty until the business supplies them. */
  localProjectImages: LocationProjectImage[];
  /** A real review/testimonial specifically from a customer in this city. Omitted until verified. */
  localTestimonial?: LocationTestimonial;
  /** Verified local context (housing stock, neighborhoods actually served, etc.) distinct from boilerplate. Omitted until supplied. */
  uniqueLocalContext?: string;
  /** Owner-approved neighborhoods served in this city. Empty until approved. */
  neighborhoods?: LocationNeighborhood[];
  /** What's required before this page can go live — cleared out as items are verified. */
  missingContentNeeded: string[];
}

const commonMissingContent = [
  "Real project photos taken in this city (tagged by location, not reused from the general gallery)",
  "Any customer testimonials or reviews specifically from this city",
  "Verified local context the business can actually speak to (common home styles/eras, HOA or historic-district considerations, typical scheduling lead time for this area) — not generic Seattle-area copy with the city name swapped in",
];

function slugFor(cityName: string): string {
  return cityName.toLowerCase().replace(/\s+/g, "-");
}

// One entry per approved website city (`serviceAreas`), all "needs-content".
// Seattle's website coverage is its own decision and is unrelated to ad targeting.
export const cityLocations: LocationContent[] = serviceAreas.map((cityName) => ({
  citySlug: slugFor(cityName),
  cityName,
  verifiedServiceArea: true,
  status: "needs-content",
  localProjectImages: [],
  missingContentNeeded: [...commonMissingContent],
}));

export function getLocationBySlug(slug: string): LocationContent | undefined {
  return cityLocations.find((l) => l.citySlug === slug);
}

/** Where a city page lives once it is built. This reuses the original
 * WordPress URL pattern (e.g. /service-areas/bellevue-wa/). */
export function cityPageHref(location: LocationContent): string {
  return `/service-areas/${location.citySlug}-wa/`;
}

export function getReadyLocations(): LocationContent[] {
  return cityLocations.filter((l) => l.status === "ready");
}
