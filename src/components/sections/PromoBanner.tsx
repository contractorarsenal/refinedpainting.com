import { promoBanner } from "../../lib/content";
import { useInView } from "../../hooks/useInView";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";
import { Reveal } from "../ui/Reveal";

const swatches = ["#e2e6e8", "#4fb0bb", "#c9a071", "#0e1418", "#e3a13a", "#ffffff"];
const swatchLabels = ["Matte", "Eggshell", "Satin", "Semi-Gloss"];

export function PromoBanner() {
  const { openQuoteModal } = useQuoteModal();
  const { ref: ruleRef, inView: ruleInView } = useInView<HTMLDivElement>(0.6);

  return (
    <section className="relative bg-cream-light pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
      {/* Expands from Process's connecting line rather than a flat static border — ties this section to the one above it. */}
      <div
        ref={ruleRef}
        className={`absolute inset-x-0 top-0 h-0.5 origin-left bg-crest/30 transition-transform duration-700 ease-out ${
          ruleInView ? "scale-x-100" : "scale-x-0"
        }`}
        aria-hidden
      />
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-ink/45">Need Help Choosing Color?</span>
        </Reveal>
        <div className="mt-5 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={80} className="flex flex-col items-start gap-4">
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
          </Reveal>

          <Reveal delay={200} className="relative flex items-center justify-center">
            <div className="grid w-full max-w-sm grid-cols-3 gap-3">
              {swatches.map((color) => (
                <span key={color} className="aspect-square rounded-lg border-2 border-ink/10 shadow-sm" style={{ backgroundColor: color }} />
              ))}
            </div>
            <Mascot variant="full" className="absolute -bottom-8 -right-4 h-28 w-28 drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)] sm:h-32 sm:w-32" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
