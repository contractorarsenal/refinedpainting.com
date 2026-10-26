import { useState } from "react";
import afterPink from "../../assets/images/projects/exterior-after-pink.webp";
import afterInterior from "../../assets/images/projects/interior-bright-finished.webp";
import afterWhite from "../../assets/images/projects/exterior-after-white.webp";
import beforeTan from "../../assets/images/projects/exterior-before-tan.webp";
import beforeInterior from "../../assets/images/projects/interior-prep-room.webp";
import beforeYellow from "../../assets/images/projects/exterior-before-yellow.webp";
import { projects } from "../../content/projects/projects";
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

// Builds a pair from two photos of the same project in the registry. Only add
// pairs where both photos show the same area, so the slider lines up.
function pairFromProject(
  id: string,
  label: string,
  projectId: string,
  beforeIndex: number,
  afterIndex: number,
): ComparisonPair {
  const project = projects.find((p) => p.id === projectId);
  const before = project?.photos[beforeIndex];
  const after = project?.photos[afterIndex];
  if (!before || !after) throw new Error(`Missing before/after photos for "${projectId}"`);
  return { id, label, before: before.lg, after: after.lg, beforeAlt: before.alt, afterAlt: after.alt };
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
  pairFromProject("entry-refresh", "Entry Refresh", "green-living-room-orange-entry", 4, 3),
  pairFromProject("kitchen-walls", "Kitchen Walls", "blue-walls-orange-ceiling-kitchen", 3, 1),
  pairFromProject("back-deck", "Back Deck", "back-deck-pergola-bench", 2, 1),
  pairFromProject("rooftop-corner", "Rooftop Corner", "rooftop-deck-navy-siding", 3, 2),
];

export function BeforeAfter() {
  const [activeId, setActiveId] = useState(pairs[0].id);
  const [value, setValue] = useState(50);
  const { ref: sliderRef, inView } = useInView<HTMLDivElement>(0.6);
  const active = pairs.find((p) => p.id === activeId) ?? pairs[0];

  return (
    <section className="border-y border-ink/10 bg-warm-white py-10 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Real Results"
          title="See the Difference"
          description="Drag the slider to compare real Refined Painting projects, before and after."
        />

        <div className="-mx-5 mt-8 flex gap-6 overflow-x-auto border-b border-ink/10 px-5 pb-0 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:border-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          {pairs.map((pair) => (
            <button
              key={pair.id}
              type="button"
              onClick={() => {
                setActiveId(pair.id);
                setValue(50);
              }}
              aria-pressed={activeId === pair.id}
              className={`inline-flex min-h-11 shrink-0 items-center whitespace-nowrap border-b-2 px-1 pb-1 text-xs font-bold uppercase tracking-wide transition-colors ${
                activeId === pair.id
                  ? "border-teal-dark text-ink"
                  : "border-transparent text-ink/50 hover:text-ink/80"
              }`}
            >
              {pair.label}
            </button>
          ))}
        </div>

        <div
          ref={sliderRef}
          key={active.id}
          className="relative mx-auto mt-8 aspect-16/10 w-full max-w-3xl overflow-hidden rounded-sm border border-ink/15 shadow-lift sm:mt-15 sm:aspect-video"
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
            <img src={active.after} alt={active.afterAlt} className="h-full w-full object-cover" loading="eager" decoding="async" />
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
            <img src={active.before} alt={active.beforeAlt} className="h-full w-full object-cover" loading="eager" decoding="async" />
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

          <span className="pointer-events-none absolute left-3 top-3 bg-ink px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-warm-white">
            Before
          </span>
          <span className="pointer-events-none absolute right-3 top-3 bg-teal-dark px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-warm-white">
            After
          </span>
        </div>
      </Container>
    </section>
  );
}
