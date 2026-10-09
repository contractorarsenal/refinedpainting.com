import { Link } from "react-router-dom";
import { BlogCard } from "../components/blog/BlogCard";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { getCategoryLabel } from "../content/blog/categories";
import type { BlogCategorySlug } from "../content/blog/categories";
import { blogPosts, getCategoriesWithPosts, getFeaturedPosts, getPostsByCategory } from "../content/blog/posts";
import { usePageSEO } from "../hooks/usePageSEO";

const SITE_URL = "https://refinedpainting.co";

export function BlogPage() {
  usePageSEO({
    title: "Painting Advice for Seattle Homeowners | Refined Painting",
    description:
      "Practical guides covering project planning, interior and exterior painting, cabinets, Seattle weather, and what to expect when hiring a painter.",
    canonical: `${SITE_URL}/blog`,
  });

  const featured = getFeaturedPosts();
  const latest = [...blogPosts].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
  const categoriesWithPosts = getCategoriesWithPosts();

  return (
    <>
      <section className="bg-cream pb-10 pt-28 sm:pt-32 lg:pb-14 lg:pt-36">
        <Container className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Guides &amp; Resources</span>
            <h1 className="mt-3 text-balance font-display text-4xl font-black uppercase leading-[0.96] text-ink sm:text-5xl">
              Painting Advice for Seattle Homeowners
            </h1>
            <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-ink/70 sm:text-lg">
              Practical guides covering project planning, interior and exterior painting, cabinets, Seattle
              weather, and what to expect when hiring a painter.
            </p>
          </Reveal>
        </Container>
      </section>

      {featured.length > 0 ? (
        <section className="border-t border-ink/10 bg-cream py-12 sm:py-14 lg:py-16">
          <Container>
            <div className="flex items-center gap-2">
              <span className="size-1.5 bg-crest" aria-hidden />
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Featured Articles</h2>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {featured.map((post) => (
                <BlogCard key={post.slug} post={post} featured />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-ink/10 bg-cream-light py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="flex items-center gap-2">
            <span className="size-1.5 bg-teal" aria-hidden />
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Latest Guides</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {categoriesWithPosts.length > 0 ? (
        <section className="border-t border-ink/10 bg-cream py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="flex items-center gap-2">
              <span className="size-1.5 bg-crest" aria-hidden />
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Browse by Topic</h2>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categoriesWithPosts.map((slug: BlogCategorySlug) => {
                const count = getPostsByCategory(slug).length;
                return (
                  <Link
                    key={slug}
                    to={`/blog/category/${slug}`}
                    className="group flex items-center justify-between border-t-2 border-ink/15 pt-4 transition-colors hover:border-crest"
                  >
                    <span className="font-display text-base font-extrabold uppercase tracking-wide text-ink group-hover:text-crest">
                      {getCategoryLabel(slug)}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-ink/35">
                      {count} {count === 1 ? "Guide" : "Guides"}
                    </span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      ) : null}

      <FinalCTA />
    </>
  );
}
