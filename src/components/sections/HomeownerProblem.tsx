import { CalendarX, MessageSquareWarning, PaintBucket, Trash2 } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const painPoints = [
  { icon: MessageSquareWarning, title: "Unclear Communication", description: "Scope changes and surprises instead of a clear plan." },
  { icon: Trash2, title: "Messy Job Sites", description: "Disruption that drags on longer than it needs to." },
  { icon: CalendarX, title: "Uncertain Scope", description: "Vague pricing with no real detail on what's included." },
  { icon: PaintBucket, title: "Finishes That Don't Last", description: "Shortcuts on prep that show up again within a year or two." },
];

export function HomeownerProblem() {
  return (
    <section className="border-t border-ink/10 bg-cream py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Sound Familiar?</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
            Painting Projects Go Wrong in Predictable Ways
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {painPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 70}>
              <div className="flex flex-col items-start gap-2 border-t-2 border-ink/15 pt-4">
                <point.icon className="size-5 text-ink/40" aria-hidden />
                <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                  {point.title}
                </h3>
                <p className="text-xs leading-relaxed text-ink/55">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-balance text-center font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
          Refined Painting was built around a more organized, professional process.
        </p>
      </Container>
    </section>
  );
}
