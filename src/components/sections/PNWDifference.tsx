import { Square } from "lucide-react";
import prepPhoto from "../../assets/images/projects/exterior-before-tan.jpg";
import { Container } from "../ui/Container";
import { DotGrid } from "../ui/DotGrid";
import { ProjectImage } from "../ui/ProjectImage";
import { SectionHeading } from "../ui/SectionHeading";

const bullets = [
  "Moisture-Aware Prep",
  "Wood & Rot Repair",
  "EPA Lead-Safe Practices",
  "Proper Primers & Coatings",
];

export function PNWDifference() {
  return (
    <section className="relative overflow-hidden bg-light-blue py-16 sm:py-20 lg:py-28">
      <DotGrid className="text-ink" />
      <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="aspect-4/5 w-full overflow-hidden rounded shadow-card">
          <ProjectImage
            src={prepPhoto}
            alt="Weathered exterior siding with peeling paint before surface preparation"
          />
        </div>

        <div className="flex flex-col items-start gap-5">
          <SectionHeading
            title="Built for Pacific Northwest Homes"
            description="Rain, moisture, older wood siding, and temperature swings make exterior prep critical here. We plan around it instead of painting over it."
          />
          <ul className="flex flex-col gap-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center bg-teal-dark text-warm-white">
                  <Square className="size-3 fill-current" aria-hidden />
                </span>
                <span className="font-display text-lg font-bold uppercase tracking-wide text-ink">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
