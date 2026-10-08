import { MapPin, ShieldCheck } from "lucide-react";
import { serviceAreas } from "../../lib/content";
import { Container } from "../ui/Container";

export function ServiceAreaStrip() {
  return (
    <section id="service-areas" className="relative scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div>
          <span className="flex size-8 items-center justify-center bg-crest text-warm-white" aria-hidden>
            <MapPin className="size-4" />
          </span>
          <span className="mt-4 block text-[11px] font-bold uppercase tracking-[0.16em] text-crest">
            Regional Coverage
          </span>
          <h2 className="mt-2 text-balance font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
            Proudly Serving King &amp; Snohomish Counties
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/60 sm:text-base">
            Refined Painting works with homeowners and businesses throughout the greater Seattle area.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="border border-ink/15 bg-cream-light px-3 py-1.5 text-xs font-bold text-ink/75 transition-colors hover:border-crest hover:text-crest"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-ink/10 bg-cream-light p-6 sm:p-7 lg:self-start">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-crest">Licensed &amp; Verified</span>
          <ul className="mt-4 flex flex-col gap-4 border-t border-ink/10 pt-4">
            <li className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-teal-dark" aria-hidden />
              <div>
                <span className="block text-sm font-bold text-ink">EPA Lead-Safe Certified</span>
                <span className="text-xs text-ink/50">Safe practices for pre-1978 homes</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-teal-dark" aria-hidden />
              <div>
                <span className="block text-sm font-bold text-ink">Licensed &amp; Insured</span>
                <span className="text-xs text-ink/50">Fully licensed painting contractor</span>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
