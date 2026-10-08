import { processSteps } from "../../lib/content";
import { useInView } from "../../hooks/useInView";
import { Container } from "../ui/Container";
import { LineTexture } from "../ui/Texture";
import { Reveal } from "../ui/Reveal";

export function Process() {
  const { ref: lineRef, inView: lineInView } = useInView<HTMLOListElement>(0.4);

  return (
    <section id="process" className="relative scroll-mt-24 overflow-hidden border-t border-warm-white/10 bg-ink py-12 sm:py-16 lg:py-20">
      <LineTexture tone="warm-white" className="opacity-60" />
      <Container className="relative">
        <Reveal className="flex flex-col items-start gap-4 border-b border-warm-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-crest">Systematic Craft</span>
            <h2 className="mt-2 text-balance font-display text-3xl font-extrabold uppercase leading-[0.96] text-warm-white sm:text-4xl">
              The 4-Phase Refined Protocol
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-warm-white/55">
            A clear, consistent process from your first estimate to the final walkthrough.
          </p>
        </Reveal>

        <ol ref={lineRef} className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connecting line draws left-to-right as the row enters, so 01–04 read as one progression instead of four isolated blocks. */}
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 hidden h-px origin-left bg-warm-white/20 transition-transform duration-700 ease-out lg:block ${
              lineInView ? "scale-x-100" : "scale-x-0"
            }`}
            aria-hidden
          />

          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 120}>
              <li className="relative flex flex-col items-start gap-2 border-t-2 border-crest pt-5">
                <span
                  className="absolute -top-1 left-0 size-2 -translate-y-1/2 rounded-full bg-crest lg:block"
                  aria-hidden
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-crest">
                  Phase {step.number}
                </span>
                <h3 className="mt-0.5 font-display text-base font-extrabold uppercase tracking-wide text-warm-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-warm-white/60">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
