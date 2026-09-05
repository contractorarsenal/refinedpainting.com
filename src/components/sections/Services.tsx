import { ArrowRight } from "lucide-react";
import { services } from "../../lib/content";
import { Container } from "../ui/Container";
import { PlaceholderPhoto } from "../ui/PlaceholderPhoto";
import { SectionHeading } from "../ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="bg-off-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Painting Services" title="One Team. Every Detail Covered." />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.id}
              href="#quote-cta"
              className="group flex flex-col overflow-hidden rounded-3xl bg-warm-white shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="aspect-4/3 w-full overflow-hidden">
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                  <PlaceholderPhoto label={service.title} tone={service.id === "commercial" ? "ink" : service.id === "deck-fence" || service.id === "carpentry" ? "gold" : service.id === "exterior" ? "teal" : "stone"} />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-6">
                <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-ink/65">{service.description}</p>
                <span className="mt-2 flex items-center gap-1.5 text-sm font-bold text-teal-dark">
                  Explore Service
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
