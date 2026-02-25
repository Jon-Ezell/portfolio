"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AnalyticsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const MapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/>
    <line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
);

const WireframeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18"/>
    <path d="M9 21V9"/>
  </svg>
);

const headlineStyle: React.CSSProperties = {
  fontFamily: '"PP Neue Machina", Arial, sans-serif',
  fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
  fontWeight: 700,
  lineHeight: 1.4,
  color: "var(--theme-text)",
  marginBottom: "1rem",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: '"PP Neue Machina", Arial, sans-serif',
  fontSize: "13px",
  fontWeight: 300,
  lineHeight: 1.75,
  color: "var(--theme-muted)",
};

const bulletStyle: React.CSSProperties = {
  ...bodyStyle,
  display: "flex",
  gap: "0.4rem",
  marginTop: "0.5rem",
};

function TimelineNode({ icon, isFirst, isLast }: { icon: React.ReactNode; isFirst?: boolean; isLast?: boolean }) {
  return (
    <div
      className="timeline-node-cell"
      style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "2rem" }}
    >
      {!isFirst && (
        <div style={{ position: "absolute", top: 0, bottom: "calc(100% - 2rem - 18px)", left: "50%", width: "1px", backgroundColor: "var(--theme-divider)", transform: "translateX(-50%)" }} />
      )}
      {!isLast && (
        <div style={{ position: "absolute", top: "calc(2rem + 18px)", bottom: 0, left: "50%", width: "1px", backgroundColor: "var(--theme-divider)", transform: "translateX(-50%)" }} />
      )}
      <div style={{ position: "relative", zIndex: 1, width: "36px", height: "36px", borderRadius: "50%", border: "1px solid var(--theme-divider)", backgroundColor: "var(--theme-surface)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--theme-text)", flexShrink: 0 }}>
        {icon}
      </div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: "0.75rem" }}>
      {items.map((item, i) => (
        <li key={i} style={bulletStyle}>
          <span style={{ flexShrink: 0, marginTop: "0.15rem" }}>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}


/* Insight callout card — used for key research findings */
function InsightCard({ label, items, image }: { label: string; items: string[]; image?: string }) {
  return (
    <div style={{
      border: "1px solid var(--theme-divider)",
      borderRadius: "12px",
      overflow: "hidden",
      backgroundColor: "var(--theme-surface)",
      maxWidth: "min(320px, 100%)",
    }}>
      <div style={{ padding: "1.25rem" }}>
        <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--theme-accent)", marginBottom: "0.75rem" }}>
          {label}
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((item, i) => (
            <li key={i} style={{ ...bulletStyle, marginTop: i > 0 ? "0.5rem" : 0 }}>
              <span style={{ flexShrink: 0, marginTop: "0.15rem" }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {image && (
          <div style={{ marginTop: "1rem" }}>
            <Image
              src={image}
              alt=""
              width={640}
              height={420}
              style={{ width: "75%", height: "auto", display: "block" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function AltrProcess() {
  return (
    <section style={{ backgroundColor: "var(--theme-bg)", padding: "clamp(4rem, 8vw, 7rem) 2rem" }}>
      <div className="max-w-7xl mx-auto">

        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "2rem" }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", border: "1px solid var(--theme-accent)", borderRadius: "100px", padding: "0.35rem 0.85rem", fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 400, color: "var(--theme-accent)" }}>
            <WireframeIcon />
            Process
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--theme-text)", maxWidth: "820px", marginBottom: "1.25rem" }}
        >
          From quantitative signals to qualitative insight to a validated redesign
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)", maxWidth: "680px", marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          The project began with a data signal no one could ignore: 7% activation. From there, I used Pendo to
          map exactly where users were failing, then brought them in for direct observation to understand why.
          That combination of behavioral data and qualitative insight shaped everything that followed.
        </motion.p>

        {/* Timeline grid */}
        <div className="timeline-grid" style={{ display: "grid", gridTemplateColumns: "1fr 64px 1fr" }}>

          {/* ── ROW 1: Pendo / Quantitative discovery ── */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "5rem", display: "flex", justifyContent: "flex-end" }}
          >
            <InsightCard
              label="Pendo Findings"
              image="/datasource.png"
              items={[
                "7% of users successfully connected a database on first attempt",
                "Less than 25% of first-time users followed the ideal happy path",
                "Majority triggered errors on 2+ form fields; 90%+ abandoned after 2 failed attempts",
              ]}
            />
          </motion.div>

          <TimelineNode icon={<AnalyticsIcon />} isFirst />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>Discovered the activation gap using Pendo behavioral analytics — making the invisible problem visible.</p>
            <Bullets items={[
              "Queried user session data to find exactly where users were dropping off in the onboarding flow.",
              "Identified the 'Add Data Source' form as the primary failure point — not lack of intent.",
              "Surfaced that the form error rate and full input clearing on failed submissions were directly correlated with abandonment.",
              "Used this data to build the business case for a full onboarding redesign.",
            ]} />
          </motion.div>

          {/* ── ROW 2: Usability testing ── */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>Observed 6 users completing 3 activation tasks via Zoom screen-sharing to understand the qualitative why behind the drop-off data.</p>
            <Bullets items={[
              "Task 1 — Sign up: Users rarely struggled here. Not the problem.",
              "Task 2 — Navigate the portal: Users were unsure where to begin and couldn't determine the purpose of several features.",
              "Task 3 — Connect database: Users had to switch between ALTR, Snowflake, and documentation, losing their place repeatedly.",
            ]} />
          </motion.div>

          <TimelineNode icon={<UserIcon />} />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <InsightCard
              label="Key Research Findings"
              items={[
                "Formatting had to be exact — no hints given",
                "Entire form input cleared on failed submission attempts",
                "No progress indicators or step summary",
                "No introduction to the product or the setup process",
                "Users needed to maintain 3 open tabs simultaneously",
              ]}
            />
          </motion.div>

          {/* ── ROW 3: Flow mapping ── */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "5rem", display: "flex", justifyContent: "flex-end" }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "0.75rem", maxWidth: "min(560px, 100%)" }}>
              <div style={{ flex: 1, border: "1px solid var(--theme-divider)", borderRadius: "12px", padding: "1.25rem", backgroundColor: "var(--theme-surface)" }}>
                <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--theme-muted)", marginBottom: "0.75rem" }}>Old Flow</p>
                <Image src="/oldflow.png" alt="Old activation flow" width={400} height={600} style={{ width: "100%", height: "auto", display: "block", marginBottom: "0.75rem" }} />
                <p style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "2rem", lineHeight: 1, color: "var(--theme-text)", marginBottom: "0.25rem" }}>13 Steps</p>
                <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "12px", fontWeight: 300, color: "var(--theme-muted)" }}>Across 3 Touch Points</p>
              </div>
              <div style={{ flex: 1, border: "1px solid var(--theme-accent)", borderRadius: "12px", padding: "1.25rem", backgroundColor: "var(--theme-surface)" }}>
                <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--theme-accent)", marginBottom: "0.75rem" }}>Proposed Flow</p>
                <Image src="/proposedflow.png" alt="Proposed activation flow" width={400} height={600} style={{ width: "100%", height: "auto", display: "block", marginBottom: "0.75rem" }} />
                <p style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "2rem", lineHeight: 1, color: "var(--theme-text)", marginBottom: "0.25rem" }}>7 Steps</p>
                <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "12px", fontWeight: 300, color: "var(--theme-muted)" }}>Across 2 Touch Points</p>
              </div>
            </div>
          </motion.div>

          <TimelineNode icon={<MapIcon />} />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>Mapped the current activation journey end-to-end, then redesigned it to eliminate the external documentation dependency entirely.</p>
            <Bullets items={[
              "Documented all 13 steps in the existing flow, tagging which product (ALTR, Snowflake, or Docs) owned each step.",
              "Identified that the documentation was being used purely to copy code snippets — something the product itself could provide.",
              "Proposed a new 7-step flow that keeps users within 2 products (ALTR + Snowflake) at all times.",
              "Surfaced the connection process as an in-product onboarding wizard rather than a bare form.",
            ]} />
          </motion.div>

          {/* ── ROW 4: Prototyping ── */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "2rem" }}
          >
            <p style={headlineStyle}>Created low-fidelity wireframes for 6 onboarding screens and validated with engineering before moving to high-fidelity hand-off.</p>
            <Bullets items={[
              "Conducted feasibility sessions with engineering to align on what was possible and practical.",
              "Iterated on wireframes based on engineering constraints — specifically around data fetching and form state.",
              "6 screens: Welcome, Configure, Connect, Select Data, Classify, Completion.",
              "Escalated to hand-off-ready deliverables after engineering sign-off.",
            ]} />
          </motion.div>

          <TimelineNode icon={<WireframeIcon />} isLast />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "2rem" }}
          >
            <InsightCard
              label="Low Fidelity User Flow"
              items={[]}
              image="/onboardinglofi.png"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
