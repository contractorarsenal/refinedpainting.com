export const business = {
  name: "Refined Painting",
  phone: "(206) 672-2571",
  phoneHref: "tel:+12066722571",
  address: {
    street: "7212 Linden Ave N",
    city: "Seattle",
    state: "WA",
    zip: "98103",
  },
  hours: "Monday–Saturday: 9 AM–5 PM",
  rating: "5.0",
  reviewCount: 227,
} as const;

// Google's public Maps Search URL API. A real, functional deep link built from
// the business's own name/address (no fabricated place ID or review page).
export const googleReviewsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.name} ${business.address.street} ${business.address.city} ${business.address.state} ${business.address.zip}`,
)}`;

export const CTA = {
  primary: "Get a Free Estimate",
  primaryAlt: "Get My Free Estimate",
  start: "Start My Free Estimate",
  call: `Call ${business.phone}`,
} as const;

export type ServiceId =
  | "interior"
  | "exterior"
  | "cabinets"
  | "commercial"
  | "deck-fence"
  | "carpentry";

export type PlaceholderTone = "navy" | "slate" | "teal" | "warm";

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
  tone: PlaceholderTone;
}

export const services: Service[] = [
  {
    id: "interior",
    title: "Interior Painting",
    description: "Clean lines, careful masking, and finishes that hold up in the rooms you actually live in.",
    tone: "slate",
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    description:
      "Prep-driven exterior painting built for Seattle's moisture, changing temperatures, and demanding seasons.",
    tone: "teal",
  },
  {
    id: "cabinets",
    title: "Cabinet Refinishing",
    description: "A durable, sprayed finish that gives kitchens and baths a new look without a full remodel.",
    tone: "warm",
  },
  {
    id: "commercial",
    title: "Commercial Painting",
    description:
      "Scheduled around your business hours, with clear timelines for offices, retail, and multi-family properties.",
    tone: "navy",
  },
  {
    id: "deck-fence",
    title: "Deck & Fence Staining",
    description:
      "Stains and sealants matched to Pacific Northwest wood and weather, applied after proper surface prep.",
    tone: "warm",
  },
  {
    id: "carpentry",
    title: "Carpentry Services",
    description: "Wood repair and replacement handled before paint, so the finish goes on a sound surface.",
    tone: "slate",
  },
];

export const serviceOptions: { id: ServiceId | "not-sure"; label: string }[] = [
  { id: "interior", label: "Interior" },
  { id: "exterior", label: "Exterior" },
  { id: "cabinets", label: "Cabinets" },
  { id: "deck-fence", label: "Deck / Fence" },
  { id: "commercial", label: "Commercial" },
  { id: "carpentry", label: "Carpentry / Repairs" },
  { id: "not-sure", label: "Not Sure Yet" },
];

export const timelineOptions = [
  { id: "asap", label: "ASAP" },
  { id: "30-days", label: "Within 30 Days" },
  { id: "1-3-months", label: "1–3 Months" },
  { id: "planning", label: "Just Planning" },
] as const;

export interface Testimonial {
  quote: string;
  source: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Refined Painting stands out as having some of the best communication of any contractor I've worked with.",
    source: "Google Review",
  },
  {
    quote:
      "The painters were always on time, polite and responsive to our concerns.",
    source: "Google Review",
  },
  {
    quote:
      "The estimates were thorough and unambiguous. Scheduling was easy.",
    source: "Google Review",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Get Your Free Estimate",
    description:
      "We'll visit your home to walk through the project, take measurements, and answer your questions. Within 24–48 hours, you'll receive a detailed, transparent proposal so you know exactly what's included, what to expect, and how your timeline will work.",
  },
  {
    number: "02",
    title: "Complimentary Color Consultation",
    description:
      "Not sure what colors will look best in your space? We'll help you choose a palette that fits your home and your style, bringing Benjamin Moore and Sherwin-Williams samples directly to you so you can see how colors look in your own lighting.",
  },
  {
    number: "03",
    title: "Meticulous Prep & Detailed Finishes",
    description:
      "Our licensed team handles everything from prep to final coats. We protect your home, keep the job site clean, stay on schedule, and provide proactive updates so you're never left guessing.",
  },
  {
    number: "04",
    title: "Final Walkthrough & 5-Year Warranty",
    description:
      "We'll do a detailed walkthrough together to confirm every detail meets your expectations. Once you're happy, we finalize the project, leave your space spotless, and back it with your 5-year workmanship warranty.",
  },
];

