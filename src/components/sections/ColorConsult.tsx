import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { PlaceholderPhoto } from "../ui/PlaceholderPhoto";

const swatches = ["#e6e0d3", "#4fb0bb", "#c9a071", "#152029", "#e3a13a", "#f5eedc"];

export function ColorConsult() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="bg-warm-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-4xl shadow-lift lg:order-2">
          <PlaceholderPhoto label="Color consultation" tone="gold" />
          <div className="absolute bottom-5 left-5 flex gap-2 rounded-2xl bg-warm-white/90 p-3 shadow-card backdrop-blur">
            {swatches.map((color) => (
              <span key={color} className="size-8 rounded-full ring-1 ring-inset ring-ink/10" style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 lg:order-1">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-dark">
            Included With Every Project
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Stop Guessing at Paint Colors.
          </h2>
          <p className="text-lg font-semibold text-ink/85">
            Your project includes complimentary color guidance.
          </p>
          <p className="text-[15px] leading-relaxed text-ink/65">
            Choosing colors online and seeing them on an actual wall are very different experiences.
            Refined Painting brings Benjamin Moore and Sherwin-Williams samples to the project so
            homeowners can make a more confident decision in the actual lighting of their home.
          </p>
          <Button onClick={openQuoteModal} size="lg" className="mt-2">
            Schedule My Free Estimate
          </Button>
        </div>
      </Container>
    </section>
  );
}
