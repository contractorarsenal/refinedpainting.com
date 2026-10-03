import { Clock, MapPin, Phone } from "lucide-react";
import heroImage from "../assets/images/projects/interior-bright-finished.webp";
import { PageHero } from "../components/hero/PageHero";
import { ContactForm } from "../components/sections/ContactForm";
import { FinalCTA } from "../components/sections/FinalCTA";
import { ServiceAreaStrip } from "../components/sections/ServiceAreaStrip";
import { Container } from "../components/ui/Container";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { business, contactReassurance } from "../lib/content";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "Call Now", href: business.phoneHref },
  {
    icon: MapPin,
    label: "Address",
    value: `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
  },
  { icon: Clock, label: "Hours", value: business.hours },
];

export function ContactPage() {
  useDocumentMeta(
    "Contact Refined Painting | Free Estimate",
    "Get a free painting estimate from Refined Painting. Call now or request an estimate online, serving Seattle and the Eastside.",
  );

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Start Your Project"
        description="Send us a message below, or call us directly to talk through your project."
        image={heroImage}
        imageAlt="Freshly painted bedroom ready for move-in"
        height="compact"
      />

      <section className="bg-light-blue py-16 sm:py-20 lg:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Let&rsquo;s Talk</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
                Have a Question or Ready to Start?
              </h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-ink/70">
                Reach out to our team to get clear answers and a detailed painting quote you can feel
                confident about.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4 border-t border-ink/12 pt-5">
                  <detail.icon className="mt-0.5 size-5 shrink-0 text-crest" aria-hidden />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-ink/45">
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <a href={detail.href} className="font-display text-xl font-bold text-ink hover:text-teal-dark">
                        {detail.value}
                      </a>
                    ) : (
                      <span className="font-display text-xl font-bold text-ink">{detail.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-crest pt-5">
              <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                {contactReassurance.heading}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/65">{contactReassurance.body}</p>
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>

      <ServiceAreaStrip />
      <FinalCTA />
    </>
  );
}
