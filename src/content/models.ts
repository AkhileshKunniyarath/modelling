export type ModelProfile = {
  slug: string;
  name: string;
  category: string;
  location: string;
  heroImage: string;
  gallery: string[];
  bio: string;
  featured?: boolean;
};

export const models: ModelProfile[] = [
  {
    slug: "shilpa-b",
    name: "Shilpa B",
    category: "Fashion",
    location: "Trivandrum",
    heroImage: "/images/models/shilpa-b.png",
    gallery: [
      "/images/models/shilpa-b.png",
      "/images/models/shilpa-b.png",
      "/images/models/shilpa-b.png"
    ],
    bio: "A confident fashion profile from Trivandrum with a poised camera presence and elegant styling potential.",
    featured: true
  },
  {
    slug: "vipin-kumar",
    name: "Vipin Kumar",
    category: "Runway",
    location: "Trivandrum",
    heroImage: "/images/models/vipin-kumar.png",
    gallery: [
      "/images/models/vipin-kumar.png",
      "/images/models/vipin-kumar.png",
      "/images/models/vipin-kumar.png"
    ],
    bio: "A sharp runway profile from Trivandrum with a strong formal presence and confident event-ready styling.",
    featured: true
  },
  {
    slug: "joshni-stephen",
    name: "Joshni Stephen",
    category: "Fashion",
    location: "Trivandrum",
    heroImage: "/images/models/joshni-stephen.png",
    gallery: [
      "/images/models/joshni-stephen.png",
      "/images/models/joshni-stephen.png",
      "/images/models/joshni-stephen.png"
    ],
    bio: "A graceful fashion profile from Trivandrum with expressive styling, elegant stage presence, and strong portrait appeal.",
    featured: true
  },
  {
    slug: "arya-sen",
    name: "Arya Sen",
    category: "Runway",
    location: "Bengaluru",
    heroImage:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85"
    ],
    bio: "A poised runway presence shaped for fashion showcases, launches, and editorial-led campaigns.",
    featured: false
  },
  {
    slug: "meera-khan",
    name: "Meera Khan",
    category: "Editorial",
    location: "Hyderabad",
    heroImage:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85"
    ],
    bio: "Editorial styling, expressive portraiture, and premium campaign versatility.",
    featured: false
  },
  {
    slug: "nia-rao",
    name: "Nia Rao",
    category: "Commercial",
    location: "Chennai",
    heroImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=85"
    ],
    bio: "Brand-friendly commercial energy with clean styling and strong camera confidence.",
    featured: false
  }
];

export const categories = ["All", ...Array.from(new Set(models.map((model) => model.category)))];
