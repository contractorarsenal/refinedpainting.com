import { processSteps } from "../../lib/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 border-t border-warm-white/10 bg-ink py-16 sm:py-20 lg:py-24">
      <Container className="relative">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="Systematic Craft"
          title="The 4-Phase Refined Protocol"
          description="A clear, consistent process from your first estimate to the final walkthrough."
          className="mx-auto"
        />

        <ol className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100}>
              <li className="flex flex-col items-start gap-1.5 border-t-2 border-crest pt-4">
                <span className="font-display text-3xl font-black leading-none text-crest">{step.number}</span>
                <h3 className="mt-1 font-display text-base font-extrabold uppercase tracking-wide text-warm-white">
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
