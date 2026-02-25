"use client";

import { motion } from "framer-motion";

export default function WhoIAm() {
  return (
    <section style={{ backgroundColor: "var(--theme-bg)", paddingBottom: "clamp(60px, 8vw, 120px)" }}>
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 60px)",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
            fontSize: "22px",
            letterSpacing: "0.08em",
            color: "var(--theme-text)",
            marginBottom: "clamp(20px, 3vw, 32px)",
          }}
        >
          WHO I AM
        </motion.p>

        {[
          <>Designing systems that <span style={{ color: "var(--theme-accent)" }}>translate complex, fragmented inputs</span> — across AI, consumer experiences, and enterprise platforms — <span style={{ color: "var(--theme-accent)" }}>into cohesive interactions</span> that create clarity, confidence, and meaningful human outcomes.</>,
          <>Focused on <span style={{ color: "var(--theme-accent)" }}>defining structure within ambiguity, shaping early ideas into intuitive experiences</span> used by real people and organizations at scale.</>,
          <>With 5+ years shipping products at growth startups, I&apos;ve led design from ambiguity through launch — building experiences that have moved real business metrics and helped teams scale.</>,
        ].map((content, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "clamp(14px, 1.5vw, 17px)",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "var(--theme-muted)",
              marginBottom: i < 2 ? "1.4em" : 0,
            }}
          >
            {content}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
