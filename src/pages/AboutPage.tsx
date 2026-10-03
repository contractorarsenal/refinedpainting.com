import heroImage from "../assets/images/projects/porch-yellow-door.webp";
import { FinalCTA } from "../components/sections/FinalCTA";
import { PNWDifference } from "../components/sections/PNWDifference";
import { ServiceAreaStrip } from "../components/sections/ServiceAreaStrip";
import { TrustStrip } from "../components/sections/TrustStrip";
import { WhyChooseRefined } from "../components/sections/WhyChooseRefined";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { aboutIntro, companyStory, howWeWork, mission, teamMembers, trustBullets, vision } from "../lib/content";

export function AboutPage() {
  useDocumentMeta(
    "About Refined Painting | Seattle & Eastside Painting Company",
    "Refined Painting is a licensed, insured and EPA Lead-Safe painting company serving Seattle and the Eastside, built around clear communication and careful prep.",
  );

  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="relative min-h-100 sm:min-h-120 lg:min-h-140">
          <img
            src={heroImage}
            alt="Covered porch with a bold yellow front door"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
        </div>

        <Container className="relative">
          <div className="relative -mt-20 max-w-lg rounded-xl bg-warm-white p-7 shadow-lift sm:-mt-24 sm:p-9">
            <span className="h-1 w-10 bg-crest" aria-hidden />
            <span className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-crest">
              About Refined Painting
            </span>
            <h1 className="mt-3 text-balance font-display text-3xl font-black uppercase leading-[0.96] text-ink sm:text-4xl">
              Clear Communication. Careful Preparation. High-End Results.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">{aboutIntro}</p>
          </div>
        </Container>
      </section>

      <section className="bg-ink pt-10 text-warm-white sm:pt-12">
        <Container className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 py-10 pr-0 lg:py-14 lg:pr-12">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">The Refined Pledge</span>
            <p className="text-balance font-display text-2xl font-extrabold leading-tight text-warm-white sm:text-3xl">
              &ldquo;{mission}&rdquo;
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-warm-white/55">{vision}</p>
            <div className="mt-2 border-t border-warm-white/10 pt-4 text-xs font-bold uppercase tracking-widest text-warm-white/40">
              Locally Owned &middot; King &amp; Snohomish Counties
            </div>
          </div>
          <div className="flex flex-col gap-5 border-t border-warm-white/10 py-10 lg:border-l lg:border-t-0 lg:py-14 lg:pl-12">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{companyStory.heading}</span>
            <div className="flex flex-col gap-3">
              {companyStory.paragraphs.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-warm-white/65">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-3 gap-4 border-t border-warm-white/10 pt-4">
              {trustBullets.slice(0, 3).map((bullet) => (
                <span key={bullet} className="text-[11px] font-bold uppercase leading-snug tracking-wide text-teal">
                  {bullet}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-warm-white py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">
                Architectural Craft Team
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
                Craftsmen at the Helm
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink/60">
              Direct field leadership on every residential project.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 100}>
                <div className="flex items-center gap-5 border-2 border-ink/10 p-5">
                  <div className="flex size-24 shrink-0 items-center justify-center rounded-xl bg-light-blue text-3xl font-black text-teal-dark sm:size-28">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <span className="font-display text-xl font-extrabold uppercase tracking-wide text-ink">
                      {member.name}
                    </span>
                    <span className="mt-1 block text-xs font-bold uppercase tracking-widest text-ink/45">
                      Refined Painting
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseRefined />
      <PNWDifference />

      <section className="border-t border-ink/10 bg-ink py-14 text-warm-white sm:py-16 lg:py-20">
        <Container>
          <SectionHeading align="center" tone="light" eyebrow="How We Work" title="Our Standard" className="mx-auto" />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
            {howWeWork.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="border-t-2 border-crest pt-4 text-center sm:text-left">
                  <span className="font-display text-sm font-black text-crest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-base font-extrabold uppercase tracking-wide text-warm-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-white/60">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TrustStrip />
      <ServiceAreaStrip />
      <FinalCTA />
    </>
  );
}
