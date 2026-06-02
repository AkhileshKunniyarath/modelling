"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Preloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = window.sessionStorage.getItem("hanaz-preloader-seen");
    if (!seen) {
      setShow(true);
      window.sessionStorage.setItem("hanaz-preloader-seen", "true");
      const timer = window.setTimeout(() => setShow(false), 2600);
      return () => window.clearTimeout(timer);
    }
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="preloader" aria-label="Loading Hanaz Modelling">
      <img src={site.logo} alt="Hanaz Modelling" />
    </div>
  );
}
