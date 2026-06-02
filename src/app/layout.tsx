import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ScrollEffects } from "@/components/animations/ScrollEffects";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SocialDock } from "@/components/layout/SocialDock";
import { site } from "@/content/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`
  },
  description: site.description,
  icons: {
    icon: [
      { url: site.logo, type: "image/png" },
      { url: site.logo, sizes: "32x32", type: "image/png" },
      { url: site.logo, sizes: "192x192", type: "image/png" }
    ],
    apple: [{ url: site.logo, sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: site.shareImage, width: 1200, height: 1200, alt: site.name }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <div className="site-shell">
          <ScrollEffects />
          <Navbar />
          <SocialDock />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
