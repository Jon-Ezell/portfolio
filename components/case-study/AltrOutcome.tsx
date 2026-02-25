"use client";

import { motion } from "framer-motion";

interface OutcomeCard {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
}


const PathIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3"/>
    <path d="M12 8v3"/>
    <path d="M6.5 14a5.5 5.5 0 0 1 11 0"/>
    <circle cx="6" cy="17" r="3"/>
    <circle cx="18" cy="17" r="3"/>
    <path d="M9 17h6"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const defaultCards: OutcomeCard[] = [
  {
    icon: <PathIcon />,
    title: "A clear path through a complex technical process",
    bullets: [
      "Users always knew where they were in the setup process and what they needed to do next.",
      "Progress indicators and a step-by-step structure replaced the ambiguity that caused the majority of drop-offs.",
      "The entire connection process now lived inside the product, eliminating the docs context-switch.",
    ],
  },
  {
    icon: <ShieldIcon />,
    title: "Express configuration with inline guidance",
    bullets: [
      "Code snippets surfaced directly inside the product flow, eliminating the need to hunt through documentation.",
      "Form fields retained state through errors — no more losing all input after a failed connection attempt.",
      "Clear, actionable error messaging replaced generic failures that sent users to external docs.",
    ],
  },
];

export default function AltrOutcome({ cards = defaultCards }: { cards?: OutcomeCard[] }) {
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
          style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "clamp(1.3rem, 2.8vw, 2.2rem)", fontWeight: 700, lineHeight: 1.25, color: "var(--theme-text)", maxWidth: "900px", marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Turning an expert-dependent onboarding into a self-serve activation experience
          that scaled with the product.
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ border: "1px solid var(--theme-divider)", borderRadius: "14px", overflow: "hidden", backgroundColor: "var(--theme-surface)" }}
            >
              <div style={{ aspectRatio: "4/3", overflow: "hidden", backgroundColor: "var(--theme-surface-hover)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--theme-text)" }}>
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
