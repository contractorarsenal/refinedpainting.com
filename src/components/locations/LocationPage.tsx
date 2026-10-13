import { Navigate, useParams } from "react-router-dom";
import { Breadcrumbs } from "../blog/Breadcrumbs";
import { FinalCTA } from "../sections/FinalCTA";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { PageSEO } from "../seo/PageSEO";
import { getLocationBySlug } from "../../content/locations/locations";
import { business, services, serviceSlugs, SITE_URL } from "../../lib/content";

/** Reusable city-landing template. Not wired into App.tsx yet — see the
 * header comment in content/locations/locations.ts for why, and what has to
 * be true before a given city should actually be routed and published. */
export function LocationPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const location = citySlug ? getLocationBySlug(citySlug) : undefined;
  const { openQuoteModal } = useQuoteModal();

  const canonical = `${SITE_URL}/locations/${citySlug ?? ""}`;

  // Not just a missing-slug guard — status gates whether this is actually
  // fit to show a visitor, independent of whether the route happens to be
  // reachable (it isn't yet, but this keeps the component safe either way).
  if (!location || location.status !== "ready") return <Navigate to="/about#service-areas" replace />;

  return (
    <>
      <PageSEO
        title={`Painting Contractor in ${location.cityName}, WA | Refined Painting`}
        description={`Refined Painting provides interior, exterior and cabinet painting for homeowners in ${location.cityName}, WA. Licensed, insured, EPA Lead-Safe, backed by a 5-year workmanship warranty.`}
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
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/about#service-areas` },
              { "@type": "ListItem", position: 3, name: location.cityName, item: canonical },
            ],
          },
        ]}
      />
      <section className="bg-cream pb-10 pt-28 sm:pt-32 lg:pb-12 lg:pt-36">
        <Container className="max-w-2xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/about#service-areas" },
              { label: location.cityName },
            ]}
          />
          <Reveal className="mt-6">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">
              {location.cityName}, WA
            </span>
            <h1 className="mt-3 text-balance font-display text-4xl font-black uppercase leading-[0.96] text-ink sm:text-5xl">
              Painting Contractor in {location.cityName}
            </h1>
            {location.uniqueLocalContext ? (
              <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-ink/70 sm:text-lg">
                {location.uniqueLocalContext}
              </p>
            ) : null}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="inline-flex items-center justify-center gap-2 rounded bg-crest px-7 py-4 font-display text-base font-extrabold uppercase tracking-wide text-warm-white transition-colors hover:bg-ink"
              >
                Get a Free Estimate
              </button>
              <LinkButton href={business.phoneHref} variant="outline-dark" size="lg" icon="phone">
                Call Now
              </LinkButton>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream-light py-12 sm:py-16 lg:py-20">
        <Container>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Services</span>
          <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-wide text-ink sm:text-3xl">
            Painting Services for {location.cityName} Homeowners
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`/services/${serviceSlugs[service.id]}`}
                className="block border border-ink/10 bg-cream p-5 transition-colors hover:border-crest"
              >
                <span className="font-display text-lg font-extrabold uppercase tracking-wide text-ink">
                  {service.title}
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{service.description}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {location.localProjectImages.length > 0 || location.localTestimonial ? (
        <section className="border-t border-ink/10 bg-cream py-12 sm:py-16 lg:py-20">
          <Container>
            {location.localTestimonial ? (
              <blockquote className="border-l-4 border-crest pl-5 text-lg font-semibold italic text-ink/80">
                &ldquo;{location.localTestimonial.quote}&rdquo;
                <footer className="mt-2 text-sm font-normal not-italic text-ink/50">
                  {location.localTestimonial.source}
                </footer>
              </blockquote>
            ) : null}
          </Container>
        </section>
      ) : null}

      <FinalCTA />
    </>
  );
}
