export const site = {
  name: "Hanaz Modelling",
  handle: "@hanaz_modelling",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hanazmodelling.com",
  description:
    "A premium black-and-gold modelling brand experience for portfolios, runway moments, editorials, applications, and collaborations.",
  logo: "/images/brand/hanaz-logo.png",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/hanaz_modelling/",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918129370899",
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Hello Hanaz Modelling, I would like to know more.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  applicationFormUrl: process.env.NEXT_PUBLIC_APPLICATION_FORM_URL || "",
  collaborationFormUrl: process.env.NEXT_PUBLIC_COLLABORATION_FORM_URL || "",
  location: "India",
  nav: [
    { label: "Home", href: "/" },
    { label: "Models", href: "/models" },
    { label: "Editorials", href: "/editorials" },
    { label: "Events", href: "/events" },
    { label: "About", href: "/about" },
    { label: "Collaborate", href: "/collaborate" },
    { label: "Contact", href: "/contact" }
  ]
};

export function whatsappUrl(message = site.whatsappMessage) {
  const encoded = encodeURIComponent(message);
  return site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${encoded}`
    : `https://wa.me/?text=${encoded}`;
}

export function applicationUrl() {
  return "/join";
}

export function collaborationUrl() {
  return "/collaborate";
}
