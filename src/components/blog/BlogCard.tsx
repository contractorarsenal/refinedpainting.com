import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getCategoryLabel } from "../../content/blog/categories";
import type { BlogPost } from "../../content/blog/posts";
import { ProjectImage } from "../ui/ProjectImage";

interface BlogCardProps {
  post: BlogPost;
  /** Larger treatment for the Featured Articles row. */
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-cream-light shadow-card transition-shadow hover:shadow-lift"
    >
      <div className={`overflow-hidden ${featured ? "aspect-16/10" : "aspect-4/3"}`}>
        <ProjectImage
          src={post.heroImage.src}
          alt={post.heroImage.alt}
          className="transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5 sm:p-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-crest">
          {getCategoryLabel(post.category)}
        </span>
        <h3
          className={`font-display font-extrabold uppercase leading-tight text-ink ${
            featured ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink/10 pt-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-ink/40">
            {post.readTimeMinutes} Min Read
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-extrabold uppercase tracking-wide text-teal-dark transition-colors group-hover:text-crest">
            Read Guide
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
