import { processSteps } from "../../lib/content";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="bg-off-white py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="How It Works" title="What to Expect" />

        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className={`flex flex-col gap-2 border-t-4 border-teal-dark pt-5 lg:px-6 lg:pt-6 ${
                index > 0 ? "lg:border-l-2 lg:border-t-4 lg:border-l-ink/10" : ""
              }`}
            >
              <span className="font-display text-3xl font-extrabold text-teal-dark">{step.number}</span>
              <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink/65">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
