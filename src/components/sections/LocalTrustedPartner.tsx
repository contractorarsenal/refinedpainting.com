import { Check } from "lucide-react";
import { localPartnerBullets } from "../../lib/content";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { DotGrid } from "../ui/DotGrid";
import { PlaceholderPhoto } from "../ui/PlaceholderPhoto";
import { SectionHeading } from "../ui/SectionHeading";

export function LocalTrustedPartner() {
  return (
    <section id="local-partner" className="relative overflow-hidden bg-light-blue py-20 sm:py-24">
      <DotGrid className="text-ink" />
      <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="aspect-4/5 w-full overflow-hidden rounded shadow-card lg:order-1">
          <PlaceholderPhoto label="Refined Painting crew on site" tone="slate" />
        </div>

        <div className="flex flex-col items-start gap-6 lg:order-2">
          <SectionHeading
            eyebrow="Why Homeowners Choose Refined"
            title="Your Local Trusted Partner for Painting & Home Improvement"
            description="Most homeowners aren't worried about whether a painter can put paint on a wall — they're worried about whether the job gets managed well. Refined Painting was built to be the professionally managed project, not just the paint job."
          />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {localPartnerBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-dark text-warm-white">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <span className="text-sm font-semibold text-ink/85">{bullet}</span>
              </li>
            ))}
          </ul>
          <LinkButton href="#top" size="lg">
            About Refined Painting
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
