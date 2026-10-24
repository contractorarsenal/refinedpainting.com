// The trimmed derivative removes transparent padding, so the figure fills its box.
// Other placements keep the original file, so their framing does not change.
import mascotSrc from "../../assets/images/refined-painting-mascot.png";
import mascotTrimmedSrc from "../../assets/images/refined-painting-mascot-cropped.webp";

type MascotVariant = "full" | "bust" | "watermark";

interface MascotProps {
  variant?: MascotVariant;
  className?: string;
  trimmed?: boolean;
}

const variantClasses: Record<MascotVariant, string> = {
  full: "object-contain",
  bust: "object-contain object-top",
  watermark: "object-contain opacity-[0.06]",
};

export function Mascot({ variant = "full", className = "", trimmed = false }: MascotProps) {
  return (
    <img
      src={trimmed ? mascotTrimmedSrc : mascotSrc}
      alt={variant === "watermark" ? "" : "Refined Painting's mascot, an illustrated bird holding a paintbrush"}
      aria-hidden={variant === "watermark"}
      loading={variant === "watermark" ? "lazy" : undefined}
      className={`pointer-events-none select-none ${variantClasses[variant]} ${className}`}
    />
  );
}
