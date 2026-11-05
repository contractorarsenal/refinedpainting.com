import { ArrowRight, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { LocationNeighborhood, LocationProjectImage, LocationTestimonial } from "../../content/locations/locations";
import { business, teamMembers } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { FinalCTA } from "../sections/FinalCTA";
import { photoCardServices, ServicePhotoCard } from "../sections/ServicePhotoCard";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface CityPageLayoutProps {
  cityName: string;
  /** Verified, owner-approved local context. Omit until supplied. */
  intro?: string;
  /** A sentence or two above the service cards, written for this city. */
  servicesIntro?: string;
  /** Owner-approved neighborhoods. Each renders as a section inside this page. */
  neighborhoods?: LocationNeighborhood[];
  /** Real photos taken in this city. Omit until supplied and approved. */
  projects?: LocationProjectImage[];
  /** A real, permitted review from a customer in this city. */
  testimonial?: LocationTestimonial;
  /** Optional notice above the heading (used only by the layout preview). */
  banner?: ReactNode;
}

/** Shared layout for every city page. Everything city-specific comes in
 * through props, and the optional sections (neighborhoods, local projects,
 * testimonial) render only when approved material is passed, so a city with
 * less material shows less rather than filler. "Our Services" uses the
 * homepage's photo cards; those photos illustrate the service and are never
 * presented as work done in this city. */
export function CityPageLayout({
  cityName,
  intro,
  servicesIntro,
  neighborhoods,
  projects,
  testimonial,
  banner,
}: CityPageLayoutProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <section className="bg-cream pb-10 pt-28 sm:pt-32 lg:pb-12 lg:pt-36">
        <Container className="max-w-2xl">
          {banner}
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{cityName}, WA</span>
            <h1 className="mt-3 text-balance font-display text-4xl font-black uppercase leading-[0.96] text-ink sm:text-5xl">
              Painting Contractor in {cityName}
            </h1>
            {intro ? (
              <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-ink/70 sm:text-lg">{intro}</p>
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
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Our Services</span>
          <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-wide text-ink sm:text-3xl">
            Painting Services for {cityName} Homeowners
          </h2>
          {servicesIntro ? (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/70">{servicesIntro}</p>
          ) : null}
          <ul className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-5">
            {photoCardServices.map((service, index) => (
              <Reveal
                key={service.id}
                as="li"
                delay={index * 60}
                className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.85rem)]"
              >
                <ServicePhotoCard serviceId={service.id} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {neighborhoods && neighborhoods.length > 0 ? (
        <section className="border-t border-ink/10 bg-cream py-12 sm:py-16 lg:py-20">
          <Container className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Neighborhoods</span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-wide text-ink sm:text-3xl">
              {cityName} Neighborhoods We Serve
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              We work with homeowners across {cityName}, including in these neighborhoods.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {neighborhoods.map((n) => (
                <li
                  key={n.name}
                  className="border border-ink/15 bg-cream-light px-4 py-3 text-sm font-bold text-ink/80"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="size-4 shrink-0 text-crest" aria-hidden />
                    {n.name}
                  </span>
                  {n.description ? (
                    <span className="mt-1 block text-sm font-normal text-ink/65">{n.description}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-ink/10 bg-cream-light py-12 sm:py-16 lg:py-20">
        <Container className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Free Estimate</span>
          <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-wide text-ink sm:text-3xl">
            How to Request an Estimate
          </h2>
          <ol className="mt-6 flex flex-col gap-5">
            <li className="border-t-2 border-crest pt-4">
              <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-ink">
                1. Tell us about your project
              </h3>
              <p className="mt-1.5 text-base leading-relaxed text-ink/70">
                Use any Get a Free Estimate button, or call {business.phone}. The online request asks for your ZIP code,
                the type of project, your timeline, a few details, and how to reach you.
              </p>
            </li>
            <li className="border-t-2 border-crest pt-4">
              <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-ink">
                2. We get back to you
              </h3>
              <p className="mt-1.5 text-base leading-relaxed text-ink/70">
                {teamMembers.gloria.name}, our {teamMembers.gloria.role}, is your first contact. Our team typically
                responds to new inquiries within about an hour during business hours ({business.hours}).
              </p>
            </li>
            <li className="border-t-2 border-crest pt-4">
              <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-ink">
                3. We look at your home
              </h3>
              <p className="mt-1.5 text-base leading-relaxed text-ink/70">
                We visit your home, take measurements, and answer your questions, so you know what to expect before
                you decide.
              </p>
            </li>
          </ol>
        </Container>
      </section>

      {projects && projects.length > 0 ? (
        <section className="border-t border-ink/10 bg-cream-light py-12 sm:py-16 lg:py-20">
          <Container>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Our Work</span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-wide text-ink sm:text-3xl">
              Recent Projects in {cityName}
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((photo) => (
                <li key={photo.src} className="overflow-hidden rounded-lg border border-ink/10 bg-ink">
                  <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-4/3 w-full object-cover" />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {testimonial ? (
        <section className="border-t border-ink/10 bg-cream py-12 sm:py-16 lg:py-20">
          <Container className="max-w-3xl">
            <blockquote className="border-l-4 border-crest pl-5 text-lg font-semibold italic text-ink/80">
              &ldquo;{testimonial.quote}&rdquo;
              <footer className="mt-2 text-sm font-normal not-italic text-ink/50">{testimonial.source}</footer>
            </blockquote>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-ink/10 bg-cream py-8">
        <Container>
          <Link
            to="/service-areas/"
            className="inline-flex items-center gap-1.5 border-b-2 border-crest pb-1 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-crest"
          >
            See All Service Areas
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
