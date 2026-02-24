"use client";

import { useEffect, useRef } from "react";

const INTRO_KEY = "__PT_INTRO_PLAYED__";

export default function PageTransition() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const html = document.documentElement;
    const isFirstVisit = !sessionStorage.getItem(INTRO_KEY);
    const delay = isFirstVisit ? 1000 : 0;
    sessionStorage.setItem(INTRO_KEY, "1");

    const liftCurtain = () => html.classList.add("pt-up");
    const timer = setTimeout(liftCurtain, delay);

    // Intercept internal link clicks to animate the curtain before navigating
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip hash-only, mailto, tel, and external/blank links
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        anchor.target === "_blank"
      )
        return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      // Skip same-page hash navigation
      if (url.pathname === window.location.pathname && url.hash) return;

      e.preventDefault();
      html.classList.remove("pt-up");
      setTimeout(() => {
        window.location.assign(href);
      }, 800);
    };

    document.addEventListener("click", handleClick);

    // BFCache restore — replay intro if browser restored from cache
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        sessionStorage.removeItem(INTRO_KEY);
        html.classList.remove("pt-up");
        setTimeout(() => html.classList.add("pt-up"), 100);
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <div className="page-transition">
      <div className="page-transition__panel">
        <div className="page-transition__logo" />
      </div>
    </div>
  );
}
