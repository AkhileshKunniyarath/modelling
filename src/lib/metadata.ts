import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata(title: string, description = site.description, path = ""): Metadata {
  const url = `${site.url}${path}`;
  return {
    title: `${title} | ${site.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.shareTitle}`,
      description,
      url,
      siteName: site.shareTitle,
      images: [{ url: site.shareImage, width: 1200, height: 1200, alt: site.shareTitle }],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.shareTitle}`,
      description,
      images: [site.shareImage]
    },
    other: {
      "og:image": site.shareImage,
      "og:image:secure_url": site.shareImage,
      "og:image:type": "image/png",
      "og:image:width": "1200",
      "og:image:height": "1200"
    }
  };
}
