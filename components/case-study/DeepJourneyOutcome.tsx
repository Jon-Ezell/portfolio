"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    image: "/deep-journey-chat.png",
    imageAlt: "Tracing to source information — Deep Journey",
    video: "/dj1.mp4",
    title: "Tracing to source information",
    intro: "Users can:",
    bullets: [
      "Navigate NLP conversations to the sources that informed the Agent's responses",
      "View a list of sources and click within them to view the actual transcripts",
    ],
  },
  {
    image: "/dj2.png",
    imageAlt: "Filtering context windows — Deep Journey",
    title: "Filtering context windows",
    intro: undefined,
    bullets: [
      "Select Meeting or event topics, data ranges, people and keywords in order to fine tune their results set to match exactly what they are looking for.",
    ],
  },
  {
    image: "/convoDJ.png",
    imageAlt: "High trust, no hallucination conversations — Deep Journey",
    title: "High trust, no hallucinated conversations",
    intro: undefined,
    bullets: [
      "A conversational experience specifically designed to only surface information directly informed by source material — allowing users to trust the tool for high-stakes decisions.",
    ],
  },
];

export default function DeepJourneyOutcome() {
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
          An AI Agent that is context aware, extensible to the org, and easily
          navigable from narrow to broad contexts and results.
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
              <div style={{ overflow: "hidden", backgroundColor: "var(--theme-surface-hover)" }}>
                {"video" in card && card.video ? (
                  <video
                    src={card.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                ) : (
                  <Image src={card.image} alt={card.imageAlt} width={600} height={450} className="w-full h-auto" />
                )}
              </div>
              <div style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
                <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, lineHeight: 1.35, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                  {card.title}
                </p>
                {card.intro && (
                  <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, color: "var(--theme-text)", marginBottom: "0.35rem" }}>
                    {card.intro}
                  </p>
                )}
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }}>
          {[
            { value: "2–6 hrs → 15 min", label: "Weekly Reporting Time Saved Per CRO" },
            { value: "8→1", label: "eight different touch points reduced to one source of truth" },
            { value: "8-24x", label: "times faster than traditional campaign analysis" },
            { value: "5,000+", label: "conversations simultaneously queryable" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(1.5rem, 3vw, 3rem)", lineHeight: 1, color: "var(--theme-text)", wordBreak: "break-word" }}>
                {stat.value}
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "11px", fontWeight: 300, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--theme-muted)", marginTop: "0.6rem" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
