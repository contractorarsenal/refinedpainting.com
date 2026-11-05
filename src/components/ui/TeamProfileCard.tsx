interface TeamProfileCardProps {
  name: string;
  role: string;
  blurb: string;
  photo: string;
  /** object-position for the 4:5 crop. Keeps the face inside the frame. */
  objectPosition: string;
}

/** Full-size team card for the About page: a 4:5 portrait, the name as the heading,
 * the role as a label, and the one-line description. The compact TeamCard stays
 * for places like the contact page. */
export function TeamProfileCard({ name, role, blurb, photo, objectPosition }: TeamProfileCardProps) {
  return (
    <article className="flex flex-col border border-ink/10 bg-warm-white shadow-card">
      <img
        src={photo}
        alt={`${name}, ${role} at Refined Painting`}
        loading="lazy"
        decoding="async"
        style={{ objectPosition }}
        className="aspect-[4/5] w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <h3 className="font-display text-3xl font-black uppercase leading-none text-ink">{name}</h3>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{role}</p>
        <p className="text-base leading-relaxed text-ink/75">{blurb}</p>
      </div>
    </article>
  );
}
