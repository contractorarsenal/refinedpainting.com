import { Check } from "lucide-react";
import { FinalCTA } from "../components/sections/FinalCTA";
import { ServiceAreaStrip } from "../components/sections/ServiceAreaStrip";
import { TrustStrip } from "../components/sections/TrustStrip";
import { Container } from "../components/ui/Container";
import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";
import { Reveal } from "../components/ui/Reveal";
import { GridTexture, LineTexture } from "../components/ui/Texture";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import {
  aboutIntro,
  companyStory,
  coreValues,
  localPartnerBullets,
  mission,
  teamMembers,
  trustBullets,
  vision,
} from "../lib/content";

export function AboutPage() {
  useDocumentMeta(
    "About Refined Painting | Seattle & Eastside Painting Company",
    "Refined Painting is a licensed, insured and EPA Lead-Safe painting company serving Seattle and the Eastside, built around clear communication and careful prep.",
  );

  return (
    <>
      {/* F1 — Strong company positioning */}
      <section className="relative overflow-hidden bg-cream pb-16 pt-36 sm:pb-20 sm:pt-60 lg:pb-24">
        <GridTexture />
        <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <Reveal>
            <span className="h-1 w-10 bg-crest" aria-hidden />
            <span className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-crest">
              About Refined Painting
            </span>
            <h1 className="mt-3 text-balance font-display text-3xl font-black uppercase leading-[0.96] text-ink sm:text-4xl lg:text-5xl">
              Clear Communication. Careful Preparation. High-End Results.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70 sm:text-base">{aboutIntro}</p>
            <p className="mt-6 border-t border-ink/10 pt-5 text-xs font-bold uppercase tracking-wide text-ink/45">
              {trustBullets.slice(0, 3).join(" · ")}
            </p>
          </Reveal>

          <Reveal delay={130} className="max-w-md lg:justify-self-end">
            <ImagePlaceholder label="Team Photo Coming Soon" aspectClassName="aspect-4/3" />
          </Reveal>
        </Container>
      </section>

      {/* F2 — Why Refined exists / approved story */}
      <section className="bg-ink pt-12 text-warm-white sm:pt-14 lg:pt-16">
        <Container className="grid grid-cols-1 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6 py-10 pr-0 lg:py-16 lg:pr-12">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">The Refined Pledge</span>
            <p className="text-balance font-display text-2xl font-extrabold leading-tight text-warm-white sm:text-3xl">
              &ldquo;{mission}&rdquo;
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-warm-white/55">{vision}</p>
            <div className="mt-auto border-t border-warm-white/10 pt-5 text-xs font-bold uppercase tracking-widest text-warm-white/40">
              Locally Owned &middot; King &amp; Snohomish Counties
            </div>
          </Reveal>
          <Reveal
            delay={130}
            className="flex flex-col gap-6 border-t border-warm-white/10 py-10 lg:border-l lg:border-t-0 lg:py-16 lg:pl-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{companyStory.heading}</span>
            <div className="flex flex-col gap-4">
              {companyStory.paragraphs.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-warm-white/65">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-3 gap-4 border-t border-warm-white/10 pt-5">
              {trustBullets.slice(0, 3).map((bullet) => (
                <span key={bullet} className="text-[11px] font-bold uppercase leading-snug tracking-wide text-teal">
                  {bullet}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* F3 — How we think about the work */}
      <section className="border-t border-ink/10 bg-cream-light py-16 sm:py-20 lg:py-24">
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
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/40">
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

      {/* F4 — Team */}
      <section className="border-t border-ink/10 bg-cream py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-crest">
                  Architectural Craft Team
                </span>
                <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
                  Craftsmen at the Helm
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
                  The people behind the work and communication on your project.
                </p>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-ink/60">
                Direct field leadership on every residential project.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={180 + index * 100}>
                <div className="flex items-center gap-5 border border-ink/10 bg-cream-light p-5">
                  <div className="flex size-24 shrink-0 items-center justify-center bg-ink text-3xl font-black text-teal sm:size-28">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-crest">
                      Craft Team {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block font-display text-xl font-extrabold uppercase tracking-wide text-ink">
                      {member.name}
                    </span>
                    <span className="mt-0.5 block text-xs font-bold uppercase tracking-widest text-ink/45">
                      Refined Painting
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* F5 — What you can expect from us (practical, homeowner-facing standards) */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-ink py-16 text-warm-white sm:py-20 lg:py-24">
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
