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
            Sales leaders were manually synthesizing thousands of conversations across fragmented tools, limiting visibility and slowing decision-making. I defined and shipped an AI-driven interface that transformed unstructured transcripts into a continuous, queryable system with embedded source traceability. This shift reduced reporting time from hours to minutes per week and increased confidence in revenue insights.
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
                Revenue leaders lacked a cohesive way to extract signal from thousands of recorded sales conversations. Insights were scattered across 6–8 tools, requiring manual review and synthesis. This process was time-intensive, error-prone, and limited the ability to act quickly on emerging trends.
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)", marginTop: "0.75rem" }}>
                Despite the availability of raw data, decision-making was slowed by fragmentation and lack of trustworthy summarization.
              </p>
            </div>

            <div>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                The Solution
              </p>
              <ul style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)", paddingLeft: 0, listStyle: "none" }}>
                {[
                  "Built an AI interface capable of querying 5,000+ conversations",
                  "Implemented persistent conversational context across sessions",
                  "Embedded source-linked transcripts in every summary",
                  "Prototyped and validated model behavior in n8n before engineering integration",
                  "Designed role-based access and permission-aware data retrieval",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.4rem", marginTop: i > 0 ? "0.4rem" : 0 }}>
                    <span style={{ flexShrink: 0 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                The Results
              </p>
              <ul style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)", paddingLeft: 0, listStyle: "none" }}>
                {[
                  "Reduced executive reporting workflows from 2–6 hours per week to under 15 minutes",
                  "Consolidated 6–8 fragmented tools into a single interface",
                  "Increased executive confidence in AI-assisted decision-making",
                  "Enabled faster identification of sales trends and performance gaps",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.4rem", marginTop: i > 0 ? "0.4rem" : 0 }}>
                    <span style={{ flexShrink: 0 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The Strategic Decision */}
          <div style={{ borderTop: "1px solid var(--theme-divider)", paddingTop: "clamp(1.5rem, 3vw, 2.5rem)", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "1rem" }}>
              The Strategic Decision
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)" }}>
                Rather than building another dashboard layered on top of static metrics, I proposed a conversational AI interface that allowed executives to directly query unstructured sales transcripts in natural language.
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)" }}>
                The key design challenge was trust. Generative summaries without traceability risked hallucination and reduced confidence in high-stakes decisions. To address this, I structured the system to preserve conversational continuity across sessions and embed linked source references within every response. This required prioritizing traceability and decision confidence over raw response speed — a deliberate tradeoff to support enterprise use.
              </p>
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