export const serviceAreas = [
  "Seattle",
  "Bellevue",
  "Bothell",
  "Everett",
  "Kenmore",
  "Kirkland",
  "Lake Stevens",
  "Lynnwood",
  "Marysville",
  "Medina",
  "Mercer Island",
  "Redmond",
  "Sammamish",
  "Shoreline",
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "How do I choose the right painting company in Seattle?",
    answer:
      "Look for clear, detailed proposals, proof of licensing and insurance, and a process that includes real surface preparation — not just a coat of paint. Refined Painting is fully licensed and insured, Google Verified, and follows EPA Lead-Safe work practices on every project.",
  },
  {
    question: "What should a painting estimate include?",
    answer:
      "A good estimate should be detailed and transparent, so you know exactly what's included, what to expect, and how your timeline will work. We visit your home, take measurements, discuss the project, and deliver a written proposal within 24–48 hours.",
  },
  {
    question: "How long does an interior painting project take?",
    answer:
      "Most interior painting projects take between 3 to 7 days depending on the number of rooms, ceiling heights, and complexity of the work. Single-room projects can often be completed in 1 to 2 days.",
  },
  {
    question: "What's the best time of year for exterior painting in Seattle?",
    answer:
      "Late spring through early fall (May through September) offers the most consistent weather for exterior painting in Seattle. We also monitor forecasts closely and pause work if rain moves in unexpectedly.",
  },
  {
    question: "How durable is refinished cabinetry?",
    answer:
      "When done correctly — with proper cleaning, degreasing, sanding, and bonding primer before a premium cabinet-grade coating — refinished cabinets are extremely durable and hold up well to daily kitchen use.",
  },
  {
    question: "Is your team EPA Lead-Safe Certified?",
    answer:
      "Yes. Refined Painting follows EPA Lead-Safe practices, which matters most on older homes where original paint layers may contain lead.",
  },
  {
    question: "What do you do to protect my home during a project?",
    answer:
      "We treat every home as if it were our own — protecting floors, furniture, and landscaping with drop cloths and plastic sheeting, and keeping the job site clean and organized throughout the project.",
  },
  {
    question: "How much does painting cost?",
    answer:
      "Costs vary with scope and condition. Most residential interior projects in the Seattle area run $2,500–$12,000, while most exterior projects run $5,000–$20,000 or more. Your estimate will lay out the exact scope and price for your home.",
  },
  {
    question: "When should I book my project?",
    answer:
      "As soon as you have a scope you're comfortable with — many interior projects can be scheduled within 2 to 4 weeks of estimate approval, and exterior scheduling fills up fastest during the May–September window.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes. Every project is backed by a 5-year workmanship warranty covering peeling caused by inadequate surface preparation or improper application, with terms and exclusions reviewed at your final walkthrough.",
  },
];

export const trustBullets = [
  "Licensed & Insured",
  "EPA Lead-Safe Certified",
  "Google Verified",
  "5-Year Workmanship Warranty",
];

export const localPartnerBullets = [
  "Clear communication from estimate to walkthrough",
  "Careful surface prep, not shortcuts",
  "Clean, protected job sites every day",
  "EPA Lead-Safe practices on older homes",
  "Complimentary color guidance",
  "5-year workmanship warranty",
];

// Configurable. Swap this copy any time the actual offer changes.
export const promoBanner = {
  eyebrow: "Included With Every Project",
  headline: "Complimentary Color Consultation",
  sub: "With qualifying painting projects, we bring Benjamin Moore and Sherwin-Williams samples directly to your home.",
  cta: "Get My Free Estimate",
};

// Configurable. Swap this copy any time the actual offer changes.
// Submitting this popup opens the real estimate form (see PromoPopup.tsx) —
// there is no separate mailing list, so the copy here should never imply one.
export const promoPopup = {
  headline: "Planning a Painting Project?",
  sub: "Get a free, no-pressure estimate from Refined Painting.",
  cta: "Get My Free Estimate",
  dismiss: "No, Thanks",
};

export const homesPainted = "200+";

