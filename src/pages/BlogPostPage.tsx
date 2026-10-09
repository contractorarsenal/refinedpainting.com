import { Navigate, useParams } from "react-router-dom";
import { ArticleLayout } from "../components/blog/ArticleLayout";
import { getPostBySlug } from "../content/blog/posts";
import { usePageSEO } from "../hooks/usePageSEO";

const SITE_URL = "https://refinedpainting.co";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  const canonical = `${SITE_URL}/blog/${slug ?? ""}`;

  usePageSEO({
    title: post ? `${post.title} | Refined Painting` : "Guide Not Found | Refined Painting",
    description: post ? post.metaDescription : "This guide could not be found.",
    canonical,
    schema: post
      ? [
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
              logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` },
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
        ]
      : undefined,
  });

  if (!slug || !post) return <Navigate to="/blog" replace />;

  return (
    <ArticleLayout post={post} toc={post.toc}>
      <post.Body />
    </ArticleLayout>
  );
}
