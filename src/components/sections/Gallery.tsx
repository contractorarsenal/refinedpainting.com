import cabinetsPhoto from "../../assets/images/projects/cabinets-sage-green.webp";
import afterPink from "../../assets/images/projects/exterior-after-pink.jpg";
import afterWhite from "../../assets/images/projects/exterior-after-white.jpg";
import inProgressPhoto from "../../assets/images/projects/exterior-in-progress.webp";
import interiorBright from "../../assets/images/projects/interior-bright-finished.webp";
import interiorEmpty from "../../assets/images/projects/interior-empty-room.webp";
import kitchenPhoto from "../../assets/images/projects/kitchen-blue-accent.webp";
import porchPhoto from "../../assets/images/projects/porch-yellow-door.webp";
import { useState } from "react";
import { ProjectLightbox } from "../projects/ProjectLightbox";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/**
 * Structured so a future project detail route can key off `id` without
 * reshaping this data. `category` lines up with ServiceId for when these
 * link out to /projects/[id] or filter by service.
 */
export interface ProjectEntry {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  feature?: boolean;
}

const projects: ProjectEntry[] = [
  {
    id: "exterior-pink",
    title: "Exterior Color Change",
    category: "Exterior Painting",
    image: afterPink,
    alt: "Home exterior finished in a soft blush tone",
    feature: true,
  },
  {
    id: "interior-bright",
    title: "Interior Refresh",
    category: "Interior Painting",
    image: interiorBright,
    alt: "Bright, finished interior room with hardwood floors",
  },
  {
    id: "cabinets-sage",
    title: "Cabinet Refinishing",
    category: "Cabinet Refinishing",
    image: cabinetsPhoto,
    alt: "Kitchen cabinets refinished in sage green",
  },
  {
    id: "exterior-white",
    title: "Full Exterior Repaint",
    category: "Exterior Painting",
    image: afterWhite,
    alt: "Home exterior finished in crisp white",
  },
  {
    id: "kitchen-accent",
    title: "Accent Wall",
    category: "Interior Painting",
    image: kitchenPhoto,
    alt: "Kitchen with a painted blue accent wall",
  },
  {
    id: "porch-entry",
    title: "Porch & Entry",
    category: "Exterior Painting",
    image: porchPhoto,
    alt: "Covered porch with a bold yellow front door",
  },
  {
    id: "exterior-in-progress",
    title: "Exterior In Progress",
    category: "Exterior Painting",
    image: inProgressPhoto,
    alt: "Exterior siding mid-repaint with protective covering",
  },
  {
    id: "interior-empty",
    title: "Interior Refresh",
    category: "Interior Painting",
    image: interiorEmpty,
    alt: "Freshly painted bedroom ready for move-in",
  },
];

const feature = projects.find((p) => p.feature) ?? projects[0];
const rest = projects.filter((p) => p.id !== feature.id);
const orderedProjects = [feature, ...rest];

function ProjectFigure({
  project,
  aspect = "aspect-4/3",
  onClick,
}: {
  project: ProjectEntry;
  aspect?: string;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className="group block w-full text-left">
      <figure>
        <div className={`relative ${aspect} w-full overflow-hidden bg-ink/5`}>
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" aria-hidden />
        </div>
        <figcaption className="mt-3 flex items-baseline justify-between gap-3">
          <span className="font-display text-base font-bold uppercase tracking-wide text-ink transition-colors group-hover:text-crest">
            {project.title}
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-ink/45 transition-colors group-hover:text-crest">
            {project.category}
          </span>
        </figcaption>
      </figure>
    </button>
  );
}

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-off-white pb-10 pt-16 sm:pb-12 sm:pt-20 lg:pb-16 lg:pt-24">
      <Container>
        <Reveal>
          <ProjectFigure
            project={feature}
            aspect="aspect-4/3 sm:aspect-16/9 lg:aspect-21/9"
            onClick={() => setActiveIndex(0)}
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index, 4) * 60}>
              <ProjectFigure project={project} onClick={() => setActiveIndex(index + 1)} />
            </Reveal>
          ))}
        </div>
      </Container>

      {activeIndex !== null ? (
        <ProjectLightbox
          projects={orderedProjects}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      ) : null}
    </section>
  );
}
