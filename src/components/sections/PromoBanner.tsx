import { promoBanner } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";

const swatches = ["#e2e6e8", "#4fb0bb", "#c9a071", "#0e1418", "#e3a13a", "#ffffff"];

export function PromoBanner() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="bg-ink py-24 text-warm-white sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col items-start gap-5">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{promoBanner.eyebrow}</span>
            <h2 className="text-balance font-display text-4xl font-extrabold uppercase leading-[0.98] text-warm-white sm:text-5xl">
              {promoBanner.headline}
            </h2>
            <p className="max-w-md text-balance text-base leading-relaxed text-warm-white/70 sm:text-lg">
              {promoBanner.sub}
            </p>
            <Button onClick={openQuoteModal} size="lg">
              {promoBanner.cta}
            </Button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="grid w-full max-w-sm grid-cols-3 gap-3">
              {swatches.map((color) => (
                <span key={color} className="aspect-square border-2 border-warm-white/10" style={{ backgroundColor: color }} />
              ))}
            </div>
            <Mascot variant="full" className="absolute -bottom-8 -right-4 h-28 w-28 drop-shadow-[0_12px_20px_rgba(0,0,0,0.4)] sm:h-32 sm:w-32" />
          </div>
        </div>

        <div className="mt-10 flex justify-center border-t border-warm-white/10 pt-8">
          <a href="#top" className="text-sm font-bold uppercase tracking-wide text-teal hover:text-teal/80">
            {promoBanner.viewOffers}
          </a>
        </div>
      </Container>
    </section>
  );
}
