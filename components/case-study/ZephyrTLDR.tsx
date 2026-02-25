"use client";

import { motion } from "framer-motion";

interface ZephyrTLDRProps {
  metrics?: { value: string; label: string }[];
}

export default function ZephyrTLDR({
  metrics = [
    { value: "Top 10%", label: "CU Boulder New Venture Challenge — 50+ Competing Teams" },
    { value: "2", label: "Rounds of Seed Funding Received" },
    { value: "112", label: "Users Surveyed" },
    { value: "100+", label: "Pages of Scientific Literature Analyzed" },
  ],
}: ZephyrTLDRProps) {
  return (
    <section style={{ backgroundColor: "var(--theme-bg)", padding: "clamp(2rem, 4vw, 4rem) 2rem" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            border: "2px dashed var(--theme-divider)",
            borderRadius: "20px",
            padding: "clamp(1.5rem, 5vw, 4rem)",
          }}
        >
          {/* tl;dr label */}
          <p
            className="text-center"
            style={{
              fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
              fontSize: "55px",
              fontWeight: 800,
              color: "var(--theme-text)",
              marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            tl;dr
          </p>

          {/* Main quote 1 */}
          <p
            className="text-center mx-auto"
            style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)",
              fontWeight: 700,
              lineHeight: 1.55,
              color: "var(--theme-text)",
              maxWidth: "780px",
              marginBottom: "clamp(1rem, 2vw, 1.5rem)",
            }}
          >
            Mental health is a widespread problem with limited effective solutions. By many measures,
            a well regulated nervous system is the foundation of mental well-being. Most current
            approaches to a more regulated nervous system are expensive, inaccessible, or slow to work.
          </p>

          {/* Main quote 2 */}
          <p
            className="text-center mx-auto"
            style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)",
              fontWeight: 700,
              lineHeight: 1.55,
              color: "var(--theme-text)",
              maxWidth: "780px",
              marginBottom: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            This project reframed mindful breathing from a passive wellness practice into a measurable
            regulation system — combining biometric feedback, haptics, and behavioral design to help
            users actively shift nervous system state in real time.
          </p>

          {/* 3-column breakdown */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
            style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}
          >
            <div>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                The Problem
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)" }}>
                Mental illness has been on the rise in the United States, with an estimated 51.5 million
                adults experiencing it in 2020. Efforts have been made to expand mental health services,
                largely through telemedicine and mental health apps. However, these solutions can be cost
                prohibitive, and yield subjective and variable results.
              </p>
            </div>

            <div>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                The Opportunity
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)" }}>
                Learning to control the breath has been proven to be a highly effective tool in nervous
                system regulation, but many people struggle to learn to use or master this potent and
                free tool.
              </p>
            </div>

            <div>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                The Results
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)" }}>
                Designed an application and wearable wristband that:
              </p>
              <ul style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)", marginTop: "0.4rem", paddingLeft: 0, listStyle: "none" }}>
                {[
                  "Allows users to shift into a parasympathetic state in minutes",
                  "Can be accessed in any location",
                  "Builds habituation and nervous system regulation through haptic feedback, biometric tracking and gamification",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.4rem", marginTop: "0.3rem" }}>
                    <span style={{ flexShrink: 0 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid var(--theme-divider)", marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }} />

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <p style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(1.5rem, 3vw, 3rem)", lineHeight: 1, color: "var(--theme-text)" }}>
                  {m.value}
                </p>
                <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "11px", fontWeight: 300, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--theme-muted)", marginTop: "0.6rem" }}>
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
