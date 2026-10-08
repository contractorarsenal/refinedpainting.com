import { processSteps } from "../../lib/content";
import { useInView } from "../../hooks/useInView";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  const { ref: lineRef, inView: lineInView } = useInView<HTMLOListElement>(0.4);

  return (
    <section id="process" className="relative scroll-mt-24 border-t border-warm-white/10 bg-ink py-12 sm:py-16 lg:py-20">
      <Container className="relative">
        <Reveal>
          <SectionHeading
            align="center"
            tone="light"
            eyebrow="Systematic Craft"
            title="The 4-Phase Refined Protocol"
            description="A clear, consistent process from your first estimate to the final walkthrough."
            className="mx-auto"
          />
        </Reveal>

        <ol ref={lineRef} className="relative mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
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
                <span className="font-display text-3xl font-black leading-none text-crest">{step.number}</span>
                <h3 className="mt-1.5 font-display text-base font-extrabold uppercase tracking-wide text-warm-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-warm-white/60">{step.description.split(".")[0]}.</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
