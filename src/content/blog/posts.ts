import type { ComponentType } from "react";
import interiorPrepRoom from "../../assets/images/projects/interior-prep-room.webp";
import interiorBrightFinished from "../../assets/images/projects/interior-bright-finished.webp";
import cabinetsSageGreen from "../../assets/images/projects/cabinets-sage-green.webp";
import { CostToPaintKitchenCabinetsSeattle } from "./posts/CostToPaintKitchenCabinetsSeattle";
import { InteriorPaintingCostSeattle } from "./posts/InteriorPaintingCostSeattle";
import { WhatHappensDuringPaintingEstimate } from "./posts/WhatHappensDuringPaintingEstimate";
import type { BlogCategorySlug } from "./categories";

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategorySlug;
  /** 1-2 line card excerpt. */
  excerpt: string;
  /** Short intro/dek shown under the H1 on the article page. */
  dek: string;
  publishDate: string;
  updatedDate?: string;
  /** Honestly calculated from the article's own word count at ~200wpm, not a fixed/fabricated value. */
  readTimeMinutes: number;
  heroImage: { src: string; alt: string };
  featured?: boolean;
  relatedService?: { label: string; href: string };
  metaDescription: string;
  toc?: { id: string; label: string }[];
  Body: ComponentType;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-happens-during-painting-estimate",
    title: "What to Expect During a Professional Painting Estimate in Seattle",
    category: "painting-guides",
    excerpt:
      "What actually happens after you request a painting estimate, from the first phone call to your written proposal.",
    dek: "A clear walkthrough of what to expect after you reach out, so you can feel comfortable requesting an estimate.",
    publishDate: "2026-10-09",
    readTimeMinutes: 3,
    heroImage: {
      src: interiorPrepRoom,
      alt: "Interior room prepped and protected with floor covering ahead of a painting project",
    },
    featured: true,
    metaDescription:
      "What actually happens during a Refined Painting estimate in Seattle, from your first message to your written proposal. No pressure, no fine print.",
    toc: [
      { id: "what-happens", label: "What Happens After You Contact Us" },
      { id: "whats-included", label: "What a Detailed Estimate Includes" },
      { id: "color-consultation", label: "The Color Conversation" },
      { id: "after-approval", label: "After You Approve the Proposal" },
    ],
    Body: WhatHappensDuringPaintingEstimate,
  },
  {
    slug: "interior-painting-cost-seattle",
    title: "How Much Does Interior Painting Cost in Seattle?",
    category: "cost-planning",
    excerpt:
      "Interior painting pricing depends on scope, prep, and condition. Here's what actually moves the number for Seattle homes.",
    dek: "A real breakdown of what drives interior painting cost, and the typical range for Seattle-area homes.",
    publishDate: "2026-10-09",
    readTimeMinutes: 3,
    heroImage: {
      src: interiorBrightFinished,
      alt: "Freshly painted bright interior room with large windows",
    },
    featured: true,
    relatedService: { label: "Interior Painting", href: "/services/interior-painting" },
    metaDescription:
      "What drives interior painting cost in Seattle, including the typical price range for residential projects and the factors that affect your quote.",
    toc: [
      { id: "cost-factors", label: "What Affects Your Price" },
      { id: "typical-range", label: "Typical Price Range" },
      { id: "prep-work", label: "Why Prep Work Changes the Price" },
      { id: "occupied-homes", label: "Painting an Occupied Home" },
      { id: "next-step", label: "Getting a Price for Your Home" },
    ],
    Body: InteriorPaintingCostSeattle,
  },
  {
    slug: "cost-to-paint-kitchen-cabinets-seattle",
    title: "How Much Does It Cost to Paint Kitchen Cabinets in Seattle?",
    category: "cost-planning",
    excerpt:
      "Cabinet refinishing cost depends on door count, condition, and finish. Here's what to know before you request a quote.",
    dek: "What actually drives cabinet refinishing cost, and what to ask before you compare quotes.",
    publishDate: "2026-10-09",
    readTimeMinutes: 3,
    heroImage: {
      src: cabinetsSageGreen,
      alt: "Kitchen cabinets professionally refinished in sage green",
    },
    relatedService: { label: "Cabinet Refinishing", href: "/services/cabinet-refinishing" },
    metaDescription:
      "What drives the cost of kitchen cabinet refinishing in Seattle, from door count to finish type, and what to ask before you compare quotes.",
    toc: [
      { id: "cost-factors", label: "What Affects the Cost" },
      { id: "whats-involved", label: "What's Actually Involved" },
      { id: "refinish-vs-replace", label: "Refinishing vs. Replacing" },
      { id: "next-step", label: "Getting a Price for Your Kitchen" },
    ],
    Body: CostToPaintKitchenCabinetsSeattle,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getPostsByCategory(category: BlogCategorySlug): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

/** Categories with at least one published post — the only ones ever exposed
 * as a filter or archive link, so an empty category never gets its own page. */
export function getCategoriesWithPosts(): BlogCategorySlug[] {
  return Array.from(new Set(blogPosts.map((p) => p.category)));
}

export function getRelatedPosts(current: BlogPost, max = 2): BlogPost[] {
  const sameCategory = blogPosts.filter((p) => p.slug !== current.slug && p.category === current.category);
  const rest = blogPosts.filter((p) => p.slug !== current.slug && p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, max);
}
