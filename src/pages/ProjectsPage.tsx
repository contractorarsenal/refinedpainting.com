import { ArrowRight, CheckCircle2, Layers, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { BeforeAfter } from "../components/sections/BeforeAfter";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Gallery } from "../components/sections/Gallery";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { GridTexture } from "../components/ui/Texture";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const qualityPoints = [
  {
    icon: Layers,
    title: "Meticulous Prep",
    description: "Every finish starts with careful surface prep, not shortcuts.",
  },
  {
    icon: CheckCircle2,
    title: "Premium Materials",
    description: "Benjamin Moore and Sherwin-Williams paints and coatings, chosen for durability.",
  },
  {
    icon: ShieldCheck,
    title: "5-Year Warranty",
    description: "Every project is backed by our workmanship warranty, reviewed at your walkthrough.",
  },
];

export function ProjectsPage() {
  useDocumentMeta(
    "Our Work | Refined Painting Projects",
    "Browse recent interior, exterior and cabinet painting projects from Refined Painting, plus real before-and-after comparisons.",
  );

  return (
    <>
      <section className="relative overflow-hidden bg-cream pb-16 pt-36 sm:pb-20 sm:pt-60 lg:pb-24">
        <GridTexture />
        <Container className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-crest">Project Index</span>
            <h1 className="mt-3 text-balance font-display text-4xl font-black uppercase leading-[0.96] text-ink sm:text-5xl">
              Real Homes, Real Work
            </h1>
            <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-ink/65 sm:text-lg">
              Explore recent interior, exterior, cabinet and specialty painting projects completed by Refined
              Painting. Click any photo for a closer look.
            </p>
          </Reveal>

          <Reveal delay={130} className="border border-ink/10 bg-cream-light p-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-crest">Every Project Is Backed By</span>
            <ul className="mt-3 flex flex-col gap-2.5 border-t border-ink/10 pt-3">
              <li className="text-sm font-bold text-ink">5-Year Workmanship Warranty</li>
              <li className="text-sm font-bold text-ink">Licensed &amp; Insured</li>
              <li className="text-sm font-bold text-ink">EPA Lead-Safe Certified</li>
            </ul>
          </Reveal>
        </Container>
      </section>

      <Gallery />
      <BeforeAfter />

      <section className="border-t border-ink/10 bg-sand py-14 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-crest">Craftsmanship Standard</span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-[0.98] text-ink sm:text-3xl">
              The Same Process, Every Project
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {qualityPoints.map((point, index) => (
              <Reveal key={point.title} delay={180 + index * 80}>
                <div className="border border-ink/10 bg-cream-light p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-crest">
                    Standard {String(index + 1).padStart(2, "0")}
                  </span>
                  <point.icon className="mt-2 size-5 text-teal-dark" aria-hidden />
                  <h3 className="mt-3 font-display text-base font-extrabold uppercase tracking-wide text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream py-10 sm:py-12">
        <Container className="flex flex-col items-center gap-2 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Looking for Ideas?</span>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 font-display text-lg font-extrabold uppercase tracking-wide text-ink transition-colors hover:text-crest sm:text-xl"
          >
            Explore Painting Tips &amp; Ideas
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Container>
      </section>

      <FinalCTA tone="navy" />
    </>
  );
}
