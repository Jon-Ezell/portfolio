"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    num: "01",
    title: "Hosts / Producers",
    body: "They are creating, managing, and executing every Scoot event. They want to make sure that a complex real-time event unfolds perfectly according to plan — no technical issues, confusion or bad experiences for their attendees.",
  },
  {
    num: "02",
    title: "Attendees",
    body: "They're navigating a novel and unique immersive experience for the first time. Their time is valuable and it's imperative that they get something tangible from the event as well as have a pleasant experience.",
  },
  {
    num: "03",
    title: "Sales People",
    body: "These folks want to get the most out of connecting and interacting with others during the event. They want to convert and leverage everything they can in Scoot to do so.",
  },
];

export default function ScootStrategy() {
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

          <div style={{ borderLeft: "2px solid var(--theme-text)", paddingLeft: "clamp(1.25rem, 3vw, 2.5rem)", maxWidth: "780px" }}>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", fontWeight: 300, lineHeight: 1.8, color: "var(--theme-text)" }}>
              <strong style={{ fontWeight: 700 }}>Strategic Decision:</strong>{" "}
              Based on the insight that <em>agency drives engagement</em> we shifted scope from
              incremental feature improvements to designing an immersive world model where users{" "}
              <em>navigate and connect autonomously</em> — anchoring product direction on{" "}
              <em>behavioral agency</em> instead of passive attendance.
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
            Three distinct user types require creating a dynamic real-time experience that takes a myriad of goals, needs and objectives into account.
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
