import { MapPin } from "lucide-react";
import { business } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";
import { PlaceholderPhoto } from "../ui/PlaceholderPhoto";
import { Stars } from "../ui/Stars";

const swatchEdge = ["#4fb0bb", "#c23b30", "#e3a13a", "#14212c", "#e2e6e8"];

export function Hero() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="top" className="border-b border-ink/10 bg-off-white">
      <Container className="grid grid-cols-1 items-center gap-10 py-12 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div className="flex flex-col items-start gap-5">
          <span className="animate-fade-up text-xs font-bold uppercase tracking-[0.16em] text-teal-dark">
            Seattle &amp; Eastside Painting Company
          </span>
          <h1 className="text-balance font-display text-5xl font-black uppercase leading-[0.92] text-ink sm:text-6xl lg:text-[4.25rem]">
            <span className="animate-fade-up block [animation-delay:80ms]">Seattle Painting</span>
            <span className="animate-fade-up block [animation-delay:180ms]">Done Right From</span>
            <span className="animate-fade-up block [animation-delay:280ms]">Day One</span>
          </h1>
          <p className="animate-fade-up max-w-xl text-balance text-base leading-relaxed text-ink/75 [animation-delay:380ms] sm:text-lg">
            Professional interior, exterior, cabinet and commercial painting backed by clear
            communication, careful prep and a 5-year workmanship warranty.
          </p>

          <div className="animate-fade-up flex w-full flex-col gap-3 [animation-delay:460ms] sm:w-auto sm:flex-row">
            <Button onClick={openQuoteModal} size="lg" className="w-full sm:w-auto">
              Get a Free Estimate
            </Button>
            <LinkButton href={business.phoneHref} variant="ghost" size="lg" icon="phone" className="w-full sm:w-auto">
              {business.phone}
            </LinkButton>
          </div>

          <div className="animate-fade-up flex items-center gap-2.5 pt-1 [animation-delay:540ms]">
            <Stars />
            <span className="text-sm font-bold text-ink">5.0 Google Rating</span>
            <span className="text-sm font-medium text-ink/50">• 227 Reviews</span>
          </div>
        </div>

        <div className="animate-fade-up relative [animation-delay:200ms]">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded shadow-lift">
            <PlaceholderPhoto label="Exterior repaint, Seattle" tone="navy" />

            <span className="absolute left-4 top-4 flex items-center gap-1.5 bg-ink/85 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-warm-white backdrop-blur-sm">
              <MapPin className="size-3 text-teal" aria-hidden />
              Seattle, WA
            </span>

            <div className="absolute bottom-0 left-0 flex h-2.5 w-full" aria-hidden>
              {swatchEdge.map((color) => (
                <span key={color} className="h-full flex-1" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>

          <Mascot
            variant="full"
            className="animate-fade-up absolute -bottom-8 -left-4 h-32 w-32 [animation-delay:620ms] drop-shadow-[0_12px_20px_rgba(20,33,44,0.35)] sm:h-40 sm:w-40"
          />

          <div className="animate-fade-up absolute -right-3 -top-4 flex items-center gap-2 rounded border-2 border-ink bg-warm-white px-3.5 py-2.5 shadow-lift [animation-delay:460ms] sm:-right-5 sm:-top-5">
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
