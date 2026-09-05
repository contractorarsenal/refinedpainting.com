import { business, CTA } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";
import { Stars } from "../ui/Stars";

export function FinalCTA() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-warm-white sm:py-28">
      <Mascot
        variant="watermark"
        className="pointer-events-none absolute -bottom-10 -right-6 h-80 w-80 opacity-[0.1] sm:h-[26rem] sm:w-[26rem]"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Ready When You Are</span>
        <h2 className="text-balance max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          Let's Make Your Home Feel Refined.
        </h2>
        <p className="max-w-md text-balance text-base text-warm-white/70 sm:text-lg">
          Tell us what you're planning and we'll help you figure out the best next step.
        </p>

        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button onClick={openQuoteModal} size="lg" className="w-full sm:w-auto">
            {CTA.primaryAlt}
          </Button>
          <LinkButton href={business.phoneHref} variant="outline-light" size="lg" icon="phone" className="w-full sm:w-auto">
            {business.phone}
          </LinkButton>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <Stars />
            <span className="text-sm font-semibold text-warm-white/85">
              {business.rating} Google Rating • {business.reviewCount} Reviews
            </span>
          </div>
          <span className="hidden text-warm-white/30 sm:inline">•</span>
          <span className="text-sm font-semibold text-warm-white/85">Licensed &amp; Insured</span>
          <span className="hidden text-warm-white/30 sm:inline">•</span>
          <span className="text-sm font-semibold text-warm-white/85">5-Year Workmanship Warranty</span>
        </div>
      </Container>
    </section>
  );
}
