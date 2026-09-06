import { useState } from "react";
import afterPink from "../../assets/images/projects/exterior-after-pink.jpg";
import afterInterior from "../../assets/images/projects/interior-bright-finished.webp";
import afterWhite from "../../assets/images/projects/exterior-after-white.jpg";
import beforeTan from "../../assets/images/projects/exterior-before-tan.jpg";
import beforeInterior from "../../assets/images/projects/interior-prep-room.webp";
import beforeYellow from "../../assets/images/projects/exterior-before-yellow.jpg";
import { useInView } from "../../hooks/useInView";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

interface ComparisonPair {
  id: string;
  label: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

const pairs: ComparisonPair[] = [
  {
    id: "exterior-refresh",
    label: "Exterior Refresh",
    before: beforeYellow,
    after: afterWhite,
    beforeAlt: "Home exterior painted mustard yellow before the repaint",
    afterAlt: "Same home exterior repainted crisp white",
  },
  {
    id: "full-repaint",
    label: "Full Repaint",
    before: beforeTan,
    after: afterPink,
    beforeAlt: "Home exterior with peeling, weathered paint before the project",
    afterAlt: "Same home exterior finished in a fresh blush tone",
  },
  {
    id: "interior-room",
    label: "Interior Room",
    before: beforeInterior,
    after: afterInterior,
    beforeAlt: "Interior room mid-prep with protective floor covering and ladder",
    afterAlt: "Same interior room finished, bright and ready for walkthrough",
  },
];

export function BeforeAfter() {
  const [activeId, setActiveId] = useState(pairs[0].id);
  const [value, setValue] = useState(50);
  const { ref: sliderRef, inView } = useInView<HTMLDivElement>(0.6);
  const active = pairs.find((p) => p.id === activeId) ?? pairs[0];

  return (
    <section className="bg-warm-white pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-30 lg:pt-25">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Real Results"
          title="See the Difference"
          description="Drag the slider to compare real Refined Painting projects, before and after."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {pairs.map((pair) => (
            <button
              key={pair.id}
              type="button"
              onClick={() => {
                setActiveId(pair.id);
                setValue(50);
              }}
              aria-pressed={activeId === pair.id}
              className={`border-2 px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                activeId === pair.id
                  ? "border-teal-dark bg-teal-dark text-warm-white"
                  : "border-ink/15 bg-warm-white text-ink/70 hover:border-ink/30"
              }`}
            >
              {pair.label}
            </button>
          ))}
        </div>

        <div
          ref={sliderRef}
          key={active.id}
          className="relative mx-auto mt-14 aspect-16/10 w-full max-w-3xl overflow-hidden rounded shadow-lift sm:mt-15 sm:aspect-video"
        >
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
            <img src={active.after} alt={active.afterAlt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
            <img src={active.before} alt={active.beforeAlt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
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
