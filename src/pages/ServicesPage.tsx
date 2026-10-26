import { ArrowRight, Building2, Hammer, Home, Layers, PaintRoller, ShieldCheck, TreeDeciduous, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import afterWhite from "../assets/images/projects/exterior-after-white.webp";
import { coverPhoto } from "../content/projects/projects";
import { FramedCTA } from "../components/sections/FramedCTA";
import { Process } from "../components/sections/Process";
import { PromoBanner } from "../components/sections/PromoBanner";
import { VideoAuthority } from "../components/sections/VideoAuthority";
import { Button, LinkButton } from "../components/ui/Button";
import { Accordion } from "../components/ui/Accordion";
import { Container } from "../components/ui/Container";
import { useQuoteModal } from "../components/quote/QuoteModalContext";
import { PageSEO } from "../components/seo/PageSEO";
import type { ServiceId } from "../lib/content";
import { business, faqs, serviceSlugs, services, SITE_URL, warranty } from "../lib/content";

// A finished exterior in daylight: the page's photograph, chosen over
// preparation or in-progress shots.
const headerPhoto = coverPhoto("gray-green-home-front-fence");

const serviceIcons: Record<ServiceId, LucideIcon> = {
  interior: Home,
  exterior: PaintRoller,
  cabinets: Layers,
  commercial: Building2,
  "deck-fence": TreeDeciduous,
  carpentry: Hammer,
};

// The five primary services, in the order the homepage shows them. Commercial
// is reached from the text link below the choices, not as a tile.
const choiceIds: ServiceId[] = ["interior", "exterior", "cabinets", "deck-fence", "carpentry"];

const primaryFaqs = faqs.slice(0, 5);
const moreFaqs = faqs.slice(5);

function ServiceChoice({ id, className = "" }: { id: ServiceId; className?: string }) {
  const service = services.find((s) => s.id === id);
  const Icon = serviceIcons[id];
  if (!service) return null;

  return (
    <Link
      to={`/services/${serviceSlugs[id]}`}
      className={`group flex min-h-24 flex-col justify-between gap-4 border border-crest bg-crest p-4 text-left text-warm-white transition duration-200 ease-out hover:-translate-y-0.5 hover:border-crest-dark hover:bg-crest-dark active:translate-y-0 active:bg-crest-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-white sm:p-5 ${className}`}
    >
      <Icon className="size-5 text-warm-white" aria-hidden />
      <span className="flex items-end justify-between gap-2 font-display text-base font-extrabold uppercase leading-tight tracking-wide text-warm-white sm:text-lg">
        {service.title}
        <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}

export function ServicesPage() {
  const { openQuoteModal } = useQuoteModal();
  const commercial = services.find((s) => s.id === "commercial");

  return (
    <>
      <PageSEO
        title="Painting Services | Refined Painting"
        description="Interior painting, exterior painting, cabinet refinishing, deck & fence staining and carpentry services from Refined Painting, serving Seattle and the Eastside."
        canonical={`${SITE_URL}/services`}
        image={`${SITE_URL}${afterWhite}`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
            ],
          },
        ]}
      />

      {/* Header and service choices share one photographed band, so the five
          services are available without scrolling past repeated cards. */}
      <section className="relative overflow-hidden bg-ink text-warm-white">
        <img
          src={headerPhoto.lg}
          srcSet={`${headerPhoto.sm} 720w, ${headerPhoto.lg} 1200w`}
          sizes="100vw"
          alt={headerPhoto.alt}
          className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/70 via-near-black/25 to-near-black/85" aria-hidden />

        <Container className="relative flex flex-col items-center gap-5 pb-12 pt-36 text-center sm:pb-14 sm:pt-44">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal">Service Index</span>
          <h1 className="max-w-3xl text-balance font-display text-3xl font-black uppercase leading-[0.98] text-warm-white sm:text-4xl lg:text-5xl">
            Built Around <span className="text-teal">Quality</span>, Care &amp; Communication.
          </h1>
          <p className="max-w-xl text-balance text-sm leading-relaxed text-warm-white/85 sm:text-base">
            Refined Painting provides interior, exterior, cabinet and specialty painting services for homeowners and
            businesses throughout Seattle and the Eastside.
          </p>
          <div className="mt-1 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row">
            <Button onClick={() => openQuoteModal()} size="md" className="w-full sm:w-auto">
              Request Free Estimate
            </Button>
            <LinkButton href={business.phoneHref} variant="outline-light" size="md" icon="phone" className="w-full sm:w-auto">
              Call Now
            </LinkButton>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-warm-white/80">
            Benjamin Moore &amp; Sherwin-Williams Certified
          </span>

          <div className="mt-8 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {choiceIds.map((id, index) => (
              <ServiceChoice
                key={id}
                id={id}
                className={index === choiceIds.length - 1 ? "col-span-2 sm:col-span-1" : ""}
              />
            ))}
          </div>

          {commercial ? (
            <p className="text-sm text-warm-white/75">
              {commercial.description}{" "}
              <Link
                to={`/services/${serviceSlugs.commercial}`}
                className="inline-flex items-center gap-1 font-bold text-warm-white underline decoration-crest decoration-2 underline-offset-4 transition-colors hover:text-teal"
              >
                View Commercial Painting
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </p>
          ) : null}
        </Container>
      </section>

      <VideoAuthority />
      <Process />
      <PromoBanner />

      <section id="warranty" className="scroll-mt-24 border-t border-ink/10 bg-sand py-12 sm:py-14 lg:py-18">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="border border-ink/10 bg-cream-light p-6 sm:p-8 lg:sticky lg:top-28 lg:self-start">
            <span className="flex size-10 items-center justify-center bg-ink text-teal">
              <ShieldCheck className="size-5" aria-hidden />
            </span>
            <span className="mt-4 block text-[11px] font-bold uppercase tracking-[0.16em] text-crest">
              Structural Integrity
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-[0.98] text-ink sm:text-3xl">
              {warranty.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">{warranty.covered}</p>
            <p className="mt-3 text-xs text-ink/45">{warranty.note}</p>
            <details className="group/warranty mt-5 border-t border-ink/10 pt-4">
              <summary className="flex cursor-pointer list-none items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-crest">
                Read Full Exclusions
                <ArrowRight className="size-3 transition-transform group-open/warranty:rotate-90" aria-hidden />
              </summary>
              <ul className="mt-3 flex flex-col gap-2">
                {warranty.excluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-ink/55">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-ink/30" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-crest">Clarifications</span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-[0.98] text-ink sm:text-3xl">
              Frequently Asked Service Questions
            </h2>
            <div className="mt-6 border border-ink/10 bg-cream-light px-5">
              <Accordion id="services-faq-primary" items={primaryFaqs} />
            </div>
            {moreFaqs.length ? (
              <details className="mt-2 group/more">
                <summary className="cursor-pointer list-none py-3 text-xs font-bold uppercase tracking-wide text-crest">
                  Show More Questions
                </summary>
                <div className="border border-ink/10 bg-cream-light px-5">
                  <Accordion id="services-faq-more" items={moreFaqs} />
                </div>
              </details>
            ) : null}
          </div>
        </Container>
      </section>

      <FramedCTA
        eyebrow="Consult With Our Team"
        title="Have a Project in Mind?"
        description="Tell us what you're planning and we'll help you figure out the right next step — no pressure, no spam."
      />
    </>
  );
}
