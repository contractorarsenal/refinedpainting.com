import { serviceSlugs, services } from "../../lib/content";
import { Container } from "../ui/Container";

export function ServiceJumpNav() {
  return (
    <nav aria-label="Jump to service" className="border-b border-ink/10 bg-warm-white">
      <Container>
        <div className="flex gap-6 overflow-x-auto py-4 text-xs font-bold uppercase tracking-wide text-ink/60 scrollbar-none">
          <a href="#cabinet-refinishing" className="shrink-0 transition-colors hover:text-crest">
            All Services
          </a>
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${serviceSlugs[service.id]}`}
              className="shrink-0 transition-colors hover:text-crest"
            >
              {service.title}
            </a>
          ))}
        </div>
      </Container>
    </nav>
  );
}
