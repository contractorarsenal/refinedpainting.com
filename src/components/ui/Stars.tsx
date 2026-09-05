import { Star } from "lucide-react";

interface StarsProps {
  count?: number;
  className?: string;
  fillClassName?: string;
}

export function Stars({ count = 5, className = "", fillClassName = "fill-gold text-gold" }: StarsProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`size-4 ${fillClassName}`} aria-hidden />
      ))}
    </div>
  );
}
