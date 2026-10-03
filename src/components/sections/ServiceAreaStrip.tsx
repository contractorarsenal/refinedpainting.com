import { MapPin } from "lucide-react";
import { serviceAreas } from "../../lib/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ServiceAreaStrip() {
  return (
    <section id="service-areas" className="relative scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Local Painters"
          title="Proudly Serving King & Snohomish Counties"
          description="Refined Painting works with homeowners and businesses throughout the greater Seattle area."
          className="mx-auto"
        />

        <div className="mx-auto mt-12 max-w-md columns-2 gap-x-10 sm:max-w-xl sm:columns-3">
          {serviceAreas.map((area) => (
            <div key={area} className="group mb-4 flex items-center gap-2 text-sm font-bold text-ink/80">
              <MapPin className="size-3.5 shrink-0 text-crest" aria-hidden />
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-crest group-hover:text-crest">
                {area}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
