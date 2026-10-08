import { Building2, Hammer, Home, Layers, PaintRoller, ShieldCheck, TreeDeciduous } from "lucide-react";
import { ArrowRight } from "lucide-react";
import cabinetsPhoto from "../assets/images/projects/cabinets-sage-green.webp";
import afterWhite from "../assets/images/projects/exterior-after-white.jpg";
import interiorBright from "../assets/images/projects/interior-bright-finished.webp";
import porchPhoto from "../assets/images/projects/porch-yellow-door.webp";
import inProgressPhoto from "../assets/images/projects/exterior-in-progress.webp";
import { FramedCTA } from "../components/sections/FramedCTA";
import { Process } from "../components/sections/Process";
import { PromoBanner } from "../components/sections/PromoBanner";
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

const serviceTileImages: Partial<Record<ServiceId, { src: string; alt: string }>> = {
  interior: { src: interiorBright, alt: "Bright, finished interior room with hardwood floors" },
  cabinets: { src: cabinetsPhoto, alt: "Kitchen cabinets refinished in sage green" },
  exterior: { src: afterWhite, alt: "Home exterior finished in crisp white" },
  "deck-fence": { src: porchPhoto, alt: "Covered porch with stained and painted wood trim" },
  carpentry: { src: inProgressPhoto, alt: "Exterior trim and siding mid-repair with protective covering" },
};

// Interior/Cabinets/Exterior are the primary row (larger tiles); Deck-Fence
// and Carpentry form a secondary row — matches the approved service list,
// with Commercial staying out of visible promotion.
const primaryTileIds: ServiceId[] = ["interior", "cabinets", "exterior"];
const secondaryTileIds: ServiceId[] = ["deck-fence", "carpentry"];

function ServiceTile({ id, tall = false }: { id: ServiceId; tall?: boolean }) {
  const service = services.find((s) => s.id === id);
  const image = serviceTileImages[id];
  const Icon = serviceIcons[id];
  if (!service || !image) return null;

  return (
    <a
      href={`#${serviceSlugs[id]}`}
      className={`group relative block w-full overflow-hidden border border-ink/10 ${tall ? "aspect-4/5 lg:aspect-3/4" : "aspect-16/10"}`}
    >
      {image.src ? (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent transition-colors group-hover:from-ink/95" aria-hidden />
      <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-warm-white/15 text-warm-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-crest">
        <Icon className="size-4" aria-hidden />
      </span>
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <span className="font-display text-2xl font-extrabold uppercase leading-[0.96] text-warm-white sm:text-3xl">
          {service.title}
        </span>
        <ArrowRight className="size-5 shrink-0 text-warm-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-warm-white" aria-hidden />
      </span>
    </a>
  );
}

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

      {/* F2 — Choose Your Service: large image-forward category tiles instead of a horizontal filter strip or box grid. */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-cream py-12 sm:py-14 lg:py-18">
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
                Five disciplines, one crew. Every tile below follows the same prep-first process.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {primaryTileIds.map((id, index) => (
              <Reveal key={id} delay={100 + index * 80}>
                <ServiceTile id={id} tall />
              </Reveal>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {secondaryTileIds.map((id, index) => (
              <Reveal key={id} delay={340 + index * 80}>
                <ServiceTile id={id} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

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
