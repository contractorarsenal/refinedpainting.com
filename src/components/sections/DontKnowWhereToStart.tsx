import { business } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";

export function DontKnowWhereToStart() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="quote-cta" className="border-y border-ink/10 bg-warm-white py-16 sm:py-20 lg:py-28">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
        <Mascot variant="full" className="mx-auto h-40 w-40 shrink-0 sm:h-48 sm:w-48 lg:mx-0 lg:h-56 lg:w-56" />

        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <h2 className="text-balance font-display text-4xl font-extrabold uppercase leading-[0.98] text-ink sm:text-5xl">
            Don't Know Where to Start?
          </h2>
          <p className="max-w-xl text-balance text-base leading-relaxed text-ink/70 sm:text-lg">
            Tell us what you're planning and our team can help you determine the right service, timeline
            and next step.
          </p>
          <div className="mx-auto flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:mx-0">
            <LinkButton href={business.phoneHref} variant="ghost" size="lg" icon="phone" className="w-full justify-center sm:w-auto">
              {business.phone}
            </LinkButton>
            <Button onClick={() => openQuoteModal()} size="lg" className="w-full justify-center sm:w-auto">
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
