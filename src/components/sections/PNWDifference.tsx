import { Droplets, Hammer, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { PlaceholderPhoto } from "../ui/PlaceholderPhoto";
import { SectionHeading } from "../ui/SectionHeading";

const features = [
  {
    icon: Hammer,
    title: "Surface First",
    description: "Paint cannot fix damaged substrate. We repair and address what's underneath before finish work begins.",
  },
  {
    icon: ShieldCheck,
    title: "Lead-Safe",
    description: "EPA Lead-Safe practices on homes built before 1978, so older Seattle homes are handled correctly.",
  },
  {
    icon: Droplets,
    title: "Prep Over Shortcuts",
    description: "Scraping, sanding, cleaning, and appropriate priming before any finish coat goes on.",
  },
];

export function PNWDifference() {
  return (
    <section className="bg-ink py-20 text-warm-white sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            tone="light"
            eyebrow="Built for the Pacific Northwest"
            title="Seattle Weather Is Hard on Paint. Your Prep Should Account for It."
            description="Rain, moisture, older wood siding, temperature swings, and aging homes make exterior preparation critical in this market. We plan around it instead of painting over it."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-3">
                <feature.icon className="size-6 text-teal" aria-hidden />
                <h3 className="text-base font-semibold text-warm-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-warm-white/65">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="aspect-4/5 w-full overflow-hidden rounded-4xl shadow-lift lg:aspect-square">
          <PlaceholderPhoto label="Exterior surface prep" tone="teal" />
        </div>
      </Container>
    </section>
  );
}
