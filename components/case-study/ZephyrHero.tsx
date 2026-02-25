"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MetaItem {
  label: string;
  value: string;
}

interface ZephyrHeroProps {
  metaItems?: MetaItem[];
}

export default function ZephyrHero({ metaItems = [] }: ZephyrHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--theme-nav)" }}>
      <div className="relative max-w-7xl mx-auto px-8">
        {/* ── Headline + Description row ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start md:items-center"
          style={{ paddingTop: "clamp(5.5rem, 7vw, 6rem)" }}
        >
          {/* Left: headline */}
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
              fontSize: "clamp(3rem, 8.5vw, 8rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ color: "#ffffff" }}>BREATH ON</span>
            <br />
            <span style={{ color: "var(--theme-accent)" }}>STRESS</span>
            <br />
            <span style={{ color: "var(--theme-accent)" }}>OFF</span>
          </motion.h1>

          {/* Right: description */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Wristband decor — hidden on mobile */}
            <div
              className="absolute pointer-events-none select-none hidden md:block"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -55%)",
                width: "clamp(160px, 20vw, 260px)",
                opacity: 0.3,
                zIndex: 0,
              }}
            >
              <Image src="/zephyr-beads-bw.png" alt="" width={260} height={260} priority />
            </div>

            <p
              style={{
                position: "relative",
                zIndex: 1,
                fontFamily: '"PP Neue Machina", Arial, sans-serif',
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.65)",
              }}
            >
              Regulate your{" "}
              <span style={{ color: "var(--theme-accent)" }}>nervous system</span>
              {" "}anywhere, in seconds. A wearable wristband and companion app combining{" "}
              <span style={{ color: "var(--theme-accent)" }}>
                biometric feedback
              </span>
              , haptics, and behavioral design.
            </p>
          </motion.div>
        </div>

        {/* ── Project Details ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
          style={{
            marginTop: "clamp(3rem, 6vw, 5rem)",
            paddingTop: "2rem",
            paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <motion.div
            className="col-span-12 md:col-span-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p
              style={{
                fontFamily: '"PP Neue Machina", Arial, sans-serif',
                fontSize: "11px",
                fontWeight: 300,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--theme-on-dark)",
              }}
            >
              Project Details
            </p>
          </motion.div>

          <div className="col-span-12 md:col-span-8 flex flex-col gap-5">
            {metaItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 gap-8"
              >
                <p
                  style={{
                    fontFamily: '"PP Neue Machina", Arial, sans-serif',
                    fontSize: "11px",
                    fontWeight: 300,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--theme-on-dark)",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: '"PP Neue Machina", Arial, sans-serif',
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Hero product image ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden"
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          <Image
            src="/zephyr-phone-hero.png"
            alt="Zephyr — breathing app and wristband"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
