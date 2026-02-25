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

export default function ScootSolution() {
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
          The solution wasn&apos;t a single feature — it was a set of coordinated system-level changes
          that reshaped participation, creation, and engagement across the entire event lifecycle.
        </motion.h2>

        {/* ── Block 1: Mobile parity ── */}
        <SolutionBlock
          headline="Seamless mobile app parity with the Web based experience"
          body="Built a fully integrated mobile experience from a fragmented foundation, translating a complex multi-surface product into a cohesive mobile-first system. Applied iOS interaction patterns and platform-native behaviors to reduce cognitive load while maintaining feature parity with web — enabling scalable engagement beyond desktop environments."
        >
          <FullImage src="/scoot-phones.png" alt="Scoot mobile app — three phones" />
        </SolutionBlock>

        {/* ── Block 2: Presentation mode ── */}
        <SolutionBlock
          headline="Presentation mode experience uniquely designed for engagement"
          body="Redefined presentation mode from passive broadcasting into a socially-aware experience. Leveraged real-time behavioral signals and visual indicators to surface audience dynamics, enabling presenters to adapt in the moment and drive engagement beyond traditional webinar paradigms."
        >
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-end", flexWrap: "wrap" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/scoot-presenter-mobile.png" alt="" style={{ height: "clamp(300px, 35vw, 500px)", width: "auto", borderRadius: "12px", display: "block", flexShrink: 0 }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/scoot-presenter-desktop.png" alt="" style={{ height: "clamp(300px, 35vw, 500px)", width: "auto", borderRadius: "12px", display: "block", flexShrink: 0 }} />
          </div>
        </SolutionBlock>

        {/* ── Block 3: Room creation engine ── */}
        <SolutionBlock
          headline="Room creation engine that empowers producers and simplifies a complex tool ecosystem"
          body="Designed a composable environment creation system that enabled non-technical organizers to build complex social spaces without engineering dependency. Abstracted technical complexity into intuitive controls, allowing scalable world-building through modular logic, interaction primitives, and behavioral structure."
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TwoColImages left="/scoot-room-backgrounds.png" right="/scoot-entry-flows.png" />
            <FullImage src="/scoot-custom-question.png" alt="Custom question builder" />
          </div>
        </SolutionBlock>

        {/* ── Block 4: Before/after event infrastructure ── */}
        <SolutionBlock
          headline="Before and after event infrastructure that makes attending both easy and actionable"
          body="Architected an end-to-end event lifecycle system connecting CRM data, user context, and post-event outcomes into a continuous feedback loop. Shifted the platform from isolated events to relationship-driven engagement by ensuring data flowed seamlessly before, during, and after experiences."
          delay={0.05}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <FullImage src="/scoot-multidevice.png" alt="Scoot multi-device experience" />
            <TwoColImages left="/scoot-data-mappings.png" right="/registration.png" />
          </div>
        </SolutionBlock>

      </div>
    </section>
  );
}
