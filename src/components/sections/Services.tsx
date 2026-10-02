import { ArrowRight, Building2, Hammer, Home, Layers, PaintRoller, TreeDeciduous } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceId } from "../../lib/content";
import { serviceSlugs, services } from "../../lib/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const serviceIcons: Record<ServiceId, typeof Home> = {
  interior: Home,
  exterior: PaintRoller,
  cabinets: Layers,
  commercial: Building2,
  "deck-fence": TreeDeciduous,
  carpentry: Hammer,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id];
            return (
              <Reveal key={service.id} delay={index * 70} className="h-full">
                <Link to={`/services/${serviceSlugs[service.id]}`} className="group flex h-full flex-col items-start gap-3 border-t-2 border-ink/15 pt-6 transition-colors hover:border-crest">
                  <Icon className="size-6 text-teal-dark" aria-hidden />
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                    {service.title}
                  </h3>
                  <p className="max-w-[32ch] text-sm leading-relaxed text-ink/65">{service.description}</p>
                  <span className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-bold uppercase tracking-wide text-ink transition-colors duration-200 group-hover:text-crest">
                    Learn More
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
