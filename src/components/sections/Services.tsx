import { Building2, Hammer, Home, Layers, PaintRoller, TreeDeciduous } from "lucide-react";
import type { ServiceId } from "../../lib/content";
import { services } from "../../lib/content";
import { Container } from "../ui/Container";
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
    <section id="services" className="bg-warm-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Painting Services"
          title="Painting Services for Homes & Businesses"
          description="Professional painting, refinishing and repair services designed for homes across Seattle and the Eastside."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.id];
            return (
              <a
                key={service.id}
                href="#quote-cta"
                className="group relative flex flex-col items-center border-2 border-ink/10 bg-off-white pb-7 pt-11 text-center transition-colors hover:border-teal-dark"
              >
                <div className="absolute -top-8 flex size-16 items-center justify-center rounded-full border-4 border-warm-white bg-teal-dark text-warm-white shadow-card">
                  <Icon className="size-7" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-ink/65">{service.description}</p>
                <span className="mt-5 border-2 border-ink px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors group-hover:bg-ink group-hover:text-warm-white">
                  Learn More
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
