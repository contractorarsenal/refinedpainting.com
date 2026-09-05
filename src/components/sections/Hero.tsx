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
    <section id="top" className="border-b border-ink/10 bg-off-white">
      <Container className="grid grid-cols-1 items-center gap-10 py-12 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div className="flex flex-col items-start gap-5">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal-dark">
            Seattle &amp; Eastside Painting Company
          </span>
          <h1 className="text-balance font-display text-5xl font-extrabold uppercase leading-[0.94] text-ink sm:text-6xl lg:text-[4rem]">
            Seattle Painting Done Right From Day One
          </h1>
          <p className="max-w-xl text-balance text-base leading-relaxed text-ink/75 sm:text-lg">
            Professional interior, exterior, cabinet and commercial painting backed by clear
            communication, careful prep and a 5-year workmanship warranty.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button onClick={openQuoteModal} size="lg" className="w-full sm:w-auto">
              Get a Free Estimate
            </Button>
            <LinkButton href={business.phoneHref} variant="ghost" size="lg" icon="phone" className="w-full sm:w-auto">
              {business.phone}
            </LinkButton>
          </div>

          <div className="flex items-center gap-2.5 pt-1">
            <Stars />
            <span className="text-sm font-bold text-ink">5.0 Google Rating</span>
            <span className="text-sm font-medium text-ink/50">• 227 Reviews</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded shadow-lift">
            <PlaceholderPhoto label="Exterior repaint, Seattle" tone="navy" />
          </div>

          <Mascot
            variant="full"
            className="absolute -bottom-8 -left-4 h-32 w-32 drop-shadow-[0_12px_20px_rgba(20,33,44,0.35)] sm:h-40 sm:w-40"
          />

          <div className="absolute -right-3 -top-4 flex items-center gap-2 rounded border-2 border-ink bg-warm-white px-3.5 py-2.5 shadow-lift sm:-right-5 sm:-top-5">
            <Stars />
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-ink">5.0 Google</p>
              <p className="text-[11px] font-semibold text-ink/50">227 Reviews</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
