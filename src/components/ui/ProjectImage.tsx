interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

export function ProjectImage({ src, alt, className = "", eager = false }: ProjectImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
