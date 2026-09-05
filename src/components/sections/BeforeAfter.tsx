import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { Container } from "../ui/Container";
import { PlaceholderPhoto } from "../ui/PlaceholderPhoto";
import { SectionHeading } from "../ui/SectionHeading";

export function BeforeAfter() {
  const [value, setValue] = useState(50);
  const { ref: sliderRef, inView } = useInView<HTMLDivElement>(0.6);

  return (
    <section className="bg-warm-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Real Results"
          title="See the Difference"
          description="Drag the slider to compare — real project photos replace this sample as they become available."
        />

        <div ref={sliderRef} className="relative mx-auto mt-10 aspect-16/10 w-full max-w-3xl overflow-hidden rounded shadow-lift sm:aspect-video">
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Drag to compare before and after"
            className="peer absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
          />

          <div className="absolute inset-0">
            <PlaceholderPhoto label="After — finished exterior" tone="teal" />
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
            <PlaceholderPhoto label="Before — unpainted exterior" tone="slate" />
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 w-1 bg-warm-white shadow-lift"
            style={{ left: `${value}%`, transform: "translateX(-50%)" }}
          />
          <div
            className={`pointer-events-none absolute top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-warm-white text-ink shadow-lift peer-focus-visible:ring-4 peer-focus-visible:ring-teal-dark/50 ${
              inView ? "animate-pulse-once" : ""
            }`}
            style={{ left: `${value}%`, transform: "translate(-50%, -50%)" }}
            aria-hidden
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 3 L1 8 L5 13 M11 3 L15 8 L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <span className="pointer-events-none absolute left-3 top-3 bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-warm-white">
            Before
          </span>
          <span className="pointer-events-none absolute right-3 top-3 bg-teal-dark px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-warm-white">
            After
          </span>
        </div>
      </Container>
    </section>
  );
}
