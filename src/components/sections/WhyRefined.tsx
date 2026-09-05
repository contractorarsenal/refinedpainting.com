import { Check } from "lucide-react";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";
import { SectionHeading } from "../ui/SectionHeading";

const bullets = [
  "Communication-first, on-time service",
  "Detailed scopes + transparent options",
  "Clean, protected job sites + daily cleanup",
  "Premium prep + high-end finishes",
  "Color guidance + lead-safe practices",
  "5-year warranty + final walkthrough sign-off",
];

export function WhyRefined() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="why-refined" className="bg-warm-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative flex aspect-square w-full items-center justify-center rounded-4xl bg-off-white lg:order-1">
          <Mascot variant="full" className="h-2/3 w-2/3" />
        </div>

        <div className="flex flex-col items-start gap-6 lg:order-2">
          <SectionHeading eyebrow="Why Refined" title="The Details Are the Difference." />
          <ul className="flex flex-col gap-3.5">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal-dark">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <span className="text-[15px] font-medium text-ink/85">{bullet}</span>
              </li>
            ))}
          </ul>
          <Button onClick={openQuoteModal} size="lg" className="mt-2">
            Why Homeowners Choose Refined
          </Button>
        </div>
      </Container>
    </section>
  );
}
