import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { PlaceholderTone } from "../../lib/content";
import { Container } from "../ui/Container";
import { PlaceholderPhoto } from "../ui/PlaceholderPhoto";
import { SectionHeading } from "../ui/SectionHeading";

interface GalleryItem {
  label: string;
  tone: PlaceholderTone;
}

const galleryItems: GalleryItem[] = [
  { label: "Craftsman exterior repaint", tone: "teal" },
  { label: "Living room refresh", tone: "slate" },
  { label: "Kitchen cabinet refinish", tone: "warm" },
  { label: "Full exterior, two-story", tone: "navy" },
  { label: "Primary bedroom", tone: "slate" },
  { label: "Bathroom vanity", tone: "warm" },
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
            className="hidden aspect-4/3 w-1/6 shrink-0 overflow-hidden rounded opacity-50 grayscale transition-opacity hover:opacity-80 lg:block"
          >
            <PlaceholderPhoto label={at(index - 1).label} tone={at(index - 1).tone} />
          </button>

          <div key={index} className="animate-fade-in aspect-4/3 w-full max-w-2xl shrink-0 overflow-hidden rounded shadow-lift">
            <PlaceholderPhoto label={at(index).label} tone={at(index).tone} />
          </div>

          <button
            type="button"
            onClick={() => setIndex((i) => i + 1)}
            aria-label="Next project"
            className="hidden aspect-4/3 w-1/6 shrink-0 overflow-hidden rounded opacity-50 grayscale transition-opacity hover:opacity-80 lg:block"
          >
            <PlaceholderPhoto label={at(index + 1).label} tone={at(index + 1).tone} />
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
