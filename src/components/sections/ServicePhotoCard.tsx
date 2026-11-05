import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cabinetsPhoto from "../../assets/images/projects/cabinets-sage-green.webp";
import { coverPhoto } from "../../content/projects/projects";
import type { ServiceId } from "../../lib/content";
import { serviceSlugs, services } from "../../lib/content";
import { ProjectImage } from "../ui/ProjectImage";

// One card treatment for every visible service: landscape photo, restrained
// radius, title over a bottom gradient. Commercial stays out of promotion
// (same as the services grid on /services) because no commercial project
// photography exists yet.
// These are service illustrations. Each photo shows a visible subject only and does
// not claim the pictured work was done for a specific service, or in a specific city.
const interiorPhoto = coverPhoto("blue-walls-orange-ceiling-kitchen");
const exteriorPhoto = coverPhoto("blue-craftsman-screened-porch");
const deckPhoto = coverPhoto("shingle-siding-exterior");
const carpentryPhoto = coverPhoto("kitchen-exposed-beams-brick-wall");

// `position` keeps the important subject inside the 4:3 crop of a portrait photo.
const serviceImages: Partial<Record<ServiceId, { src: string; alt: string; position?: string }>> = {
  interior: { src: interiorPhoto.sm, alt: interiorPhoto.alt },
  exterior: { src: exteriorPhoto.sm, alt: exteriorPhoto.alt },
  cabinets: { src: cabinetsPhoto, alt: "Kitchen cabinets refinished in sage green" },
  "deck-fence": { src: deckPhoto.sm, alt: deckPhoto.alt, position: "object-[50%_35%]" },
  carpentry: { src: carpentryPhoto.sm, alt: carpentryPhoto.alt, position: "object-[50%_20%]" },
};

/** The services shown as photo cards (every service except commercial). */
export const photoCardServices = services.filter((s) => s.id !== "commercial");

export function ServicePhotoCard({ serviceId }: { serviceId: ServiceId }) {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return null;
  const image = serviceImages[service.id] ?? { src: "", alt: "" };
  return (
    <Link
      to={`/services/${serviceSlugs[service.id]}`}
      className="group relative block overflow-hidden rounded-lg border border-ink/10 bg-ink transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="aspect-4/3 w-full overflow-hidden">
        <ProjectImage
          src={image.src}
          alt={image.alt}
          className={`transition-transform duration-700 ease-out group-hover:scale-105 ${image.position ?? ""}`}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
        <span className="font-display text-xl font-extrabold uppercase leading-tight tracking-wide text-warm-white sm:text-2xl">
          {service.title}
        </span>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-warm-white/15 text-warm-white transition-colors group-hover:bg-crest">
          <ArrowRight className="size-4" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
