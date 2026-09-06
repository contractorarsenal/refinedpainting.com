import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import cabinetsPhoto from "../../assets/images/projects/cabinets-sage-green.webp";
import afterPink from "../../assets/images/projects/exterior-after-pink.jpg";
import afterWhite from "../../assets/images/projects/exterior-after-white.jpg";
import cottagePhoto from "../../assets/images/projects/exterior-cottage.webp";
import exteriorNavy from "../../assets/images/projects/exterior-finished-navy.webp";
import inProgressPhoto from "../../assets/images/projects/exterior-in-progress.webp";
import interiorBright from "../../assets/images/projects/interior-bright-finished.webp";
import interiorEmpty from "../../assets/images/projects/interior-empty-room.webp";
import kitchenPhoto from "../../assets/images/projects/kitchen-blue-accent.webp";
import porchPhoto from "../../assets/images/projects/porch-yellow-door.webp";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

interface GalleryItem {
  src: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  { src: exteriorNavy, alt: "Finished two-story exterior repaint in deep navy" },
  { src: interiorBright, alt: "Bright, finished interior room with hardwood floors" },
  { src: cabinetsPhoto, alt: "Kitchen cabinets refinished in sage green" },
  { src: afterWhite, alt: "Home exterior finished in crisp white" },
  { src: kitchenPhoto, alt: "Kitchen with a painted blue accent wall" },
  { src: porchPhoto, alt: "Covered porch with a bold yellow front door" },
  { src: afterPink, alt: "Home exterior finished in a soft blush tone" },
  { src: inProgressPhoto, alt: "Exterior siding mid-repaint with protective covering" },
  { src: cottagePhoto, alt: "Painted cottage exterior with porch and railings" },
  { src: interiorEmpty, alt: "Freshly painted bedroom ready for move-in" },
];

function at(index: number) {
  const len = galleryItems.length;
  return galleryItems[((index % len) + len) % len];
}

export function Gallery() {
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery" className="bg-light-blue py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Real Homes. Real Work."
          title="Get Inspired"
          description="Browse recent projects and see the prep, detail and finish behind Refined Painting's work."
        />

        <div className="mt-10 flex items-center justify-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={() => setIndex((i) => i - 1)}
            aria-label="Previous project"
            className="hidden aspect-4/3 w-1/6 shrink-0 overflow-hidden rounded opacity-60 grayscale transition-opacity hover:opacity-90 lg:block"
          >
            <img src={at(index - 1).src} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </button>

          <div key={index} className="animate-fade-in aspect-4/3 w-full max-w-2xl shrink-0 overflow-hidden rounded shadow-lift">
            <img src={at(index).src} alt={at(index).alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>

          <button
            type="button"
            onClick={() => setIndex((i) => i + 1)}
            aria-label="Next project"
            className="hidden aspect-4/3 w-1/6 shrink-0 overflow-hidden rounded opacity-60 grayscale transition-opacity hover:opacity-90 lg:block"
          >
            <img src={at(index + 1).src} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </button>
        </div>

        <div className="mt-9 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIndex((i) => i - 1)}
            aria-label="Previous project"
            className="flex size-11 items-center justify-center rounded border-2 border-ink/15 text-ink transition-colors hover:border-ink"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <span className="text-sm font-bold uppercase tracking-wide text-ink/50">
            {String((((index % galleryItems.length) + galleryItems.length) % galleryItems.length) + 1).padStart(2, "0")}{" "}
            / {String(galleryItems.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => setIndex((i) => i + 1)}
            aria-label="Next project"
            className="flex size-11 items-center justify-center rounded border-2 border-ink/15 text-ink transition-colors hover:border-ink"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </Container>
    </section>
  );
}
