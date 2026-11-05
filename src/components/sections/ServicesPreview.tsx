import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { photoCardServices, ServicePhotoCard } from "./ServicePhotoCard";

export function ServicesPreview() {
  return (
    <section id="services-preview" className="bg-cream-light py-10 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Choose Your Project"
          title="What Do You Need Done?"
          description="Five services, one standard of care: clear communication and careful prep on every job."
          className="mx-auto"
        />

        <ul className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">
          {photoCardServices.map((service, index) => (
            <Reveal key={service.id} as="li" delay={index * 60} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.85rem)]">
              <ServicePhotoCard serviceId={service.id} />
            </Reveal>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 border-b-2 border-crest pb-1 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-crest"
          >
            Not Sure Which One You Need? See All Services
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
