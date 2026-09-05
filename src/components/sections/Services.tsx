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

        <div className="mt-15 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id];
            return (
              <Reveal key={service.id} delay={index * 70} className="h-full">
                <div className="group relative flex h-full flex-col items-center border border-ink/10 border-t-4 border-t-teal-dark bg-warm-white pb-7 pt-11 text-center transition-colors duration-200 hover:border-t-crest">
                  <div className="absolute -top-8 flex size-16 items-center justify-center rounded-full border-4 border-warm-white bg-teal-dark text-warm-white shadow-card transition-transform duration-200 group-hover:-translate-y-1">
                    <Icon className="size-8" aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                    {service.title}
                  </h3>
                  <span className="mt-1.5 h-0.5 w-6 bg-crest" aria-hidden />
                  <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-ink/65">{service.description}</p>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(service.id)}
                    className="group/btn mt-auto flex items-center gap-1.5 border-2 border-ink px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors duration-200 hover:bg-ink hover:text-warm-white"
                  >
                    Learn More
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden />
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
