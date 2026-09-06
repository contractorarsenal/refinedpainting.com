import { business } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";

export function DontKnowWhereToStart() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="quote-cta" className="border-y border-ink/10 bg-warm-white py-16 sm:py-20 lg:py-28">
      <Container className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <Mascot variant="full" className="h-40 w-40 sm:h-48 sm:w-48" />

        <h2 className="text-balance font-display text-4xl font-extrabold uppercase leading-[0.98] text-ink sm:text-5xl">
          Don't Know Where to Start?
        </h2>
        <p className="max-w-lg text-balance text-base leading-relaxed text-ink/70 sm:text-lg">
          Tell us what you're planning and our team can help you determine the right service, timeline
          and next step.
        </p>
        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button onClick={() => openQuoteModal()} size="lg" className="w-full justify-center sm:w-auto">
            Get a Free Estimate
          </Button>
          <LinkButton href={business.phoneHref} variant="ghost" size="lg" icon="phone" className="w-full justify-center sm:w-auto">
            {business.phone}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
