import interiorPhoto from "../../assets/images/projects/interior-bright-finished.webp";
import { whyChooseUs } from "../../lib/content";
import { Container } from "../ui/Container";
import { ProjectImage } from "../ui/ProjectImage";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

// Short captions for the grid tiles — each is the lead clause of that point's
// full description in content.ts, trimmed for a scannable 3x2 layout. The
// full sentence still lives in content.ts; nothing here is invented.
const shortCaptions: Record<string, string> = {
  "Communication-First, On-Time Service": "Clear expectations, regular updates, and fast responses.",
  "Detailed Scope + Transparent Options": "Every proposal lays out exactly what's included.",
  "Clean, Protected Job Sites + Daily Cleanup": "We treat every home as if it were our own.",
  "Premium Prep + High-End Finishes": "Great finishes start long before the first coat.",
  "Color Guidance + Lead-Safe Practices": "Complimentary color consultation, backed by EPA Lead-Safe practices.",
  "5-Year Warranty + Final Walkthrough Sign-Off": "A detailed walkthrough backed by our 5-year warranty.",
};

export function WhyChooseRefined() {
  return (
    <section id="why-choose-refined" className="relative scroll-mt-24 bg-warm-white py-16 sm:py-20 lg:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.3fr] lg:gap-16">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why Choose Refined"
            title="Built Around the Details That Actually Matter"
          />
          <div className="hidden aspect-4/3 w-full overflow-hidden rounded-xl shadow-card lg:block">
            <ProjectImage src={interiorPhoto} alt="Freshly painted bedroom ready for move-in" />
          </div>
        </div>

        <ol className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {whyChooseUs.map((point, index) => (
            <Reveal key={point.title} delay={index * 60}>
              <li className="border-t-2 border-crest pt-4">
                <span className="font-display text-2xl font-black leading-none text-crest/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-base font-extrabold uppercase tracking-wide text-ink sm:text-lg">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {shortCaptions[point.title] ?? point.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
