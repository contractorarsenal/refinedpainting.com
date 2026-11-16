import type { ComponentType } from "react";
import interiorPrepRoom from "../../assets/images/projects/interior-prep-room.webp";
import interiorBrightFinished from "../../assets/images/projects/interior-bright-finished.webp";
import cabinetsSageGreen from "../../assets/images/projects/cabinets-sage-green.webp";
import { coverPhoto } from "../projects/projects";
import { BestTimeToPaintExteriorSeattle } from "./posts/BestTimeToPaintExteriorSeattle";
import { CostToPaintKitchenCabinetsSeattle } from "./posts/CostToPaintKitchenCabinetsSeattle";
import { HowOftenToRepaintExteriorSeattle } from "./posts/HowOftenToRepaintExteriorSeattle";
import { HowToChooseInteriorPaintColors } from "./posts/HowToChooseInteriorPaintColors";
import { InteriorPaintFinishesForEachRoom } from "./posts/InteriorPaintFinishesForEachRoom";
import { InteriorPaintingCostSeattle } from "./posts/InteriorPaintingCostSeattle";
import { WhatHappensDuringPaintingEstimate } from "./posts/WhatHappensDuringPaintingEstimate";
import type { BlogCategorySlug } from "./categories";

// Existing project photos used as illustrations for restored articles.
const exteriorHeroPhoto = coverPhoto("blue-craftsman-screened-porch");
const colorsHeroPhoto = coverPhoto("green-living-room-orange-entry");
const finishesHeroPhoto = coverPhoto("open-living-area");
const bestTimeHeroPhoto = coverPhoto("teal-craftsman");

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
  {
    slug: "how-often-should-you-repaint-your-homes-exterior-in-seattle",
    title: "How Often Should You Repaint Your Home's Exterior in Seattle?",
    category: "painting-guides",
    excerpt:
      "Siding type, weather exposure and visible wear all affect when a Seattle home is ready for exterior paint. Here is how to read your own house.",
    dek: "The calendar is only a starting point. Here is how siding, weather and visible wear tell you when it is time to repaint.",
    publishDate: "2026-11-05",
    readTimeMinutes: 4,
    heroImage: {
      src: exteriorHeroPhoto.lg,
      alt: exteriorHeroPhoto.alt,
    },
    relatedService: { label: "Exterior Painting", href: "/services/exterior-painting" },
    metaDescription:
      "How often to repaint a Seattle home's exterior depends on siding, weather exposure and visible wear. Learn what to look for before you plan a repaint.",
    toc: [
      { id: "siding", label: "Start With What Your Siding Is" },
      { id: "weather", label: "Weather Exposure Is Not the Same on Every Wall" },
      { id: "wear", label: "Visible Wear: What to Look For" },
      { id: "prep", label: "Why Prep Decides How Long a Repaint Lasts" },
      { id: "timing", label: "When in the Year to Repaint" },
      { id: "next-step", label: "Getting Help Deciding" },
    ],
    Body: HowOftenToRepaintExteriorSeattle,
  },
  {
    slug: "how-to-choose-interior-paint-colors-for-your-home",
    title: "How to Choose Interior Paint Colors for Your Home",
    category: "interior-painting",
    excerpt:
      "Start with what you're not repainting, decide how each room should feel, then test real samples on the actual wall before you commit.",
    dek: "A step-by-step way to narrow a wall of paint chips into a palette that actually works in your home.",
    publishDate: "2026-04-21",
    updatedDate: "2026-11-16",
    readTimeMinutes: 3,
    heroImage: {
      src: colorsHeroPhoto.lg,
      alt: colorsHeroPhoto.alt,
    },
    relatedService: { label: "Interior Painting", href: "/services/interior-painting" },
    metaDescription:
      "How to choose interior paint colors for your home: start with fixed elements, decide the feel you want, then test real samples before committing.",
    toc: [
      { id: "anchors", label: "Start With What You're Not Changing" },
      { id: "feel", label: "Decide What You Want Each Room to Feel Like" },
      { id: "testing", label: "Test on the Actual Wall, in the Actual Light" },
      { id: "whole-home", label: "Build a Whole-Home Palette" },
      { id: "next-step", label: "Getting Help With Your Palette" },
    ],
    Body: HowToChooseInteriorPaintColors,
  },
  {
    slug: "interior-paint-finishes-for-each-room",
    title: "Choosing the Right Interior Paint Finishes for Each Room",
    category: "interior-painting",
    excerpt:
      "Finish is a durability decision, not just a look. Here's how to match sheen to how each room is actually used.",
    dek: "A room-by-room guide to matching paint sheen to traffic, moisture and light.",
    publishDate: "2026-03-18",
    updatedDate: "2026-11-16",
    readTimeMinutes: 3,
    heroImage: {
      src: finishesHeroPhoto.lg,
      alt: finishesHeroPhoto.alt,
    },
    relatedService: { label: "Interior Painting", href: "/services/interior-painting" },
    metaDescription:
      "How to choose interior paint finishes for each room, from flat to semi-gloss, based on traffic, moisture and light rather than trend.",
    toc: [
      { id: "how-rooms-live", label: "Start With How Each Room Lives Day to Day" },
      { id: "sheen-basics", label: "What Each Finish Actually Does" },
      { id: "room-baseline", label: "A Room-by-Room Starting Point" },
      { id: "wall-condition", label: "Wall Condition and Lighting Still Matter" },
      { id: "next-step", label: "Getting Help With Your Finish Plan" },
    ],
    Body: InteriorPaintFinishesForEachRoom,
  },
  {
    slug: "best-time-to-paint-your-home-exterior-in-seattle",
    title: "Best Time to Paint Your Home Exterior in Seattle",
    category: "seattle-pnw",
    excerpt:
      "It's not about finding one perfect month. Here's what paint-friendly weather actually looks like in Seattle, and why the window runs May through September.",
    dek: "What paint-friendly weather actually looks like in Seattle, and why late spring through early fall is the safest window.",
    publishDate: "2025-12-16",
    updatedDate: "2026-11-16",
    readTimeMinutes: 3,
    heroImage: {
      src: bestTimeHeroPhoto.lg,
      alt: bestTimeHeroPhoto.alt,
    },
    relatedService: { label: "Exterior Painting", href: "/services/exterior-painting" },
    metaDescription:
      "The best time to paint your home's exterior in Seattle is roughly May through September. Here's what paint-friendly weather looks like and why.",
    toc: [
      { id: "conditions", label: "What Paint-Friendly Weather Looks Like Here" },
      { id: "window", label: "Why Late Spring Through Early Fall" },
      { id: "summer", label: "Why Summer Is Popular, and What Can Go Wrong" },
      { id: "offseason", label: "Painting Outside the Ideal Window" },
      { id: "next-step", label: "Getting Help With Timing" },
    ],
    Body: BestTimeToPaintExteriorSeattle,
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
