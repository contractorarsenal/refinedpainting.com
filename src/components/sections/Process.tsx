import { processSteps } from "../../lib/content";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="bg-off-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="How It Works" title="From Estimate to Final Walkthrough." />
          <Mascot variant="full" className="hidden h-24 w-24 shrink-0 sm:block" />
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.number} className="relative flex flex-col gap-3 border-t-2 border-teal pt-6">
              <span className="font-display text-4xl font-semibold text-ink/15">{step.number}</span>
              <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink/65">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
