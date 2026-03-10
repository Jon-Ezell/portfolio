"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPill() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "clamp(32px, 5vw, 64px) 0" }}>
      <motion.div initial="rest" whileHover="hovered" animate="rest" style={{ display: "inline-block" }}>
        <Link
          href="/about"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            border: "1px solid var(--theme-divider)",
            borderRadius: "100px",
            padding: "0.55rem 1.2rem 0.55rem 1rem",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <motion.span
            variants={{
              rest: { color: "var(--theme-muted)" },
              hovered: { color: "var(--theme-accent)" },
            }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: '"PP Neue Machina", Arial, sans-serif',
              fontSize: "clamp(10px, 0.9vw, 13px)",
              fontWeight: 400,
              letterSpacing: "0.12em",
            }}
          >
            MORE ABOUT ME
          </motion.span>
          <motion.span
            variants={{
              rest: { x: 0, color: "var(--theme-accent)" },
              hovered: { x: 5, color: "var(--theme-accent)" },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ display: "block", lineHeight: 1, fontSize: "clamp(10px, 0.9vw, 13px)" }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}
