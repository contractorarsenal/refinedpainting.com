import { LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

// Real future categories, not fabricated post titles — this page is an
// honest placeholder until actual guides are written.
const plannedCategories = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Refinishing",
  "Color Ideas",
  "Seattle & PNW Painting Guidance",
  "Maintenance",
];

export function BlogPage() {
  useDocumentMeta(
    "Painting Tips & Ideas | Refined Painting",
    "Guides and ideas on interior, exterior and cabinet painting from Refined Painting, serving Seattle and the Eastside. Coming soon.",
  );

  return (
    <section className="bg-cream pb-16 pt-36 sm:pb-20 sm:pt-60 lg:pb-24">
      <Container className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Painting Tips &amp; Ideas</span>
        <h1 className="text-balance font-display text-3xl font-black uppercase leading-[0.98] text-ink sm:text-4xl lg:text-5xl">
          Guides &amp; Resources, Coming Soon
        </h1>
        <p className="max-w-md text-balance text-sm leading-relaxed text-ink/65 sm:text-base">
          We're building out real guidance on color, prep, and maintenance for Seattle homeowners.
          Here's what's planned:
        </p>

        <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {plannedCategories.map((category) => (
            <li
              key={category}
              className="border-2 border-ink/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-ink/70"
            >
              {category}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/projects" variant="outline-dark">
            See Our Work Instead
          </LinkButton>
          <LinkButton href="/contact" variant="primary">
            Ask Us a Question
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
