export type BlogCategorySlug =
  | "painting-guides"
  | "interior-painting"
  | "exterior-painting"
  | "cabinet-refinishing"
  | "cost-planning"
  | "seattle-pnw";

export interface BlogCategory {
  slug: BlogCategorySlug;
  label: string;
}

// The full category system from the content strategy. Not every category has
// published posts yet — the blog index and /blog/category/:slug route only
// ever expose categories that actually have at least one post (see
// getCategoriesWithPosts in posts.ts), so this list existing here does not by
// itself create empty archive pages.
export const blogCategories: BlogCategory[] = [
  { slug: "painting-guides", label: "Painting Guides" },
  { slug: "interior-painting", label: "Interior Painting" },
  { slug: "exterior-painting", label: "Exterior Painting" },
  { slug: "cabinet-refinishing", label: "Cabinet Refinishing" },
  { slug: "cost-planning", label: "Cost & Planning" },
  { slug: "seattle-pnw", label: "Seattle & PNW" },
];

export function getCategoryLabel(slug: BlogCategorySlug): string {
  return blogCategories.find((c) => c.slug === slug)?.label ?? slug;
}
