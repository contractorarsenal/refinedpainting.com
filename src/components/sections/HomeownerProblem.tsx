import { CalendarX, MessageSquareWarning, PaintBucket, Trash2 } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { GridTexture } from "../ui/Texture";

const painPoints = [
  { icon: MessageSquareWarning, title: "Unclear Communication", description: "Scope changes and surprises instead of a clear plan." },
  { icon: Trash2, title: "Messy Job Sites", description: "Disruption that drags on longer than it needs to." },
  { icon: CalendarX, title: "Uncertain Scope", description: "Vague pricing with no real detail on what's included." },
  { icon: PaintBucket, title: "Finishes That Don't Last", description: "Shortcuts on prep that show up again within a year or two." },
];

export function HomeownerProblem() {
  return (
    <section className="relative overflow-hidden border-t border-ink/10 bg-cream py-14 sm:py-16 lg:py-20">
      <GridTexture className="opacity-70" />
      <Container className="relative grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="flex flex-col items-start gap-5 lg:sticky lg:top-28 lg:self-start">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Sound Familiar?</span>
          <h2 className="text-balance font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
            Painting Projects Go Wrong in Predictable Ways
          </h2>
          <p className="max-w-sm text-balance font-display text-lg font-bold leading-snug text-ink/70">
            Refined Painting was built around a more organized, professional process.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {painPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 70} as="li">
              <div className="flex h-full flex-col gap-4 border border-ink/10 border-t-4 border-t-crest bg-warm-white p-6 shadow-card sm:p-7">
                <div className="flex items-center justify-between">
                  <point.icon className="size-6 text-crest" aria-hidden />
                  <span className="font-display text-3xl font-black leading-none text-ink/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-extrabold uppercase leading-tight tracking-wide text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">{point.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
