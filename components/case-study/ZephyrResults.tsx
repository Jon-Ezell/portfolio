"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const wristbandIncludes = [
  "Embedded haptic motors that vibrate to guide users through breathing practice",
  "Heart rate sensor which continuously monitors heart rate and HRV",
  "PCB that is able to calculate the resonance or coherence between heart rate and respiratory rate to gauge nervous system activation (this also syncs with app via xbee to transmit real time data)",
  "LED lights to give visual feedback to the user on their real-time coherence.",
];

const constraints = [
  "Continuous biometric tracking must avoid cognitive overload.",
  "Feedback loops must be subtle enough to avoid breaking meditation flow.",
  "Hardware interactions limited real-time responsiveness.",
  "Accuracy vs accessibility tradeoffs.",
];

const principles = [
  "Feedback should be physiological, not abstract.",
  "Interaction must remain low-friction during regulation exercises.",
  "Data visualization must reinforce learning, not distract from practice.",
];

const features = [
  {
    label: "LED Coherence Indicator",
    desc: "Light emits a visual indicator letting users see their current level of coherence",
    dot: "#3EDA3E",
  },
  {
    label: "Haptic Motors",
    desc: "Motors vibrate at an oscillation frequency to guide users through breathing practice",
    dot: "#DAC0A6",
  },
  {
    label: "Heart Rate Monitor",
    desc: "Continuously monitors heart rate and HRV to measure nervous system activation",
    dot: "#50D9D9",
  },
];

export default function ZephyrResults() {
  return (
    <section style={{ backgroundColor: "var(--theme-bg)", padding: "0 2rem clamp(3rem, 6vw, 5rem)" }}>
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
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Results
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "clamp(1.3rem, 2.8vw, 2.2rem)", fontWeight: 700, lineHeight: 1.25, color: "var(--theme-text)", maxWidth: "820px", marginBottom: "1.25rem" }}
        >
          A thoughtful and research informed wearable prototype
        </motion.h2>

        {/* band.png — prototype photo + caption */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            border: "1px solid var(--theme-divider)",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "var(--theme-surface)",
            maxWidth: "430px",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          <Image
            src="/band.png"
            alt="Zephyr wearable prototype"
            width={1600}
            height={900}
            className="w-full h-auto"
            style={{ display: "block" }}
          />
          <div style={{ borderTop: "1px solid var(--theme-divider)", padding: "clamp(1rem, 2vw, 1.5rem) clamp(1.25rem, 3vw, 2rem)" }}>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.8, color: "var(--theme-muted)", margin: 0 }}>
              The prototype provides a method for aligning the breath with the heart rate discreetly,
              effectively and measurably.
            </p>
          </div>
        </motion.div>

        {/* Wristband diagram — bordered container, theme-adaptive */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            border: "1px solid var(--theme-divider)",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "var(--theme-surface)",
            maxWidth: "860px",
          }}
        >
          {/* Diagram title */}
          <div style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", paddingBottom: "1rem" }}>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 700, color: "var(--theme-text)" }}>
              Diagram of the Zephyr Wristband
            </p>
          </div>

          {/* Wristband image — clean, centered, no overlapping text */}
          <div style={{ display: "flex", justifyContent: "center", padding: "0 clamp(1.5rem, 4vw, 3rem)", paddingBottom: "clamp(1rem, 2vw, 1.5rem)" }}>
            <Image
              src="/wristband%202.png"
              alt="Zephyr wristband showing haptic motors, heart rate monitor, and LED coherence indicator"
              width={407}
              height={407}
              style={{ width: "clamp(140px, 25vw, 200px)", height: "auto", filter: "var(--theme-graphic-filter)" }}
            />
          </div>

          {/* Feature labels — 3 columns below image */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--theme-divider)" }}>
            {features.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "clamp(1rem, 2.5vw, 1.5rem)",
                  borderRight: i < 2 ? "1px solid var(--theme-divider)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.4rem" }}>
                  <span style={{ flexShrink: 0, width: "9px", height: "9px", borderRadius: "50%", backgroundColor: item.dot, border: "1px solid #000", display: "inline-block" }} />
                  <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "12px", fontWeight: 700, color: "var(--theme-text)", margin: 0 }}>
                    {item.label}
                  </p>
                </div>
                <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "12px", fontWeight: 300, lineHeight: 1.6, color: "var(--theme-muted)", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid var(--theme-divider)" }} />

          {/* Wristband includes */}
          <div style={{ padding: "clamp(1.25rem, 3vw, 2rem)" }}>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
              The Wristband includes:
            </p>
            <ul style={{ padding: 0, listStyle: "none", margin: 0 }}>
              {wristbandIncludes.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.5rem", fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-muted)", marginTop: i > 0 ? "0.5rem" : 0 }}>
                  <span style={{ flexShrink: 0 }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Key design constraints + Design Principles — 2 col */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
          style={{ marginTop: "clamp(2rem, 4vw, 3rem)", maxWidth: "860px" }}
        >
          <div>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
              Key design constraints:
            </p>
            <ul style={{ padding: 0, listStyle: "none", margin: 0 }}>
              {constraints.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.5rem", fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-muted)", marginTop: i > 0 ? "0.4rem" : 0 }}>
                  <span style={{ flexShrink: 0 }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
              Design Principles:
            </p>
            <ul style={{ padding: 0, listStyle: "none", margin: 0 }}>
              {principles.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.5rem", fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-muted)", marginTop: i > 0 ? "0.4rem" : 0 }}>
                  <span style={{ flexShrink: 0 }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
