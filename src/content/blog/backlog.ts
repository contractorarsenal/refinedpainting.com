// INTERNAL CONTENT PLANNING ONLY.
//
// This file is not imported by any route, page, or component — it exists so
// the next monthly content cycle has a working queue to pull from. Nothing
// here should ever render as a "Coming Soon" card or be exposed in the
// sitemap. When an item is actually written, move it into posts.ts as a real
// BlogPost and delete its entry here.
//
// Each entry still needs the same fact-verification pass posts.ts entries
// got: confirm claims against approved site content before publishing, and
// do not carry over unverified pricing, timelines, or certifications from
// outside research without labeling them clearly as external estimates.

export interface BacklogItem {
  workingTitle: string;
  proposedSlug: string;
  category: string;
  notes: string;
}

export const blogBacklog: BacklogItem[] = [
  {
    workingTitle: "Best Time of Year to Paint a House Exterior in Seattle",
    proposedSlug: "best-time-to-paint-exterior-seattle",
    category: "exterior-painting",
    notes:
      "Can lean on the existing approved FAQ claim (May–September) already published in content.ts. Verify any added weather specifics before publishing.",
  },
  {
    workingTitle: "Why Kirkland Homes Need Specialized Exterior Painting & Siding Care",
    proposedSlug: "kirkland-exterior-painting-siding-care",
    category: "seattle-pnw",
    notes: "Local/neighborhood angle. Do not invent specific Kirkland project claims — use general PNW siding/moisture facts only unless real Kirkland project photos exist.",
  },
  {
    workingTitle: "EPA Lead-Safe Certification: What Seattle Homeowners Should Know",
    proposedSlug: "epa-lead-safe-certification-seattle-homeowners",
    category: "painting-guides",
    notes:
      "Business-approved fact: Refined Painting follows EPA Lead-Safe practices (already published). Specific regulatory requirements/thresholds need an external, citable EPA source before publishing.",
  },
  {
    workingTitle: "Rot Repair Before Painting: Why Seattle Homes Need Carpentry First",
    proposedSlug: "rot-repair-before-painting-seattle",
    category: "exterior-painting",
    notes: "Can draw on the existing approved carpentry service content (rot causes, structural assessment) already in content.ts.",
  },
  {
    workingTitle: "Cabinet Refinishing vs Replacement",
    proposedSlug: "cabinet-refinishing-vs-replacement",
    category: "cabinet-refinishing",
    notes:
      "Expands on the single line already used in the published cabinet cost article. Needs real cost/timeline comparison data for replacement, which is not currently approved content — verify before publishing.",
  },
  {
    workingTitle: "How to Compare Painting Quotes in Seattle",
    proposedSlug: "how-to-compare-painting-quotes-seattle",
    category: "cost-planning",
    notes: "Natural follow-up to both published cost articles. Should link back to them once live.",
  },
  {
    workingTitle: "Can You Paint a House Exterior in Seattle Rain?",
    proposedSlug: "can-you-paint-exterior-in-seattle-rain",
    category: "seattle-pnw",
    notes:
      "Existing approved content covers the general practice (monitor forecasts, pause if rain moves in). Any specific temperature/humidity thresholds need a verifiable external source before publishing.",
  },
];
