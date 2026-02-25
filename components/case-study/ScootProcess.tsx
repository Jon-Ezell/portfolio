"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const DatabaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const NetworkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="6" height="6" rx="1"/>
    <rect x="16" y="2" width="6" height="6" rx="1"/>
    <rect x="9" y="16" width="6" height="6" rx="1"/>
    <path d="M5 8v3h14V8"/><path d="M12 11v5"/>
  </svg>
);
const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
  </svg>
);
const ChipIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="7" width="10" height="10" rx="1"/>
    <path d="M7 9H4M7 12H4M7 15H4M17 9h3M17 12h3M17 15h3M9 7V4M12 7V4M15 7V4M9 17v3M12 17v3M15 17v3"/>
  </svg>
);

const headlineStyle: React.CSSProperties = {
  fontFamily: '"PP Neue Machina", Arial, sans-serif',
  fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
  fontWeight: 700,
  lineHeight: 1.4,
  color: "var(--theme-text)",
  marginBottom: "1rem",
};
const bodyStyle: React.CSSProperties = {
  fontFamily: '"PP Neue Machina", Arial, sans-serif',
  fontSize: "13px",
  fontWeight: 300,
  lineHeight: 1.75,
  color: "var(--theme-muted)",
};
const bulletStyle: React.CSSProperties = {
  ...bodyStyle,
  display: "flex",
  gap: "0.4rem",
  marginTop: "0.5rem",
};

function TimelineNode({ icon, isFirst, isLast }: { icon: React.ReactNode; isFirst?: boolean; isLast?: boolean }) {
  return (
    <div
      className="timeline-node-cell"
      style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "2rem" }}
    >
      {!isFirst && (
        <div style={{ position: "absolute", top: 0, bottom: "calc(100% - 2rem - 18px)", left: "50%", width: "1px", backgroundColor: "var(--theme-divider)", transform: "translateX(-50%)" }} />
      )}
      {!isLast && (
        <div style={{ position: "absolute", top: "calc(2rem + 18px)", bottom: 0, left: "50%", width: "1px", backgroundColor: "var(--theme-divider)", transform: "translateX(-50%)" }} />
      )}
      <div style={{ position: "relative", zIndex: 1, width: "36px", height: "36px", borderRadius: "50%", border: "1px solid var(--theme-divider)", backgroundColor: "var(--theme-surface)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--theme-text)", flexShrink: 0 }}>
        {icon}
      </div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: "0.75rem" }}>
      {items.map((item, i) => (
        <li key={i} style={bulletStyle}>
          <span style={{ flexShrink: 0, marginTop: "0.15rem" }}>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CaptionedImage({ src, caption }: { src: string; caption?: string }) {
  return (
    <div style={{ maxWidth: "min(280px, 100%)" }}>
      <div style={{ overflow: "hidden" }}>
        <Image src={src} alt={caption ?? ""} width={800} height={500} className="w-full h-auto" />
      </div>
      {caption && (
        <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "11px", fontWeight: 300, color: "var(--theme-muted)", marginTop: "0.6rem", textAlign: "center" }}>
          {caption}
        </p>
      )}
    </div>
  );
}

export default function ScootProcess() {
  return (
    <section style={{ backgroundColor: "var(--theme-bg)", padding: "clamp(4rem, 8vw, 7rem) 2rem" }}>
      <div className="max-w-7xl mx-auto">

        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "2rem" }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", border: "1px solid var(--theme-accent)", borderRadius: "100px", padding: "0.35rem 0.85rem", fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 400, color: "var(--theme-accent)" }}>
            <ChipIcon />
            Process
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--theme-text)", maxWidth: "820px", marginBottom: "1.25rem" }}
        >
          Closely embedded relationships with both Engineering and our Customers
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)", maxWidth: "680px", marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          The project began with understanding all of the background context, history and goals of the product and company. When I arrived, a barebones prototype of the product existed, but was not ready yet for the enterprise. I then progressed through UX and UI auditing, mapping customer and prospect needs, and roadmapping product initiatives needed to go to market over the course of the next 18 months.
        </motion.p>

        {/* Timeline grid — collapses to flex-col on mobile via .timeline-grid CSS class */}
        <div className="timeline-grid" style={{ display: "grid", gridTemplateColumns: "1fr 64px 1fr" }}>

          {/* ── ROW 1 ── */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "5rem", display: "flex", justifyContent: "flex-end" }}
          >
            <CaptionedImage src="/scoot-activation-research.png" />
          </motion.div>

          <TimelineNode icon={<SearchIcon />} isFirst />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>Audited the current app experience, documenting pain-points across platforms and devices, prioritizing and shipping solutions.</p>
            <Bullets items={[
              "ID'd over 35 pain points through personal auditing and quantitatively through amplitude.",
              "Categorized by severity and complexity",
              "Designed solutions, prioritized implementation",
              "Created tickets and handed off to engineering",
              "Oversaw implementation to completion",
              "Saw customer activation on mobile improve from 60 to 95%. Saw web-based first time activation increase by 20%",
            ]} />
          </motion.div>

          {/* ── ROW 2 ── */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>Developed a repo of sales and customer event and call recordings that I was able to query with Notebook LM to gain deep insights into customer pain points.</p>
            <Bullets items={[
              "Over 100 customer calls and event transcriptions were eventually added into the folder",
              "Was able to query, aggregate, and categorize frequency, and severity of all documented pain points.",
            ]} />
          </motion.div>

          <TimelineNode icon={<DatabaseIcon />} />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <CaptionedImage src="/scoot-entry-flows-map.png" />
          </motion.div>

          {/* ── ROW 3 ── */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "5rem", display: "flex", justifyContent: "flex-end" }}
          >
            <CaptionedImage src="/scoot-notebook-lm.png" caption="Notebook LM example queries" />
          </motion.div>

          <TimelineNode icon={<NetworkIcon />} />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>Researched and ID'd current pain points core to the game environment through both internal and external feedback</p>
            <Bullets items={[
              "Analyzed all edge cases and error states that occurred in the game environment, and documented all unaddressed use cases.",
              "Hypothesized solutions with the product team, and exec board",
              "Validated solutions through interactive prototypes and mock ups.",
            ]} />
          </motion.div>

          {/* ── ROW 4 ── */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "2rem" }}
          >
            <p style={headlineStyle}>Created an actionable and extensible design system</p>
            <Bullets items={[
              "Over 200 unique components, implemented consistent color, text, type, and primitive styling and usage across platforms and devices.",
              "Collaborated with engineering leadership to integrate Storybook UI to ensure correct UI usage and implementation on the development side.",
            ]} />
          </motion.div>

          <TimelineNode icon={<GridIcon />} isLast />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "2rem" }}
          >
            <CaptionedImage src="/scoot-design-system.png" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
