import { ArrowRight, Building2, Hammer, Home, Layers, PaintRoller, TreeDeciduous } from "lucide-react";
import cabinetsPhoto from "../../assets/images/projects/cabinets-sage-green.webp";
import cottagePhoto from "../../assets/images/projects/exterior-cottage.webp";
import inProgressPhoto from "../../assets/images/projects/exterior-in-progress.webp";
import kitchenPhoto from "../../assets/images/projects/kitchen-blue-accent.webp";
import interiorPhoto from "../../assets/images/projects/interior-bright-finished.webp";
import porchPhoto from "../../assets/images/projects/porch-yellow-door.webp";
import type { ServiceId } from "../../lib/content";
import { services } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Container } from "../ui/Container";
import { ProjectImage } from "../ui/ProjectImage";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const serviceIcons: Record<ServiceId, typeof Home> = {
  interior: Home,
  exterior: PaintRoller,
  cabinets: Layers,
  commercial: Building2,
  "deck-fence": TreeDeciduous,
  carpentry: Hammer,
};

const servicePhotos: Record<ServiceId, { src: string; alt: string }> = {
  interior: { src: interiorPhoto, alt: "Freshly painted interior room with bright natural light" },
  exterior: { src: porchPhoto, alt: "Painted covered porch with a bold yellow front door" },
  cabinets: { src: cabinetsPhoto, alt: "Kitchen cabinets refinished in a sage green" },
  commercial: { src: kitchenPhoto, alt: "Professionally painted interior with a blue accent wall" },
  "deck-fence": { src: cottagePhoto, alt: "Painted cottage exterior with porch and railings" },
  carpentry: { src: inProgressPhoto, alt: "Exterior siding prepped and in progress during a repaint" },
};

export function Services() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="services" className="bg-cream py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Painting Services"
          title="Painting Services for Homes & Businesses"
          description="Professional painting, refinishing and repair services for homes and businesses across Seattle and the Eastside."
        />

        <div className="mt-15 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-9 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id];
            const photo = servicePhotos[service.id];
            return (
              <Reveal key={service.id} delay={index * 70} className="h-full">
                <div className="group flex h-full flex-col border border-ink/10 bg-warm-white transition-colors duration-200 hover:border-ink/25">
                  <div className="relative aspect-4/3 w-full overflow-hidden border-b-4 border-teal-dark transition-colors duration-200 group-hover:border-crest">
                    <ProjectImage
                      src={photo.src}
                      alt={photo.alt}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute -bottom-7 left-6 flex size-14 items-center justify-center rounded-full border-4 border-warm-white bg-teal-dark text-warm-white shadow-card transition-transform duration-200 group-hover:-translate-y-1 group-hover:bg-crest">
                      <Icon className="size-6" aria-hidden />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start px-6 pb-6 pt-11">
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                      {service.title}
                    </h3>
                    <span className="mt-1.5 h-0.5 w-6 bg-crest" aria-hidden />
                    <p className="mt-3 text-sm leading-relaxed text-ink/65">{service.description}</p>
                    <button
                      type="button"
                      onClick={() => openQuoteModal(service.id)}
                      className="group/btn mt-auto flex items-center gap-1.5 border-2 border-ink px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors duration-200 hover:bg-ink hover:text-warm-white"
                    >
                      Learn More
                      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
