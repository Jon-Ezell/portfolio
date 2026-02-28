"use client";

import Nav from "@/components/layout/Nav";
import FooterCTA from "@/components/sections/FooterCTA";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Ordered L, P, P, P, L, P, P, P… so the 5 landscape shots land evenly across all columns
const photos = [
  "/portfolio%20photos/DSC00405%201.png",       // L
  "/portfolio%20photos/DSC00026-2%202.png",      // P
  "/portfolio%20photos/DSC00097%201.png",        // P
  "/portfolio%20photos/DSC00270%201.png",        // P
  "/portfolio%20photos/DSC01183-2%202.png",      // L
  "/portfolio%20photos/DSC00984%202.png",        // P
  "/portfolio%20photos/DSC01737%202.png",        // P
  "/portfolio%20photos/DSC01782-2%203.png",      // P
  "/portfolio%20photos/DSC01195-2-2%203.png",    // L
  "/portfolio%20photos/DSC01815-2%202.png",      // P
  "/portfolio%20photos/DSC01896%202.png",        // P
  "/portfolio%20photos/DSC02299.png",            // P
  "/portfolio%20photos/DSC02961.png",            // L
  "/portfolio%20photos/DSC02330.png",            // P
  "/portfolio%20photos/DSC02479.png",            // P
  "/portfolio%20photos/DSC02688.png",            // P
  "/portfolio%20photos/DSC04309.JPG",            // L
  "/portfolio%20photos/DSC03132.png",            // P
  "/portfolio%20photos/DSC03383.png",            // P
  "/portfolio%20photos/DSC04396.JPG",            // P
];

