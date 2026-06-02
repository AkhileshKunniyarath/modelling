export type Editorial = {
  slug: string;
  title: string;
  theme: string;
  year: string;
  coverImage: string;
  description: string;
  gallery: string[];
};

export const editorials: Editorial[] = [
  {
    slug: "gold-hour-portraits",
    title: "Gold Hour Portraits",
    theme: "Portrait Series",
    year: "2026",
    coverImage:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Warm light, refined styling, and quiet confidence for an editorial-first brand mood.",
    gallery: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=900&q=85"
    ]
  },
  {
    slug: "runway-noir",
    title: "Runway Noir",
    theme: "Fashion Show",
    year: "2026",
    coverImage:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
    description:
      "A black-and-gold runway atmosphere for launches, pageants, and luxury showcases.",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85"
    ]
  },
  {
    slug: "studio-lines",
    title: "Studio Lines",
    theme: "Campaign",
    year: "2025",
    coverImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85",
    description:
      "Clean studio compositions for lookbooks, portfolio updates, and brand partnerships.",
    gallery: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85"
    ]
  }
];
