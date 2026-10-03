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
  { icon: Phone, label: "Phone", value: business.phone, href: business.phoneHref },
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
    "Get a free painting estimate from Refined Painting. Call (206) 258-7994 or request an estimate online — serving Seattle and the Eastside.",
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
      <ContactForm />

      <section className="bg-light-blue py-16 sm:py-20 lg:py-24">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex flex-col items-start gap-3 border-t border-ink/15 pt-6">
              <detail.icon className="size-6 text-teal-dark" aria-hidden />
              <span className="text-xs font-bold uppercase tracking-widest text-ink/50">{detail.label}</span>
              {detail.href ? (
                <a href={detail.href} className="font-display text-xl font-bold text-ink hover:text-teal-dark">
                  {detail.value}
                </a>
              ) : (
                <span className="font-display text-xl font-bold text-ink">{detail.value}</span>
              )}
            </div>
          ))}
        </Container>
      </section>

      <ServiceAreaStrip />

      <section className="bg-warm-white py-14 sm:py-16 lg:py-20">
        <Container className="mx-auto max-w-xl text-center">
          <span className="h-1 w-12 bg-crest mx-auto block" aria-hidden />
          <h2 className="mt-5 font-display text-2xl font-extrabold uppercase tracking-wide text-ink sm:text-3xl">
            {contactReassurance.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">{contactReassurance.body}</p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