const education = [
  {
    title: "M. Eng. Creative Technology and Design",
    institution: "University of Colorado Boulder",
    years: "2022 – 2024",
    tags: ["UX/UI", "HCI", "UX Engineering"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    title: "B.S. Environmental Science",
    institution: "Santa Clara University",
    years: "2016 – 2020",
    tags: ["Sustainable Energy", "Technology", "Systems Thinking"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: "UX Design Immersive Certificate",
    institution: "General Assembly",
    years: "2019",
    tags: ["UX Design", "Product Thinking", "Research"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
];

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
    title: "Growth Mindset",
    body:
      "I'm obsessed with continually exploring, learning, and honing my craft and skills. That curiosity extends across design, engineering, and behavioral science. The best solutions always live at the intersections.",
  },
];

const tools: { label: string; icon: React.ReactNode; items: string[] }[] = [
  {
    label: "Design & Prototyping",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
    items: ["Figma", "Adobe Creative Suite", "Framer", "Spline"],
  },
  {
    label: "Frontend",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS", "Framer Motion", "Three.js", "p5.js"],
  },
  {
    label: "AI & Productivity",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
        <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    items: ["Claude", "Cursor", "ChatGPT", "Replit", "n8n", "Perplexity"],
  },
  {
    label: "Dev Tools",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    items: ["Git & GitHub", "VS Code", "Vercel", "Postman", "REST APIs"],
  },
  {
    label: "Research",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    items: ["Pendo", "Amplitude", "Microsoft Clarity", "NotebookLM"],
  },
];

const skillItems: { label: string; description: string; icon: React.ReactNode }[] = [
  {
    label: "UI/UX Design",
    description: "End-to-end product design and prototyping",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    label: "Design Systems",
    description: "Bridging design and engineering at scale",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="21"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><line x1="12" y1="21" x2="5" y2="19"/><line x1="12" y1="21" x2="19" y2="19"/>
      </svg>
    ),
  },
  {
    label: "AI Product Design",
    description: "Human-centered AI interaction design",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    label: "Visual Design",
    description: "Consistent and intentional application of craft",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="1" fill="currentColor" stroke="none"/><circle cx="17.5" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="8.5" cy="7" r="1" fill="currentColor" stroke="none"/><circle cx="6.5" cy="12" r="1" fill="currentColor" stroke="none"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: "User Research",
    description: "Interviews, usability testing, and synthesis",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    label: "Product Strategy",
    description: "From ambiguity to high-confidence direction",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
];


function IconBubble({ icon }: { icon: React.ReactNode }) {
  return (
    <div style={{
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      backgroundColor: "var(--theme-surface-hover)",
      border: "1px solid var(--theme-divider)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--theme-muted)",
      flexShrink: 0,
    }}>
      {icon}
    </div>
  );
}

function SkillsSection() {
  const [tab, setTab] = useState<"tools" | "skills">("tools");

  return (
    <section style={{ maxWidth: "860px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px) clamp(60px, 8vw, 100px)" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: "32px" }}
      >
        <p style={{
          fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
          fontSize: "13px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--theme-accent)",
          marginBottom: "12px",
        }}>
          Skills
        </p>
        <p style={{
          fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
          fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
          lineHeight: 1.05,
          color: "var(--theme-text)",
          margin: "0 0 8px",
        }}>
          My Skillset and Tools
        </p>
        <p style={{
          fontFamily: '"PP Neue Machina", Arial, sans-serif',
          fontSize: "13px",
          fontWeight: 300,
          color: "var(--theme-muted)",
          margin: 0,
        }}>
          Some of the tools and skills I use regularly
        </p>
      </motion.div>

      {/* Tab toggle */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          backgroundColor: "var(--theme-surface)",
          border: "1px solid var(--theme-divider)",
          borderRadius: "10px",
          padding: "4px",
          marginBottom: "12px",
        }}
      >
        {(["tools", "skills"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "13px",
              fontWeight: tab === t ? 500 : 300,
              color: tab === t ? "var(--theme-text)" : "var(--theme-muted)",
              backgroundColor: tab === t ? "var(--theme-surface-hover)" : "transparent",
              border: "none",
              borderRadius: "7px",
              padding: "10px 0",
              cursor: "pointer",
              transition: "all 0.2s ease",
              textTransform: "capitalize",
            }}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{
          backgroundColor: "var(--theme-surface)",
          border: "1px solid var(--theme-divider)",
          borderRadius: "12px",
          padding: "clamp(20px, 3vw, 32px)",
        }}
      >
        <AnimatePresence mode="wait">
          {tab === "tools" ? (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}
            >
              {tools.map((group) => (
                <div key={group.label}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <IconBubble icon={group.icon} />
                    <p style={{
                      fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
                      fontSize: "14px",
                      color: "var(--theme-accent)",
                      margin: 0,
                    }}>
                      {group.label}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {group.items.map((item) => (
                      <span key={item} style={{
                        fontFamily: '"PP Neue Machina", Arial, sans-serif',
                        fontSize: "11px",
                        fontWeight: 400,
                        color: "var(--theme-muted)",
                        backgroundColor: "var(--theme-surface-hover)",
                        border: "1px solid var(--theme-divider)",
                        borderRadius: "999px",
                        padding: "4px 12px",
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}
            >
              {skillItems.map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <IconBubble icon={s.icon} />
                  <div>
                    <p style={{
                      fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
                      fontSize: "14px",
                      color: "var(--theme-text)",
                      margin: "0 0 4px",
                    }}>
                      {s.label}
                    </p>
                    <p style={{
                      fontFamily: '"PP Neue Machina", Arial, sans-serif',
                      fontSize: "12px",
                      fontWeight: 300,
                      lineHeight: 1.5,
                      color: "var(--theme-muted)",
                      margin: 0,
                    }}>
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};


export default function AboutPage() {
  const [photosExpanded, setPhotosExpanded] = useState(false);

  return (
    <>
      <Nav />
      <main style={{ backgroundColor: "var(--theme-bg)", paddingTop: "clamp(80px, 10vw, 140px)" }}>

        {/* ── HERO ── */}
        <section style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(40px, 6vw, 80px) clamp(24px, 5vw, 60px)" }}>
          {/* Name + photo inline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", alignItems: "center", gap: "clamp(14px, 2vw, 22px)", marginBottom: "clamp(20px, 3vw, 32px)" }}
          >
            <h1 style={{
              fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              lineHeight: 0.95,
              color: "var(--theme-text)",
              margin: 0,
            }}>
              Hi, I&apos;m Jon Ezell
            </h1>
            <div style={{
              width: "clamp(44px, 5.5vw, 68px)",
              height: "clamp(44px, 5.5vw, 68px)",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "1.5px solid var(--theme-divider)",
            }}>
              <Image
                src="/IMG_1116.jpg"
                alt="Jon Ezell"
                width={136}
                height={136}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "clamp(14px, 1.6vw, 17px)",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "var(--theme-muted)",
              maxWidth: "600px",
              marginBottom: "clamp(20px, 3vw, 28px)",
            }}
          >
            I&apos;m a Senior Product Designer with 5+ years shipping at growth startups.
            I work at the intersection of AI-native interaction design, systems thinking,
            and visual craft — building products that feel intelligent and human at the same time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
          >
            {[
              { label: "jon@ezell.guru", href: "mailto:jon@ezell.guru" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/jonezell/", target: "_blank" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={(link as { target?: string }).target}
                rel={(link as { target?: string }).target === "_blank" ? "noopener noreferrer" : undefined}
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

        {/* ── SKILLS & TOOLS ── */}
        <SkillsSection />

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

        {/* ── EDUCATION ── */}
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
            Education
          </motion.p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {education.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "clamp(14px, 2vw, 20px)",
                  backgroundColor: "var(--theme-surface)",
                  border: "1px solid var(--theme-divider)",
                  borderRadius: "12px",
                  padding: "clamp(18px, 2.5vw, 28px)",
                }}
              >
                {/* Icon */}
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "var(--theme-surface-hover)",
                  border: "1px solid var(--theme-divider)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--theme-accent)",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
                    fontSize: "clamp(14px, 1.4vw, 16px)",
                    color: "var(--theme-text)",
                    margin: "0 0 4px",
                  }}>
                    {item.title}
                  </p>
                  <p style={{
                    fontFamily: '"PP Neue Machina", Arial, sans-serif',
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "var(--theme-muted)",
                    margin: "0 0 12px",
                  }}>
                    {item.institution} · {item.years}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {item.tags.map((tag) => (
                      <span key={tag} style={{
                        fontFamily: '"PP Neue Machina", Arial, sans-serif',
                        fontSize: "11px",
                        fontWeight: 400,
                        color: "var(--theme-muted)",
                        backgroundColor: "var(--theme-surface-hover)",
                        border: "1px solid var(--theme-divider)",
                        borderRadius: "999px",
                        padding: "3px 10px",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PHOTOGRAPHY ── */}
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px) clamp(80px, 10vw, 140px)" }}>
          <motion.p
            {...fadeUp}
            style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
              fontWeight: 300,
              color: "var(--theme-muted)",
              marginBottom: "clamp(32px, 5vw, 56px)",
            }}
          >
            I also like to take photos.
          </motion.p>

          {/* Height-clipped container — all photos always in DOM, no layout jank */}
          <div style={{ position: "relative" }}>
            <motion.div
              animate={{ height: photosExpanded ? "auto" : 640 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div
                style={{
                  columns: "3 260px",
                  columnGap: "clamp(8px, 1.5vw, 14px)",
                }}
              >
                {photos.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      breakInside: "avoid",
                      marginBottom: "clamp(8px, 1.5vw, 14px)",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={src}
                      alt="Photography"
                      width={1200}
                      height={800}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ display: "block", width: "100%", height: "auto" }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Gradient fade — fades out as container opens */}
            <motion.div
              animate={{ opacity: photosExpanded ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "180px",
                background: "linear-gradient(to bottom, transparent, var(--theme-bg))",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* See more / See less toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "clamp(20px, 3vw, 32px)" }}>
            <button
              onClick={() => setPhotosExpanded(!photosExpanded)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: '"PP Neue Machina", Arial, sans-serif',
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--theme-muted)",
                background: "none",
                border: "1px solid var(--theme-divider)",
                borderRadius: "999px",
                padding: "10px 22px",
                cursor: "pointer",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
            >
              {photosExpanded ? "Show less" : "Show more"}
              <motion.span
                animate={{ rotate: photosExpanded ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "inline-flex", lineHeight: 1 }}
              >
                ↓
              </motion.span>
            </button>
          </div>
        </section>

        <FooterCTA />
      </main>
    </>
  );
}
