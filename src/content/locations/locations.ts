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
  /** Verified, owner-approved local note. Optional: a bare name is fine. */
  description?: string;
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
  /** A sentence or two above the service cards, written for this city's homeowners. */
  servicesIntro?: string;
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

// Per-city content, keyed by citySlug. A city absent here stays "needs-content".
const cityContent: Record<string, Partial<LocationContent>> = {
  // Seattle: approved by the owner, who confirmed Refined Painting serves these
  // six neighborhoods. No local projects or testimonial are verified yet, so
  // those sections are skipped. Website coverage only; ad targeting is separate.
  seattle: {
    status: "ready",
    missingContentNeeded: [],
    uniqueLocalContext:
      "Refined Painting works with Seattle homeowners on interior and exterior painting, cabinet refinishing, deck and fence staining, and carpentry repairs, in neighborhoods including Greenwood, Ballard, Fremont, Wallingford, Queen Anne, and Capitol Hill.",
    servicesIntro:
      "Whether you are refreshing a single room or repainting the whole outside of your house, here is what we can do for your Seattle home. We also paint commercial spaces. Choose a service to see what is included.",
    neighborhoods: [
      { name: "Greenwood" },
      { name: "Ballard" },
      { name: "Fremont" },
      { name: "Wallingford" },
      { name: "Queen Anne" },
      { name: "Capitol Hill" },
    ],
  },
};

// One entry per approved website city (`serviceAreas`). Cities without an entry
// in `cityContent` are "needs-content" and are not published.
export const cityLocations: LocationContent[] = serviceAreas.map((cityName) => {
  const citySlug = slugFor(cityName);
  return {
    citySlug,
    cityName,
    verifiedServiceArea: true,
    status: "needs-content",
    localProjectImages: [],
    missingContentNeeded: [...commonMissingContent],
    ...cityContent[citySlug],
  };
});

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
