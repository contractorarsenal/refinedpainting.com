import { Check } from "lucide-react";
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

const serviceImages: Record<ServiceId, { src: string; alt: string }> = {
  interior: { src: interiorBright, alt: "Bright, finished interior room with hardwood floors" },
  exterior: { src: afterWhite, alt: "Home exterior finished in crisp white" },
  cabinets: { src: cabinetsPhoto, alt: "Kitchen cabinets refinished in sage green" },
  commercial: { src: navyPhoto, alt: "Professionally finished exterior in a deep navy tone" },
  "deck-fence": { src: porchPhoto, alt: "Covered porch with stained and painted wood trim" },
  carpentry: { src: inProgressPhoto, alt: "Exterior trim and siding mid-repair with protective covering" },
};

export function ServiceSections() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="flex flex-col">
      {services.map((service, index) => {
        const detail = serviceDetails[service.id];
        const image = serviceImages[service.id];
        const reversed = index % 2 === 1;
        return (
          <section
            key={service.id}
            id={serviceSlugs[service.id]}
            className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${index % 2 === 0 ? "bg-warm-white" : "bg-cream"}`}
          >
            <Container
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-4/5 w-full overflow-hidden rounded shadow-card lg:aspect-4/3">
                <ProjectImage src={image.src} alt={image.alt} />
              </div>

              <div className="flex flex-col items-start gap-5">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">
                  {detail.eyebrow}
                </span>
                <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-ink/70">{detail.overview}</p>
                <p className="text-sm leading-relaxed text-ink/65">{detail.approach}</p>

                <ul className="mt-1 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {detail.whatsIncluded.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-semibold text-ink/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-crest" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-2 flex flex-wrap gap-3">
                  <LinkButton href={`/services/${serviceSlugs[service.id]}`} variant="ghost">
                    Full Details
                  </LinkButton>
                  <Button onClick={() => openQuoteModal(service.id)} variant="primary">
                    Get a Free Estimate
                  </Button>
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
