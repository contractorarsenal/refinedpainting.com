import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceDetails, serviceSlugs, services } from "../../lib/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function ServicesPreview() {
  return (
    <section id="services-preview" className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Painting Services"
            title="Painting Services for Homes & Businesses"
            description="Six services, one standard of care — clear communication and careful prep on every job."
          />
          <Link
            to="/services"
            className="hidden shrink-0 items-center gap-1.5 border-b-2 border-crest pb-1 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-crest sm:flex"
          >
            View All Services
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 60}>
              <Link
                to={`/services/${serviceSlugs[service.id]}`}
                className="group flex items-baseline gap-4 border-t-2 border-ink/10 pt-5 transition-colors hover:border-crest"
              >
                <span className="font-display text-sm font-black text-crest/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-ink transition-colors group-hover:text-crest sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink/60">
                    {serviceDetails[service.id].overview}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link
          to="/services"
          className="mt-10 flex w-full items-center justify-center gap-1.5 border-2 border-ink/15 py-3.5 text-sm font-bold uppercase tracking-wide text-ink sm:hidden"
        >
          View All Services
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Container>
    </section>
  );
}
