"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ZephyrOutcome() {
  return (
    <section style={{ backgroundColor: "var(--theme-bg)", padding: "clamp(3rem, 6vw, 5rem) 2rem" }}>
      <div className="max-w-7xl mx-auto">

        {/* Label pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "1.5rem" }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", border: "1px solid var(--theme-accent)", borderRadius: "100px", padding: "0.35rem 0.85rem", fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 400, color: "var(--theme-accent)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/>
            </svg>
            Outcome
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "clamp(1.3rem, 2.8vw, 2.2rem)", fontWeight: 700, lineHeight: 1.25, color: "var(--theme-text)", maxWidth: "820px", marginBottom: "1.25rem" }}
        >
          An accessible, immersive, and effective solution to nervous system regulation
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "var(--theme-muted)", maxWidth: "720px", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          Designed a wearable-first regulation system grounded in{" "}
          <span style={{ color: "var(--theme-accent)" }}>heart rate coherence</span>
          {" "}— translating complex physiological science into a simple feedback-driven experience
          that users can access anywhere.
        </motion.p>

        {/* HRC + NSA graphics — bordered container, theme-adaptive */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            border: "1px solid var(--theme-divider)",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "var(--theme-surface)",
            maxWidth: "860px",
          }}
        >
          {/* HRC wave graphic */}
          <div style={{ padding: "clamp(2rem, 5vw, 3.5rem)", paddingBottom: "clamp(1rem, 2vw, 1.5rem)" }}>
            <Image
              src="/HRC.png"
              alt="Heart rate coherence — respiratory rate and heart rate wave alignment"
              width={1328}
              height={328}
              className="w-full h-auto"
              style={{ filter: "var(--theme-graphic-filter)" }}
            />
          </div>

          {/* NSA equation graphic */}
          <div style={{ padding: "0 clamp(2rem, 5vw, 3.5rem)", paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            <Image
              src="/NSA.png"
              alt="respiratory rate variability + heart rate variability = nervous system activation"
              width={1530}
              height={50}
              className="w-full h-auto"
              style={{ filter: "var(--theme-graphic-filter)", opacity: 0.7 }}
            />
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid var(--theme-divider)" }} />

          {/* Explanatory text */}
          <div style={{ padding: "clamp(1.25rem, 3vw, 2rem)" }}>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "var(--theme-muted)", maxWidth: "640px" }}>
              The level of resonance between heart rate and respiratory rate, known as{" "}
              <span style={{ color: "var(--theme-accent)", fontWeight: 500 }}>heart rate coherence</span>
              , is a massive indicator of nervous system activation. Practicing resonant breathing
              has been demonstrated to be highly effective at relaxing the nervous system.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
