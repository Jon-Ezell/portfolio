"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);
const GitBranchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="3" x2="6" y2="15"/>
    <circle cx="18" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <path d="M18 9a9 9 0 0 1-9 9"/>
  </svg>
);
const PenToolIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
    <path d="M2 2l7.586 7.586"/>
    <circle cx="11" cy="11" r="2"/>
  </svg>
);
const ChipIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="7" width="10" height="10" rx="1"/>
    <path d="M7 9H4M7 12H4M7 15H4M17 9h3M17 12h3M17 15h3M9 7V4M12 7V4M15 7V4M9 17v3M12 17v3M15 17v3"/>
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

function CaptionedImage({ src, caption }: { src: string; caption?: string }) {
  return (
    <div style={{ border: "1px solid var(--theme-divider)", borderRadius: "12px", overflow: "hidden", backgroundColor: "var(--theme-surface)", maxWidth: "min(320px, 100%)" }}>
      {caption && (
        <div style={{ padding: "0.75rem 1.25rem", borderBottom: "1px solid var(--theme-divider)" }}>
          <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--theme-accent)", margin: 0 }}>
            {caption}
          </p>
        </div>
      )}
      <Image src={src} alt={caption ?? ""} width={800} height={500} style={{ width: "100%", height: "auto", display: "block" }} />
    </div>
  );
}

export default function DeepJourneyProcess() {
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
            <ChipIcon />
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
          Mapping CRO needs with agentic parameters
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ ...bodyStyle, maxWidth: "680px", marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          My process began with extensive research on CRO&apos;s workflows, tech-stacks, pain points, and needs.
          I then became an expert on agentic workflows and how to best match technical and experience parameters
          to meet those needs.
        </motion.p>

        {/* Timeline grid */}
        <div className="timeline-grid" style={{ display: "grid", gridTemplateColumns: "1fr 64px 1fr" }}>

          {/* ── ROW 1 ── image left, text right */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "5rem", display: "flex", justifyContent: "flex-end" }}
          >
            <CaptionedImage src="/process1.png" caption="Notebook LM research queries" />
          </motion.div>

          <TimelineNode icon={<SearchIcon />} isFirst />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>
              Using a combination of SME interview recordings, and LLM based research, I assembled a folder of relevant research that I used Notebook LM to synthesize and aggregate conclusions from.
            </p>
          </motion.div>

          {/* ── ROW 2 ── text left, image right */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>
              I took all of my research insights and mapped them into a comprehensive CRO persona.
            </p>
            <p style={bodyStyle}>
              I mapped goals, needs, pain points, major topics and lines of questioning and began to
              conceptualize the type of experience that would be most beneficial to the CRO.
            </p>
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
            <CaptionedImage src="/deep-journey-cro-persona.png" caption="CRO persona map" />
          </motion.div>

          {/* ── ROW 3 ── image left, text right */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "5rem", display: "flex", justifyContent: "flex-end" }}
          >
            <CaptionedImage src="/deep-journey-journey-map.png" caption="User journey + n8n prototype" />
          </motion.div>

          <TimelineNode icon={<GitBranchIcon />} />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>
              I then went on to map out the user journey, and collaborated with engineering to define
              the necessary backend that would enable the desired feature set.
            </p>
            <p style={bodyStyle}>
              I created an ideal, happy path user journey that I then brought to engineering leadership
              to understand what was technically feasible, most cost effective, and the clearest path to MVP.
              This helped me to refine my user journey and design into something that met both user needs
              and technical constraints. I built a functional n8n prototype to test out the quality and
              accuracy of various LLMs and query parameters.
            </p>

            {/* n8n callout */}
            <div style={{ marginTop: "1.5rem", borderLeft: "2px solid var(--theme-accent)", paddingLeft: "1.25rem" }}>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)", fontWeight: 700, lineHeight: 1.4, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                Building the prototype before designing the interface
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)", marginBottom: "0.75rem" }}>
                Before designing a single screen, I built a functional prototype in n8n to evaluate which LLMs and query parameters produced accurate, trustworthy results at scale.
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)", marginBottom: "0.75rem" }}>
                This step is one most designers skip — but for an AI product where the quality of outputs directly determines user trust, validating the model behavior before committing to an interface was non-negotiable.
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.75, color: "var(--theme-muted)" }}>
                Testing variables included: model selection, context window size, prompt structure, and how the system handled ambiguous or low-confidence queries.
              </p>
            </div>
          </motion.div>

          {/* ── ROW 4 ── text left, image right */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "2rem" }}
          >
            <p style={headlineStyle}>
              Finally, I created low-fidelity mockups that matched our desired user journey for final
              refinement and handoff.
            </p>
            <p style={bodyStyle}>
              This allowed me to design and validate more specific aspects of the experience by matching
              the specs with the backend functionality that we had previously established. I was then able
              to write up accurate and actionable acceptance criteria, and hand the epic off to engineering.
            </p>
          </motion.div>

          <TimelineNode icon={<PenToolIcon />} isLast />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "2rem" }}
          >
            <CaptionedImage src="/deep-journey-wireframes.png" caption="Low-fidelity wireframes" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
