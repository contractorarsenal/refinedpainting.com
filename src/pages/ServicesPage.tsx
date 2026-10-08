import { ArrowRight, Building2, Hammer, Home, Layers, PaintRoller, ShieldCheck, TreeDeciduous } from "lucide-react";
import { FramedCTA } from "../components/sections/FramedCTA";
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
import { GridTexture } from "../components/ui/Texture";
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
    "Interior painting, exterior painting, cabinet refinishing, deck & fence staining and carpentry services from Refined Painting, serving Seattle and the Eastside.",
  );

  return (
    <>
      <section className="relative overflow-hidden bg-cream pb-16 pt-36 sm:pb-20 sm:pt-60 lg:pb-24">
        <GridTexture />
        <Container className="relative grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div className="flex flex-col items-start gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-crest">Service Index</span>
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

          <div className="flex max-w-md flex-col gap-5 lg:justify-self-end">
            <div className="flex flex-col gap-2">
              <ImagePlaceholder label="Project Photo Coming Soon" aspectClassName="aspect-4/3" />
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/35">
                Real project photography, added as work is completed
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t-2 border-crest pt-4">
              {proofRow.map((item) => (
                <div key={item.label}>
                  <span className="block font-display text-xl font-black leading-none text-crest">{item.value}</span>
                  <span className="mt-1 block text-[10px] font-bold uppercase tracking-widest text-ink/50">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* F2 — Choose Your Service: an editorial index, not a box grid, so it scans like a spec sheet rather than a SaaS feature grid. */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-sand py-12 sm:py-14 lg:py-18">
        <GridTexture className="opacity-60" />
        <Container className="relative">
          <Reveal>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-crest">Service Index</span>
                <h2 className="mt-3 text-balance font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
                  What Do You Need Done?
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-ink/55">
                Five disciplines, one crew. Every service below follows the same prep-first process.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 border-y border-ink/15">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.id];
              return (
                <Reveal key={service.id} delay={100 + index * 70}>
                  <a
                    href={`#${serviceSlugs[service.id]}`}
                    className="group relative flex items-center gap-5 border-b border-ink/10 py-5 transition-colors last:border-b-0 hover:bg-cream-light sm:gap-8 sm:py-6"
                  >
                    <span
                      className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-crest transition-transform duration-300 ease-out group-hover:scale-y-100"
                      aria-hidden
                    />
                    <span className="w-10 shrink-0 font-display text-3xl font-black text-ink/15 transition-colors duration-300 group-hover:text-crest/50 sm:w-14 sm:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="size-6 shrink-0 text-teal-dark transition-transform duration-300 group-hover:scale-110 sm:size-7"
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-lg font-extrabold uppercase leading-tight tracking-wide text-ink transition-colors group-hover:text-crest sm:text-xl">
                        {service.title}
                      </span>
                      <span className="mt-0.5 hidden text-xs leading-relaxed text-ink/55 sm:block">
                        {service.description}
                      </span>
                    </span>
                    <ArrowRight
                      className="size-4 shrink-0 text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-crest sm:size-5"
                      aria-hidden
                    />
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
              <Accordion items={primaryFaqs} />
            </div>
            {moreFaqs.length ? (
              <details className="mt-2 group/more">
                <summary className="cursor-pointer list-none py-3 text-xs font-bold uppercase tracking-wide text-crest">
                  Show More Questions
                </summary>
                <div className="border border-ink/10 bg-cream-light px-5">
                  <Accordion items={moreFaqs} />
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
