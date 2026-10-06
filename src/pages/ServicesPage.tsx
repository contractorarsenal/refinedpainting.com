import { Building2, Hammer, Home, Layers, PaintRoller, TreeDeciduous } from "lucide-react";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Process } from "../components/sections/Process";
import { PromoBanner } from "../components/sections/PromoBanner";
import { ServiceJumpNav } from "../components/sections/ServiceJumpNav";
import { ServiceSections } from "../components/sections/ServiceSections";
import { VideoAuthority } from "../components/sections/VideoAuthority";
import { Button, LinkButton } from "../components/ui/Button";
import { Accordion } from "../components/ui/Accordion";
import { Container } from "../components/ui/Container";
import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";
import { Reveal } from "../components/ui/Reveal";
import { useQuoteModal } from "../components/quote/QuoteModalContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import type { ServiceId } from "../lib/content";
import { business, cabinetProofStat, faqs, serviceSlugs, services, warranty } from "../lib/content";

const proofRow = [
  { value: cabinetProofStat.value, label: cabinetProofStat.label },
  { value: "5-Year", label: "Workmanship Warranty" },
  { value: "EPA", label: "Lead-Safe Certified" },
  { value: "Licensed", label: "& Insured" },
];

const serviceIcons: Record<ServiceId, typeof Home> = {
  interior: Home,
  exterior: PaintRoller,
  cabinets: Layers,
  commercial: Building2,
  "deck-fence": TreeDeciduous,
  carpentry: Hammer,
};

const primaryFaqs = faqs.slice(0, 5);
const moreFaqs = faqs.slice(5);

export function ServicesPage() {
  const { openQuoteModal } = useQuoteModal();

  useDocumentMeta(
    "Painting Services | Refined Painting",
    "Interior painting, exterior painting, cabinet refinishing, commercial painting, deck & fence staining and carpentry services from Refined Painting, serving Seattle and the Eastside.",
  );

  return (
    <>
      <section className="bg-cream pb-16 pt-36 sm:pb-20 sm:pt-60 lg:pb-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div className="flex flex-col items-start gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Painting Services</span>
            <h1 className="text-balance font-display text-3xl font-black uppercase leading-[0.98] text-ink sm:text-4xl lg:text-5xl">
              Built Around <span className="text-teal-dark">Quality</span>, Care &amp; Communication.
            </h1>
            <p className="max-w-md text-balance text-sm leading-relaxed text-ink/65 sm:text-base">
              Refined Painting provides interior, exterior, cabinet and specialty painting services for
              homeowners and businesses throughout Seattle and the Eastside.
            </p>
            <div className="mt-1 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button onClick={() => openQuoteModal()} size="md" className="w-full sm:w-auto">
                Request Free Estimate
              </Button>
              <LinkButton href={business.phoneHref} variant="outline-dark" size="md" icon="phone" className="w-full sm:w-auto">
                Call Now
              </LinkButton>
            </div>
            <span className="mt-1 text-[11px] font-bold uppercase tracking-widest text-ink/40">
              Benjamin Moore &amp; Sherwin-Williams Certified
            </span>
          </div>

          <ImagePlaceholder label="Service Image" aspectClassName="aspect-4/3" className="max-w-md lg:justify-self-end" />
        </Container>

        <Container>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-6 sm:mt-12 sm:grid-cols-4 lg:mt-14">
            {proofRow.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center sm:flex-row sm:gap-2.5">
                <span className="font-display text-2xl font-black leading-none text-crest">{item.value}</span>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-ink/50 sm:mt-0 sm:text-[11px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* F2 — Choose Your Service: scannable overview before the detailed sections below */}
      <section className="border-t border-ink/10 bg-cream py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Choose Your Service</span>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
              What Do You Need Done?
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.id];
              return (
                <Reveal key={service.id} delay={index * 60}>
                  <a
                    href={`#${serviceSlugs[service.id]}`}
                    className="group flex h-full flex-col items-start gap-2.5 border-2 border-ink/10 p-5 transition-colors hover:border-crest"
                  >
                    <Icon className="size-6 text-teal-dark" aria-hidden />
                    <span className="font-display text-sm font-extrabold uppercase leading-tight tracking-wide text-ink sm:text-base">
                      {service.title}
                    </span>
                    <span className="text-xs leading-relaxed text-ink/55">{service.description}</span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <ServiceJumpNav />
      <ServiceSections afterCabinets={<VideoAuthority />} />
      <Process />
      <PromoBanner />

      <section id="warranty" className="scroll-mt-24 border-t border-ink/10 bg-cream py-14 sm:py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="border-2 border-ink/10 p-6 sm:p-8 lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Structural Integrity</span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-[0.98] text-ink sm:text-3xl">
              {warranty.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">{warranty.covered}</p>
            <p className="mt-3 text-xs text-ink/45">{warranty.note}</p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Clarifications</span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-[0.98] text-ink sm:text-3xl">
              Frequently Asked Service Questions
            </h2>
            <div className="mt-6">
              <Accordion items={primaryFaqs} />
            </div>
            {moreFaqs.length ? (
              <details className="mt-2 group/more">
                <summary className="cursor-pointer list-none py-3 text-xs font-bold uppercase tracking-wide text-crest">
                  Show More Questions
                </summary>
                <Accordion items={moreFaqs} />
              </details>
            ) : null}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
