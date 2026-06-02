"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".section",
  ".section-tight",
  ".page-hero",
  ".brand-intro",
  ".statement-grid",
  ".split-panel",
  ".apply-panel",
  ".cta-grid",
  ".footer-spotlight",
  ".footer-grid",
  ".card",
  ".step",
  ".apply-step",
  ".collab-card",
  ".process-item",
  ".join-form label",
  ".form-actions"
].join(",");

export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));

    elements.forEach((element, index) => {
      element.classList.add("reveal-target");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12
      }
    );

    elements.forEach((element) => observer.observe(element));

    let ticking = false;

    function updateScrollProgress() {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? scrollTop / scrollable : 0;

      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
      ticking = false;
    }

    function requestScrollProgress() {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    }

    updateScrollProgress();
    window.addEventListener("scroll", requestScrollProgress, { passive: true });
    window.addEventListener("resize", requestScrollProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestScrollProgress);
      window.removeEventListener("resize", requestScrollProgress);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
