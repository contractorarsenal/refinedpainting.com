import { ArrowRight, Building2, Hammer, Home, Layers, PaintRoller, TreeDeciduous } from "lucide-react";
import type { ServiceId } from "../../lib/content";
import { services } from "../../lib/content";
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

export function Services() {
  return (
    <section id="services" className="bg-warm-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Painting Services"
          title="Painting Services for Homes & Businesses"
          description="Professional painting, refinishing and repair services designed for homes across Seattle and the Eastside."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id];
            return (
              <Reveal key={service.id} delay={index * 70}>
                <a
                  href="#quote-cta"
                  className="group relative flex flex-col items-center overflow-hidden border-2 border-ink/10 bg-off-white pb-7 pt-11 text-center transition-colors duration-200 hover:border-ink/25 hover:bg-warm-white"
                >
                  <span className="absolute inset-x-0 top-0 h-1.5 bg-teal-dark transition-colors duration-200 group-hover:bg-crest" aria-hidden />

                  <div className="absolute -top-8 flex size-16 items-center justify-center rounded-full border-4 border-warm-white bg-teal-dark text-warm-white shadow-card transition-transform duration-200 group-hover:-translate-y-1.5">
                    <Icon className="size-8" aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-ink/65">{service.description}</p>
                  <span className="mt-5 flex items-center gap-1.5 border-2 border-ink px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-warm-white">
                    Learn More
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
