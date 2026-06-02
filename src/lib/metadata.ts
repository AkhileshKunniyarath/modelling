import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata(title: string, description = site.description, path = ""): Metadata {
  const url = `${site.url}${path}`;
  return {
    title: `${title} | ${site.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      images: [{ url: "/images/brand/hanaz-logo.png", width: 1200, height: 1200 }],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [site.logo]
    }
  };
}
