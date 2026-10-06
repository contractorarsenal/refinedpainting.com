import { BookOpen, Droplets, Hammer, Home, PaintRoller, Sun } from "lucide-react";
import { LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

// Real future categories, not fabricated post titles — this page is an
// honest placeholder until actual guides are written.
const plannedCategories = [
  { label: "Interior Painting", icon: Home },
  { label: "Exterior Painting", icon: PaintRoller },
  { label: "Cabinet Refinishing", icon: BookOpen },
  { label: "Color Ideas", icon: Sun },
  { label: "Seattle & PNW Painting Guidance", icon: Droplets },
  { label: "Maintenance", icon: Hammer },
];

export function BlogPage() {
  useDocumentMeta(
    "Painting Tips & Ideas | Refined Painting",
    "Guides and ideas on interior, exterior and cabinet painting from Refined Painting, serving Seattle and the Eastside. Coming soon.",
  );

  return (
    <section className="bg-cream pb-16 pt-36 sm:pb-20 sm:pt-60 lg:pb-24">
      <Container>
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Painting Tips &amp; Ideas</span>
          <h1 className="mt-3 text-balance font-display text-3xl font-black uppercase leading-[0.96] text-ink sm:text-4xl lg:text-5xl">
            Guides &amp; Resources, Coming Soon
          </h1>
          <p className="mt-4 max-w-md text-balance text-sm leading-relaxed text-ink/65 sm:text-base">
            We're building out real guidance on color, prep, and maintenance for Seattle homeowners.
            Here's what's planned.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-3">
          {plannedCategories.map((category, index) => (
            <Reveal key={category.label} delay={index * 60}>
              <div className="flex flex-col items-start gap-2.5 border-t-2 border-ink/15 pt-4">
                <category.icon className="size-6 text-teal-dark" aria-hidden />
                <span className="font-display text-sm font-extrabold uppercase leading-tight tracking-wide text-ink sm:text-base">
                  {category.label}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-ink/35">Coming Soon</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink/10 pt-10 sm:flex-row">
          <LinkButton href="/projects" variant="outline-dark">
            View Projects
          </LinkButton>
          <LinkButton href="/contact" variant="primary">
            Contact Us
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
