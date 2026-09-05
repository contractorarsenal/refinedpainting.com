import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";

export function QuoteCTA() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="quote-cta" className="relative overflow-hidden bg-teal py-16 sm:py-20">
      <Mascot
        variant="watermark"
        className="pointer-events-none absolute -right-10 -top-16 h-72 w-72 opacity-[0.14] sm:h-96 sm:w-96"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Mascot variant="full" className="h-24 w-24 drop-shadow-[0_10px_16px_rgba(21,32,41,0.25)] sm:h-28 sm:w-28" />
        <h2 className="text-balance max-w-2xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Tell Us What You're Painting.
        </h2>
        <p className="max-w-md text-balance text-base text-ink/75">
          Answer a few quick questions and we'll help you take the next step.
        </p>
        <Button onClick={openQuoteModal} variant="secondary" size="lg">
          Start My Free Estimate
        </Button>
      </Container>
    </section>
  );
}
