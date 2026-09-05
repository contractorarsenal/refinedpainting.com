import { ArrowRight, MapPin } from "lucide-react";
import { serviceAreas } from "../../lib/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ServiceAreaStrip() {
  return (
    <section id="service-areas" className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-28">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <g stroke="#c6ccd0" strokeWidth="1.5" fill="none">
          <path d="M0 60 H800" />
          <path d="M0 140 H800" />
          <path d="M0 220 H800" />
          <path d="M0 300 H800" />
          <path d="M100 0 V400" />
          <path d="M260 0 V400" />
          <path d="M420 0 V400" />
          <path d="M580 0 V400" />
          <path d="M700 0 V400" />
        </g>
      </svg>

      <Container className="relative">
        <SectionHeading align="center" eyebrow="Local Painters" title="Find Refined Painting Near You" />
      </Container>

      <a
        href="#service-areas-list"
        className="group relative mt-11 flex w-full items-center justify-center gap-3 bg-teal-dark px-6 py-6 text-center font-display text-xl font-extrabold uppercase tracking-wide text-warm-white transition-colors hover:bg-ink sm:text-2xl"
      >
        View All Service Areas
        <ArrowRight className="size-6 transition-transform duration-150 group-hover:translate-x-1" aria-hidden />
      </a>

      <Container id="service-areas-list" className="relative mt-10 scroll-mt-24 pb-4">
        <div className="flex flex-wrap justify-center gap-2.5">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="flex items-center gap-1.5 border-2 border-ink/12 bg-warm-white px-3.5 py-2 text-sm font-bold text-ink/80"
            >
              <MapPin className="size-3.5 text-teal-dark" aria-hidden />
              {area}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
