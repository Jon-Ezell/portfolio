"use client";

import { motion } from "framer-motion";

export default function DeepJourneyTLDR() {
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
              marginBottom: "1.25rem",
            }}
          >
            Sales leaders are overwhelmed by a fragmented, reactive tool ecosystem that
            makes it hard to effectively manage their reps and campaigns. They are
            constantly pulling together disparate sources of data and information.
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
            Rather than layering AI onto existing workflows, the work explored a shift
            from navigation-driven analytics toward continuity-based interaction,
            where insight emerges through conversational context.
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
                Revenue teams operate across fragmented tools and incomplete data, making it
                impossible to understand, improve, or scale sales performance in real time.
                Leaders lack visibility into live deal dynamics, and insights arrive too late
                to influence outcomes — forcing CMOs and CROs to rely on slow, manual analysis
                and reactive decision-making instead of proactive, data-driven growth.
              </p>
            </div>

            <div>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                The Opportunity
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)" }}>
                What if every sales conversation, meeting, and signal could be instantly
                queried through a single AI agent — one that understands context and traces
                every insight back to a verifiable source of truth, enabling informed decision
                making and saving time.
              </p>
            </div>

            <div>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                The Results
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)" }}>
                Designed and shipped an agentic experience that:
              </p>
              <ul style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)", marginTop: "0.4rem", paddingLeft: 0, listStyle: "none" }}>
                {[
                  "Reduced time spent on sales reporting and analysis from 2–6 hours/week to under 15 minutes.",
                  "Simplified workflows by reducing tech stack from 6–8 tools and 4–5 integrations to just one platform.",
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
            {[
              { value: "2–6 hrs → 15 min", label: "Weekly Reporting Time Saved Per CRO" },
              { value: "8", label: "different touch points reduced to one source of truth" },
              { value: "8-24x", label: "times faster than traditional campaign analysis" },
              { value: "5,000+", label: "conversations simultaneously queryable" },
            ].map((m, i) => (
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
