import { ArrowRight, Hammer, Layers, TreeDeciduous } from "lucide-react";
import { Link } from "react-router-dom";
import afterWhite from "../../assets/images/projects/exterior-after-white.jpg";
import interiorBright from "../../assets/images/projects/interior-bright-finished.webp";
import type { ServiceId } from "../../lib/content";
import { serviceSlugs, services } from "../../lib/content";
import { Container } from "../ui/Container";
import { ProjectImage } from "../ui/ProjectImage";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

// Interior and Exterior get the large photo tiles — the two most-requested
// services and the ones with the strongest existing project photography.
const featuredImages: Partial<Record<ServiceId, { src: string; alt: string }>> = {
  interior: { src: interiorBright, alt: "Bright, finished interior room with hardwood floors" },
  exterior: { src: afterWhite, alt: "Home exterior finished in crisp white" },
};

const compactIcons: Partial<Record<ServiceId, typeof Layers>> = {
  cabinets: Layers,
  "deck-fence": TreeDeciduous,
  carpentry: Hammer,
};

export function ServicesPreview() {
  const featured = services.filter((s) => featuredImages[s.id]);
  const compact = services.filter((s) => !featuredImages[s.id]);

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

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {featured.map((service, index) => {
            const image = featuredImages[service.id]!;
            return (
              <Reveal key={service.id} delay={index * 70}>
                <Link to={`/services/${serviceSlugs[service.id]}`} className="group relative block overflow-hidden">
                  <div className="aspect-4/3 w-full overflow-hidden sm:aspect-16/10">
                    <ProjectImage src={image.src} alt={image.alt} className="transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden />
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
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-3 sm:gap-5">
          {compact.map((service, index) => {
            const Icon = compactIcons[service.id]!;
            return (
              <Reveal key={service.id} delay={150 + index * 70}>
                <Link
                  to={`/services/${serviceSlugs[service.id]}`}
                  className="group relative flex items-center gap-4 border border-ink/10 bg-cream p-5 transition-colors hover:border-crest/40"
                >
                  <Icon className="size-6 shrink-0 text-teal-dark transition-transform duration-300 group-hover:scale-110" aria-hidden />
                  <span className="flex-1 font-display text-sm font-extrabold uppercase leading-tight tracking-wide text-ink sm:text-base">
                    {service.title}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-ink/30 transition-all group-hover:translate-x-0.5 group-hover:text-crest" aria-hidden />
                </Link>
              </Reveal>
            );
          })}
        </div>

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
