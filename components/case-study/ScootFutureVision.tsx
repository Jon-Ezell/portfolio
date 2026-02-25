"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        <path d="M17 3.5l1.5 1.5-1.5 1.5M19.5 5h-3"/>
      </svg>
    ),
    title: "Integration of Agents",
    bullets: [
      "The ratio of attendees to VIPs or sales leaders is never 1:1, incorporating agents may allow more attendees to connect with more VIPs or get insights during the meeting",
      "The Scoot experience is novel for most users, and can be challenging for older demographics, support bots would help this learning curve greatly",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="8" rx="2"/>
        <path d="M9 10v2M15 10v2"/>
        <circle cx="9" cy="6" r="1" fill="currentColor" stroke="none"/>
        <circle cx="15" cy="6" r="1" fill="currentColor" stroke="none"/>
        <path d="M12 14v2M8 16h8M10 18h4M12 20v2"/>
        <path d="M7 16H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2"/>
      </svg>
    ),
    title: "Large Data Set Queries",
    bullets: [
      "Ability to query all meeting and event data potentially for an entire sales funnel or cycle",
      "So many use cases from CRO's, CMO's, and other sales people to leverage the rich social data created during our events",
    ],
  },
];

export default function ScootFutureVision() {
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
          style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)", maxWidth: "780px", marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          After completion of this project, most users really enjoyed connecting and mingling — the core social experience was something that we managed to get right. But, with the advent of AI, there is so much opportunity for users to get even more out of the experience from being able to chat with agents as support and knowledge tools, as well as for sales people to utilize all of the conversation, and social data to better inform and fine tune their campaigns and rep performance.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, i) => (
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
