"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { LYME_IMG } from "@/lib/lymelessImages";

export const EASE = [0.16, 1, 0.3, 1] as const;
const MACHINA = '"PP Neue Machina", Arial, sans-serif';
const ULTRA = '"MD Nichrome Ultra", Verdana, sans-serif';

export const bodyStyle: React.CSSProperties = {
  fontFamily: MACHINA,
  fontSize: "14px",
  fontWeight: 300,
  lineHeight: 1.8,
  color: "var(--theme-muted)",
  maxWidth: "720px",
};

export const strongStyle: React.CSSProperties = { fontWeight: 700, color: "var(--theme-text)" };

export const labelStyle: React.CSSProperties = {
  fontFamily: MACHINA,
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--theme-accent)",
};

/* ── Section scaffolding ─────────────────────────────── */

export function Section({
  id,
  dark = false,
  children,
}: {
  id?: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={dark ? "lyme-dark" : undefined}
      style={{
        backgroundColor: dark ? "var(--theme-nav)" : "var(--theme-bg)",
        padding: "clamp(4rem, 8vw, 7rem) 2rem",
        scrollMarginTop: "80px",
      }}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  style,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function Pill({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          border: "1px solid var(--theme-accent)",
          borderRadius: "100px",
          padding: "0.35rem 0.85rem",
          fontFamily: MACHINA,
          fontSize: "13px",
          fontWeight: 400,
          color: "var(--theme-accent)",
        }}
      >
        {icon}
        {children}
      </span>
    </div>
  );
}

