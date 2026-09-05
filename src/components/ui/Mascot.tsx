import mascotSrc from "../../assets/images/refined-painting-mascot.png";

type MascotVariant = "full" | "bust" | "watermark";

interface MascotProps {
  variant?: MascotVariant;
  className?: string;
}

const variantClasses: Record<MascotVariant, string> = {
  full: "object-contain",
  bust: "object-contain object-top",
  watermark: "object-contain opacity-[0.06]",
};

export function Mascot({ variant = "full", className = "" }: MascotProps) {
  return (
    <img
      src={mascotSrc}
      alt={variant === "watermark" ? "" : "Refined Painting's mascot, an illustrated bird holding a paintbrush"}
      aria-hidden={variant === "watermark"}
      loading={variant === "watermark" ? "lazy" : undefined}
      className={`pointer-events-none select-none ${variantClasses[variant]} ${className}`}
    />
  );
}
