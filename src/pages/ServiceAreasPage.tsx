import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/blog/Breadcrumbs";
import { useQuoteModal } from "../components/quote/QuoteModalContext";
import { PageSEO } from "../components/seo/PageSEO";
import { FinalCTA } from "../components/sections/FinalCTA";
import { LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { cityPageHref, getReadyLocations } from "../content/locations/locations";
import { business, serviceAreas, services, serviceSlugs, SITE_URL } from "../lib/content";

const chipClasses =
  "flex items-center gap-2 border border-ink/15 bg-cream-light px-4 py-3 text-sm font-bold text-ink/80";

/** Hub for the full website service-area list (`serviceAreas` in content.ts).
 * Every approved city is listed; a city is only a link once its page exists
 * and is marked "ready" in content/locations/locations.ts. */
export function ServiceAreasPage() {
  const { openQuoteModal } = useQuoteModal();
  const canonical = `${SITE_URL}/service-areas/`;
  const readyByCity = new Map(getReadyLocations().map((l) => [l.cityName, l]));

  return (
    <>
      <PageSEO
        title="Painting Service Areas | Refined Painting"
        description="Refined Painting serves 14 cities across King and Snohomish Counties, including Seattle, Bellevue, Kirkland, Redmond and Sammamish. Request a free estimate."
        canonical={canonical}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Service Areas", item: canonical },
            ],
          },
        ]}
      />
      <section className="bg-cream pb-10 pt-28 sm:pt-32 lg:pb-12 lg:pt-36">
        <Container className="max-w-2xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
          <Reveal className="mt-6">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Where We Work</span>
            <h1 className="mt-3 text-balance font-display text-4xl font-black uppercase leading-[0.96] text-ink sm:text-5xl">
              Painting Service Areas
            </h1>
            <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-ink/70 sm:text-lg">
              Refined Painting works with homeowners and businesses throughout King and Snohomish Counties. These
              are the {serviceAreas.length} cities we serve.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream-light py-12 sm:py-16 lg:py-20">
        <Container>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Cities We Serve</span>
          <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-wide text-ink sm:text-3xl">
            Seattle &amp; the Eastside
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((city) => {
              const page = readyByCity.get(city);
              return (
                <li key={city}>
                  {page ? (
                    <Link
                      to={cityPageHref(page)}
                      className={`${chipClasses} justify-between transition-colors hover:border-crest hover:text-crest`}
                    >
                      <span className="flex items-center gap-2">
                        <MapPin className="size-4 text-crest" aria-hidden />
                        {city}
                      </span>
                      <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  ) : (
                    <span className={chipClasses}>
                      <MapPin className="size-4 text-crest" aria-hidden />
                      {city}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream py-12 sm:py-16 lg:py-20">
        <Container className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Not Sure About Your Address?</span>
          <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-wide text-ink sm:text-3xl">
            Ask Us Before You Decide
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/70">
            If your project is near one of these cities but not listed, call us or request a free estimate. The
            estimate request asks for your ZIP code so we know where the project is.
          </p>
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

          <div className="mt-10 border-t border-ink/10 pt-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40">Our Services</span>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${serviceSlugs[service.id]}`}
                  className="text-sm font-semibold text-teal-dark underline decoration-teal-dark/30 underline-offset-2 hover:text-ink"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA tone="navy" />
    </>
  );
}
