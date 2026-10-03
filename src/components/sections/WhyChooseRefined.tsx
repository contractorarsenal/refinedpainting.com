import interiorPhoto from "../../assets/images/projects/interior-bright-finished.webp";
import { whyChooseUs } from "../../lib/content";
import { Container } from "../ui/Container";
import { ProjectImage } from "../ui/ProjectImage";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function WhyChooseRefined() {
  return (
    <section id="why-choose-refined" className="relative scroll-mt-24 bg-warm-white py-16 sm:py-20 lg:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why Choose Refined"
            title="Built Around the Details That Actually Matter"
            description="These aren't marketing bullet points. They're the standards every project is run against, from the first estimate to the final sign-off."
          />
          <div className="hidden aspect-4/5 w-full overflow-hidden rounded-xl shadow-card lg:block">
            <ProjectImage src={interiorPhoto} alt="Freshly painted bedroom ready for move-in" />
          </div>
        </div>

        <ol className="flex flex-col lg:mt-56">
          {whyChooseUs.map((point, index) => (
            <Reveal key={point.title} delay={index * 70}>
              <li className="flex gap-5 border-b border-ink/10 py-6 first:pt-0 last:border-b-0 sm:gap-7">
                <span className="shrink-0 font-display text-3xl font-black leading-none text-crest/30 sm:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold uppercase tracking-wide text-ink sm:text-lg">
                    {point.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/65">{point.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
