"use client";

import { motion } from "framer-motion";

interface ScootTLDRProps {
  metrics?: { value: string; label: string }[];
}

export default function ScootTLDR({
  metrics = [
    { value: "60→95%", label: "Mobile Activation Improvement" },
    { value: "+20%", label: "Web First-Time Activation Increase" },
    { value: "400+", label: "Screens Designed" },
    { value: "212", label: "Components Built" },
  ],
}: ScootTLDRProps) {
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
            I joined Scoot when a barebones prototype existed and left having shipped 30+ feature sets,
            a 212-component design system, and the platform that closed Scoot&apos;s first Fortune 500
            deals. Here&apos;s how we got there.
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
                Traditional webinars don&apos;t even come close to in person events from an
                experiential and business outcomes standpoint. A few voices can speak, and many
                will listen, but not a lot of connection, business, or engagement happens.
              </p>
            </div>

            <div>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                The Opportunity
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)" }}>
                After synthesizing
                customer interviews, usage data, and competitive context, I discovered that the
                biggest barrier wasn&apos;t format — it was{" "}
                <em>lack of conversational agency</em> in the experience. Webinars force
                attention to speakers; virtual events needed{" "}
                <em>participant agency</em> to drive connection.
              </p>
            </div>

            <div>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                The Results
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)" }}>
                Designed and shipped a complete immersive virtual event experience that:
              </p>
              <ul style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)", marginTop: "0.4rem", paddingLeft: 0, listStyle: "none" }}>
                {[
                  "Allows for spontaneous and organic conversation.",
                  "Is even easier to find and connect with relevant people than in person",
                  "Allows sales people to leverage conversational and meeting data to manage, convert, and sell even more effectively than in person",
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
