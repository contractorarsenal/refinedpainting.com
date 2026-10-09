import type { ReactNode } from "react";
import { getCategoryLabel } from "../../content/blog/categories";
import type { BlogPost } from "../../content/blog/posts";
import { getRelatedPosts } from "../../content/blog/posts";
import { FinalCTA } from "../sections/FinalCTA";
import { Container } from "../ui/Container";
import { LinkButton } from "../ui/Button";
import { ProjectImage } from "../ui/ProjectImage";
import { Reveal } from "../ui/Reveal";
import { BlogCard } from "./BlogCard";
import { Breadcrumbs } from "./Breadcrumbs";

interface TocEntry {
  id: string;
  label: string;
}

interface ArticleLayoutProps {
  post: BlogPost;
  toc?: TocEntry[];
  children: ReactNode;
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleLayout({ post, toc, children }: ArticleLayoutProps) {
  const related = getRelatedPosts(post);

  return (
    <article>
      <section className="bg-cream pb-8 pt-28 sm:pt-32 lg:pb-10 lg:pt-36">
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <Reveal className="mt-6">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">
              {getCategoryLabel(post.category)}
            </span>
            <h1 className="mt-3 text-balance font-display text-3xl font-black uppercase leading-[1.02] text-ink sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-ink/70 sm:text-lg">
              {post.dek}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-widest text-ink/40">
              <span>
                {post.updatedDate ? `Updated ${formatDate(post.updatedDate)}` : formatDate(post.publishDate)}
              </span>
              <span aria-hidden>&middot;</span>
              <span>By Refined Painting Team</span>
              <span aria-hidden>&middot;</span>
              <span>{post.readTimeMinutes} Min Read</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <div className="aspect-21/9 w-full overflow-hidden bg-ink sm:aspect-[21/7]">
        <ProjectImage src={post.heroImage.src} alt={post.heroImage.alt} eager />
      </div>

      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <Container
          className={`grid grid-cols-1 gap-10 ${toc && toc.length > 0 ? "lg:grid-cols-[1fr_220px]" : "max-w-3xl"}`}
        >
          <div className={`flex max-w-3xl flex-col gap-6 ${toc && toc.length > 0 ? "" : "mx-auto"}`}>
            {children}
          </div>

          {toc && toc.length > 0 ? (
            <aside className="hidden lg:block">
              <div className="sticky top-28 border-l-2 border-ink/10 pl-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40">
                  In This Guide
                </span>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {toc.map((entry) => (
                    <li key={entry.id}>
                      <a
                        href={`#${entry.id}`}
                        className="text-sm font-semibold leading-snug text-ink/65 transition-colors hover:text-crest"
                      >
                        {entry.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          ) : null}
        </Container>
      </section>

      {post.relatedService ? (
        <section className="border-t border-ink/10 bg-cream-light py-10 sm:py-12">
          <Container className="max-w-3xl">
            <div className="flex flex-col items-start justify-between gap-4 border-l-2 border-crest pl-5 sm:flex-row sm:items-center">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40">
                  Related Service
                </span>
                <p className="mt-1 font-display text-lg font-extrabold uppercase tracking-wide text-ink">
                  {post.relatedService.label}
                </p>
              </div>
              <LinkButton href={post.relatedService.href} variant="ghost">
                View Service
              </LinkButton>
            </div>
          </Container>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="border-t border-ink/10 bg-cream py-14 sm:py-16 lg:py-20">
          <Container>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Keep Reading</span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-wide text-ink sm:text-3xl">
              Related Guides
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <FinalCTA />
    </article>
  );
}
