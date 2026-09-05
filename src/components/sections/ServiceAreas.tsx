import { MapPin } from "lucide-react";
import { serviceAreas } from "../../lib/content";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ServiceAreas() {
  return (
    <section id="service-areas" className="relative overflow-hidden bg-ink py-20 text-warm-white sm:py-24">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path
          d="M60 120 Q 160 60 260 130 T 460 110 Q 560 90 620 160 T 760 200"
          stroke="#4fb0bb"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M40 320 Q 180 260 300 330 T 540 300 Q 660 280 740 360"
          stroke="#4fb0bb"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M100 480 Q 220 420 340 470 T 600 440 Q 700 430 780 500"
          stroke="#4fb0bb"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <Container className="relative flex flex-col items-center gap-10 text-center">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="Local Painters"
          title="Proudly Serving Seattle & the Eastside."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="flex items-center gap-1.5 rounded-full border border-warm-white/15 bg-warm-white/5 px-4 py-2 text-sm font-medium text-warm-white/85"
            >
              <MapPin className="size-3.5 text-teal" aria-hidden />
              {area}
            </span>
          ))}
        </div>

        <LinkButton href="#top" variant="outline-light" icon="arrow">
          View All Service Areas
        </LinkButton>
      </Container>
    </section>
  );
}
