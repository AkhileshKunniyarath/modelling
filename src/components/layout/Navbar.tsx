"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { applicationUrl, site, whatsappUrl } from "@/content/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="brand nav-brand" aria-label="Hanaz Modelling home">
          <span className="brand-mark">
            <img src={site.logo} alt="" />
          </span>
          <span className="brand-copy">
            <strong>{site.name}</strong>
            <small>Fashion / Runway / Editorial</small>
          </span>
        </Link>
        <nav className="nav-links nav-pill" aria-label="Primary navigation">
          {site.nav.slice(0, 6).map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="nav-icon-link" href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="Open Instagram">
            <InstagramIcon />
          </a>
          <a className="nav-icon-link" href={whatsappUrl()} aria-label="Open WhatsApp">
            <WhatsAppIcon />
          </a>
          <Link className="btn nav-cta" href="/join">
            Join Hanaz
          </Link>
        </div>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "X" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <div className="mobile-menu-head">
            <span>{site.name}</span>
            <small>{site.handle}</small>
          </div>
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="button-row">
            <a className="btn" href={applicationUrl()} onClick={() => setOpen(false)}>
              Apply Now
            </a>
            <a className="btn secondary" href={whatsappUrl()} onClick={() => setOpen(false)}>
              WhatsApp
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
