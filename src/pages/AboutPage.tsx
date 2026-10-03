import heroImage from "../assets/images/projects/porch-yellow-door.webp";
import { PageHero } from "../components/hero/PageHero";
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
      <PageHero
        eyebrow="About Us"
        title="About Refined Painting"
        description="Licensed, insured and EPA Lead-Safe, serving Seattle and the Eastside with clear communication and careful prep on every project."
        image={heroImage}
        imageAlt="Covered porch with a bold yellow front door"
      />

      <section className="bg-warm-white py-16 sm:py-20 lg:py-24">
        <Container className="mx-auto max-w-3xl">
          <p className="text-balance text-center font-display text-xl font-semibold leading-snug text-ink/80 sm:text-2xl">
            {aboutIntro}
          </p>

          <div className="mt-12 border-t border-ink/10 pt-10">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{companyStory.heading}</span>
            <div className="mt-4 flex flex-col gap-4">
              {companyStory.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-ink/70">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 border-b border-ink/10 pb-12 sm:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Our Mission</span>
              <p className="mt-3 font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                {mission}
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Our Vision</span>
              <p className="mt-3 font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                {vision}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <SectionHeading align="center" eyebrow="What We Stand On" title="Core Values" className="mx-auto" />
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value, index) => (
                <div key={value.title} className="border-t-2 border-crest pt-4">
                  <span className="font-display text-sm font-black text-crest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-base font-extrabold uppercase tracking-wide text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{value.description}</p>
                </div>
              ))}
            </div>
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

      <TrustStrip />
      <ServiceAreaStrip />
      <FinalCTA />
    </>
  );
}
