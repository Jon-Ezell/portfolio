"use client";

import { motion } from "framer-motion";

export default function ZephyrStrategy() {
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
              <strong style={{ fontWeight: 700 }}>Strategic insight:</strong>{" "}
              The challenge wasn&apos;t building another mindfulness app — it was creating a{" "}
              <em>closed-loop feedback system</em> that bridges breath and physiology, translating
              hard-to-detect signals into meaningful behavioral feedback that users could act on anywhere.
            </p>
          </div>
        </motion.div>

        {/* ── Consumer product paragraph ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          <div style={{ borderLeft: "2px solid var(--theme-text)", paddingLeft: "clamp(1.25rem, 3vw, 2.5rem)", maxWidth: "780px" }}>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", fontWeight: 300, lineHeight: 1.8, color: "var(--theme-text)" }}>
              Designing Zephyr required the same instincts that define great consumer product design — reducing a complex, intimidating behavior change into something that felt simple, rewarding, and habit-forming from the first session. The same principles apply whether you&apos;re designing a breathwork app or a healthcare marketplace: remove friction, show progress, make the value visible immediately.
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
            The MVP was designed to serve two distinct user types with very different motivations but the same core need.
          </p>
        </motion.div>

        {/* ── Audience cards — 2-col ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              num: "01",
              title: "The Help Seeker",
              body: "This user is one of the 51.5 million people in the US that struggles with moderate to severe stress on a regular basis. They may not be able to pay for a therapist or health club membership, but need accessible and effective support. They want to see and know that what they are paying for is actually working.",
            },
            {
              num: "02",
              title: "The Biohacker",
              body: "These are high-performing individuals who want whatever they can get to give them an edge. Instead of insurance covered medical devices, these people are obsessed with free market solutions that help them improve their day-to-day performance. They are often competitive and gain motivation through results and social proof.",
            },
          ].map((a, i) => (
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
