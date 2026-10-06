import { Building2, Check, Hammer } from "lucide-react";
import { Fragment, type ReactNode } from "react";
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

// Short framing sentence shown above each service's title, so visitors know
// at a glance who the tier is for before reading the full overview.
const sectionIntros: Record<ServiceId, string> = {
  cabinets: "For kitchens that need a major visual update without a full remodel.",
  interior: "For walls, ceilings, trim, and spaces that need a cleaner, more finished look.",
  exterior: "For homes that need durable prep and finish work built for Seattle weather.",
  commercial: "For offices, retail, and multi-family properties that need work scheduled around business hours.",
  "deck-fence": "For decks and fences that need stain and sealant built for Pacific Northwest weather.",
  carpentry: "For wood surfaces that need repair before paint goes on.",
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
  const reversed = index % 2 === 1;

  return (
    <section id={serviceSlugs[id]} className={`scroll-mt-24 py-14 sm:py-16 lg:py-20 ${bg}`}>
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Reading order: label, heading, value statement, key points, CTA, then visual. */}
        <Reveal
          delay={120}
          className={`flex flex-col items-start gap-4 ${reversed ? "lg:order-1" : "lg:order-2"}`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{detail.eyebrow}</span>
          <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
            {service.title}
          </h3>
          <p className="text-base font-semibold leading-relaxed text-ink/70">{sectionIntros[id]}</p>

          <ul className="mt-1 flex flex-col gap-2.5">
            {detail.whatsIncluded.slice(0, 3).map((item) => (
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

        <Reveal
          className={`aspect-4/5 w-full overflow-hidden rounded-xl shadow-card lg:aspect-4/3 ${
            reversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <ProjectImage src={image.src} alt={image.alt} />
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
        <p className="text-xs font-semibold text-ink/50">{sectionIntros[id]}</p>
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

const compactIcons: Partial<Record<ServiceId, typeof Building2>> = {
  commercial: Building2,
  carpentry: Hammer,
};

function CompactCard({ id, divider }: { id: ServiceId; divider?: boolean }) {
  const service = byId(id);
  const detail = serviceDetails[id];
  const Icon = compactIcons[id];

  return (
    <Reveal
      id={serviceSlugs[id]}
      className={`scroll-mt-24 border-t-2 border-ink/10 pt-5 ${divider ? "sm:border-t-2 sm:border-l sm:border-l-ink/10 sm:pl-10" : ""}`}
    >
      {Icon ? <Icon className="size-6 text-teal-dark" aria-hidden /> : null}
      <span className="mt-2 block text-xs font-bold uppercase tracking-[0.16em] text-crest">{detail.eyebrow}</span>
      <h3 className="mt-1.5 font-display text-lg font-extrabold uppercase leading-[0.98] text-ink sm:text-xl">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{sectionIntros[id]}</p>
      <LinkButton href={`/services/${serviceSlugs[id]}`} variant="ghost" size="md" className="mt-4">
        Full Details
      </LinkButton>
    </Reveal>
  );
}

export function ServiceSections({ afterCabinets }: { afterCabinets?: ReactNode } = {}) {
  return (
    <div className="flex flex-col">
      {featured.map((id, index) => (
        <Fragment key={id}>
          <FeaturedSection id={id} index={index} bg={index % 2 === 0 ? "bg-warm-white" : "bg-cream"} />
          {id === "cabinets" ? afterCabinets : null}
        </Fragment>
      ))}

      <section className="border-t border-ink/10 bg-warm-white py-14 sm:py-16 lg:py-20">
        <Container>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Weather &amp; Seasonal Work</span>
          <div className="mt-6 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10">
            {paired.map((id) => (
              <PairedCard key={id} id={id} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream py-14 sm:py-16 lg:py-20">
        <Container>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Structural Disciplines</span>
          <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {compact.map((id, index) => (
              <CompactCard key={id} id={id} divider={index === 1} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
