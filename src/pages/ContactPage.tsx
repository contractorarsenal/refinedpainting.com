import { Clock, MapPin, ShieldCheck } from "lucide-react";
import interiorPhoto from "../assets/images/projects/interior-bright-finished.webp";
import { ContactForm } from "../components/sections/ContactForm";
import { ServiceAreaStrip } from "../components/sections/ServiceAreaStrip";
import { TrustStrip } from "../components/sections/TrustStrip";
import { LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { ProjectImage } from "../components/ui/ProjectImage";
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
      <section className="bg-cream pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-28">
        <Container className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Start Your Project</span>
            <h1 className="mt-3 text-balance font-display text-4xl font-black uppercase leading-[0.96] text-ink sm:text-5xl">
              Let&rsquo;s Talk Through <span className="text-teal-dark">Your Project</span>
            </h1>
            <p className="mt-4 max-w-md text-balance text-base leading-relaxed text-ink/70 sm:text-lg">
              Send us a message below, or call us directly to talk through your project.
            </p>
          </div>

          <div className="border-2 border-ink/10 bg-warm-white p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink/50">
              <ShieldCheck className="size-4 text-crest" aria-hidden />
              Verified &amp; Approved
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {verifiedProof.map((item) => (
                <li key={item} className="text-sm font-bold text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-light-blue py-14 sm:py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-ink/45">Direct Line</span>
                <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-teal-dark">
                  <span className="size-1.5 rounded-full bg-teal-dark" aria-hidden />
                  Available Now
                </span>
              </div>
              <LinkButton
                href={business.phoneHref}
                variant="secondary"
                size="lg"
                icon="phone"
                className="mt-3 w-full justify-center"
              >
                Call Now
              </LinkButton>
            </div>

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
            <div className="flex items-start gap-3 border-t border-ink/10 pt-5">
              <Clock className="mt-0.5 size-4 shrink-0 text-crest" aria-hidden />
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-ink/45">Hours</span>
                <span className="text-sm font-bold text-ink">{business.hours}</span>
              </div>
            </div>

            <div className="border-t-2 border-crest bg-warm-white p-5">
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

            <div className="aspect-4/3 w-full overflow-hidden rounded-xl shadow-card">
              <ProjectImage src={interiorPhoto} alt="Freshly painted interior room ready for a walkthrough" />
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>

      <TrustStrip />
      <ServiceAreaStrip />
    </>
  );
}
