"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    stat: "$100K → $1M+",
    label: "ARR in 2 years",
    body: "Scaled a VC-backed data security platform by redesigning onboarding and core product experiences.",
    company: "ALTR",
    href: "/altr",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    stat: "7% → 50%+",
    label: "Product activation",
    body: "Restructured onboarding architecture and removed documentation bottlenecks to unlock activation.",
    company: "ALTR",
    href: "/altr",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    stat: "2–6 hrs → 15 min",
    label: "Weekly exec reporting",
    body: "Consolidated 6–8 fragmented tools into a single AI interface, eliminating manual reporting overhead.",
    company: "Scoot",
    href: "/deep-journey",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    stat: "400+ screens",
    label: "Enterprise platform",
    body: "Led design across a multi-surface enterprise product while co-defining roadmap, leading to Fortune 500 client acquisition.",
    company: "Scoot",
    href: "/scoot",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
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
      backgroundColor: "transparent",
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

export default function Highlights() {
  return (
    <section style={{ maxWidth: "860px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px) clamp(60px, 8vw, 100px)" }}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
          fontSize: "13px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--theme-accent)",
          marginBottom: "20px",
        }}
      >
        Highlights
      </motion.p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "12px",
              padding: "clamp(18px, 2.5vw, 28px)",
              border: "1px solid var(--theme-divider)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <IconBubble icon={item.icon} />
            <div>
              <p style={{
                fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                lineHeight: 1.1,
                color: "var(--theme-accent)",
                margin: "0 0 2px",
              }}>
                {item.stat}
              </p>
              <p style={{
                fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
                fontSize: "12px",
                letterSpacing: "0.05em",
                color: "var(--theme-text)",
                margin: 0,
                textTransform: "uppercase",
              }}>
                {item.label}
              </p>
            </div>
            <p style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "13px",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "var(--theme-text)",
              margin: 0,
              flexGrow: 1,
            }}>
              {item.body}
            </p>
            <div style={{ borderTop: "1px solid var(--theme-divider)", paddingTop: "12px" }}>
              <motion.div whileHover="hover" initial="rest" animate="rest">
                <Link
                  href={item.href}
                  style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <motion.span
                    variants={{ rest: { color: "var(--theme-muted)" }, hover: { color: "var(--theme-accent)" } }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontFamily: '"PP Neue Machina", Arial, sans-serif',
                      fontSize: "11px",
                      fontWeight: 400,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.company}
                  </motion.span>
                  <motion.span
                    variants={{ rest: { x: 0, opacity: 0.5, color: "var(--theme-muted)" }, hover: { x: 3, opacity: 1, color: "var(--theme-accent)" } }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
