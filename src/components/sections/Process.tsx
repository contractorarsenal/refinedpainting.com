import { processSteps } from "../../lib/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 border-t border-warm-white/10 bg-ink py-16 sm:py-20 lg:py-28">
      <Container className="relative">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="How It Works"
          title="What to Expect"
          description="A clear, consistent process from your first estimate to the final walkthrough."
          className="mx-auto"
        />

        <ol className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100}>
              <li className="flex flex-col items-start gap-2 border-t-2 border-crest pt-5">
                <span className="font-display text-4xl font-black leading-none text-crest sm:text-5xl">
                  {step.number}
                </span>
                <h3 className="mt-1 font-display text-lg font-extrabold uppercase tracking-wide text-warm-white sm:text-xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-warm-white/70">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
