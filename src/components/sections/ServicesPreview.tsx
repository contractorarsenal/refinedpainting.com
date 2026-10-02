import { Building2, Hammer, Home, Layers, PaintRoller, TreeDeciduous } from "lucide-react";
import type { ServiceId } from "../../lib/content";
import { services } from "../../lib/content";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const serviceIcons: Record<ServiceId, typeof Home> = {
  interior: Home,
  exterior: PaintRoller,
  cabinets: Layers,
  commercial: Building2,
  "deck-fence": TreeDeciduous,
  carpentry: Hammer,
};

export function ServicesPreview() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Painting Services"
            title="Painting Services for Homes & Businesses"
            description="Six services, one standard of care — clear communication and careful prep on every job."
          />
          <LinkButton href="/services" variant="ghost" className="hidden shrink-0 sm:inline-flex">
            View All Services
          </LinkButton>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id];
            return (
              <Reveal key={service.id} delay={index * 60} className="flex flex-col items-start gap-2">
                <Icon className="size-6 text-teal-dark" aria-hidden />
                <span className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                  {service.title}
                </span>
              </Reveal>
            );
          })}
        </div>

        <LinkButton href="/services" variant="ghost" className="mt-10 w-full justify-center sm:hidden">
          View All Services
        </LinkButton>
      </Container>
    </section>
  );
}
