import { promoBanner } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";

const swatches = ["#e2e6e8", "#4fb0bb", "#c9a071", "#0e1418", "#e3a13a", "#ffffff"];
const swatchLabels = ["Matte", "Eggshell", "Satin", "Semi-Gloss"];

export function PromoBanner() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="border-t border-ink/10 bg-cream py-14 sm:py-16 lg:py-20">
      <Container>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">
          Complimentary Architectural Service
        </span>
        <div className="mt-5 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-balance font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
              {promoBanner.headline}
            </h2>
            <p className="max-w-md text-balance text-base leading-relaxed text-ink/70">{promoBanner.sub}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs font-bold uppercase tracking-wide text-ink/45">
              {swatchLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
            <Button onClick={() => openQuoteModal()} size="lg" className="mt-1">
              {promoBanner.cta}
            </Button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="grid w-full max-w-sm grid-cols-3 gap-3">
              {swatches.map((color) => (
                <span key={color} className="aspect-square rounded-lg border-2 border-ink/10 shadow-sm" style={{ backgroundColor: color }} />
              ))}
            </div>
            <Mascot variant="full" className="absolute -bottom-8 -right-4 h-28 w-28 drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)] sm:h-32 sm:w-32" />
          </div>
        </div>
      </Container>
    </section>
  );
}
