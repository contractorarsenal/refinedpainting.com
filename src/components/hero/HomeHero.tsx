import { Play } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import heroPoster from "../../assets/images/home-hero-poster.webp";
// Sequence built from home-hero.mp4 (source kept unchanged): truck arrival, a short
// owner appearance, then the house shot. Joins use the source's own cut points.
import heroVideo from "../../assets/videos/home-hero-sequence.mp4";
import { business } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Stars } from "../ui/Stars";
import type { HeroMedia } from "./heroMedia";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

// A rejected play() is either a playback-policy decision (autoplay blocked by Low Power
// Mode, data saver, or browser policy; a user tap is still allowed) or a media/network
// failure. Policy keeps the poster and the Play button; failure keeps only the poster.
function playbackFailure(err: unknown): "paused" | "failed" {
  const name = err instanceof DOMException ? err.name : "";
  return name === "NotAllowedError" || name === "AbortError" ? "paused" : "failed";
}

function subscribeReducedMotion(onChange: () => void) {
  const mql = window.matchMedia(reducedMotionQuery);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

const homeHeroMedia: HeroMedia = {
  type: "video",
  src: heroVideo,
  poster: heroPoster,
  alt: "Aerial view of a Refined Painting truck driving through a Seattle neighborhood overlooking the water",
};

export function HomeHero() {
  const { openQuoteModal } = useQuoteModal();
  const videoRef = useRef<HTMLVideoElement>(null);
  // "pending" until the first autoplay attempt settles, so the Play button never
  // flashes over a video that is about to start. "paused" shows the poster plus
  // the Play button. "failed" means the media itself could not load: keep the poster only.
  const [status, setStatus] = useState<"pending" | "playing" | "paused" | "failed">("pending");
  // Server snapshot is "no preference" so prerendered HTML matches the first client render.
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );

  // The poster is the LCP candidate and paints first. `preload="none"` keeps the
  // 3.4MB file off the wire until playback is actually attempted.
  // Reduced-motion visitors never get an autoplay attempt; they choose to play.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    // React sets `muted` as a property only, so mirror it as the attribute too:
    // iOS Safari decides autoplay eligibility from the attribute.
    el.muted = true;
    el.setAttribute("muted", "");
    if (window.matchMedia(reducedMotionQuery).matches) return;
    // One attempt only. A rejection (Low Power Mode, data saver, or browser policy)
    // leaves the poster and the Play button in place.
    el.play().catch((err: unknown) => setStatus((prev) => (prev === "failed" ? prev : playbackFailure(err))));
  }, []);

  // Direct tap: this runs inside the user gesture, which iOS requires for playback.
  const startPlayback = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.play().catch((err: unknown) => setStatus((prev) => (prev === "failed" ? prev : playbackFailure(err))));
  };

  return (
    <section className="relative flex items-start overflow-hidden bg-ink sm:min-h-[720px] lg:min-h-[88vh]">
      <div className="absolute inset-0">
        {homeHeroMedia.type === "video" ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover object-[55%_50%] sm:object-center"
            poster={homeHeroMedia.poster}
            src={homeHeroMedia.src}
            preload="none"
            muted
            loop
            playsInline
            aria-hidden
            onPlaying={() => setStatus("playing")}
            onPause={() => setStatus((prev) => (prev === "failed" ? prev : "paused"))}
            onError={() => setStatus("failed")}
          />
        ) : (
          <img
            src={homeHeroMedia.src}
            alt={homeHeroMedia.alt}
            className="h-full w-full object-cover"
          />
        )}
        {/* Top wash keeps the floating header legible; bottom wash keeps the headline legible. */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/35 via-45% to-transparent sm:from-ink/65 sm:via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
        {status === "paused" || (status === "pending" && reducedMotion) ? (
          <button
            type="button"
            onClick={startPlayback}
            aria-label="Play video"
            className="absolute bottom-5 right-4 z-10 inline-flex min-h-11 items-center gap-2 border border-warm-white/40 bg-ink/70 px-4 text-xs font-bold uppercase tracking-wide text-warm-white backdrop-blur-sm transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-white sm:right-8"
          >
            <Play className="size-4 fill-current" aria-hidden />
            Play video
          </button>
        ) : null}
      </div>

      <Container className="relative flex w-full flex-col items-start gap-4 pb-12 pt-32 sm:gap-5 sm:pb-20 sm:pt-40 lg:pt-[25vh]">
        <span className="relative text-xs font-bold uppercase tracking-[0.16em] text-warm-white sm:text-teal">
          Seattle &amp; Eastside Painting Company
        </span>
        <h1 className="relative text-balance max-w-2xl font-display text-[2.75rem] font-black uppercase leading-[0.98] text-warm-white sm:text-6xl sm:leading-[0.95] lg:text-7xl">
          Seattle Painting Done Right From Day One
        </h1>
        <p className="relative max-w-[24rem] text-balance text-[15px] leading-relaxed text-warm-white/85 sm:max-w-xl sm:text-lg sm:text-warm-white/80">
          Professional interior, exterior and cabinet painting backed by clear
          communication, careful prep and a 5-year workmanship warranty.
        </p>

        <div id="hero-actions" className="relative flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:gap-3">
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
            Call Now
          </LinkButton>
        </div>

        <div className="relative flex items-center gap-2.5 pt-1">
          <Stars />
          <span className="text-sm font-bold text-warm-white">5.0 Google Rating</span>
          <span className="text-sm font-medium text-warm-white/60">• 227 Reviews</span>
        </div>
      </Container>
    </section>
  );
}
