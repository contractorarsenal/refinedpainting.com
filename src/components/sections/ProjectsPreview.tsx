import afterWhite from "../../assets/images/projects/exterior-after-white.jpg";
import cabinetsPhoto from "../../assets/images/projects/cabinets-sage-green.webp";
import interiorBright from "../../assets/images/projects/interior-bright-finished.webp";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const previewItems = [
  { id: "exterior", src: afterWhite, alt: "Home exterior finished in crisp white", label: "Exterior Painting" },
  { id: "interior", src: interiorBright, alt: "Bright, finished interior room with hardwood floors", label: "Interior Painting" },
  { id: "cabinets", src: cabinetsPhoto, alt: "Kitchen cabinets refinished in sage green", label: "Cabinet Refinishing" },
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
            <Reveal key={item.id} delay={index * 80} className="group">
              <div className="relative aspect-4/3 w-full overflow-hidden bg-ink/5">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <span className="mt-3 block text-xs font-semibold uppercase tracking-widest text-ink/45">
                {item.label}
              </span>
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
