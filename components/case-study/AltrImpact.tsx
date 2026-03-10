"use client";

import { motion } from "framer-motion";

const ImpactIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

export default function AltrImpact() {
  return (
    <section style={{ backgroundColor: "var(--theme-bg)", padding: "clamp(4rem, 8vw, 7rem) 2rem" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
              Impact
              <ImpactIcon />
            </span>
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--theme-text)",
            maxWidth: "820px",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}>
            A scalable, product-led onboarding experience
          </h3>

          {/* Body paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "720px" }}>
            <p style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "13px", fontWeight: 300, lineHeight: 1.8,
              color: "var(--theme-muted)",
              margin: 0,
            }}>
              The redesigned platform transformed ALTR from an expert-dependent onboarding process into a self-serve experience that scaled naturally with the product.
            </p>
            <p style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "13px", fontWeight: 300, lineHeight: 1.8,
              color: "var(--theme-muted)",
              margin: 0,
            }}>
              By simplifying complex tokenization and policy configuration workflows, new users could successfully set up and deploy ALTR without relying on internal specialists.
            </p>
            <p style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "13px", fontWeight: 300, lineHeight: 1.8,
              color: "var(--theme-muted)",
              margin: 0,
            }}>
              This shift enabled the platform to support faster adoption, reduced onboarding friction, and positioned ALTR to scale as a true product-led enterprise security platform.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
