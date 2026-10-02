import heroImage from "../../assets/images/projects/exterior-finished-navy.webp";
import { business } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Stars } from "../ui/Stars";
import type { HeroMedia } from "./heroMedia";

const homeHeroMedia: HeroMedia = {
  type: "image",
  src: heroImage,
  alt: "Recently completed exterior repaint on a two-story Seattle home",
};

export function HomeHero() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative flex min-h-[640px] items-end overflow-hidden bg-ink sm:min-h-[720px] lg:min-h-[88vh]">
      <div className="absolute inset-0">
        {homeHeroMedia.type === "video" ? (
          <video
            className="h-full w-full object-cover"
            src={homeHeroMedia.src}
            poster={homeHeroMedia.poster}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
          />
        ) : (
          <img
            src={homeHeroMedia.src}
            alt={homeHeroMedia.alt}
            className="h-full w-full object-cover"
          />
        )}
        {/* Top wash keeps the floating header legible; bottom wash keeps the headline legible. */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/65 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
      </div>

      <Container className="relative flex w-full flex-col items-start gap-5 pb-14 pt-36 sm:pb-20 sm:pt-40 lg:pb-24">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
          Seattle &amp; Eastside Painting Company
        </span>
        <h1 className="text-balance max-w-2xl font-display text-5xl font-black uppercase leading-[0.95] text-warm-white sm:text-6xl lg:text-7xl">
          Seattle Painting Done Right From Day One
        </h1>
        <p className="max-w-xl text-balance text-base leading-relaxed text-warm-white/80 sm:text-lg">
          Professional interior, exterior, cabinet and commercial painting backed by clear
          communication, careful prep and a 5-year workmanship warranty.
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button onClick={() => openQuoteModal()} size="lg" className="w-full sm:w-auto">
            Get a Free Estimate
          </Button>
          <LinkButton
            href={business.phoneHref}
            variant="outline-light"
            size="lg"
            icon="phone"
            className="w-full sm:w-auto"
          >
            {business.phone}
          </LinkButton>
        </div>

        <div className="flex items-center gap-2.5 pt-1">
          <Stars />
          <span className="text-sm font-bold text-warm-white">5.0 Google Rating</span>
          <span className="text-sm font-medium text-warm-white/60">• 227 Reviews</span>
        </div>
      </Container>
    </section>
  );
}
