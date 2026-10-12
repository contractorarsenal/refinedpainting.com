// LOCATION PAGE CONTENT REGISTRY — architecture only, nothing here is
// published yet.
//
// No route in App.tsx renders LocationPage, no entry exists in
// public/sitemap.xml, and nothing links to /locations/* anywhere in the
// site. That's deliberate: every city below is a verified service area
// (cross-checked against `serviceAreas` in src/lib/content.ts), but none of
// them has the city-specific substance a real location page needs —
// unique local project photos, local testimonials, or any verified detail
// that isn't identical from one city to the next. Publishing now would mean
// swapping a city name into otherwise-identical text across 4+ pages,
// exactly the doorway-page pattern Google penalizes and the implementation
// brief explicitly said not to build.
//
// To actually launch a city's page:
//   1. Fill in at least `localProjectImages` or `localTestimonial` (ideally
//      both) with real, verifiable material — tagged by city, not reused
//      from the general project gallery.
//   2. Clear every item out of `missingContentNeeded`.
//   3. Flip `status` to "ready".
//   4. Add a <Route path="/locations/:citySlug" element={<LocationPage />} />
//      to App.tsx, add the URL to public/sitemap.xml, and link it from
//      ServiceAreaStrip.tsx / the footer.
// Steps 3 and 4 are intentionally not automated — a human should confirm
// the content is actually ready, not just present.

export interface LocationProjectImage {
  src: string;
  alt: string;
}

export interface LocationTestimonial {
  quote: string;
  source: string;
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
  /** What's required before this page can go live — cleared out as items are verified. */
  missingContentNeeded: string[];
}

const commonMissingContent = [
  "Real project photos taken in this city (tagged by location, not reused from the general gallery)",
  "Any customer testimonials or reviews specifically from this city",
  "Verified local context the business can actually speak to (common home styles/eras, HOA or historic-district considerations, typical scheduling lead time for this area) — not generic Seattle-area copy with the city name swapped in",
];

export const priorityLocations: LocationContent[] = [
  {
    citySlug: "kirkland",
    cityName: "Kirkland",
    verifiedServiceArea: true,
    status: "needs-content",
    localProjectImages: [],
    missingContentNeeded: [...commonMissingContent],
  },
  {
    citySlug: "bellevue",
    cityName: "Bellevue",
    verifiedServiceArea: true,
    status: "needs-content",
    localProjectImages: [],
    missingContentNeeded: [...commonMissingContent],
  },
  {
    citySlug: "redmond",
    cityName: "Redmond",
    verifiedServiceArea: true,
    status: "needs-content",
    localProjectImages: [],
    missingContentNeeded: [...commonMissingContent],
  },
  {
    citySlug: "bothell",
    cityName: "Bothell",
    verifiedServiceArea: true,
    status: "needs-content",
    localProjectImages: [],
    missingContentNeeded: [...commonMissingContent],
  },
];

export function getLocationBySlug(slug: string): LocationContent | undefined {
  return priorityLocations.find((l) => l.citySlug === slug);
}

export function getReadyLocations(): LocationContent[] {
  return priorityLocations.filter((l) => l.status === "ready");
}
