"use client";

import { motion } from "framer-motion";

export default function DeepJourneyStrategy() {
  return (
    <section style={{ backgroundColor: "var(--theme-bg)", padding: "clamp(4rem, 8vw, 7rem) 2rem" }}>
      <div className="max-w-7xl mx-auto">

        {/* ── Background block ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", border: "1px solid var(--theme-accent)", borderRadius: "100px", padding: "0.35rem 0.85rem", fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 400, color: "var(--theme-accent)" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              Background
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--theme-text)", maxWidth: "820px", marginBottom: "1.25rem" }}
          >
            The data existed. The ability to interrogate it didn&apos;t.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)", maxWidth: "680px" }}
          >
            Scoot had become the source of truth for enterprise sales campaigns — the place where events, roundtables, and one-on-ones all lived. That centrality put Scoot in a unique position: sitting on a dense layer of conversational data generated across every customer touchpoint. As the team went deeper into the sales vertical, one pain point kept surfacing — campaign analysis. Sales leaders had no effective way to understand what was actually happening across their conversations, what was resonating, and where deals were stalling. Scoot&apos;s data was the answer to that problem. That realization is what kicked off this project.
          </motion.p>
        </motion.div>

        {/* ── Divider ── */}
        <div style={{ borderTop: "1px solid var(--theme-divider)", marginBottom: "clamp(3rem, 6vw, 5rem)" }} />

        {/* ── Audiences block ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}
        >
          <h2 style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--theme-text)", marginBottom: "1.25rem" }}>
            Audiences
          </h2>
          <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "clamp(0.9rem, 1.3vw, 1rem)", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-muted)", maxWidth: "580px" }}>
            The MVP was tailor built to meet the needs of the most immediately actionable user type: The Chief Revenue Officer.
          </p>
        </motion.div>

        {/* ── CRO audience card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ borderTop: "2px solid var(--theme-text)", paddingTop: "1.5rem", maxWidth: "480px" }}
        >
          {/* CRO icon + label row */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid var(--theme-divider)", backgroundColor: "var(--theme-surface)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--theme-accent)" }}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "clamp(1rem, 1.4vw, 1.1rem)", fontWeight: 700, lineHeight: 1.2, color: "var(--theme-text)" }}>
              CRO
            </p>
          </div>

          <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)" }}>
            The CRO manages large scale, complex sales initiatives and needs quality insights into the effectiveness and health of their campaigns, funnels, deals, and team members. Easily accessible and deep insights into sales conversations is of obvious value to these users.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
