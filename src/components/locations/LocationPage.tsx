import { Navigate, useParams } from "react-router-dom";
import { PageSEO } from "../seo/PageSEO";
import { getLocationBySlug } from "../../content/locations/locations";
import { business, SITE_URL } from "../../lib/content";
import { CityPageLayout } from "./CityPageLayout";

/** A real city page. Only a city marked "ready" in content/locations/locations.ts
 * renders; anything else goes back to the hub (and has no prerendered file, so
 * a direct visit is a 404). Its param arrives as "<city>-wa"; the registry slug
 * is the city alone. See that file's header for what a city needs first. */
export function LocationPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const baseSlug = citySlug?.replace(/-wa$/, "");
  const location = baseSlug ? getLocationBySlug(baseSlug) : undefined;

  const canonical = `${SITE_URL}/service-areas/${baseSlug ?? ""}-wa/`;

  // Not just a missing-slug guard: status gates whether this is fit to show a
  // visitor, independent of whether the route happens to be reachable.
  if (!location || location.status !== "ready") return <Navigate to="/service-areas/" replace />;

  return (
    <>
      <PageSEO
        title={`Painting Contractor in ${location.cityName}, WA | Refined Painting`}
        description={`Refined Painting provides interior, exterior and cabinet painting for homeowners in ${location.cityName}, WA. Request a free estimate.`}
        canonical={canonical}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Residential Painting",
            name: `Painting Services in ${location.cityName}, WA`,
            url: canonical,
            provider: { "@type": "PaintingContractor", name: business.name, url: SITE_URL },
            areaServed: { "@type": "City", name: location.cityName },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/service-areas/` },
              { "@type": "ListItem", position: 3, name: location.cityName, item: canonical },
            ],
          },
        ]}
      />
      <CityPageLayout
        cityName={location.cityName}
        intro={location.uniqueLocalContext}
        servicesIntro={location.servicesIntro}
        neighborhoods={location.neighborhoods}
        projects={location.localProjectImages}
        testimonial={location.localTestimonial}
      />
    </>
  );
}
