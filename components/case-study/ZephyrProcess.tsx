"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
const UserCheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>
  </svg>
);
const BarChartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const PenToolIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
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
    <div style={{ maxWidth: "min(280px, 100%)" }}>
      <div style={{ overflow: "hidden" }}>
        <Image src={src} alt={caption ?? ""} width={800} height={500} className="w-full h-auto" />
      </div>
      {caption && (
        <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "11px", fontWeight: 300, color: "var(--theme-muted)", marginTop: "0.6rem", textAlign: "center" }}>
          {caption}
        </p>
      )}
    </div>
  );
}

export default function ZephyrProcess() {
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
          A research-forward, market and user driven journey
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ ...bodyStyle, maxWidth: "680px", marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          Led a research-driven exploration into nervous system regulation, synthesizing scientific
          literature, user research, and market analysis to identify where existing solutions failed
          to provide measurable behavioral feedback.
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
            <CaptionedImage src="/regulation.png" caption="Heart rate coherence research" />
          </motion.div>

          <TimelineNode icon={<BookIcon />} isFirst />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>
              Breath regulation is one of the most accessible mechanisms for influencing autonomic nervous
              system state — yet most digital tools fail to provide measurable feedback.
            </p>
            <p style={bodyStyle}>
              Scientific literature associated with breathing and nervous system regulation yielded key
              findings: resonant breathing increases coherence scores by 2–5× baseline levels. High
              coherence states correlate with ↑ parasympathetic activity, ↓ sympathetic arousal, and
              ↑ prefrontal cortex activity. Participants trained in coherence breathing show 25–50%
              improvement in emotional self-regulation.
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
              We conducted a survey to better understand user interest and sentiment towards mindful breathing.
            </p>
            <p style={bodyStyle}>
              People want to improve their mental health through breathing, but <strong style={{ fontWeight: 700, color: "var(--theme-text)" }}>don&apos;t know how,
              can&apos;t practice habitually</strong>, and <strong style={{ fontWeight: 700, color: "var(--theme-text)" }}>struggle to maintain effective practice</strong>.
              76% of respondents expressed a desire to begin practice but did not know how to begin.
              58% reported difficulties in maintaining a regular practice. 80% reported difficulties in
              maintaining focus during practice.
            </p>
          </motion.div>

          <TimelineNode icon={<UserCheckIcon />} />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <CaptionedImage src="/graph.png" caption="Survey insights — 112 respondents" />
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
            <CaptionedImage src="/comp.png" caption="Competitive landscape analysis" />
          </motion.div>

          <TimelineNode icon={<BarChartIcon />} />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>
              I then went on to analyze the current competitive landscape, in order to better understand where our advantages lie.
            </p>
            <p style={bodyStyle}>
              Many comparable products exist on the market, but none effectively access all the core goals
              of Zephyr: low cost, measurable results, social proof, habituation, effectiveness of practice,
              and accessibility of use. Products like Cove, Inner Balance, Musa, and Moon Bird were
              evaluated across habit formation, learning, practice immersion, cost, and accessibility.
            </p>
          </motion.div>

          {/* ── ROW 4 ── text left, image right */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>
              Mapping the experience.
            </p>
            <p style={bodyStyle}>
              It was time to translate our findings into a complete user experience. I began by
              conceptualizing the wristband and mobile experience through site mapping and creating
              user journeys that covered both the wristband and mobile app surfaces.
            </p>
          </motion.div>

          <TimelineNode icon={<PenToolIcon />} />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <CaptionedImage src="/map.png" caption="Site map — wristband + mobile app" />
          </motion.div>

          {/* ── ROW 5 ── image left, text right */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "5rem", display: "flex", justifyContent: "flex-end" }}
          >
            <CaptionedImage src="/brand.png" caption="Brand identity — colors, logos, type" />
          </motion.div>

          <TimelineNode icon={<PenToolIcon />} />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <p style={headlineStyle}>
              Creating a brand identity.
            </p>
            <p style={bodyStyle}>
              Before designing a UI, I established a brand identity including fonts, colors,
              iconography, and logos. The Zephyr brand needed to feel both clinical enough to convey
              efficacy and approachable enough for everyday use — grounded in calm, natural tones
              with clear typographic hierarchy.
            </p>
          </motion.div>

          {/* ── ROW 6 ── text left, image right */}
          <motion.div
            className="timeline-cell-l"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingRight: "3rem", paddingBottom: "2rem" }}
          >
            <p style={headlineStyle}>
              Device Prototyping.
            </p>
            <p style={bodyStyle}>
              We designed a functional prototype, ordered a custom PCB, and experimented with
              enclosures for the actual wristband. The prototype included embedded haptic motors,
              a heart rate sensor, and an LED light ring — all communicating with the iOS app
              via xbee to transmit real-time coherence data.
            </p>
          </motion.div>

          <TimelineNode icon={<ChipIcon />} isLast />

          <motion.div
            className="timeline-cell-r"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingLeft: "3rem", paddingTop: "2rem", paddingBottom: "2rem" }}
          >
            <CaptionedImage src="/nuts.png" caption="PCB prototype + wristband enclosures" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
