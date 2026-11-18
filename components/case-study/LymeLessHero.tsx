"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LYME_IMG } from "@/lib/lymelessImages";

interface MetaItem {
  label: string;
  value: string;
}

const STATS = [
  { value: "~3×", label: "projected end-to-end lift in core users per 100 onboarding starts" },
  { value: "14 → 4", label: "onboarding steps: forms became one conversation with Ella" },
  { value: "5 → 3", label: "nav tabs, with Ella pulled out as an ambient layer" },
  { value: "20% → 40%", label: "target share of trial users who become core users in 7 days" },
];

export default function LymeLessHero({ metaItems = [] }: { metaItems?: MetaItem[] }) {
  const hero = LYME_IMG["act-home-first-days"];
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--theme-bg)" }}>
      <div className="relative max-w-7xl mx-auto px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start md:items-center"
          style={{ paddingTop: "clamp(7.375rem, 8.875vw, 7.875rem)" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ color: "var(--theme-text)" }}>ONE CLEAR</span>
            <br />
            <span style={{ color: "var(--theme-text)" }}>JOURNEY TO</span>
            <br />
            <span style={{ color: "var(--theme-accent)" }}>FULLY</span>
            <br />
            <span style={{ color: "var(--theme-accent)" }}>ACTIVATED</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="absolute pointer-events-none select-none hidden md:block"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -55%)",
                width: "clamp(200px, 26vw, 340px)",
                opacity: 0.22,
                zIndex: 0,
              }}
            >
              <Image src="/decor-lotus.png" alt="" width={340} height={340} priority />
            </div>
            <p
              style={{
                position: "relative",
                zIndex: 1,
                fontFamily: '"PP Neue Machina", Arial, sans-serif',
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--theme-muted)",
              }}
            >
              A research-led redesign of{" "}
              <span style={{ color: "var(--theme-accent)" }}>onboarding, activation, and information architecture</span>{" "}
              for a chronic-illness app, so brain-fogged users can see how the product fits together and{" "}
              <span style={{ color: "var(--theme-accent)" }}>reach the behaviors that keep them</span>.
            </p>
          </motion.div>
        </div>

        {/* Project details */}
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
          style={{
            marginTop: "clamp(3rem, 6vw, 5rem)",
            paddingTop: "2rem",
            paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
            borderTop: "1px solid var(--theme-divider)",
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
                color: "var(--theme-muted)",
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
                    color: "var(--theme-muted)",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: '"PP Neue Machina", Arial, sans-serif',
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "var(--theme-text)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hero product image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden"
          style={{ marginBottom: "clamp(2rem, 4vw, 3rem)", backgroundColor: "#f4f2ec" }}
        >
          <Image
            src={hero.src}
            alt="LymeLess Home in the first days: the Day View doubles as the activation surface"
            width={hero.w}
            height={hero.h}
            sizes="(max-width: 768px) 100vw, 1280px"
            className="w-full h-auto"
            priority
          />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                style={{
                  fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
                  fontSize: "clamp(1.5rem, 3vw, 3rem)",
                  lineHeight: 1,
                  color: "var(--theme-text)",
                  wordBreak: "break-word",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: '"PP Neue Machina", Arial, sans-serif',
                  fontSize: "11px",
                  fontWeight: 300,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--theme-muted)",
                  marginTop: "0.6rem",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
