import { business, CTA } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";
import { Stars } from "../ui/Stars";

interface FinalCTAProps {
  /** "red" (default) is the primary conversion band. "navy" gives build-trust
   * pages (About, Projects) a quieter close so not every page ends identically. */
  tone?: "red" | "navy";
}

export function FinalCTA({ tone = "red" }: FinalCTAProps) {
  const { openQuoteModal } = useQuoteModal();
  const isNavy = tone === "navy";

  return (
    <section
      className={`relative overflow-hidden py-24 text-warm-white sm:py-28 lg:py-32 ${isNavy ? "bg-ink" : "bg-crest"}`}
    >
      <Mascot
        variant="full"
        className="pointer-events-none absolute -bottom-10 right-[4%] hidden h-64 w-64 opacity-90 lg:block"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-warm-white/85">Ready When You Are</span>
        <h2 className="text-balance max-w-2xl font-display text-5xl font-black uppercase leading-[0.94] text-warm-white">
          Ready to Get Your Project Started?
        </h2>
        <span className={`h-1 w-20 ${isNavy ? "bg-crest" : "bg-teal"}`} aria-hidden />
        <p className="max-w-md text-balance text-base text-warm-white/85 sm:text-lg">
          Tell us what you're planning and we'll help you figure out the right next step.
        </p>

        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            onClick={() => openQuoteModal()}
            variant={isNavy ? "primary" : "invert"}
            size="lg"
            className="w-full sm:w-auto"
          >
            {CTA.primaryAlt}
          </Button>
          <LinkButton href={business.phoneHref} variant="outline-light" size="lg" icon="phone" className="w-full sm:w-auto">
            Call Now
          </LinkButton>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <Stars fillClassName="fill-warm-white text-warm-white" />
            <span className="text-sm font-semibold text-warm-white/90">
              {business.rating} Google Rating • {business.reviewCount} Reviews
            </span>
          </div>
          <span className="hidden text-warm-white/35 sm:inline">•</span>
          <span className="text-sm font-semibold text-warm-white/90">Licensed &amp; Insured</span>
          <span className="hidden text-warm-white/35 sm:inline">•</span>
          <span className="text-sm font-semibold text-warm-white/90">5-Year Workmanship Warranty</span>
        </div>
      </Container>
    </section>
  );
}
