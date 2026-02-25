"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// All palettes verified WCAG AA — text/bg ≥ 4.5:1, muted/bg ≥ 5:1
const themes = [
  {
    id: "cream",
    label: "Cream",
    swatch: "#f5f0e8",
    vars: {
      "--theme-bg": "#f5f0e8",
      "--theme-text": "#111111",
      "--theme-muted": "#3a3a3a",
      "--theme-accent": "#e76e52",
      "--theme-accent-text": "#111111",
      "--theme-nav": "rgba(7,7,7,0.89)",
      "--theme-divider": "rgba(0,0,0,0.15)",
      "--theme-surface": "#ece7df",
      "--theme-surface-hover": "#e4dfd7",
      "--theme-card-bg": "rgba(196, 188, 176, 0.92)",
      "--theme-card-bg-hover": "rgba(182, 174, 162, 0.95)",
      "--theme-on-dark": "rgba(245, 240, 232, 0.65)",
      "--theme-logo-filter": "none",
      "--theme-venn-filter": "none",
      "--theme-graphic-filter": "none",
      "--theme-vase-blend": "multiply",
      "--theme-tree-blend": "screen",
      "--theme-tree-opacity": "0.45",
    },
  },
  {
    id: "midnight",
    label: "Midnight",
    swatch: "#0d0d0f",
    vars: {
      "--theme-bg": "#0d0d0f",
      "--theme-text": "#f0ebe2",
      "--theme-muted": "#9a9590",
      "--theme-accent": "#e76e52",
      "--theme-accent-text": "#111111",
      "--theme-nav": "rgba(28,28,30,0.95)",
      "--theme-divider": "rgba(255,255,255,0.12)",
      "--theme-surface": "#1a1a1c",
      "--theme-surface-hover": "#252527",
      "--theme-card-bg": "rgba(26, 26, 28, 0.72)",
      "--theme-card-bg-hover": "rgba(37, 37, 39, 0.78)",
      "--theme-on-dark": "rgba(255, 255, 255, 0.55)",
      "--theme-logo-filter": "brightness(0) invert(1)",
      "--theme-venn-filter": "invert(1)",
      "--theme-graphic-filter": "invert(1)",
      "--theme-vase-blend": "screen",
      "--theme-tree-blend": "luminosity",
      "--theme-tree-opacity": "0.9",
    },
  },
  {
    id: "ice",
    label: "Ice",
    swatch: "#c8ddf5",
    vars: {
      "--theme-bg": "#f0f5fb",
      "--theme-text": "#0d1b2a",
      "--theme-muted": "#3a5068",
      "--theme-accent": "#1d4ed8",
      "--theme-accent-text": "#ffffff",
      "--theme-nav": "rgba(13,27,42,0.92)",
      "--theme-divider": "rgba(13,27,42,0.12)",
      "--theme-surface": "#e2ecf8",
      "--theme-surface-hover": "#d8e4f2",
      "--theme-card-bg": "rgba(176, 200, 226, 0.92)",
      "--theme-card-bg-hover": "rgba(160, 186, 214, 0.95)",
      "--theme-on-dark": "rgba(230, 242, 252, 0.85)",
      "--theme-logo-filter": "none",
      "--theme-venn-filter": "none",
      "--theme-graphic-filter": "none",
      "--theme-vase-blend": "multiply",
      "--theme-tree-blend": "screen",
      "--theme-tree-opacity": "0.45",
    },
  },
  {
    id: "forest",
    label: "Forest",
    swatch: "#40D879",
    vars: {
      "--theme-bg": "#0e1a10",
      "--theme-text": "#dff0e0",
      "--theme-muted": "#90c898",
      "--theme-accent": "#4ade80",
      "--theme-accent-text": "#0e1a10",
      "--theme-nav": "rgba(5,10,6,0.95)",
      "--theme-divider": "rgba(255,255,255,0.12)",
      "--theme-surface": "#142218",
      "--theme-surface-hover": "#1a2a1e",
      "--theme-card-bg": "rgba(20, 34, 24, 0.72)",
      "--theme-card-bg-hover": "rgba(26, 42, 30, 0.78)",
      "--theme-on-dark": "rgba(255, 255, 255, 0.55)",
      "--theme-logo-filter": "brightness(0) invert(1)",
      "--theme-venn-filter": "invert(1) hue-rotate(120deg)",
      "--theme-graphic-filter": "invert(1)",
      "--theme-vase-blend": "screen",
      "--theme-tree-blend": "luminosity",
      "--theme-tree-opacity": "0.9",
    },
  },
  {
    id: "dusk",
    label: "Dusk",
    swatch: "#BBADFA",
    vars: {
      "--theme-bg": "#0e0b1a",
      "--theme-text": "#ede8f8",
      "--theme-muted": "#b0a0e8",
      "--theme-accent": "#c4b5fd",
      "--theme-accent-text": "#0e0b1a",
      "--theme-nav": "rgba(20,16,40,0.95)",
      "--theme-divider": "rgba(255,255,255,0.12)",
      "--theme-surface": "#160c28",
      "--theme-surface-hover": "#1e1232",
      "--theme-card-bg": "rgba(22, 12, 40, 0.72)",
      "--theme-card-bg-hover": "rgba(30, 18, 50, 0.78)",
      "--theme-on-dark": "rgba(255, 255, 255, 0.55)",
      "--theme-logo-filter": "brightness(0) invert(1)",
      "--theme-venn-filter": "invert(1) hue-rotate(240deg)",
      "--theme-graphic-filter": "invert(1)",
      "--theme-vase-blend": "screen",
      "--theme-tree-blend": "luminosity",
      "--theme-tree-opacity": "0.9",
    },
  },
];

