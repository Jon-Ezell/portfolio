"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Highlights from "@/components/sections/Highlights";

export default function WorkIntro() {
  return (
    <div className="px-8 pb-10" style={{ position: "relative", paddingTop: "150px" }}>
      {/* Stepping stones — centered behind highlights */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: "350px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/decor-stepping-stones.png"
            alt=""
            width={640}
            height={960}
            style={{ width: "clamp(320px, 38vw, 560px)", height: "auto", objectFit: "contain", opacity: 0.85, filter: "var(--theme-decor-filter)" }}
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          className="pb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
              fontSize: "clamp(2.8rem, 6.5vw, 6rem)",
              lineHeight: 1.05,
              color: "var(--theme-text)",
              margin: "0 auto",
              maxWidth: "900px",
              textTransform: "uppercase",
            }}
          >
            Translating user, business, and stakeholder needs into{" "}
            <span style={{ color: "var(--theme-accent)" }}>meaningful</span> and{" "}
            <span style={{ color: "var(--theme-accent)" }}>elegant</span> experiences.
          </h2>

          <div style={{ marginTop: "clamp(48px, 6vw, 80px)", textAlign: "left" }}>
            <Highlights />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginTop: "clamp(32px, 4vw, 56px)" }}
          >
            <a
              href="#work"
              style={{
                fontFamily: '"PP Neue Machina", Arial, sans-serif',
                fontSize: "14px",
                fontWeight: 300,
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "var(--theme-text)",
                textDecoration: "none",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              See how I do it
              <span style={{ fontSize: "18px", lineHeight: 1, letterSpacing: 0 }}>↓</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
