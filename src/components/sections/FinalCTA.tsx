import { business, CTA } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";
import { Stars } from "../ui/Stars";

export function FinalCTA() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative overflow-hidden border-t-4 border-crest bg-cream-dark py-24 sm:py-28 lg:py-32">
      <Mascot
        variant="full"
        className="pointer-events-none absolute -bottom-10 right-[4%] hidden h-64 w-64 opacity-90 lg:block"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal-dark">Ready When You Are</span>
        <h2 className="text-balance max-w-2xl font-display text-5xl font-black uppercase leading-[0.94] text-ink sm:text-6xl">
          Ready to Get Your Project Started?
        </h2>
        <span className="h-1 w-20 bg-crest" aria-hidden />
        <p className="max-w-md text-balance text-base text-ink/70 sm:text-lg">
          Tell us what you're planning and we'll help you figure out the right next step.
        </p>

        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button onClick={() => openQuoteModal()} size="lg" className="w-full sm:w-auto">
            {CTA.primaryAlt}
          </Button>
          <LinkButton href={business.phoneHref} variant="ghost" size="lg" icon="phone" className="w-full sm:w-auto">
            {business.phone}
          </LinkButton>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <Stars />
            <span className="text-sm font-semibold text-ink/80">
              {business.rating} Google Rating • {business.reviewCount} Reviews
            </span>
          </div>
          <span className="hidden text-ink/25 sm:inline">•</span>
          <span className="text-sm font-semibold text-ink/80">Licensed &amp; Insured</span>
          <span className="hidden text-ink/25 sm:inline">•</span>
          <span className="text-sm font-semibold text-ink/80">5-Year Workmanship Warranty</span>
        </div>
      </Container>
    </section>
  );
}
