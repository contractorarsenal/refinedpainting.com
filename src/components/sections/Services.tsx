import { ArrowRight, Building2, Hammer, Home, Layers, PaintRoller, TreeDeciduous } from "lucide-react";
import type { ServiceId } from "../../lib/content";
import { services } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
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
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="services" className="bg-cream py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Painting Services"
          title="Painting Services for Homes & Businesses"
          description="Professional painting, refinishing and repair services for homes and businesses across Seattle and the Eastside."
        />

        <div className="mt-15 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id];
            return (
              <Reveal key={service.id} delay={index * 70} className="h-full">
                <div className="group flex h-full flex-col items-start gap-3 border-t border-ink/15 pt-6">
                  <Icon className="size-6 text-teal-dark" aria-hidden />
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                    {service.title}
                  </h3>
                  <p className="max-w-[32ch] text-sm leading-relaxed text-ink/65">{service.description}</p>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(service.id)}
                    className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-bold uppercase tracking-wide text-ink transition-colors duration-200 group-hover:text-teal-dark"
                  >
                    Learn More
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
