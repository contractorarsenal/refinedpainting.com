import { cabinetEducationPoints, homesPainted, videoAuthority } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";
import { Reveal } from "../ui/Reveal";

function VideoFrame() {
  return (
    <div className="relative mx-auto w-full max-w-80">
      <div className="relative aspect-9/16 w-full overflow-hidden rounded border-2 border-teal bg-ink shadow-lift">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoAuthority.youtubeId}?autoplay=0&playsinline=1&rel=0`}
          title="Refined Painting: the cabinet prep mistake homeowners make"
          loading="eager"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="absolute -top-2 left-6 h-1 w-16 bg-crest" aria-hidden />
      <Mascot
        variant="full"
        className="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rotate-6 drop-shadow-[0_10px_16px_rgba(0,0,0,0.4)]"
      />
    </div>
  );
}

export function VideoAuthority() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="bg-ink py-16 text-warm-white sm:py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Reveal className="mx-auto lg:mx-0">
            <VideoFrame />
          </Reveal>

          <Reveal delay={120} className="flex flex-col items-start gap-5">
            <div className="flex flex-wrap items-center gap-5">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{videoAuthority.label}</span>
              <span className="h-px w-10 bg-warm-white/20" aria-hidden />
              <span className="font-display text-lg font-extrabold text-warm-white">
                {homesPainted}{" "}
                <span className="text-xs font-bold uppercase tracking-wide text-warm-white/50">Homes Painted</span>
              </span>
            </div>
            <h2 className="text-balance font-display text-3xl font-extrabold uppercase leading-[1.02] text-warm-white sm:text-4xl lg:text-5xl">
              {videoAuthority.headline}
            </h2>

            <div className="flex flex-col gap-3 text-warm-white/70">
              {videoAuthority.paragraphs.map((p) => (
                <p key={p} className="text-balance text-base leading-relaxed sm:text-lg">
                  {p}
                </p>
              ))}
            </div>

            <div className="border-l-4 border-crest bg-warm-white/5 py-3 pl-4 pr-5">
              <p className="font-display text-lg font-bold uppercase tracking-wide text-warm-white sm:text-xl">
                {videoAuthority.callout}
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button onClick={() => openQuoteModal("cabinets")} size="lg" className="w-full sm:w-auto">
                {videoAuthority.cta}
              </Button>
              <LinkButton href="#services" variant="outline-light" size="lg" className="w-full sm:w-auto">
                {videoAuthority.secondaryCta}
              </LinkButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-14 grid grid-cols-1 gap-8 border-t border-warm-white/15 pt-10 sm:grid-cols-3">
          {cabinetEducationPoints.map((point) => (
            <div key={point.title}>
              <p className="font-display text-lg font-bold uppercase tracking-wide text-teal">{point.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-warm-white/65">{point.description}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
