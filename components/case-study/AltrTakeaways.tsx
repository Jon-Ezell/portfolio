"use client";

import { motion } from "framer-motion";


export default function AltrTakeaways() {
  return (
    <section style={{ backgroundColor: "var(--theme-bg)", padding: "clamp(4rem, 8vw, 7rem) 2rem" }}>
      <div className="max-w-7xl mx-auto">

        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "1.5rem" }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", border: "1px solid var(--theme-accent)", borderRadius: "100px", padding: "0.35rem 0.85rem", fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 400, color: "var(--theme-accent)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Takeaways
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--theme-text)", marginBottom: "1.5rem" }}
        >
          What this project taught me
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)", maxWidth: "780px", marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          This project reinforced how powerful it is to combine behavioral analytics with direct user observation.
          Pendo gave me the where; usability sessions gave me the why. Together, they made it possible to design
          a solution that felt obvious in retrospect — but would have been easy to get wrong without both.
        </motion.p>

        {/* What / Why graphic + caption */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)", display: "flex", alignItems: "center", gap: "clamp(2rem, 5vw, 4rem)", flexWrap: "wrap" }}
        >
          <svg viewBox="0 0 620 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, width: "100%", maxWidth: "580px" }}>
            {/* Handle */}
            <line x1="195" y1="175" x2="312" y2="275" stroke="currentColor" strokeWidth="36" strokeLinecap="round" style={{ color: "var(--theme-text)" }} />
            {/* Filled circle masks handle bleed-through */}
            <circle cx="130" cy="120" r="90" fill="var(--theme-bg)" />
            {/* Circle stroke */}
            <circle cx="130" cy="120" r="90" stroke="currentColor" strokeWidth="12" fill="none" style={{ color: "var(--theme-text)" }} />
            {/* WHY inside glass */}
            <text x="130" y="138" textAnchor="middle" style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "58px", fill: "var(--theme-text)", letterSpacing: "-0.02em" }}>why</text>
            {/* WHAT inside handle — match why: MD Nichrome Ultra, lowercase */}
            <text x="254" y="231" textAnchor="middle" transform="rotate(40 254 231)" style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "22px", fill: "var(--theme-bg)", letterSpacing: "-0.02em" }}>what</text>

            {/* Qualitative label — points to glass */}
            <circle cx="220" cy="120" r="3.5" fill="var(--theme-text)" />
            <line x1="224" y1="118" x2="396" y2="62" stroke="currentColor" strokeWidth="1" style={{ color: "var(--theme-muted)" }} />
            <text x="402" y="66" textAnchor="start" style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "11px", fontWeight: 300, fill: "var(--theme-muted)", letterSpacing: "0.18em" }}>QUALITATIVE</text>

            {/* Quantitative label — points to handle, no dot */}
            <line x1="292" y1="252" x2="416" y2="295" stroke="currentColor" strokeWidth="1" style={{ color: "var(--theme-muted)" }} />
            <text x="422" y="299" textAnchor="start" style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "11px", fontWeight: 300, fill: "var(--theme-muted)", letterSpacing: "0.18em" }}>QUANTITATIVE</text>
          </svg>

          <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)", maxWidth: "420px", fontStyle: "italic" }}>
            I like to think about quantitative research as being able to position or focus a microscope or magnifying glass, and the qualitative &lsquo;why&rsquo; as really what is discovered from looking through that focused and correctly positioned lens.
          </p>
        </motion.div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--theme-divider)", margin: "clamp(3rem, 6vw, 5rem) 0" }} />

        {/* What I could've done differently */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--theme-text)", marginBottom: "1.25rem" }}
        >
          What I could&apos;ve done differently
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)", maxWidth: "780px" }}
        >
          I defined activation as connecting a database — which was the right constraint for the scope of the project. But looking back, I never investigated what happened after that moment. Were users engaging with the analytics features? Were governance workflows being used as intended? Activation solved for the minimum viable entry point into the product, but it didn&apos;t answer whether users were reaching the full &ldquo;aha.&rdquo;
        </motion.p>

      </div>
    </section>
  );
}
