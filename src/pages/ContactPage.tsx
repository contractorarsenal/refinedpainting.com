import { Clock, MapPin, ShieldCheck } from "lucide-react";
import interiorPhoto from "../assets/images/projects/interior-bright-finished.webp";
import { ContactForm } from "../components/sections/ContactForm";
import { ServiceAreaStrip } from "../components/sections/ServiceAreaStrip";
import { TrustStrip } from "../components/sections/TrustStrip";
import { LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { ProjectImage } from "../components/ui/ProjectImage";
import { Reveal } from "../components/ui/Reveal";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { business, contactReassurance } from "../lib/content";

const verifiedProof = ["Licensed & Insured", "EPA Lead-Safe Certified", "5-Year Workmanship Warranty"];

export function ContactPage() {
  useDocumentMeta(
    "Contact Refined Painting | Free Estimate",
    "Get a free painting estimate from Refined Painting. Call now or request an estimate online, serving Seattle and the Eastside.",
  );

  return (
    <>
      <section className="bg-cream pb-10 pt-36 sm:pb-12 sm:pt-60 lg:pb-14">
        <Container className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Start Your Project</span>
            <h1 className="mt-3 text-balance font-display text-4xl font-black uppercase leading-[0.96] text-ink sm:text-5xl">
              Let&rsquo;s Talk Through <span className="text-teal-dark">Your Project</span>
            </h1>
            <p className="mt-4 max-w-md text-balance text-base leading-relaxed text-ink/70 sm:text-lg">
              Send us a message below, or call us directly to talk through your project.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t-2 border-crest bg-light-blue py-12 sm:py-14 lg:py-16">
        {/* Mobile stacks in source order, so the form sits right after a short
            trust/CTA block instead of behind the full info stack — the longer
            address/hours/next-steps/photo block moves below the form. Desktop
            uses explicit grid placement to keep the familiar two-column split. */}
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-x-14 lg:gap-y-10">
          <div className="flex flex-col gap-5 lg:col-start-1 lg:row-start-1">
            <Reveal>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink/50">
                <ShieldCheck className="size-4 text-crest" aria-hidden />
                Verified &amp; Approved
                <span className="ml-auto flex items-center gap-1.5 text-[11px] font-bold uppercase text-teal-dark">
                  <span className="size-1.5 rounded-full bg-teal-dark" aria-hidden />
                  Available Now
                </span>
              </div>
            </Reveal>
            <Reveal delay={40}>
              <ul className="flex flex-col gap-2 border-t border-ink/10 pt-4">
                {verifiedProof.map((item) => (
                  <li key={item} className="text-sm font-bold text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={90}>
              <div className="border-t border-ink/10 pt-5">
                <LinkButton
                  href={business.phoneHref}
                  variant="secondary"
                  size="lg"
                  icon="phone"
                  className="w-full justify-center"
                >
                  Call Now
                </LinkButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <ContactForm />
          </Reveal>

          <div className="flex flex-col gap-5 lg:col-start-1 lg:row-start-2">
            <Reveal delay={140}>
              <div className="flex items-start gap-3 border-t border-ink/10 pt-5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-crest" aria-hidden />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-ink/45">Office</span>
                  <span className="text-sm font-bold text-ink">
                    {business.address.street}, {business.address.city}, {business.address.state}{" "}
                    {business.address.zip}
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={190}>
              <div className="flex items-start gap-3 border-t border-ink/10 pt-5">
                <Clock className="mt-0.5 size-4 shrink-0 text-crest" aria-hidden />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-ink/45">Hours</span>
                  <span className="text-sm font-bold text-ink">{business.hours}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="border-t-2 border-crest bg-cream-light p-5">
                <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                  {contactReassurance.heading}
                </h3>
                <ol className="mt-4 flex flex-col gap-3">
                  {[
                    "Submit the form with a few details about your project.",
                    "Our team typically reaches out within one business day.",
                    "You're not committing to anything. You're starting a conversation.",
                  ].map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-crest text-[11px] font-bold text-warm-white">
                        {index + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-ink/65">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={290}>
              <div className="aspect-4/3 w-full overflow-hidden rounded-xl shadow-card">
                <ProjectImage src={interiorPhoto} alt="Freshly painted interior room ready for a walkthrough" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <TrustStrip />
      <ServiceAreaStrip />
    </>
  );
}
