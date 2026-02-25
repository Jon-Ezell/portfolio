"use client";

import { motion } from "framer-motion";

interface AltrTLDRProps {
  metrics?: { value: string; label: string }[];
}

export default function AltrTLDR({
  metrics = [
    { value: "7%→50%+", label: "Activation Rate" },
    { value: "80%", label: "DAU Increase in 2 Months" },
    { value: "13→7", label: "Steps to Activate" },
  ],
}: AltrTLDRProps) {
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

          {/* Main quote */}
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
            When only 7% of users can activate without hand-holding from the internal team,
            the product can&apos;t scale. ALTR needed a fundamentally different onboarding experience
            — one that empowered users to get to value on their own.
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
                Companies with data governance needs had to jump through 13 steps across 3 different
                products just to connect their first database. The complexity was invisible to the
                product team until Pendo revealed that only 7% of users successfully completed
                onboarding on their first attempt — and over 90% abandoned after two failed tries.
              </p>
            </div>

            <div>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                The Opportunity
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)" }}>
                Behavioral analytics and direct user observation revealed that the core problem
                wasn&apos;t the technology — it was the lack of{" "}
                <em>guidance, progress transparency, and a single source of truth</em>.
                Users were context-switching between ALTR, Snowflake, and documentation,
                losing their place every time.
              </p>
            </div>

            <div>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                The Results
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)" }}>
                Designed and shipped a guided onboarding wizard that:
              </p>
              <ul style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)", marginTop: "0.4rem", paddingLeft: 0, listStyle: "none" }}>
                {[
                  "Reduced activation steps from 13 to 7 across 2 touch points (down from 3).",
                  "Took activation rate from 7% to over 50%.",
                  "Grew daily active users by 80% within two months of launch.",
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
          <div className="grid grid-cols-3 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{ minWidth: 0 }}
              >
                <p style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(1.5rem, 3vw, 3rem)", lineHeight: 1, color: "var(--theme-text)", wordBreak: "break-word" }}>
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
