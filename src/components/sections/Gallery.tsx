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

// Only categories that real project photos actually exist for, with real counts.
const filters = ["All", "Interior Painting", "Exterior Painting", "Cabinet Refinishing"] as const;
const filterCounts: Record<(typeof filters)[number], number> = {
  All: projects.length,
  "Interior Painting": projects.filter((p) => p.category === "Interior Painting").length,
  "Exterior Painting": projects.filter((p) => p.category === "Exterior Painting").length,
  "Cabinet Refinishing": projects.filter((p) => p.category === "Cabinet Refinishing").length,
};

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
        <div className={`relative ${aspect} w-full overflow-hidden rounded-xl bg-ink/5`}>
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" aria-hidden />
        </div>
        <figcaption className="mt-3 flex flex-col gap-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-crest">{project.category}</span>
          <span className="font-display text-base font-bold uppercase tracking-wide text-ink transition-colors group-hover:text-crest">
            {project.title}
          </span>
        </figcaption>
      </figure>
    </button>
  );
}

export function Gallery() {
  const [lightboxProjects, setLightboxProjects] = useState<ProjectEntry[] | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = filter === "All" ? orderedProjects : orderedProjects.filter((p) => p.category === filter);
  const showFeature = filter === "All";

  // Scope the lightbox to the clicked project's own category, regardless of
  // which gallery filter tab is active, so Prev/Next inside the viewer only
  // ever shows photos from that same category.
  const openProject = (project: ProjectEntry) => {
    const sameCategory = orderedProjects.filter((p) => p.category === project.category);
    setLightboxProjects(sameCategory);
    setActiveIndex(sameCategory.findIndex((p) => p.id === project.id));
  };

  return (
    <section className="bg-off-white pb-10 pt-10 sm:pb-12 lg:pb-16">
      <Container>
        <p className="mb-6 max-w-lg text-sm leading-relaxed text-ink/55">
          Filter by project type below, or browse everything we&rsquo;ve completed.
        </p>
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-ink/10 pb-6">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-colors ${
                filter === f ? "bg-ink text-warm-white" : "text-ink/55 hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {f} ({filterCounts[f]})
            </button>
          ))}
        </div>

        {showFeature ? (
          <Reveal>
            <ProjectFigure
              project={feature}
              aspect="aspect-4/3 sm:aspect-16/9 lg:aspect-21/9"
              onClick={() => openProject(feature)}
            />
          </Reveal>
        ) : null}

        <div className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ${showFeature ? "mt-10 sm:mt-12" : ""}`}>
          {(showFeature ? filtered.filter((p) => p.id !== feature.id) : filtered).map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index, 4) * 60}>
              <ProjectFigure project={project} onClick={() => openProject(project)} />
            </Reveal>
          ))}
        </div>
      </Container>

      {lightboxProjects && activeIndex !== null ? (
        <ProjectLightbox
          projects={lightboxProjects}
          index={activeIndex}
          onClose={() => {
            setActiveIndex(null);
            setLightboxProjects(null);
          }}
          onNavigate={setActiveIndex}
        />
      ) : null}
    </section>
  );
}
