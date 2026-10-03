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
import { aboutIntro, companyStory, coreValues, howWeWork, mission, teamMembers, vision } from "../lib/content";

export function AboutPage() {
  useDocumentMeta(
    "About Refined Painting | Seattle & Eastside Painting Company",
    "Refined Painting is a licensed, insured and EPA Lead-Safe painting company serving Seattle and the Eastside, built around clear communication and careful prep.",
  );

  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="relative min-h-120 sm:min-h-140 lg:min-h-160">
          <img
            src={heroImage}
            alt="Covered porch with a bold yellow front door"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
        </div>

        <Container className="relative">
          <div className="relative -mt-24 max-w-md rounded-xl bg-warm-white p-7 shadow-lift sm:-mt-28 sm:p-9 lg:-mt-32">
            <span className="h-1 w-10 bg-crest" aria-hidden />
            <span className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-crest">
              About Refined Painting
            </span>
            <h1 className="mt-3 text-balance font-display text-3xl font-black uppercase leading-[0.96] text-ink sm:text-4xl">
              Clear Communication. Careful Preparation. High-End Results.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">{aboutIntro}</p>
          </div>
          <div className="h-12 sm:h-16 lg:h-10" aria-hidden />
        </Container>
      </section>

      <section className="bg-warm-white py-16 sm:py-20 lg:py-24">
        <Container className="mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{companyStory.heading}</span>
          <div className="mt-4 flex flex-col gap-4">
            {companyStory.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ink/70">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-ink text-warm-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 py-16 pr-0 sm:py-20 lg:py-24 lg:pr-12">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Our Philosophy</span>
            <p className="text-balance font-display text-3xl font-extrabold leading-tight text-warm-white sm:text-4xl">
              {mission}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-warm-white/60">{vision}</p>
          </div>
          <div className="flex flex-col gap-8 border-t border-warm-white/10 py-16 lg:border-l lg:border-t-0 lg:py-24 lg:pl-12">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Our Approach</span>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {coreValues.map((value, index) => (
                <Reveal key={value.title} delay={index * 80} className="border-t-2 border-crest pt-4">
                  <h3 className="font-display text-base font-extrabold uppercase tracking-wide text-warm-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-white/60">{value.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-warm-white py-16 sm:py-20 lg:py-24">
        <Container className="text-center">
          <SectionHeading
            align="center"
            eyebrow="The People Behind the Work"
            title="Meet the Team"
            className="mx-auto"
          />
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-10 sm:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 100}>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-light-blue text-4xl font-black text-teal-dark">
                    {member.name.charAt(0)}
                  </div>
                  <span className="font-display text-base font-extrabold uppercase tracking-wide text-ink">
                    {member.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseRefined />
      <PNWDifference />

      <section className="border-t border-ink/10 bg-ink py-16 text-warm-white sm:py-20 lg:py-24">
        <Container>
          <SectionHeading align="center" tone="light" eyebrow="How We Work" title="Our Standard" className="mx-auto" />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
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
