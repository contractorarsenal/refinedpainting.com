import { X } from "lucide-react";
import { useState } from "react";
import { Container } from "../ui/Container";
import { PlaceholderPhoto } from "../ui/PlaceholderPhoto";
import { SectionHeading } from "../ui/SectionHeading";

type Category = "All" | "Exterior" | "Interior" | "Cabinets";

interface GalleryItem {
  id: string;
  category: Exclude<Category, "All">;
  label: string;
  tone: "stone" | "teal" | "ink" | "gold";
  tall?: boolean;
}

const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Exterior", label: "Craftsman exterior repaint", tone: "teal", tall: true },
  { id: "g2", category: "Interior", label: "Living room refresh", tone: "stone" },
  { id: "g3", category: "Cabinets", label: "Kitchen cabinet refinish", tone: "gold" },
  { id: "g4", category: "Interior", label: "Primary bedroom", tone: "stone" },
  { id: "g5", category: "Exterior", label: "Trim and siding detail", tone: "teal" },
  { id: "g6", category: "Cabinets", label: "Bathroom vanity", tone: "gold", tall: true },
  { id: "g7", category: "Interior", label: "Stairwell and hallway", tone: "ink" },
  { id: "g8", category: "Exterior", label: "Full exterior, two-story", tone: "teal" },
  { id: "g9", category: "Interior", label: "Open-concept kitchen", tone: "stone" },
];

const categories: Category[] = ["All", "Exterior", "Interior", "Cabinets"];

export function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const items = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="bg-off-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Real Homes. Real Work." title="See the Difference Good Prep Makes." />
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                onClick={() => setActive(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active === category
                    ? "border-ink bg-ink text-warm-white"
                    : "border-ink/15 bg-warm-white text-ink/70 hover:border-ink/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 *:mb-5">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightbox(item)}
              className={`group block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-card transition-shadow duration-300 hover:shadow-lift ${
                item.tall ? "aspect-3/4" : "aspect-4/3"
              }`}
            >
              <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                <PlaceholderPhoto label={item.label} tone={item.tone} />
              </div>
            </button>
          ))}
        </div>
      </Container>

      {lightbox ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/85 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
            className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-full bg-warm-white/10 text-warm-white hover:bg-warm-white/20"
          >
            <X className="size-5" aria-hidden />
          </button>
          <div
            className="aspect-4/3 w-full max-w-3xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <PlaceholderPhoto label={lightbox.label} tone={lightbox.tone} />
          </div>
        </div>
      ) : null}
    </section>
  );
}
