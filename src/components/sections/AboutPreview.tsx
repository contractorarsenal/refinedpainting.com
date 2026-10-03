import { Check } from "lucide-react";
import interiorPhoto from "../../assets/images/projects/interior-empty-room.webp";
import { localPartnerBullets } from "../../lib/content";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { ProjectImage } from "../ui/ProjectImage";
import { SectionHeading } from "../ui/SectionHeading";

const previewBullets = localPartnerBullets.slice(0, 3);

export function AboutPreview() {
  return (
    <section className="bg-light-blue py-16 sm:py-20 lg:py-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.48fr_1fr] lg:gap-20">
        <div className="aspect-4/5 w-full overflow-hidden rounded-xl lg:order-1">
          <ProjectImage src={interiorPhoto} alt="Freshly painted interior room ready for a walkthrough" />
        </div>

        <div className="flex flex-col items-start gap-6 lg:order-2">
          <SectionHeading
            eyebrow="Local & Trusted"
            title="Your Local Trusted Partner for Painting & Home Improvement"
            description="Refined Painting is a locally owned Seattle painting company built to be the professionally managed project, not just the paint job."
          />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {previewBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-dark text-warm-white">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <span className="text-sm font-semibold text-ink/85">{bullet}</span>
              </li>
            ))}
          </ul>
          <LinkButton href="/about" variant="ghost">
            More About Refined
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