function applyTheme(id: string) {
  const theme = themes.find((t) => t.id === id);
  if (!theme) return;
  const html = document.documentElement;
  html.setAttribute("data-theme", id);
  Object.entries(theme.vars).forEach(([key, val]) => {
    html.style.setProperty(key, val);
  });
  localStorage.setItem("portfolio-theme", id);
}

// Paint palette icon — shown when expanded
function PaletteIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      <circle cx="17.5" cy="10.5" r="1" fill="currentColor" stroke="none"/>
      <circle cx="8.5" cy="7" r="1" fill="currentColor" stroke="none"/>
      <circle cx="6.5" cy="12" r="1" fill="currentColor" stroke="none"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  );
}


export default function ThemeSelector() {
  const [active, setActive] = useState("cream");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") || "cream";
    applyTheme(saved);
    setActive(saved);
  }, []);

  const handleSelect = (id: string) => {
    applyTheme(id);
    setActive(id);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: "clamp(12px, 2vw, 24px)",
        transform: "translateY(-50%)",
        zIndex: 9998,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0px",
        backgroundColor: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(12px)",
        borderRadius: "999px",
        padding: "6px 7px",
        overflow: "hidden",
      }}
    >
      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        title={isOpen ? "Collapse theme switcher" : "Switch theme"}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          padding: 0,
          outline: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255,255,255,0.8)",
          cursor: "pointer",
          marginBottom: isOpen ? "6px" : "0px",
          transition: "margin 0.25s ease",
          flexShrink: 0,
        }}
      >
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PaletteIcon />
        </span>
      </motion.button>

      {/* Swatches */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="swatches"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", overflow: "hidden" }}
          >
            {themes.map((t) => (
              <motion.button
                key={t.id}
                onClick={() => handleSelect(t.id)}
                title={t.label}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: t.swatch,
                  border:
                    active === t.id
                      ? "2px solid rgba(255,255,255,0.9)"
                      : "2px solid rgba(255,255,255,0.15)",
                  padding: 0,
                  outline: "none",
                  boxShadow:
                    active === t.id ? "0 0 0 2px rgba(255,255,255,0.2)" : "none",
                  transition: "border 0.2s, box-shadow 0.2s",
                  flexShrink: 0,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
