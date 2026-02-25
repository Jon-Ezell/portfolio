"use client";

import { motion } from "framer-motion";

const takeaways = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
    title: "Behavioral analytics are a designer's best advocate",
    bullets: [
      "The 7% activation rate was invisible to the team until Pendo surfaced it. Without the data, the problem could have been dismissed as an edge case.",
      "Quantitative data built the business case; qualitative research explained the why. Both were necessary — neither alone was sufficient.",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "The gap was never the technology — it was the experience around it",
    bullets: [
      "The underlying database connection worked fine. The problem was that no one had designed the path to using it.",
      "Users didn't need a smarter system — they needed context, progress visibility, and a single source of truth.",
    ],
  },
];

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
          style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--theme-text)", marginBottom: "1.5rem" }}
        >
          What This Project Taught Me
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

        {/* Takeaway cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          {takeaways.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ border: "1px solid var(--theme-divider)", borderRadius: "14px", overflow: "hidden", backgroundColor: "var(--theme-surface)" }}
            >
              <div style={{ aspectRatio: "16/7", backgroundColor: "var(--theme-surface-hover)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--theme-text)" }}>
                {card.icon}
              </div>
              <div style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
                <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, lineHeight: 1.35, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                  {card.title}
                </p>
                <ul style={{ padding: 0, listStyle: "none", margin: 0 }}>
                  {card.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.4rem", fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.65, color: "var(--theme-muted)", marginTop: j > 0 ? "0.5rem" : 0 }}>
                      <span style={{ flexShrink: 0, marginTop: "0.1rem" }}>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