export const videoAuthority = {
  youtubeId: "_spxMZthwxs",
  label: "From the Field",
  headline: "We've Painted 200+ Homes. Here's the Cabinet Mistake We See Over and Over.",
  paragraphs: [
    "Homeowners often focus on the paint color first.",
    "But cabinet finishes usually fail because of what happens before the paint ever goes on. Cleaning, degreasing, sanding, bonding primer, product choice and application method determine whether cabinets still look good years later.",
  ],
  callout: "The finish is only as good as the prep.",
  cta: "Get a Cabinet Painting Estimate",
  secondaryCta: "Learn About Cabinet Refinishing",
};

export interface CabinetEducationPoint {
  title: string;
  description: string;
}

export const cabinetEducationPoints: CabinetEducationPoint[] = [
  {
    title: "Clean + Degrease",
    description: "Cabinet surfaces collect oils that wall paint never has to deal with.",
  },
  {
    title: "Proper Bonding",
    description: "Skipping proper sanding and primer is one of the fastest ways to get peeling or chipping.",
  },
  {
    title: "The Right Coating",
    description: "Cabinets require a harder, more durable finish than ordinary wall paint.",
  },
];

// ===== Inner-page content (sourced from refinedpainting.co) =====
// Everything below is used only on inner pages (About, Services, Projects,
// Contact) — the homepage intentionally keeps using the short arrays above.

export const aboutIntro =
  "At Refined Painting, we help Seattle homeowners feel confident about their painting project — from the first conversation to the final walkthrough — by delivering high-end results with a clear, professional process.";

export const companyStory = {
  heading: "The Story Behind Our Seattle Painting Company",
  paragraphs: [
    "Refined Painting was founded with a clear goal: to raise the standard for professional painting services in Seattle.",
    "From the beginning, Refined Painting focused on doing fewer things — but doing them exceptionally well.",
    "What started as a small, locally owned painting company in Seattle quickly grew through word of mouth.",
  ],
};

export const mission =
  "To deliver a stress-free painting experience with refined, long-lasting results.";

export const vision =
  "To become the go-to painting company for homeowners who value quality and peace of mind.";

export interface CoreValue {
  title: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  {
    title: "Communication First",
    description:
      "Proactive communication is just as important as paint quality. Clear expectations, regular updates, and fast responses are part of the job.",
  },
  {
    title: "Preparation Matters",
    description:
      "Great finishes start long before the first coat. We prioritize surface prep because it's what determines how long the results last.",
  },
  {
    title: "Respect for Your Home",
    description:
      "We treat every home as if it were our own — protecting surfaces, maintaining clean work areas, and minimizing disruption.",
  },
  {
    title: "Accountability",
    description:
      "We stand behind our work. From detailed proposals to final walkthroughs and warranties, we take responsibility for the results we deliver.",
  },
];

export interface WhyChoosePoint {
  title: string;
  description: string;
}

export const whyChooseUs: WhyChoosePoint[] = [
  {
    title: "Communication-First, On-Time Service",
    description:
      "Clear expectations, regular updates, and fast responses — proactive communication matters just as much as paint quality.",
  },
  {
    title: "Detailed Scope + Transparent Options",
    description:
      "Every proposal lays out exactly what's included, what to expect, and how your timeline will work before any work begins.",
  },
  {
    title: "Clean, Protected Job Sites + Daily Cleanup",
    description:
      "We treat every home as if it were our own — protecting surfaces, maintaining clean work areas, and minimizing disruption.",
  },
  {
    title: "Premium Prep + High-End Finishes",
    description:
      "Great finishes start long before the first coat. Thorough surface prep is what determines how long the results last.",
  },
  {
    title: "Color Guidance + Lead-Safe Practices",
    description:
      "A complimentary color consultation with Benjamin Moore and Sherwin-Williams samples, backed by EPA Lead-Safe work practices.",
  },
  {
    title: "5-Year Warranty + Final Walkthrough Sign-Off",
    description:
      "A detailed walkthrough to confirm every detail meets your expectations, backed by our 5-year workmanship warranty.",
  },
];

export const serviceSlugs: Record<ServiceId, string> = {
  interior: "interior-painting",
  exterior: "exterior-painting",
  cabinets: "cabinet-refinishing",
  commercial: "commercial-painting",
  "deck-fence": "deck-fence-staining",
  carpentry: "carpentry-services",
};

