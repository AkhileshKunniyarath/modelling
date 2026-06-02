export type EventItem = {
  slug: string;
  title: string;
  city: string;
  date: string;
  status: "upcoming" | "completed";
  posterImage: string;
  description: string;
  externalCtaUrl?: string;
};

export const events: EventItem[] = [
  {
    slug: "hanaz-fashion-night",
    title: "Hanaz Fashion Night",
    city: "Bengaluru",
    date: "2026-08-22",
    status: "upcoming",
    posterImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
    description:
      "An evening showcase for emerging models, designers, stylists, and brand collaborators."
  },
  {
    slug: "editorial-casting-week",
    title: "Editorial Casting Week",
    city: "Hyderabad",
    date: "2026-07-12",
    status: "upcoming",
    posterImage:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=85",
    description:
      "A curated call for portfolio-ready faces, campaign talent, and runway prospects."
  },
  {
    slug: "gold-runway-showcase",
    title: "Gold Runway Showcase",
    city: "Chennai",
    date: "2025-12-16",
    status: "completed",
    posterImage:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    description:
      "A completed runway-led showcase pairing confident talent with premium styling."
  }
];
