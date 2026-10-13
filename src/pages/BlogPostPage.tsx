import { Navigate, useParams } from "react-router-dom";
import { ArticleLayout } from "../components/blog/ArticleLayout";
import { PageSEO } from "../components/seo/PageSEO";
import { getPostBySlug } from "../content/blog/posts";
import { SITE_URL } from "../lib/content";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  const canonical = `${SITE_URL}/blog/${slug ?? ""}`;

  if (!slug || !post) return <Navigate to="/blog" replace />;

  return (
    <>
      <PageSEO
        title={`${post.title} | Refined Painting`}
        description={post.metaDescription}
        canonical={canonical}
        image={`${SITE_URL}${post.heroImage.src}`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            image: `${SITE_URL}${post.heroImage.src}`,
            datePublished: post.publishDate,
            dateModified: post.updatedDate ?? post.publishDate,
            author: { "@type": "Organization", name: "Refined Painting" },
            publisher: {
              "@type": "Organization",
              name: "Refined Painting",
              logo: { "@type": "ImageObject", url: `${SITE_URL}/refined-painting-logo.webp` },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: canonical },
            ],
          },
        ]}
      />
      <ArticleLayout post={post} toc={post.toc}>
        <post.Body />
      </ArticleLayout>
    </>
  );
}
