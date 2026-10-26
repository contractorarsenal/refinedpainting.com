import { Link } from "react-router-dom";
import { coverPhoto } from "../../content/projects/projects";
import cabinetsPhoto from "../../assets/images/projects/cabinets-sage-green.webp";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const exteriorCover = coverPhoto("gray-green-home-front-fence");
const interiorCover = coverPhoto("green-living-room-orange-entry");

// Caption bands use brand colour, not the photo: red for exterior and cabinets,
// navy for interior. White text on each band stays above 4.5:1.
const previewItems = [
  { id: "exterior", src: exteriorCover.sm, alt: exteriorCover.alt, label: "Exterior Painting", band: "bg-crest group-hover:bg-crest-dark" },
  { id: "interior", src: interiorCover.sm, alt: interiorCover.alt, label: "Interior Painting", band: "bg-ink group-hover:bg-ink-2" },
  {
    id: "cabinets",
    src: cabinetsPhoto,
    alt: "Kitchen cabinets refinished in sage green",
    label: "Cabinet Refinishing",
    band: "bg-crest group-hover:bg-crest-dark",
  },
];

export function ProjectsPreview() {
  return (
    <section className="bg-off-white py-10 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Work"
            title="Recent Projects"
            description="A look at recent interior, exterior and cabinet work across Seattle and the Eastside."
          />
          <LinkButton href="/projects" variant="ghost" className="hidden shrink-0 sm:inline-flex">
            View All Projects
          </LinkButton>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {previewItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <Link
                to="/projects"
                className="group flex h-full flex-col border border-ink/10 bg-cream-light transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <span className={`px-4 py-3.5 text-xs font-bold uppercase tracking-widest text-warm-white transition-colors duration-300 ${item.band}`}>
                  {item.label}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <LinkButton href="/projects" variant="ghost" className="mt-10 w-full justify-center sm:hidden">
          View All Projects
        </LinkButton>
      </Container>
    </section>
  );
}