export function H2({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h2
      style={{
        fontFamily: ULTRA,
        fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
        color: dark ? "#ffffff" : "var(--theme-text)",
        maxWidth: "820px",
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </h2>
  );
}

export function H3({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h3
      style={{
        fontFamily: MACHINA,
        fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
        fontWeight: 700,
        lineHeight: 1.3,
        color: dark ? "#ffffff" : "var(--theme-text)",
        maxWidth: "820px",
        marginBottom: "1rem",
      }}
    >
      {children}
    </h3>
  );
}

/** Left-rule callout, as in Deep Journey's solution captions. */
export function Callout({ title, children, dark = false }: { title?: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      style={{
        borderLeft: `2px solid ${dark ? "#ffffff" : "var(--theme-accent)"}`,
        paddingLeft: "clamp(1.25rem, 3vw, 2rem)",
        maxWidth: "720px",
        margin: "2rem 0",
      }}
    >
      {title && (
        <p style={{ ...labelStyle, color: dark ? "#ffffff" : "var(--theme-accent)", marginBottom: "0.6rem" }}>{title}</p>
      )}
      <div
        style={{
          fontFamily: MACHINA,
          fontSize: "14px",
          fontWeight: 300,
          lineHeight: 1.8,
          color: dark ? "#ffffff" : "var(--theme-text)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Big-number stat row. */
export function Stats({
  items,
  dark = false,
}: {
  items: { value: string; label: string }[];
  dark?: boolean;
}) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-8"
      style={{ margin: "clamp(2rem, 4vw, 3rem) 0" }}
    >
      {items.map((s, i) => (
        <Reveal key={s.value} delay={i * 0.08}>
          <p
            style={{
              fontFamily: ULTRA,
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              lineHeight: 1,
              color: "var(--theme-accent)",
            }}
          >
            {s.value}
          </p>
          <p
            style={{
              fontFamily: MACHINA,
              fontSize: "13px",
              fontWeight: 300,
              lineHeight: 1.6,
              color: dark ? "rgba(255,255,255,0.7)" : "var(--theme-muted)",
              marginTop: "0.6rem",
              maxWidth: "320px",
            }}
          >
            {s.label}
          </p>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Images ───────────────────────────────────────────── */

export type ImgKey = keyof typeof LYME_IMG;

/**
 * Image that opens full size in a new tab — the phone screens are dense,
 * so every figure is one click from a readable version.
 */
export function Figure({
  img,
  alt,
  caption,
  dark = false,
  maxWidth,
  priority,
}: {
  img: ImgKey;
  alt: string;
  caption?: React.ReactNode;
  dark?: boolean;
  maxWidth?: string;
  priority?: boolean;
}) {
  const meta = LYME_IMG[img];
  return (
    <figure style={{ margin: 0, maxWidth }}>
      <a
        href={meta.src}
        target="_blank"
        rel="noopener noreferrer"
        className="lyme-figure-link"
        aria-label={`${alt} (open full size)`}
        style={{
          display: "block",
          borderRadius: "12px",
          overflow: "hidden",
          border: `1px solid ${dark ? "rgba(255,255,255,0.12)" : "var(--theme-divider)"}`,
          backgroundColor: "#f4f2ec",
          position: "relative",
        }}
      >
        <Image
          src={meta.src}
          alt={alt}
          width={meta.w}
          height={meta.h}
          sizes="(max-width: 768px) 100vw, 1200px"
          priority={priority}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <span className="lyme-zoom-hint" aria-hidden>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
          Full size
        </span>
      </a>
      {caption && (
        <figcaption
          style={{
            fontFamily: MACHINA,
            fontSize: "12px",
            fontWeight: 300,
            lineHeight: 1.65,
            color: dark ? "rgba(255,255,255,0.6)" : "var(--theme-muted)",
            marginTop: "0.75rem",
            maxWidth: "760px",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Captioned figures in a responsive grid (used inside Go deeper panels). */
export function FigureGrid({
  items,
  cols = 2,
  dark = false,
}: {
  items: { img: ImgKey; alt: string; caption: React.ReactNode }[];
  cols?: 1 | 2;
  dark?: boolean;
}) {
  return (
    <div
      className={cols === 2 ? "grid grid-cols-1 md:grid-cols-2" : "grid grid-cols-1"}
      style={{ gap: "2rem 1.5rem", alignItems: "start" }}
    >
      {items.map((it) => (
        <Figure key={it.img} img={it.img} alt={it.alt} caption={it.caption} dark={dark} />
      ))}
    </div>
  );
}

/* ── Go deeper (collapsible) ─────────────────────────── */

export function GoDeeper({
  id,
  title,
  summary,
  dark = false,
  children,
}: {
  id: string;
  title: string;
  summary?: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const border = dark ? "rgba(255,255,255,0.14)" : "var(--theme-divider)";
  const bodyId = `${id}-body`;
  return (
    <div
      id={id}
      style={{
        marginTop: "2rem",
        borderRadius: "12px",
        border: `1px solid ${border}`,
        backgroundColor: dark ? "rgba(255,255,255,0.04)" : "var(--theme-surface)",
        overflow: "hidden",
        scrollMarginTop: "96px",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={bodyId}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1rem 1.25rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          <span style={{ ...labelStyle, color: dark ? "rgba(255,255,255,0.55)" : "var(--theme-muted)" }}>
            Go deeper
          </span>
          <span
            style={{
              fontFamily: MACHINA,
              fontSize: "14px",
              fontWeight: 700,
              color: dark ? "#ffffff" : "var(--theme-text)",
            }}
          >
            {title}
          </span>
          {summary && (
            <span
              style={{
                fontFamily: MACHINA,
                fontSize: "12px",
                fontWeight: 300,
                color: dark ? "rgba(255,255,255,0.55)" : "var(--theme-muted)",
              }}
            >
              {summary}
            </span>
          )}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          style={{ display: "flex", color: dark ? "#ffffff" : "var(--theme-text)", flexShrink: 0 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={bodyId}
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="lyme-deeper-body"
              style={{
                padding: "1.5rem 1.25rem 1.75rem",
                borderTop: `1px solid ${border}`,
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Paragraph helper for panel copy; respects dark sections. */
export function P({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p style={{ ...bodyStyle, margin: 0, color: dark ? "rgba(255,255,255,0.65)" : "var(--theme-muted)" }}>
      {children}
    </p>
  );
}

export function B({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <strong style={{ fontWeight: 700, color: dark ? "#ffffff" : "var(--theme-text)" }}>{children}</strong>;
}

export function Dashes({ items, dark = false }: { items: React.ReactNode[]; dark?: boolean }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "720px" }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
          <span style={{ color: "var(--theme-accent)", flexShrink: 0, lineHeight: 1.8, fontSize: "14px" }}>—</span>
          <span style={{ ...bodyStyle, color: dark ? "rgba(255,255,255,0.65)" : "var(--theme-muted)" }}>{it}</span>
        </li>
      ))}
    </ul>
  );
}
