import { ArrowRight, Phone } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light" | "outline-dark" | "invert";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: "arrow" | "phone" | "none";
  className?: string;
  children?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-teal text-ink hover:bg-teal-dark hover:text-warm-white",
  secondary: "bg-ink text-warm-white hover:bg-ink-2",
  ghost: "bg-warm-white text-ink border-2 border-ink hover:bg-ink hover:text-warm-white",
  "outline-light": "bg-transparent text-warm-white border-2 border-warm-white/50 hover:bg-warm-white/10",
  "outline-dark": "bg-transparent text-ink border-2 border-ink/25 hover:border-ink",
  // For use on saturated (e.g. red) backgrounds where the other variants lack contrast.
  invert: "bg-warm-white text-crest hover:bg-cream",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded font-display font-extrabold uppercase tracking-wide transition-colors duration-150 cursor-pointer whitespace-nowrap";

function IconFor({ icon }: { icon: BaseProps["icon"] }) {
  if (icon === "phone") return <Phone className="size-4 shrink-0" aria-hidden />;
  if (icon === "arrow")
    return (
      <ArrowRight className="size-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden />
    );
  return null;
}

interface ButtonProps extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({
  variant = "primary",
  size = "md",
  icon = "arrow",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`group ${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
      <IconFor icon={icon} />
    </button>
  );
}

interface LinkButtonProps extends BaseProps {
  href: string;
  ariaLabel?: string;
  external?: boolean;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  icon = "none",
  className = "",
  href,
  ariaLabel,
  external = false,
  children,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group ${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
      <IconFor icon={icon} />
    </a>
  );
}
