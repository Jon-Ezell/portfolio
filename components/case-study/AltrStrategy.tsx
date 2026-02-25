"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    num: "01",
    title: "Data Teams / IT Admins",
    body: "They need to connect databases to ALTR to enable governance. The process requires technical precision, but they were constantly context-switching between ALTR, Snowflake, and documentation — losing their place and abandoning the flow entirely.",
  },
  {
    num: "02",
    title: "New Business Users",
    body: "First-time users unfamiliar with the product need to understand what ALTR does and why each setup step matters. Without a welcome sequence or onboarding context, they couldn't determine the purpose of features or where to begin.",
  },
  {
    num: "03",
    title: "ALTR Internal Team",
    body: "Without a working self-serve onboarding, every new customer required hands-on assistance from internal team members. This wasn't just a UX problem — it was a growth bottleneck that made scaling the product impossible.",
  },
];

export default function AltrStrategy() {
  return (
    <section style={{ backgroundColor: "var(--theme-bg)", padding: "clamp(4rem, 8vw, 7rem) 2rem" }}>
      <div className="max-w-7xl mx-auto">

        {/* ── Strategy block ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", border: "1px solid var(--theme-accent)", borderRadius: "100px", padding: "0.35rem 0.85rem", fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 400, color: "var(--theme-accent)" }}>
              <svg width="12" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              Strategy
            </span>
          </div>

          {/* Design hypothesis */}
          <div style={{ borderLeft: "2px solid var(--theme-text)", paddingLeft: "clamp(1.25rem, 3vw, 2.5rem)", maxWidth: "780px", marginBottom: "2rem" }}>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", fontWeight: 300, lineHeight: 1.8, color: "var(--theme-text)" }}>
              <strong style={{ fontWeight: 700 }}>Design Hypothesis:</strong>{" "}
              If users can understand the connection process, know where they are within that process and what they need to do next, and interact with a simple and cohesive interface throughout — then they will be able to activate in ALTR much more easily.
            </p>
          </div>

          <div style={{ borderLeft: "2px solid var(--theme-text)", paddingLeft: "clamp(1.25rem, 3vw, 2.5rem)", maxWidth: "780px" }}>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", fontWeight: 300, lineHeight: 1.8, color: "var(--theme-text)" }}>
              <strong style={{ fontWeight: 700 }}>Strategic Decision:</strong>{" "}
              Rather than patching the existing database connection form, I shifted scope to redesigning the{" "}
              <em>entire activation journey</em> — consolidating the 3-product flow into a guided in-product wizard, and surfacing all necessary information inline so users never need to leave ALTR.
            </p>
          </div>
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
            Three groups with fundamentally different relationships to the activation problem — each made worse by the same broken onboarding flow.
          </p>
        </motion.div>

        {/* ── Audience cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderTop: "2px solid var(--theme-text)", paddingTop: "1.5rem" }}
            >
              <p style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1, color: "var(--theme-accent)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
                {a.num}
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "clamp(1rem, 1.4vw, 1.1rem)", fontWeight: 700, lineHeight: 1.2, color: "var(--theme-text)", marginBottom: "0.875rem" }}>
                {a.title}
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)" }}>
                {a.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
