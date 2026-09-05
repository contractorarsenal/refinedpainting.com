import { Clock, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const points = [
  {
    icon: MessageCircle,
    title: "Clear From Day One",
    description: "Detailed scopes and transparent proposals, so there's no guessing about what's included.",
  },
  {
    icon: Sparkles,
    title: "Respect for Your Home",
    description: "Protected floors, furniture, and landscaping, with clean workspaces every day.",
  },
  {
    icon: Clock,
    title: "Communication That Doesn't Disappear",
    description: "Proactive updates throughout your project, so you're never left wondering.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    description: "Careful prep backed by a 5-year workmanship warranty on every project.",
  },
];

export function Positioning() {
  return (
    <section className="bg-warm-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="A Better Way to Hire a Painter"
          title="High-End Results Without the Contractor Headaches."
          description={
            <>
              Most homeowners aren't worried about whether a painter can put paint on a wall. They're
              worried about whether they'll show up, protect the house, communicate, clean up, stay on
              schedule, and finish what they started. That's the experience Refined Painting was built to
              fix.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div key={point.title} className="flex flex-col gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-teal/15 text-teal-dark">
                <point.icon className="size-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink/65">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
