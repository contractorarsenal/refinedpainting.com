import { Square } from "lucide-react";
import { Container } from "../ui/Container";
import { PlaceholderPhoto } from "../ui/PlaceholderPhoto";
import { SectionHeading } from "../ui/SectionHeading";

const bullets = [
  "Moisture-Aware Prep",
  "Wood & Rot Repair",
  "EPA Lead-Safe Practices",
  "Proper Primers & Coatings",
];

export function PNWDifference() {
  return (
    <section className="bg-warm-white py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="aspect-4/5 w-full overflow-hidden rounded shadow-card">
          <PlaceholderPhoto label="Exterior surface prep detail" tone="teal" />
        </div>

        <div className="flex flex-col items-start gap-5">
          <SectionHeading
            eyebrow="Built for the Pacific Northwest"
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
