import { Link } from "react-router-dom";
import { processSteps } from "../../lib/content";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";
import { LineTexture } from "../ui/Texture";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { useInView } from "../../hooks/useInView";

// The bird's visible artwork is 72px tall (1.5x the 47px section heading) and
// about 57px wide (72px x 787/1000 from the trimmed mascot file, whose artwork
// fills the whole image, so the box is the visible size). It starts at the left
// end of the bar and stops with its right edge on the bar's right end, so the
// walk finishes at the track's real endpoint rather than at a percentage of the row.
const BIRD_WIDTH = "3.54rem";

/** Short, homepage-only version of the full Process section on About/Services — one sentence per step instead of the full copy. */
export function ProcessCondensed() {
  const { ref: rowRef, inView: rowInView } = useInView<HTMLDivElement>(0.4);

  return (
    <section className="relative overflow-hidden bg-ink py-10 text-warm-white sm:py-20 lg:py-24">
      <LineTexture tone="warm-white" className="opacity-50" />
      <Container className="relative">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="How It Works"
          title="A Clear Process, Start to Finish"
          className="mx-auto"
        />

        <div ref={rowRef} className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {/* Connecting line the bird travels along — desktop only, mirrors the Services page's process line. */}
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 hidden h-px origin-left bg-warm-white/20 transition-transform duration-700 ease-out lg:block ${
              rowInView ? "scale-x-100" : "scale-x-0"
            }`}
            aria-hidden
          />
          {/* Mascot walk: one-time, reduced-motion-safe (global CSS collapses the
              transition to ~instant under prefers-reduced-motion). ease-in-out
              over 5s gives a slow start, a quicker middle, and a slow settle at
              the end of the bar. The bird stands on the bar (its bottom edge
              sits on the line), so it never overlaps the step text below it.
              Below lg the steps stack in one column with no horizontal bar, so
              the bird is not shown there. */}
          <div
            className="pointer-events-none absolute bottom-full hidden transition-[left] duration-5000 ease-in-out lg:block"
            style={{ left: rowInView ? `calc(100% - ${BIRD_WIDTH})` : "0px" }}
            aria-hidden
          >
            <Mascot trimmed variant="full" className="block h-[4.5rem] w-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]" />
          </div>

          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className="border-t-2 border-crest pt-4">
                <span className="font-display text-4xl font-black text-crest">{step.number}</span>
                <h3 className="mt-2 font-display text-base font-extrabold uppercase tracking-wide text-warm-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-warm-white/80">
                  {step.description.split(".")[0]}.
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services#process"
            className="inline-flex items-center gap-1.5 border-b-2 border-crest pb-1 text-sm font-bold uppercase tracking-wide text-warm-white transition-colors hover:text-crest"
          >
            See Our Process
          </Link>
        </div>
      </Container>
    </section>
  );
}
