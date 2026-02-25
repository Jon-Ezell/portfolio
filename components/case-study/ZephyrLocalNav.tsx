"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "outcomes", label: "Outcomes" },
  { id: "process", label: "Process" },
  { id: "solution", label: "Solution" },
];

export default function ZephyrLocalNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        bottom: "max(60px, calc(env(safe-area-inset-bottom, 0px) + 20px))",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        maxWidth: "calc(100vw - 2rem)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "44px",
          padding: "0 4px",
          borderRadius: "7px",
          backgroundColor: "color-mix(in srgb, color-mix(in srgb, var(--theme-accent) 55%, black) 50%, transparent)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.2)",
          whiteSpace: "nowrap",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {sections.map(({ id, label }) => (
          <div key={id}>
            <button
              className="local-nav-btn"
              onClick={() => scrollTo(id)}
              style={{
                display: "flex",
                alignItems: "center",
                height: "36px",
                padding: "0 16px",
                fontFamily: '"MD Nichrome", Verdana, sans-serif',
                fontSize: "11px",
                fontWeight: 300,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: active === id ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.8)",
                background: active === id ? "rgba(0,0,0,0.2)" : "none",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "color 0.25s ease, background 0.25s ease",
              }}
            >
              {label}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
}
