import { Check } from "lucide-react";
import { FinalCTA } from "../components/sections/FinalCTA";
import { ServiceAreaStrip } from "../components/sections/ServiceAreaStrip";
import { TrustStrip } from "../components/sections/TrustStrip";
import { Container } from "../components/ui/Container";
import gloriaPhoto from "../assets/images/team/gloria-customer-service.webp";
import mariaPhoto from "../assets/images/team/maria-project-coordinator-portrait.webp";
import { TeamProfileCard } from "../components/ui/TeamProfileCard";
import { Reveal } from "../components/ui/Reveal";
import { GridTexture, LineTexture } from "../components/ui/Texture";
import { PageSEO } from "../components/seo/PageSEO";
import {
  aboutIntro,
  companyStory,
  coreValues,
  localPartnerBullets,
  mission,
  SITE_URL,
  trustBullets,
  vision,
  teamMembers,
} from "../lib/content";

export function AboutPage() {
  return (
    <>
      <PageSEO
        title="About Refined Painting | Seattle & Eastside Painting Company"
        description="Refined Painting is a licensed, insured and EPA Lead-Safe painting company serving Seattle and the Eastside, built around clear communication and careful prep."
        canonical={`${SITE_URL}/about`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
            ],
          },
        ]}
      />
      {/* F1 — Strong company positioning */}
      <section className="relative overflow-hidden bg-cream pb-12 pt-36 sm:pb-20 sm:pt-60 lg:pb-24">
        <GridTexture />
        <Container className="relative flex flex-col items-center gap-5 text-center">
          <Reveal className="flex flex-col items-center gap-5">
            <span className="h-1 w-10 bg-crest" aria-hidden />
            <span className="block text-xs font-bold uppercase tracking-[0.16em] text-crest">
              About Refined Painting
            </span>
            <h1 className="max-w-3xl text-balance font-display text-3xl font-black uppercase leading-[0.96] text-ink sm:text-4xl lg:text-5xl">
              Clear Communication. Careful Preparation. High-End Results.
            </h1>
            <p className="max-w-xl text-balance text-sm leading-relaxed text-ink/70 sm:text-base">{aboutIntro}</p>
            <p className="border-t border-ink/10 pt-5 text-xs font-bold uppercase tracking-wide text-ink/45">
              {trustBullets.slice(0, 3).join(" · ")}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The Refined Pledge sits directly below the introduction, as the page's focal statement. */}
      <section className="bg-ink py-14 text-warm-white sm:py-20 lg:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <span className="h-1 w-16 bg-crest" aria-hidden />
          <h2 className="font-display text-2xl font-black uppercase tracking-wide text-teal sm:text-3xl">The Refined Pledge</h2>
          <p className="max-w-4xl text-balance font-display text-3xl font-extrabold uppercase leading-[1.02] text-warm-white sm:text-4xl lg:text-5xl">
            &ldquo;{mission}&rdquo;
          </p>
          <p className="max-w-xl text-balance text-base leading-relaxed text-warm-white/75">{vision}</p>
          <p className="border-t border-warm-white/15 pt-5 text-xs font-bold uppercase tracking-widest text-warm-white/55">
            Locally Owned &middot; King &amp; Snohomish Counties
          </p>
        </Container>
      </section>

      {/* Team cards: full-size portraits with name, role, and description. */}
      <section className="border-t border-ink/10 bg-cream-light py-12 sm:py-16 lg:py-20">
        <Container className="flex flex-col items-center gap-10">
          <h2 className="text-center font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
            Who You Will Work With
          </h2>
          <div className="grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8">
            <TeamProfileCard
              name={teamMembers.gloria.name}
              role={teamMembers.gloria.role}
              blurb={teamMembers.gloria.blurb}
              photo={gloriaPhoto}
              objectPosition="43% 50%"
            />
            <TeamProfileCard
              name={teamMembers.maria.name}
              role={teamMembers.maria.role}
              blurb={teamMembers.maria.blurb}
              photo={mariaPhoto}
              objectPosition="50% 50%"
            />
          </div>
        </Container>
      </section>

      {/* Company story: the Pledge now sits near the top of the page, so this section keeps the story and trust points only. */}
      <section className="border-t border-ink/10 bg-cream py-12 sm:py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <h2 className="text-balance font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
              {companyStory.heading}
            </h2>
          </Reveal>
          <Reveal delay={130} className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {companyStory.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-3 border-t border-ink/10 pt-5 sm:grid-cols-3 sm:gap-4">
              {trustBullets.slice(0, 3).map((bullet) => (
                <span key={bullet} className="text-[11px] font-bold uppercase leading-snug tracking-wide text-ink/80">
                  {bullet}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* F3 — How we think about the work */}
      <section className="border-t border-ink/10 bg-cream-light py-10 sm:py-20 lg:py-24">
        <Container>
          <Reveal className="flex flex-col items-start gap-3 border-b border-ink/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-crest">Our Standards</span>
              <h2 className="mt-2 text-balance font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
                How We Think About the Work
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink/60">
              Four principles every project is run against, from the first estimate to the final coat.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <Reveal key={value.title} delay={180 + index * 80}>
                <div className="border-t-2 border-crest pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40">
                    Standard {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1.5 font-display text-base font-extrabold uppercase tracking-wide text-ink sm:text-lg">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* F5 — What you can expect from us (practical, homeowner-facing standards) */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-ink py-10 text-warm-white sm:py-20 lg:py-24">
        <LineTexture tone="warm-white" className="opacity-50" />
        <Container className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">With Our Team in Your Home</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.98] text-warm-white sm:text-4xl">
              What You Can Expect From Us
            </h2>
          </Reveal>
          <ul className="mx-auto mt-8 flex max-w-sm flex-col gap-3 text-left sm:max-w-md">
            {localPartnerBullets.map((item, index) => (
              <Reveal
                key={item}
                as="li"
                delay={180 + index * 60}
                className="flex items-center gap-3 border-t border-warm-white/10 pt-3 first:border-t-0 first:pt-0"
              >
                <Check className="size-4 shrink-0 text-crest" aria-hidden />
                <span className="text-sm font-semibold text-warm-white/85 sm:text-base">{item}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* F6 — Local / certifications / service areas */}
      <TrustStrip />
      <ServiceAreaStrip />

      {/* F7 — CTA */}
      <FinalCTA tone="navy" />
    </>
  );
}
