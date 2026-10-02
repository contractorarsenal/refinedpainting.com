import { processSteps } from "../../lib/content";
import { useInView } from "../../hooks/useInView";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  const { ref: lineRef, inView: lineInView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="process" className="relative scroll-mt-24 bg-ink py-16 sm:py-20 lg:py-28">
      <Container className="relative">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="How It Works"
          title="What to Expect"
          description="A clear, consistent process from your first estimate to the final walkthrough."
          className="mx-auto"
        />

        <div ref={lineRef} className="relative mt-16 lg:mt-20">
          <span
            className={`absolute left-6 top-0 hidden h-full w-px bg-warm-white/15 lg:block`}
            aria-hidden
          />
          <ol className="relative flex flex-col gap-10 lg:gap-14">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 100}>
                <li className="relative grid grid-cols-[auto_1fr] gap-5 lg:grid-cols-[3.5rem_1px_1fr] lg:items-start lg:gap-10">
                  <span className="font-display text-5xl font-black leading-none text-crest sm:text-6xl lg:text-7xl">
                    {step.number}
                  </span>
                  <span
                    className={`hidden h-full w-px origin-top bg-crest transition-transform duration-700 ease-out lg:block ${
                      lineInView ? "scale-y-100" : "scale-y-0"
                    }`}
                    aria-hidden
                  />
                  <div className="pt-1">
                    <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-warm-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-warm-white/70 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
