"use client";

import { motion } from "framer-motion";

export default function WhoIAm() {
  return (
    <section style={{ backgroundColor: "#f5f0e8", paddingBottom: "clamp(60px, 8vw, 120px)" }}>
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
            color: "#000",
            marginBottom: "clamp(20px, 3vw, 32px)",
          }}
        >
          WHO I AM
        </motion.p>

        {[
          "Designing systems that translate complex, fragmented inputs — across AI, consumer experiences, and enterprise platforms — into cohesive interactions that create clarity, confidence, and meaningful human outcomes.",
          "Focused on defining structure within ambiguity, shaping early ideas into intuitive experiences used by real people and organizations at scale.",
          "Grounded in deep collaboration with designers, engineers, and stakeholders to turn complex problems into experiences that feel simple, intentional, and impactful.",
        ].map((text, i) => (
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
              color: "#3a3a3a",
              marginBottom: i < 2 ? "1.4em" : 0,
            }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
