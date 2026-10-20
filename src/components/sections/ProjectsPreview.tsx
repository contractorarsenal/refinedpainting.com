import { Link } from "react-router-dom";
import { coverPhoto } from "../../content/projects/projects";
import cabinetsPhoto from "../../assets/images/projects/cabinets-sage-green.webp";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const exteriorCover = coverPhoto("red-siding-exterior");
const interiorCover = coverPhoto("green-living-room-orange-entry");

const previewItems = [
  { id: "exterior", src: exteriorCover.sm, alt: exteriorCover.alt, label: "Exterior Painting" },
  { id: "interior", src: interiorCover.sm, alt: interiorCover.alt, label: "Interior Painting" },
  {
    id: "cabinets",
    src: cabinetsPhoto,
    alt: "Kitchen cabinets refinished in sage green",
    label: "Cabinet Refinishing",
  },
];

export function ProjectsPreview() {
  return (
    <section className="bg-off-white py-16 sm:py-20 lg:py-24">
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
              <Link to="/projects" className="group flex h-full flex-col border border-ink/10 bg-cream-light">
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <span className="border-t border-ink/10 px-4 py-3.5 text-xs font-bold uppercase tracking-widest text-ink/60 transition-colors group-hover:text-crest">
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
