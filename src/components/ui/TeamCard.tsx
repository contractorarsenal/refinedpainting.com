interface TeamCardProps {
  name: string;
  role: string;
  blurb: string;
  photo: string;
  /** object-position for the circular crop, e.g. "42% 50%". Keeps the face in frame. */
  objectPosition: string;
  className?: string;
}

/** Compact contact card: small circular portrait beside name, role, and one line. */
export function TeamCard({ name, role, blurb, photo, objectPosition, className = "" }: TeamCardProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <img
        src={photo}
        alt={`${name}, ${role} at Refined Painting`}
        loading="lazy"
        decoding="async"
        style={{ objectPosition }}
        className="size-16 shrink-0 rounded-full border border-ink/10 object-cover"
      />
      <div className="min-w-0">
        <p className="font-display text-sm font-extrabold uppercase tracking-wide text-ink">{name}</p>
        <p className="text-[11px] font-bold uppercase tracking-widest text-ink/45">{role}</p>
        <p className="mt-1 text-sm leading-snug text-ink/65">{blurb}</p>
      </div>
    </div>
  );
}
