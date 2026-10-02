import { MapPin } from "lucide-react";
import heroPhoto from "../../assets/images/projects/exterior-finished-navy.webp";
import { business } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { ProjectImage } from "../ui/ProjectImage";
import { Stars } from "../ui/Stars";

export function Hero() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="top" className="border-b border-ink/10 bg-off-white">
      <Container className="grid grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-28">
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
            <Button onClick={() => openQuoteModal()} size="lg" className="w-full sm:w-auto">
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
          <div className="relative aspect-3/4 w-full overflow-hidden sm:aspect-4/5">
            <ProjectImage src={heroPhoto} alt="Recently completed exterior repaint on a two-story Seattle home" eager />

            <span className="absolute left-0 top-0 flex items-center gap-1.5 bg-ink px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-warm-white">
              <MapPin className="size-3 text-teal" aria-hidden />
              Seattle, WA
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
