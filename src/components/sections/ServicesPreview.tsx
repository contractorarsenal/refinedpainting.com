import { ArrowRight, Building2, Hammer, Home, Layers, PaintRoller, TreeDeciduous } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceId } from "../../lib/content";
import { serviceSlugs, services } from "../../lib/content";
import { Container } from "../ui/Container";
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

export function ServicesPreview() {
  return (
    <section id="services-preview" className="bg-cream-light py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Choose Your Project"
          title="What Do You Need Done?"
          description="Six services, one standard of care: clear communication and careful prep on every job."
          className="mx-auto"
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id];
            return (
              <Reveal key={service.id} delay={index * 60}>
                <Link
                  to={`/services/${serviceSlugs[service.id]}`}
                  className="group relative flex h-full flex-col items-start gap-3 border border-ink/10 bg-cream p-5 pt-6 transition-colors hover:border-crest/40"
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-ink/15" aria-hidden />
                  <span
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-crest transition-transform duration-300 ease-out group-hover:scale-x-100"
                    aria-hidden
                  />
                  <Icon className="size-6 text-teal-dark" aria-hidden />
                  <span className="font-display text-sm font-extrabold uppercase leading-tight tracking-wide text-ink sm:text-base">
                    {service.title}
                  </span>
                  <span className="mt-auto flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-ink/40 transition-colors group-hover:text-crest">
                    View
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
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
