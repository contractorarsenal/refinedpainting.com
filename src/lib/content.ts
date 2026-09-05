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
    title: "Free Estimate",
    description:
      "We visit the property, take measurements, discuss the project and provide a detailed proposal.",
  },
  {
    number: "02",
    title: "Color Consultation",
    description:
      "Complimentary color support including Benjamin Moore and Sherwin-Williams samples.",
  },
  {
    number: "03",
    title: "Prep + Paint",
    description:
      "Protect the home, prep surfaces carefully, keep the job site organized and communicate throughout the project.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "Review every detail together before completing the project, backed by the 5-year workmanship warranty.",
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
  "Redmond",
  "Sammamish",
  "Shoreline",
  "Mercer Island",
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Refined Painting is licensed and insured, and Google Verified, so you can hire with confidence.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Every project is backed by a 5-year workmanship warranty. We'll review the details with you at your final walkthrough.",
  },
  {
    question: "Do you work on older homes with lead paint?",
    answer:
      "Yes. Our team is EPA Lead-Safe Certified and follows lead-safe work practices on homes built before 1978.",
  },
  {
    question: "Do you offer color consultations?",
    answer:
      "Every project includes a complimentary color consultation, with Benjamin Moore and Sherwin-Williams samples brought directly to your home.",
  },
  {
    question: "How long does a painting project usually take?",
    answer:
      "Timelines depend on the scope, surface condition, and weather for exterior work. We'll give you a clear schedule as part of your proposal.",
  },
  {
    question: "What do you do to protect my home?",
    answer:
      "We protect floors, furniture, and landscaping before work begins, and keep the job site clean and organized throughout the project.",
  },
  {
    question: "Do you paint both interiors and exteriors?",
    answer:
      "Yes. We handle interior painting, exterior painting, cabinet refinishing, decks and fences, commercial spaces, and related carpentry repairs.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve homeowners across Seattle and the Eastside, including King and Snohomish Counties.",
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

// Configurable — swap this copy any time the actual offer changes.
export const promoBanner = {
  eyebrow: "Included With Every Project",
  headline: "Complimentary Color Consultation",
  sub: "With qualifying painting projects, we bring Benjamin Moore and Sherwin-Williams samples directly to your home.",
  cta: "Get My Free Estimate",
  viewOffers: "View Current Offers",
};

// Configurable — swap this copy any time the actual offer changes.
export const promoPopup = {
  headline: "Planning a Painting Project?",
  sub: "Get current offers, seasonal availability and helpful painting advice from Refined Painting.",
  cta: "Send Me the Offers",
  dismiss: "No, Thanks",
  successHeadline: "You're On the List.",
  successSub: "We'll follow up with your color consultation details shortly.",
};

export const homesPainted = "200+";

export const videoAuthority = {
  youtubeId: "_spxMZthwxs",
  label: "From the Field",
  headline: "We've Painted 200+ Homes. Here's the Cabinet Mistake We See Over and Over.",
  paragraphs: [
    "Homeowners often focus on the paint color first.",
    "But cabinet finishes usually fail because of what happens before the paint ever goes on — cleaning, degreasing, sanding, bonding primer, product choice and application method determine whether cabinets still look good years later.",
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
