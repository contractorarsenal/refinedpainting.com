import { business } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";
import { PlaceholderPhoto } from "../ui/PlaceholderPhoto";
import { Stars } from "../ui/Stars";

export function Hero() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="top" className="relative overflow-hidden bg-warm-white">
      <Container className="grid grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20 xl:py-24">
        <div className="reveal flex flex-col items-start gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-dark">
            Seattle &amp; Eastside Painting Company
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem]">
            Painting Your Home Should Feel This Easy.
          </h1>
          <p className="max-w-xl text-balance text-base leading-relaxed text-ink/70 sm:text-lg">
            High-end interior and exterior painting with clear communication, meticulous prep, clean job
            sites, and a 5-year workmanship warranty. Serving homeowners across Seattle and the Eastside.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button onClick={openQuoteModal} size="lg" className="w-full sm:w-auto">
              Get My Free Estimate
            </Button>
            <LinkButton href={business.phoneHref} variant="ghost" size="lg" icon="phone" className="w-full sm:w-auto">
              Call {business.phone}
            </LinkButton>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <div className="flex items-center gap-2.5">
              <Stars />
              <span className="text-sm font-bold text-ink">5.0 on Google</span>
              <span className="text-sm text-ink/50">• {business.reviewCount} Reviews</span>
            </div>
            <p className="text-sm text-ink/55">
              Licensed &amp; insured • EPA Lead-Safe • Complimentary color consultation
            </p>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative aspect-4/5 w-full max-w-110 overflow-hidden rounded-4xl shadow-lift sm:aspect-5/6">
            <PlaceholderPhoto label="Exterior repaint, Seattle" tone="teal" />
          </div>

          <Mascot
            variant="full"
            className="absolute -bottom-6 -left-6 h-40 w-40 drop-shadow-[0_16px_24px_rgba(21,32,41,0.25)] sm:h-48 sm:w-48"
          />

          <div className="absolute -right-2 top-6 hidden max-w-55 rounded-2xl bg-warm-white p-4 shadow-lift sm:block lg:-right-8">
            <Stars className="mb-2" />
            <p className="text-sm font-medium leading-snug text-ink">
              "Some of the best communication of any contractor we've worked with."
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink/45">Google Review</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
