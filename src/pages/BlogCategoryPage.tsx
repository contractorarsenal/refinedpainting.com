import { Navigate, useParams } from "react-router-dom";
import { FinalCTA } from "../components/sections/FinalCTA";
import { BlogCard } from "../components/blog/BlogCard";
import { Breadcrumbs } from "../components/blog/Breadcrumbs";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { blogCategories, getCategoryLabel } from "../content/blog/categories";
import type { BlogCategorySlug } from "../content/blog/categories";
import { getCategoriesWithPosts, getPostsByCategory } from "../content/blog/posts";
import { usePageSEO } from "../hooks/usePageSEO";

const SITE_URL = "https://refinedpainting.co";

export function BlogCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const isKnownCategory = blogCategories.some((c) => c.slug === slug);
  const hasPosts = isKnownCategory && getCategoriesWithPosts().includes(slug as BlogCategorySlug);

  const label = isKnownCategory ? getCategoryLabel(slug as BlogCategorySlug) : "";
  const posts = hasPosts ? getPostsByCategory(slug as BlogCategorySlug) : [];

  usePageSEO({
    title: hasPosts ? `${label} Guides | Refined Painting` : "Guides | Refined Painting",
    description: hasPosts
      ? `${label} guides and resources from Refined Painting, serving Seattle and the Eastside.`
      : "Painting guides from Refined Painting.",
    canonical: `${SITE_URL}/blog/category/${slug ?? ""}`,
  });

  // No empty category archives — only a real, populated category gets a page.
  if (!hasPosts) return <Navigate to="/blog" replace />;

  return (
    <>
      <section className="bg-cream pb-10 pt-28 sm:pt-32 lg:pb-12 lg:pt-36">
        <Container className="max-w-2xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label }]} />
          <Reveal className="mt-6">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Topic</span>
            <h1 className="mt-3 text-balance font-display text-3xl font-black uppercase leading-[0.96] text-ink sm:text-4xl lg:text-5xl">
              {label}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
