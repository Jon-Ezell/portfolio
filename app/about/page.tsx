"use client";

import Nav from "@/components/layout/Nav";
import FooterCTA from "@/components/sections/FooterCTA";
import { motion } from "framer-motion";

const principles = [
  {
    title: "AI-Native Thinking",
    body:
      "I design products where AI extends human capability — not as a feature, but as a foundational layer. Every interaction should feel intelligent and human at the same time.",
  },
  {
    title: "Systems Before Pixels",
    body:
      "Good design starts with understanding the whole. I map systems, flows, and dependencies before touching the interface — so solutions hold up at every scale.",
  },
  {
    title: "Craft at Every Scale",
    body:
      "From discovery and strategy to the final micro-interaction, craft isn't a phase — it's a standard. I care as much about the 10,000-foot view as I do about the individual pixel.",
  },
];

const skills: { label: string; items: string[] }[] = [
  {
    label: "Design & Prototyping",
    items: ["Figma", "Framer", "Principle", "Adobe CC", "Design Systems", "Motion Design"],
  },
  {
    label: "Research & Strategy",
    items: [
      "User Interviews",
      "Usability Testing",
      "Journey Mapping",
      "Competitive Analysis",
      "Jobs-to-be-Done",
      "Stakeholder Alignment",
    ],
  },
  {
    label: "Technical",
    items: ["HTML / CSS", "TypeScript", "React / Next.js", "Tailwind CSS", "Framer Motion", "Git"],
  },
  {
    label: "Collaboration",
    items: [
      "Sprint Facilitation",
      "Design Critiques",
      "Cross-functional Leadership",
      "Product Strategy",
      "Engineering Handoff",
      "Mentorship",
    ],
  },
];


const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: "var(--theme-bg)", paddingTop: "clamp(80px, 10vw, 140px)" }}>

        {/* ── HERO ── */}
        <section style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(40px, 6vw, 80px) clamp(24px, 5vw, 60px)" }}>
          <motion.p
            {...fadeUp}
            style={{
              fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
              fontSize: "13px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--theme-accent)",
              marginBottom: "20px",
            }}
          >
            About
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
              fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
              lineHeight: 0.95,
              color: "var(--theme-text)",
              margin: "0 0 clamp(24px, 4vw, 48px)",
            }}
          >
            Jon Ezell
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "clamp(15px, 1.8vw, 19px)",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "var(--theme-muted)",
              maxWidth: "620px",
              marginBottom: "clamp(20px, 3vw, 32px)",
            }}
          >
            Senior Product Designer with 5+ years shipping at growth startups.
            I work at the intersection of{" "}
            <span style={{ color: "var(--theme-text)", fontWeight: 400 }}>AI-native interaction design</span>,{" "}
            <span style={{ color: "var(--theme-text)", fontWeight: 400 }}>systems thinking</span>, and{" "}
            <span style={{ color: "var(--theme-text)", fontWeight: 400 }}>visual craft</span> —
            building products that feel intelligent and human at the same time.
          </motion.p>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
          >
            {[
              { label: "jon@ezell.guru", href: "mailto:jon@ezell.guru" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/jonezell/", target: "_blank" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                style={{
                  fontFamily: '"PP Neue Machina", Arial, sans-serif',
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  color: "var(--theme-accent)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--theme-accent)",
                  paddingBottom: "2px",
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </section>

        <div style={{ height: "1px", backgroundColor: "var(--theme-divider)", maxWidth: "860px", margin: "0 auto clamp(40px,6vw,80px)" }} />

        {/* ── PRINCIPLES ── */}
        <section style={{ maxWidth: "860px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px) clamp(60px, 8vw, 100px)" }}>
          <motion.p
            {...fadeUp}
            style={{
              fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
              fontSize: "13px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--theme-accent)",
              marginBottom: "32px",
            }}
          >
            Principles
          </motion.p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  backgroundColor: "var(--theme-surface)",
                  borderRadius: "12px",
                  padding: "clamp(20px, 3vw, 32px)",
                  border: "1px solid var(--theme-divider)",
                }}
              >
                <p
                  style={{
                    fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
                    fontSize: "15px",
                    color: "var(--theme-text)",
                    marginBottom: "12px",
                  }}
                >
                  {p.title}
                </p>
                <p
                  style={{
                    fontFamily: '"PP Neue Machina", Arial, sans-serif',
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: "var(--theme-muted)",
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section style={{ maxWidth: "860px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px) clamp(60px, 8vw, 100px)" }}>
          <motion.p
            {...fadeUp}
            style={{
              fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
              fontSize: "13px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--theme-accent)",
              marginBottom: "32px",
            }}
          >
            Skills
          </motion.p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px" }}>
            {skills.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  style={{
                    fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--theme-text)",
                    marginBottom: "14px",
                  }}
                >
                  {group.label}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: '"PP Neue Machina", Arial, sans-serif',
                        fontSize: "11px",
                        fontWeight: 400,
                        color: "var(--theme-muted)",
                        backgroundColor: "var(--theme-surface)",
                        border: "1px solid var(--theme-divider)",
                        borderRadius: "999px",
                        padding: "4px 12px",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── RESUME DOWNLOAD ── */}
        <section style={{ maxWidth: "860px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px) clamp(80px, 10vw, 140px)" }}>
          <motion.div
            {...fadeUp}
            style={{
              backgroundColor: "var(--theme-surface)",
              border: "1px solid var(--theme-divider)",
              borderRadius: "16px",
              padding: "clamp(28px, 4vw, 48px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
                  fontSize: "18px",
                  color: "var(--theme-text)",
                  margin: "0 0 6px",
                }}
              >
                Full Resume
              </p>
              <p
                style={{
                  fontFamily: '"PP Neue Machina", Arial, sans-serif',
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "var(--theme-muted)",
                  margin: 0,
                }}
              >
                Download the PDF for a complete overview of experience and skills.
              </p>
            </div>
            <a
              href="/Jon_Ezell_Resume_26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: '"PP Neue Machina", Arial, sans-serif',
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--theme-accent-text)",
                backgroundColor: "var(--theme-accent)",
                borderRadius: "999px",
                padding: "10px 24px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Download PDF
            </a>
          </motion.div>
        </section>

        <FooterCTA />
      </main>
    </>
  );
}
