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

        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {painPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 70}>
              <div className="relative flex items-start gap-4 border-t-2 border-ink/15 pt-4">
                <span className="font-display text-2xl font-black leading-none text-crest/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <point.icon className="size-5 text-ink/40" aria-hidden />
                  <h3 className="mt-2 font-display text-sm font-extrabold uppercase tracking-wide text-ink sm:text-base">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{point.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
