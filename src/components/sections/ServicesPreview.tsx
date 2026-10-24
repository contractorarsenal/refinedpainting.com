import { ArrowRight, Hammer, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import cabinetsPhoto from "../../assets/images/projects/cabinets-sage-green.webp";
import afterWhite from "../../assets/images/projects/exterior-after-white.webp";
import interiorBright from "../../assets/images/projects/interior-bright-finished.webp";
import { coverPhoto } from "../../content/projects/projects";
import type { ServiceId } from "../../lib/content";
import { serviceSlugs, services } from "../../lib/content";
import { Container } from "../ui/Container";
import { ProjectImage } from "../ui/ProjectImage";
import { ServiceIconPanel } from "../ui/ServiceIconPanel";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

// One card treatment for every visible service: landscape photo, restrained
// radius, title over a bottom gradient. Commercial stays out of promotion here
// (same as the services grid on /services) because no commercial project
// photography exists yet.
const deckCover = coverPhoto("back-deck-pergola-bench");

const serviceImages: Partial<Record<ServiceId, { src: string; alt: string }>> = {
  interior: { src: interiorBright, alt: "Bright, finished interior room with hardwood floors" },
  exterior: { src: afterWhite, alt: "Home exterior finished in crisp white" },
  cabinets: { src: cabinetsPhoto, alt: "Kitchen cabinets refinished in sage green" },
  "deck-fence": { src: deckCover.sm, alt: deckCover.alt },
};

// No carpentry photo is approved yet. Carpentry uses a branded icon panel instead of
// an unrelated exterior photo, until a real carpentry project photo is supplied.
const serviceIcons: Partial<Record<ServiceId, LucideIcon>> = { carpentry: Hammer };

export function ServicesPreview() {
  const visibleServices = services.filter((s) => s.id !== "commercial");

  return (
    <section id="services-preview" className="bg-cream-light py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Choose Your Project"
          title="What Do You Need Done?"
          description="Five services, one standard of care: clear communication and careful prep on every job."
          className="mx-auto"
        />

        <ul className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">
          {visibleServices.map((service, index) => {
            const image = serviceImages[service.id] ?? { src: "", alt: "" };
            return (
              <Reveal key={service.id} as="li" delay={index * 60} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.85rem)]">
                <Link
                  to={`/services/${serviceSlugs[service.id]}`}
                  className="group relative block overflow-hidden rounded-lg border border-ink/10 bg-ink"
                >
                  <div className="aspect-4/3 w-full overflow-hidden">
                    {serviceIcons[service.id] ? (
                      <ServiceIconPanel icon={serviceIcons[service.id]!} label={service.title} className="transition-transform duration-700 ease-out group-hover:scale-105" />
                    ) : (
                      <ProjectImage src={image.src} alt={image.alt} className="transition-transform duration-700 ease-out group-hover:scale-105" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" aria-hidden />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                    <span className="font-display text-xl font-extrabold uppercase leading-tight tracking-wide text-warm-white sm:text-2xl">
                      {service.title}
                    </span>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-warm-white/15 text-warm-white transition-colors group-hover:bg-crest">
                      <ArrowRight className="size-4" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 border-b-2 border-crest pb-1 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-crest"
          >
            Not Sure Which One You Need? See All Services
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
