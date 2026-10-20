import { useState } from "react";
import { projects, type ProjectEntry, type ProjectPhoto } from "../../content/projects/projects";
import { ProjectLightbox } from "../projects/ProjectLightbox";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

// Same honest category blurbs ProjectLightbox uses — real, approved copy,
// reused here for the featured card's description rather than inventing
// per-project narrative text we don't have.
const categoryBlurb: Record<string, string> = {
  "Exterior Painting":
    "This project showcases the type of exterior preparation and finish work Refined Painting provides for homeowners throughout the Seattle area.",
  "Interior Painting":
    "This project showcases the type of interior preparation and finish work Refined Painting provides for homeowners throughout the Seattle area.",
  "Cabinet Refinishing":
    "This project showcases the type of cabinet preparation and finish work Refined Painting provides for homeowners throughout the Seattle area.",
};

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

// Each project's cover is its first photo. `sm` serves grid cards; `lg` serves
// the larger featured tile and the browser picks the closest width via srcSet.
function coverSrcSet(photo: ProjectPhoto) {
  return `${photo.sm} 720w, ${photo.lg} 1200w`;
}

function ProjectFigure({
  project,
  aspect = "aspect-4/3",
  onClick,
}: {
  project: ProjectEntry;
  aspect?: string;
  onClick: () => void;
}) {
  const cover = project.photos[0];

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex h-full w-full flex-col border border-ink/10 bg-cream-light text-left"
    >
      <div className={`relative ${aspect} w-full overflow-hidden`}>
        <img
          src={cover.sm}
          srcSet={coverSrcSet(cover)}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          alt={cover.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" aria-hidden />
      </div>
      <figcaption className="flex flex-1 flex-col items-start gap-1 bg-ink px-4 py-3.5 transition-colors group-hover:bg-ink-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-teal">{project.category}</span>
        <span className="font-display text-base font-bold uppercase tracking-wide text-warm-white transition-colors group-hover:text-crest">
          {project.title}
        </span>
      </figcaption>
    </button>
  );
}

function FeaturedFigure({ project, onClick }: { project: ProjectEntry; onClick: () => void }) {
  const cover = project.photos[0];
  const blurb =
    categoryBlurb[project.category] ??
    "This project showcases the type of work Refined Painting provides for homeowners throughout the Seattle area.";

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex h-full w-full flex-col border border-ink/10 bg-cream-light text-left"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden sm:aspect-16/9">
        <span className="absolute left-0 top-0 z-10 bg-crest px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-warm-white">
          Featured Project
        </span>
        <img
          src={cover.lg}
          srcSet={coverSrcSet(cover)}
          sizes="(min-width: 1024px) 66vw, 100vw"
          alt={cover.alt}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col items-start gap-2 bg-ink p-6 transition-colors group-hover:bg-ink-2">
        <span className="text-[11px] font-bold uppercase tracking-widest text-teal">{project.category}</span>
        <span className="font-display text-2xl font-extrabold uppercase tracking-wide text-warm-white transition-colors group-hover:text-crest sm:text-3xl">
          {project.title}
        </span>
        <p className="text-sm leading-relaxed text-warm-white/65">{blurb}</p>
      </div>
    </button>
  );
}

export function Gallery() {
  const [lightbox, setLightbox] = useState<{ project: ProjectEntry; photo: number } | null>(null);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = filter === "All" ? orderedProjects : orderedProjects.filter((p) => p.category === filter);
  const showFeature = filter === "All";

  // The lightbox opens on one project and steps through that project's own
  // photos only, so a visitor sees every photo for the house they clicked.
  const openProject = (project: ProjectEntry) => {
    setLightbox({ project, photo: 0 });
  };

  // The second project (after the feature) gets the smaller vertical slot
  // beside it in the editorial layout; everything else flows into the grid.
  const secondary = showFeature ? rest[0] : null;
  const gridProjects = showFeature ? filtered.filter((p) => p.id !== feature.id && p.id !== secondary?.id) : filtered;

  return (
    <section className="relative overflow-hidden bg-off-white pb-10 pt-10 sm:pb-12 lg:pb-16">
      <Container className="relative">
        <Reveal>
          <p className="mb-5 max-w-lg text-sm leading-relaxed text-ink/55">
            Browse recent interior, exterior and cabinet projects.
          </p>
        </Reveal>
        <Reveal delay={90} className="mb-8 flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-colors ${
                filter === f
                  ? "border-crest bg-crest/10 text-crest"
                  : "border-ink/15 text-ink/55 hover:border-ink/30 hover:text-ink"
              }`}
            >
              {f} ({filterCounts[f]})
            </button>
          ))}
        </Reveal>

        {showFeature ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <FeaturedFigure project={feature} onClick={() => openProject(feature)} />
            </Reveal>
            {secondary ? (
              <Reveal delay={100} className="h-full">
                <ProjectFigure project={secondary} aspect="aspect-4/3 lg:aspect-3/4" onClick={() => openProject(secondary)} />
              </Reveal>
            ) : null}
          </div>
        ) : null}

        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${showFeature ? "mt-6" : ""}`}>
          {gridProjects.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index, 4) * 60}>
              <ProjectFigure project={project} onClick={() => openProject(project)} />
            </Reveal>
          ))}
        </div>
      </Container>

      {lightbox ? (
        <ProjectLightbox
          project={lightbox.project}
          photoIndex={lightbox.photo}
          onClose={() => setLightbox(null)}
          onPhotoChange={(photo) => setLightbox((prev) => (prev ? { ...prev, photo } : prev))}
        />
      ) : null}
    </section>
  );
}
