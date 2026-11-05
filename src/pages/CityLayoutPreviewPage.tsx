import { CityPageLayout } from "../components/locations/CityPageLayout";
import { PageSEO } from "../components/seo/PageSEO";
import { SITE_URL } from "../lib/content";

// TEMPORARY, FOR OWNER APPROVAL ONLY. This renders the shared city-page layout
// with obviously fake sample content so the layout can be reviewed before it is
// applied to the 14 city pages. It is noindex, not in the sitemap, and not
// linked anywhere. Remove this page, its route in App.tsx, and
// getLayoutPreviewRoutes() in entry-server.tsx before the PR is merged.
export function CityLayoutPreviewPage() {
  return (
    <>
      <PageSEO
        title="City Page Layout Preview | Refined Painting"
        description="Internal layout preview. Not a real city page."
        canonical={`${SITE_URL}/service-areas/layout-preview/`}
        noindex
      />
      <CityPageLayout
        cityName="Sample City"
        intro="Sample intro. A real city page shows a short, owner-approved note about work in that city here, or nothing at all."
        neighborhoods={[
          {
            name: "Sample Neighborhood One",
            description: "Sample text. Each neighborhood is a section inside its city page, with a note the owner has approved.",
          },
          {
            name: "Sample Neighborhood Two",
            description: "Sample text. Neighborhood names appear only after the owner approves them.",
          },
        ]}
        banner={
          <p className="mb-5 border-2 border-gold bg-gold/15 px-4 py-3 text-sm font-bold text-ink">
            LAYOUT PREVIEW. Sample content only, not a real city page. Local projects and a testimonial would appear
            below the neighborhoods once approved material exists.
          </p>
        }
      />
    </>
  );
}
