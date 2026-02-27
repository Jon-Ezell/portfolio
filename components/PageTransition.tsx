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
    sessionStorage.setItem(INTRO_KEY, "1");

    // First visit: 1 s dramatic hold. Return visits: 200 ms — enough time for
    // all sibling effects (including ThemeSelector) to fire before the curtain
    // lifts, so the correct theme is always showing.
    const delay = isFirstVisit ? 1000 : 200;
    const timer = setTimeout(() => html.classList.add("pt-up"), delay);

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        anchor.target === "_blank"
      )
        return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.hash) return;

      e.preventDefault();
      html.classList.remove("pt-up");
      setTimeout(() => window.location.assign(href), 800);
    };

    document.addEventListener("click", handleClick);

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
      <div className="page-transition__panel" />
    </div>
  );
}
