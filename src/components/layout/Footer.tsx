"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { applicationUrl, collaborationUrl, site, whatsappUrl } from "@/content/site";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const pathname = usePathname();
  const showSpotlight = !["/join", "/collaborate"].includes(pathname);
  const portfolioLinks = site.nav.filter((item) =>
    ["/models", "/editorials", "/events", "/about"].includes(item.href)
  );
  const actionLinks = [
    { label: "Apply as a Model", href: applicationUrl() },
    { label: "Collaborate", href: collaborationUrl() },
    { label: "WhatsApp", href: whatsappUrl() },
    { label: "Instagram", href: site.instagramUrl }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {showSpotlight ? (
          <div className="footer-spotlight">
            <div>
              <span className="eyebrow">Hanaz Modelling</span>
              <h2 className="footer-title">Step into the frame with confidence.</h2>
            </div>
            <div className="button-row">
              <a className="btn" href={applicationUrl()}>
                Join Hanaz
              </a>
              <a className="btn secondary" href={collaborationUrl()}>
                Collaborate
              </a>
            </div>
          </div>
        ) : null}

        <div className="footer-grid">
          <div className="footer-brand-block">
            <Link href="/" className="brand footer-brand">
              <span className="brand-mark">
                <img src={site.logo} alt="" />
              </span>
              <span className="brand-copy">
                <strong>{site.name}</strong>
                <small>{site.handle}</small>
              </span>
            </Link>
            <p className="meta">
              Premium modelling portfolios, runway showcases, editorials, applications, and collaboration enquiries.
            </p>
            <div className="footer-socials" aria-label="Social media links">
              <a href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={whatsappUrl()} aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
              {site.contactEmail ? (
                <a href={`mailto:${site.contactEmail}`} aria-label="Email">
                  <MailIcon />
                </a>
              ) : (
                <a href="/contact" aria-label="Contact">
                  <MailIcon />
                </a>
              )}
            </div>
          </div>

          <nav className="footer-column" aria-label="Portfolio links">
            <h3>Explore</h3>
            {portfolioLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="footer-column" aria-label="Contact links">
            <h3>Connect</h3>
            {actionLinks.map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <span>Copyright 2026 {site.name}. All rights reserved.</span>
          <span>Backendless luxury portfolio website.</span>
        </div>
      </div>
    </footer>
  );
}
