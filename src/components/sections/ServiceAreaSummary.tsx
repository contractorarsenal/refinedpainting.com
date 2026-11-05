import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceAreas } from "../../lib/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

/** Homepage summary of every verified service area in src/lib/content.ts. The same list drives ServiceAreaStrip on /about and /contact. */
export function ServiceAreaSummary() {
  return (
    <section className="bg-cream py-10 sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center text-center">
        <SectionHeading
          align="center"
          eyebrow="Local Painters"
          title="Serving Seattle & the Eastside"
          className="mx-auto"
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="flex items-center gap-1.5 border border-ink/15 bg-cream-light px-3 py-1.5 text-xs font-bold text-ink/75"
            >
              <MapPin className="size-3.5 text-crest" aria-hidden />
              {area}
            </span>
          ))}
        </div>

        <Link
          to="/about#service-areas"
          className="mt-8 inline-flex items-center gap-1.5 border-b-2 border-crest pb-1 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-crest"
        >
          View All Service Areas
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Container>
    </section>
  );
}
