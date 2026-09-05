import { ClipboardCheck, MessageSquare, Paintbrush, Palette } from "lucide-react";
import { processSteps } from "../../lib/content";
import { useInView } from "../../hooks/useInView";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const stepIcons = [MessageSquare, Palette, Paintbrush, ClipboardCheck];

export function Process() {
  const { ref: lineRef, inView: lineInView } = useInView<HTMLDivElement>(0.4);

  return (
    <section id="process" className="relative bg-cream pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-28">
      <Container className="relative">
        <SectionHeading align="center" title="What to Expect" />

        <div ref={lineRef} className="relative mt-20">
          <span
            className={`absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 origin-left bg-teal-dark transition-transform duration-1000 ease-out lg:block ${
              lineInView ? "scale-x-100" : "scale-x-0"
            }`}
            aria-hidden
          />
          <ol className="relative grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <li key={step.number} className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                  {index < processSteps.length - 1 ? (
                    <div className="absolute -left-6 -bottom-11 top-1 w-px border-l-2 border-dotted border-teal-dark/40 lg:hidden" aria-hidden />
                  ) : null}
                  <Reveal delay={index * 130} className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-teal-dark bg-cream text-teal-dark lg:size-16">
                    <Icon className="size-6 lg:size-7" aria-hidden />
                  </Reveal>
                  <div className="flex-1 lg:mt-7">
                    <span className="font-display text-2xl font-extrabold text-teal-dark/50 lg:text-3xl">
                      {step.number}
                    </span>
                    <h3 className="mt-1.5 inline-block border-b-2 border-crest pb-1 font-display text-lg font-bold uppercase tracking-wide text-ink lg:mt-3 lg:block lg:border-b-0">
                      {step.title}
                    </h3>
                    <div className="mx-auto mt-1.5 hidden h-0.5 w-8 bg-crest lg:block" aria-hidden />
                    <p className="mt-2.5 text-sm leading-relaxed text-ink/65 lg:mx-auto lg:mt-4 lg:max-w-[22ch]">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
