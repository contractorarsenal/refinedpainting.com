import { Check } from "lucide-react";
import type { ReactNode } from "react";
import cabinetsPhoto from "../../assets/images/projects/cabinets-sage-green.webp";
import navyPhoto from "../../assets/images/projects/exterior-finished-navy.webp";
import inProgressPhoto from "../../assets/images/projects/exterior-in-progress.webp";
import afterWhite from "../../assets/images/projects/exterior-after-white.jpg";
import interiorBright from "../../assets/images/projects/interior-bright-finished.webp";
import porchPhoto from "../../assets/images/projects/porch-yellow-door.webp";
import type { ServiceId } from "../../lib/content";
import { serviceDetails, serviceSlugs, services } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { ProjectImage } from "../ui/ProjectImage";
import { Reveal } from "../ui/Reveal";

const serviceImages: Record<ServiceId, { src: string; alt: string }> = {
  cabinets: { src: cabinetsPhoto, alt: "Kitchen cabinets refinished in sage green" },
  interior: { src: interiorBright, alt: "Bright, finished interior room with hardwood floors" },
  exterior: { src: afterWhite, alt: "Home exterior finished in crisp white" },
  "deck-fence": { src: porchPhoto, alt: "Covered porch with stained and painted wood trim" },
  commercial: { src: navyPhoto, alt: "Professionally finished exterior in a deep navy tone" },
  carpentry: { src: inProgressPhoto, alt: "Exterior trim and siding mid-repair with protective covering" },
};

// Short, honest quick-facts pulled directly from each service's own approved
// FAQ answers in content.ts — not fabricated technical specs.
const quickFacts: Partial<Record<ServiceId, { label: string; value: string }[]>> = {
  cabinets: [
    { label: "Timeline", value: "Several Days to a Week" },
    { label: "Finish", value: "Sprayed, Factory-Smooth" },
  ],
  interior: [
    { label: "Timeline", value: "3 to 7 Days" },
    { label: "Materials", value: "Benjamin Moore & Sherwin-Williams" },
  ],
};

const byId = (id: ServiceId) => services.find((s) => s.id === id)!;

// Featured: Cabinet Refinishing and Interior Painting, each a large alternating image+content section.
const featured: ServiceId[] = ["cabinets", "interior"];
// Paired: Exterior and Deck & Fence, side by side, still substantial.
const paired: ServiceId[] = ["exterior", "deck-fence"];
// Compact: Commercial and Carpentry, condensed side by side, text-only.
const compact: ServiceId[] = ["commercial", "carpentry"];

function FeaturedSection({ id, index, bg }: { id: ServiceId; index: number; bg: string }) {
  const service = byId(id);
  const detail = serviceDetails[id];
  const image = serviceImages[id];
  const facts = quickFacts[id];
  const reversed = index % 2 === 1;

  return (
    <section id={serviceSlugs[id]} className={`scroll-mt-24 py-14 sm:py-16 lg:py-20 ${bg}`}>
      <Container
        className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal className="aspect-4/5 w-full overflow-hidden rounded-xl shadow-card lg:aspect-4/3">
          <ProjectImage src={image.src} alt={image.alt} />
        </Reveal>

        <Reveal delay={120} className="flex flex-col items-start gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{detail.eyebrow}</span>
          <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
            {service.title}
          </h3>
          <p className="text-base leading-relaxed text-ink/70">{detail.overview}</p>

          {facts ? (
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 border-y border-ink/10 py-3">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-ink/40">
                    {fact.label}
                  </span>
                  <span className="text-sm font-bold text-ink">{fact.value}</span>
                </div>
              ))}
            </div>
          ) : null}

          <ul className="mt-1 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {detail.whatsIncluded.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm font-semibold text-ink/80">
                <Check className="mt-0.5 size-4 shrink-0 text-crest" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap gap-3">
            <LinkButton href={`/services/${serviceSlugs[id]}`} variant="ghost">
              Full Details
            </LinkButton>
            <QuoteButton id={id} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function QuoteButton({ id }: { id: ServiceId }) {
  const { openQuoteModal } = useQuoteModal();
  return (
    <Button onClick={() => openQuoteModal(id)} variant="primary">
      Get a Free Estimate
    </Button>
  );
}

function PairedCard({ id }: { id: ServiceId }) {
  const service = byId(id);
  const detail = serviceDetails[id];
  const image = serviceImages[id];

  return (
    <Reveal id={serviceSlugs[id]} className="scroll-mt-24 flex flex-col gap-4">
      <div className="aspect-4/3 w-full overflow-hidden rounded-xl shadow-card">
        <ProjectImage src={image.src} alt={image.alt} />
      </div>
      <div className="flex flex-col items-start gap-2.5">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{detail.eyebrow}</span>
        <h3 className="font-display text-2xl font-extrabold uppercase leading-[0.98] text-ink">{service.title}</h3>
        <p className="text-sm leading-relaxed text-ink/65">{detail.overview}</p>
        <ul className="flex flex-col gap-1.5">
          {detail.whatsIncluded.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm font-semibold text-ink/80">
              <Check className="mt-0.5 size-4 shrink-0 text-crest" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <LinkButton href={`/services/${serviceSlugs[id]}`} variant="ghost" className="mt-1">
          Full Details
        </LinkButton>
      </div>
    </Reveal>
  );
}

function CompactCard({ id }: { id: ServiceId }) {
  const service = byId(id);
  const detail = serviceDetails[id];

  return (
    <Reveal id={serviceSlugs[id]} className="scroll-mt-24 border-t-2 border-ink/10 pt-5">
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{detail.eyebrow}</span>
      <h3 className="mt-1.5 font-display text-lg font-extrabold uppercase leading-[0.98] text-ink sm:text-xl">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{detail.overview}</p>
      <LinkButton href={`/services/${serviceSlugs[id]}`} variant="ghost" size="md" className="mt-3">
        Full Details
      </LinkButton>
    </Reveal>
  );
}

export function ServiceSections({ afterFeatured }: { afterFeatured?: ReactNode } = {}) {
  return (
    <div className="flex flex-col">
      {featured.map((id, index) => (
        <FeaturedSection key={id} id={id} index={index} bg={index % 2 === 0 ? "bg-warm-white" : "bg-cream"} />
      ))}

      {afterFeatured}

      <section className="border-t border-ink/10 bg-warm-white py-14 sm:py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10">
          {paired.map((id) => (
            <PairedCard key={id} id={id} />
          ))}
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream py-14 sm:py-16 lg:py-20">
        <Container>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Structural Disciplines</span>
          <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {compact.map((id) => (
              <CompactCard key={id} id={id} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
