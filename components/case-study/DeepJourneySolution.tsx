"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const RefreshIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);

interface SolutionBlockProps {
  headline: string;
  body: string;
  children: React.ReactNode;
  delay?: number;
}

function SolutionBlock({ headline, body, children, delay = 0 }: SolutionBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: "clamp(5rem, 9vw, 8rem)" }}
    >
      {/* Pill */}
      <div style={{ marginBottom: "1.5rem" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          border: "1px solid var(--theme-accent)", borderRadius: "100px",
          padding: "0.35rem 0.85rem",
          fontFamily: '"PP Neue Machina", Arial, sans-serif',
          fontSize: "13px", fontWeight: 400, color: "var(--theme-accent)",
        }}>
          <RefreshIcon />
          Solution
        </span>
      </div>

      {/* Headline */}
      <h3 style={{
        fontFamily: '"PP Neue Machina", Arial, sans-serif',
        fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
        fontWeight: 700,
        lineHeight: 1.3,
        color: "#ffffff",
        maxWidth: "820px",
        marginBottom: "1.25rem",
      }}>
        {headline}
      </h3>

      {/* Body */}
      <p style={{
        fontFamily: '"PP Neue Machina", Arial, sans-serif',
        fontSize: "14px", fontWeight: 300, lineHeight: 1.8,
        color: "rgba(255,255,255,0.55)",
        maxWidth: "720px",
        marginBottom: "2.5rem",
      }}>
        {body}
      </p>

      {/* Media */}
      {children}
    </motion.div>
  );
}

function FullImage({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div style={{ borderRadius: "12px", overflow: "hidden" }}>
      <Image src={src} alt={alt} width={1400} height={900} className="w-full h-auto" />
    </div>
  );
}

function TwoColImages({
  left,
  right,
  cols = "1fr 1fr",
}: {
  left: string;
  right: string;
  cols?: string;
}) {
  return (
    <div className="two-col-grid" style={{ display: "grid", gridTemplateColumns: cols, gap: "1rem", alignItems: "center" }}>
      <div style={{ borderRadius: "12px", overflow: "hidden" }}>
        <Image src={left} alt="" width={700} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
      <div style={{ borderRadius: "12px", overflow: "hidden" }}>
        <Image src={right} alt="" width={1200} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
    </div>
  );
}

export default function DeepJourneySolution() {
  return (
    <section style={{ backgroundColor: "var(--theme-nav)", padding: "clamp(4rem, 8vw, 7rem) 2rem" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section intro */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            maxWidth: "820px",
            marginBottom: "clamp(4rem, 7vw, 6rem)",
          }}
        >
          Rather than designing isolated features, the work focused on redefining how users
          access and explore organizational knowledge — shifting from navigation-based interfaces
          toward continuity-driven interaction.
        </motion.h2>

        {/* ── Block 1: Conversational intelligence ── */}
        <SolutionBlock
          headline="Conversational intelligence layer replacing navigation-based analytics"
          body="Transformed fragmented sales data into a conversational intelligence layer, allowing CROs to query organizational knowledge through natural language instead of navigating disconnected dashboards. Designed context filtering and shared journeys to support both exploration and repeatable workflows."
        >
          <FullImage src="/deep-journey-ui.png" alt="Deep Journey conversational analytics interface" />
        </SolutionBlock>

        {/* ── Block 2: Contextual continuity ── */}
        <SolutionBlock
          headline="Contextual continuity – from thousands of conversations to a single quotation"
          body="Designed traceable insight architecture that allows users to move seamlessly from high-level summaries to source-level quotations, ensuring trust and verifiability — a critical requirement for AI-assisted decision making."
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <FullImage src="/cc1.png" alt="Deep Journey — Ask interface with context filtering" />
            <TwoColImages left="/cc2.png" right="/cc3.png" />
          </div>
        </SolutionBlock>

        {/* ── Block 3: Technical lift ── */}
        <SolutionBlock
          headline="Maximizing customer value from technical lift and infrastructure."
          body="Leveraged underlying infrastructure to expand product value beyond initial scope, enabling rapid deployment of additional agentic experiences (e.g., help/knowledge bots) without significant engineering overhead — demonstrating scalable system architecture."
          delay={0.05}
        >
          <TwoColImages left="/mc1.png" right="/mc2.png" cols="2fr 1fr" />
        </SolutionBlock>

      </div>
    </section>
  );
}
