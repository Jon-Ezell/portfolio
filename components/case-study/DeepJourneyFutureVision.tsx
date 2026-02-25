"use client";

import { motion } from "framer-motion";

export default function DeepJourneyFutureVision() {
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
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            Next Steps
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--theme-text)", marginBottom: "1.5rem" }}
        >
          Future Vision
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)", maxWidth: "780px", marginBottom: "clamp(4rem, 8vw, 7rem)" }}
        >
          Being able to query all Scoot meetings is a very valuable MVP – but future versions could include the ability to
          import and integrate additional data and content from external meetings, CRMs, and other databases in order to make
          Deep Journey the true source of truth for insights on the entire sales cycle.
        </motion.p>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--theme-divider)", marginBottom: "clamp(3rem, 6vw, 5rem)" }} />

        {/* What I'd Do Differently */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "1.5rem" }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", border: "1px solid var(--theme-accent)", borderRadius: "100px", padding: "0.35rem 0.85rem", fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 400, color: "var(--theme-accent)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
            Retrospective
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--theme-text)", marginBottom: "1.5rem" }}
        >
          What I&apos;d Do Differently
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)", maxWidth: "780px", marginBottom: "1.5rem" }}
        >
          The MVP was scoped tightly to the CRO persona, which was the right call for speed — but it meant we underdesigned for the sales rep persona who would ultimately be the heaviest user of the data being queried. I&apos;d have pushed for at least one round of rep-facing validation before shipping to ensure the access control model and organizational visibility layer matched how reps actually think about their data ownership.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)", maxWidth: "780px" }}
        >
          I&apos;d also have designed a more explicit onboarding moment for first-time AI interaction — many CROs hadn&apos;t used a conversational analytics tool before and the blank prompt state created hesitation we hadn&apos;t fully anticipated.
        </motion.p>

      </div>
    </section>
  );
}
