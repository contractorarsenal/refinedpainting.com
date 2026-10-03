import { useEffect, useRef, useState } from "react";
import logoStatic from "../../assets/images/refined-painting-logo.webp";
import logoRevealVideo from "../../assets/videos/logo-reveal.webm";

/**
 * Brand reveal shown once above the hero headline. Starts as the static logo
 * and only swaps to the animated transparent-WebM version after confirming,
 * via a real decoded-frame alpha sample, that this browser actually renders
 * VP9 alpha correctly — canPlayType() can't tell us that, and guessing wrong
 * would show an opaque box instead of transparency. Safari/WebKit has no
 * alpha-WebM support in <video>, so it (and reduced-motion, and anything that
 * errors) just keeps the static logo. Plays once, holds briefly, then the
 * whole mark fades out — the navbar already carries the logo permanently, so
 * this is a one-time reveal moment rather than a second permanent logo
 * competing with the headline.
 */
// Below `lg` the overlay is hidden anyway (it would duplicate the top-left
// mobile nav logo), and reduced-motion users don't want it either — in both
// cases skip rendering the <video> at all so the clip is never fetched.
function canAttemptVideo() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return window.matchMedia("(min-width: 1024px)").matches;
}

const HOLD_MS = 1100;
const STATIC_ONLY_HOLD_MS = 1800;

export function LogoReveal({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);
  const [faded, setFaded] = useState(false);
  const [attemptVideo] = useState(canAttemptVideo);

  useEffect(() => {
    if (!attemptVideo) {
      const t = setTimeout(() => setFaded(true), STATIC_ONLY_HOLD_MS);
      return () => clearTimeout(t);
    }

    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;

    const onLoadedData = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 2;
        canvas.height = 2;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(video, 0, 0, 2, 2);
        const alpha = ctx.getImageData(0, 0, 1, 1).data[3];
        // Frame 0 of this clip is fully transparent in the source — if the
        // browser truly decoded alpha, this pixel reads 0. If it reads 255,
        // this browser renders the file opaque, so we never show it.
        if (cancelled || alpha !== 0) return;
        setVideoVisible(true);
        video.play().catch(() => setVideoVisible(false));
      } catch {
        // Any canvas/decoding failure: stay on the static logo.
      }
    };

    const onError = () => setVideoVisible(false);
    const onEnded = () => {
      setVideoVisible(false);
      fadeTimer = setTimeout(() => setFaded(true), HOLD_MS);
    };

    video.addEventListener("loadeddata", onLoadedData);
    video.addEventListener("error", onError);
    video.addEventListener("ended", onEnded);
    video.load();

    return () => {
      cancelled = true;
      clearTimeout(fadeTimer);
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("error", onError);
      video.removeEventListener("ended", onEnded);
    };
  }, [attemptVideo]);

  return (
    <div
      className={`relative aspect-[2.6/1] w-37.5 lg:w-45 transition-opacity duration-700 ease-out ${
        faded ? "opacity-0" : "opacity-100"
      } ${className}`}
      aria-hidden={faded}
    >
      <img
        src={logoStatic}
        alt="Refined Painting"
        className="absolute inset-0 h-full w-full object-contain"
      />
      {attemptVideo ? (
        <video
          ref={videoRef}
          src={logoRevealVideo}
          muted
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 h-full w-full object-contain transition-opacity duration-200"
          style={{ opacity: videoVisible ? 1 : 0 }}
        />
      ) : null}
    </div>
  );
}
