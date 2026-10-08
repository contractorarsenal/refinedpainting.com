import { Link } from "react-router-dom";
import { processSteps } from "../../lib/content";
import { Container } from "../ui/Container";
import { LineTexture } from "../ui/Texture";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/** Short, homepage-only version of the full Process section on About/Services — one sentence per step instead of the full copy. */
export function ProcessCondensed() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-warm-white sm:py-20 lg:py-24">
      <LineTexture tone="warm-white" className="opacity-50" />
      <Container className="relative">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="How It Works"
          title="A Clear Process, Start to Finish"
          className="mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className="border-t-2 border-crest pt-4">
                <span className="font-display text-4xl font-black text-crest">{step.number}</span>
                <h3 className="mt-2 font-display text-base font-extrabold uppercase tracking-wide text-warm-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-white/60">
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