export function getServiceIdFromSlug(slug: string): ServiceId | undefined {
  const entry = Object.entries(serviceSlugs).find(([, s]) => s === slug);
  return entry?.[0] as ServiceId | undefined;
}

export interface ServiceDetail {
  id: ServiceId;
  eyebrow: string;
  overview: string;
  commonProblem: string;
  approach: string;
  whatsIncluded: string[];
  faqs: FaqItem[];
}

export const serviceDetails: Record<ServiceId, ServiceDetail> = {
  interior: {
    id: "interior",
    eyebrow: "Interior Painting",
    overview:
      "When a room feels tired, outdated, or simply needs a refresh, professional interior painting offers one of the most impactful transformations available for your home.",
    commonProblem:
      "Many homeowners delay interior painting assuming it will be disruptive, messy, or difficult to coordinate — or worry about choosing the wrong colors, hiring unreliable contractors, or ending up with results that look uneven or amateur.",
    approach:
      "We combine meticulous surface preparation, premium Benjamin Moore and Sherwin-Williams paints, and a structured process that keeps your project on schedule from estimate to final walkthrough.",
    whatsIncluded: [
      "Thorough surface preparation and repair",
      "Professional masking and protection of floors and belongings",
      "Premium Benjamin Moore and Sherwin-Williams paints",
      "Ceilings, walls, trim, doors and accent work",
      "Texture matching and drywall blending",
      "Real-time updates throughout the project",
    ],
    faqs: [
      {
        question: "How much does interior painting cost in Seattle?",
        answer:
          "Interior painting costs vary based on room size, ceiling height, surface condition, and prep work required. Most residential interior projects in the Seattle area range from $2,500 to $12,000 depending on square footage and scope.",
      },
      {
        question: "How long does an interior painting project take?",
        answer:
          "Most interior painting projects take between 3 to 7 days depending on the number of rooms, ceiling heights, and complexity of the work. Single-room projects can often be completed in 1 to 2 days.",
      },
      {
        question: "Do I need to move all my furniture before you start?",
        answer:
          "You don't need to move everything, but clearing smaller items and decor helps us work efficiently. We'll move larger furniture away from walls and protect everything with drop cloths and plastic sheeting.",
      },
      {
        question: "How soon can you start my interior painting project?",
        answer: "Many interior projects can be scheduled within 2 to 4 weeks of your estimate approval.",
      },
    ],
  },
  exterior: {
    id: "exterior",
    eyebrow: "Exterior Painting",
    overview:
      "When a home's exterior looks faded, weathered, or no longer reflects the care put into the property, professional exterior painting delivers one of the most dramatic transformations possible.",
    commonProblem:
      "Exterior surfaces face constant exposure to rain, humidity, UV rays, and temperature fluctuations. Paint fades, cracks, and peels, exposing wood to moisture damage and reducing curb appeal — and crews that skip proper preparation set the work up to fail within months.",
    approach:
      "Our process includes comprehensive power washing calibrated to your siding material, wood repair and rot remediation before any paint goes on, careful scraping of loose paint, weather-resistant priming, premium exterior coatings engineered for Pacific Northwest conditions, and detailed attention to trim and accents.",
    whatsIncluded: [
      "Siding-specific power washing",
      "Wood repair and rot remediation before painting",
      "Careful scraping and surface preparation",
      "Weather-resistant priming systems",
      "Premium Benjamin Moore and Sherwin-Williams exterior coatings",
      "Detailed trim and accent work",
    ],
    faqs: [
      {
        question: "What time of year is best for exterior painting in Seattle?",
        answer: "Late spring through early fall (May through September) offers the most consistent weather for exterior painting in Seattle.",
      },
      {
        question: "What happens if it rains during my exterior painting project?",
        answer:
          "We monitor weather forecasts closely and schedule work during predicted dry periods. If unexpected rain occurs, we protect all work surfaces and pause until conditions are appropriate for painting.",
      },
      {
        question: "How often should I repaint my home's exterior in Seattle?",
        answer:
          "Most homes in Seattle need exterior repainting every 7 to 12 years depending on paint quality, surface preparation, sun exposure, and maintenance.",
      },
      {
        question: "How much does exterior painting cost in Seattle?",
        answer:
          "Exterior painting costs depend on home size, siding type, current paint condition, necessary repairs, and project complexity. Most residential exterior projects in the Seattle area range from $5,000 to $20,000 or more.",
      },
    ],
  },
  cabinets: {
    id: "cabinets",
    eyebrow: "Cabinet Refinishing",
    overview:
      "When cabinets feel dated, worn, or out of place in an otherwise beautiful kitchen, cabinet refinishing is one of the smartest ways to upgrade the space without a full remodel.",
    commonProblem:
      "Your kitchen is one of the most used spaces in your home, which means cabinets show wear faster than almost any other surface — scratches, grease buildup, fading finishes, and outdated colors can make even a well-designed kitchen feel tired.",
    approach:
      "Rather than the weeks of disruption and cost of full replacement, we rely on meticulous preparation, premium coatings, and a controlled application process to give cabinets a durable, factory-quality finish.",
    whatsIncluded: [
      "Deep cleaning and degreasing",
      "Precision sanding and surface prep",
      "High-adhesion priming",
      "Premium cabinet-grade coatings",
      "Doors, drawers and hardware coordination",
      "Clean, controlled job sites",
    ],
    faqs: [
      {
        question: "Is cabinet refinishing better than replacing cabinets?",
        answer: "For many homeowners, cabinet refinishing offers the best balance of cost, convenience, and results.",
      },
      {
        question: "How long does cabinet refinishing take?",
        answer: "Most cabinet refinishing projects take several days to a week.",
      },
      {
        question: "How durable are refinished cabinets?",
        answer: "When done correctly, refinished cabinets are extremely durable.",
      },
      {
        question: "Can you change the cabinet color completely?",
        answer: "Yes. Cabinet refinishing allows for full color changes.",
      },
    ],
  },
  commercial: {
    id: "commercial",
    eyebrow: "Commercial Painting",
    overview:
      "When a business space no longer projects the professionalism a brand deserves, commercial painting delivers an immediate transformation that impacts customer perception, employee morale, and property value.",
    commonProblem:
      "A commercial space is more than walls and ceilings — it's where you serve customers, conduct business, and represent your brand. Outdated paint, scuffed surfaces, and worn finishes send the wrong message to clients and don't support productivity or pride.",
    approach:
      "We schedule a site visit to assess the space and any operational constraints, build a project schedule that minimizes disruption, manage surface preparation and premium coating application with a licensed team, then walk every surface with you to confirm it meets commercial standards.",
    whatsIncluded: [
      "Flexible scheduling, including evenings and weekends",
      "High-traffic surface preparation",
      "Low-VOC coatings for occupied spaces",
      "Durable commercial-grade finishes",
      "Brand color matching",
      "Professional, respectful site conduct",
    ],
    faqs: [
      {
        question: "What types of commercial properties do you paint?",
        answer:
          "We paint offices, retail spaces, restaurants, medical and dental facilities, multi-family common areas, property management portfolios, warehouses, and small commercial buildings throughout Seattle and the Eastside.",
      },
      {
        question: "Can you work around our business hours?",
        answer: "Absolutely. We offer flexible scheduling including evenings, weekends, and after-hours work to minimize disruption to your operations.",
      },
      {
        question: "How quickly can you complete a commercial painting project?",
        answer: "Timeline depends on square footage, surface conditions, and scheduling constraints. Many commercial projects are completed within 3 to 7 days.",
      },
      {
        question: "Are your paints safe for occupied commercial buildings?",
        answer: "We prioritize low-VOC and zero-VOC commercial coatings that meet stringent indoor air quality standards.",
      },
    ],
  },
  "deck-fence": {
    id: "deck-fence",
    eyebrow: "Deck & Fence Staining",
    overview:
      "When outdoor wood looks gray, weathered, or no longer enhances a property's appearance, professional deck and fence staining provides the protection and visual transformation your exterior spaces deserve.",
    commonProblem:
      "Pacific Northwest weather is relentless — constant moisture exposure, UV damage, mildew growth, and seasonal temperature swings cause untreated or improperly maintained wood to deteriorate rapidly.",
    approach:
      "We don't just apply stain — we create a protective barrier using moisture meters, proper surface preparation, premium penetrating stains, and application techniques proven to perform in Seattle's challenging climate.",
    whatsIncluded: [
      "Moisture-level testing before staining",
      "Removal of failing or peeling stain",
      "Transparent, semi-transparent, semi-solid and solid stain options",
      "Premium penetrating stains and sealants",
      "Protection for landscaping and patios during application",
      "Clean, protected job sites",
    ],
    faqs: [
      {
        question: "When is the best time to stain a deck or fence in Seattle?",
        answer: "Late spring through early fall (typically May through September) provides the best conditions for deck and fence staining in Seattle.",
      },
      {
        question: "How often should I restain my deck or fence?",
        answer: "Most decks and fences in Seattle need restaining every 2 to 4 years depending on stain quality, sun exposure, and maintenance.",
      },
      {
        question: "Will you remove old failing stain before applying new stain?",
        answer: "Failing or peeling stain must be removed before new stain is applied, or the new coating will fail prematurely.",
      },
      {
        question: "Can you stain composite decking or vinyl fences?",
        answer: "No. Composite and vinyl materials are manufactured with color throughout and don't accept wood stains.",
      },
    ],
  },
  carpentry: {
    id: "carpentry",
    eyebrow: "Carpentry Services",
    overview:
      "When woodwork shows signs of damage, decay, or wear that paint alone can't fix, professional carpentry provides the structural repairs and custom improvements that protect your investment.",
    commonProblem:
      "Exterior and interior woodwork faces constant challenges — moisture intrusion, insect damage, structural settling, and simple wear from decades of use. Rotted trim boards, damaged siding, failing window casings, deteriorating fascia, and worn door frames compromise both appearance and protection.",
    approach:
      "We inspect wood damage and structural concerns, source materials that match your existing construction and architectural style, handle careful removal and custom-fit replacement with weather-resistant installation, then walk the finished work with you.",
    whatsIncluded: [
      "Rot detection and structural assessment",
      "Precision wood removal and replacement",
      "Custom material matching and milling",
      "Weather-resistant installation techniques",
      "Structural wood repairs and reinforcement",
      "Seamless integration and finishing preparation",
    ],
    faqs: [
      {
        question: "How do I know if wood damage requires carpentry repair?",
        answer:
          "If wood feels soft when pressed, shows visible rot or decay, has areas that crumble when probed, or exhibits extensive cracking and splitting, it needs replacement rather than just painting.",
      },
      {
        question: "Can you match existing trim on older homes?",
        answer: "Yes. We work with specialty lumber suppliers and custom mills to source or create profiles that match your existing woodwork.",
      },
      {
        question: "What causes wood rot in Seattle homes?",
        answer:
          "Wood rot results from prolonged moisture exposure combined with moderate temperatures — conditions Seattle provides abundantly. Poor drainage, failed caulking, inadequate paint maintenance, roof leaks, and areas where water can collect all contribute to rot development.",
      },
      {
        question: "Can carpentry repairs be done along with painting?",
        answer:
          "Yes. We coordinate carpentry and painting as integrated services, which streamlines scheduling, ensures proper priming and finishing, and gives you one point of contact for the entire project.",
      },
    ],
  },
};

export const warranty = {
  headline: "5-Year Workmanship Warranty",
  covered:
    "Peeling of paint caused by inadequate surface preparation or improper application on areas painted by our team — including labor and materials for covered repairs. Covered repairs are completed by our team and scheduled within 12 months of notification.",
  excluded: [
    "Failure of old or underlying paint layers",
    "Stained surfaces",
    "Horizontal surfaces, including decks, railings, porches, stairs, roofs and gutters",
    "Areas not painted by Refined Painting",
    "Damage caused by other trades or contractors",
    "Vinyl siding or vinyl windows",
    "Painted materials that warp after painting",
    "Issues caused by mildew or mold, internal moisture, rust, tannin bleed, or fine cracking of old paint",
    "Failures related to environmental or structural conditions beyond paint application",
  ],
  note: "Exact color matching cannot be guaranteed due to normal weathering and aging of the original coating.",
};

export const contactReassurance = {
  heading: "What Happens Next",
  body:
    "Once you submit the form, our team typically reaches out within one business day. You're not committing to anything — you're starting a conversation.",
};
