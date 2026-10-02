import { Clock, MapPin, Phone } from "lucide-react";
import heroImage from "../assets/images/projects/interior-bright-finished.webp";
import { PageHero } from "../components/hero/PageHero";
import { DontKnowWhereToStart } from "../components/sections/DontKnowWhereToStart";
import { FinalCTA } from "../components/sections/FinalCTA";
import { ServiceAreaStrip } from "../components/sections/ServiceAreaStrip";
import { Container } from "../components/ui/Container";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { business } from "../lib/content";

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
    "Get a free painting estimate from Refined Painting. Call (206) 672-2571 or request an estimate online — serving Seattle and the Eastside.",
  );

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Start Your Project"
        description="Request a free estimate online, or call us directly to talk through your project."
        image={heroImage}
        imageAlt="Freshly painted bedroom ready for move-in"
        height="compact"
      />
      <DontKnowWhereToStart />

      <section className="bg-warm-white py-16 sm:py-20 lg:py-24">
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
      <FinalCTA />
    </>
  );
}
