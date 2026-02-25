"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Philosophy() {
  return (
    <section
      className="overflow-hidden"
      style={{ backgroundColor: "var(--theme-bg)", position: "relative" }}
    >
      {/* ── Top headline ── */}
      <div className="pt-20 pb-10 px-8 text-center relative" style={{ zIndex: 1 }}>
        {/* Mortar + pestle — top-left, beside headline */}
        <div
          className="hidden md:block"
          style={{ position: "absolute", left: "clamp(16px, 4vw, 60px)", top: "40px", zIndex: 2 }}
        >
          <Image
            src="/decor-mortar.png"
            alt=""
            width={160}
            height={160}
            style={{ width: "clamp(135px, 15vw, 240px)", height: "auto", objectFit: "contain" }}
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
            fontSize: "clamp(2rem, 5.5vw, 5rem)",
            lineHeight: 1.0,
            color: "var(--theme-text)",
            margin: 0,
          }}
        >
          BIG PICTURE STRATEGIZING TO
          <br />
          PERFECTING EVERY PIXEL.
        </motion.h2>
      </div>

      {/* ── Body text + prayer beads row ── */}
      <div className="relative px-8 pb-10" style={{ zIndex: 1 }}>
        {/* Prayer beads — right side, beside body text */}
        <div
          className="hidden md:block"
          style={{ position: "absolute", right: "clamp(16px, 4vw, 60px)", top: "0px", zIndex: 2 }}
        >
          <Image
            src="/decor-beads.png"
            alt=""
            width={80}
            height={200}
            style={{ width: "clamp(75px, 9vw, 120px)", height: "auto", objectFit: "contain" }}
          />
        </div>

        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          {[
            <>My work sits at the intersection of AI-native interaction design, systems thinking, and visual craft.</>,
            <>I take a <span style={{ color: "var(--theme-accent)" }}>people first, AI integrated, and engineering involved</span> approach to all of my work – helping teams converge on high-confidence solutions faster.</>,
            <>With 5+ years in growth startups I&apos;m able to guide your product to success. I&apos;m capable of discovering, ideating, testing and shipping winning experiences that will grow your business.</>,
          ].map((content, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: '"PP Neue Machina", Arial, sans-serif',
                fontSize: "clamp(13px, 1.2vw, 15px)",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--theme-muted)",
                marginBottom: i < 2 ? "1.2em" : 0,
              }}
            >
              {content}
            </motion.p>
          ))}
        </div>
      </div>

      {/* ── Venn diagram ── */}
      <div className="flex justify-center px-8 pb-16" style={{ zIndex: 1, position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/venn-diagram.png"
            alt="Business, Users, Design — Jon Ezell philosophy"
            width={480}
            height={480}
            className="w-auto select-none"
            style={{ height: "clamp(280px, 35vw, 480px)", width: "auto", filter: "var(--theme-venn-filter)" }}
          />
        </motion.div>
      </div>

      {/* ── Bottom headline ── */}
      <div className="px-8 pb-10 text-center" style={{ position: "relative", zIndex: 1 }}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
            fontSize: "clamp(2rem, 5.5vw, 5rem)",
            lineHeight: 1.0,
            color: "var(--theme-text)",
            margin: "0 auto",
            maxWidth: "70vw",
          }}
        >
          TRANSLATING USER, BUSINESS, AND
          <br />
          STAKEHOLDER NEEDS INTO{" "}
          <span style={{ color: "var(--theme-accent)" }}>MEANINGFUL</span>
          {" "}AND{" "}
          <span style={{ color: "var(--theme-accent)" }}>ELEGANT</span>
          <br />
          EXPERIENCES.
        </motion.h2>
      </div>

      {/* ── SEE HOW I DO IT CTA ── */}
      <div className="pb-20 text-center" style={{ position: "relative", zIndex: 1 }}>
        {/* Stepping stones — bottom-left */}
        <div
          className="hidden md:block"
          style={{ position: "absolute", left: "clamp(16px, 4vw, 60px)", bottom: "0px", zIndex: 2 }}
        >
          <Image
            src="/decor-stepping-stones.png"
            alt=""
            width={200}
            height={260}
            style={{ width: "clamp(120px, 14vw, 200px)", height: "auto", objectFit: "contain" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
              fontSize: "22px",
              letterSpacing: "0.08em",
              color: "var(--theme-text)",
              marginBottom: "12px",
            }}
          >
            SEE HOW I DO IT
          </p>
          <p style={{ fontSize: "24px", color: "var(--theme-text)", lineHeight: 1 }}>↓</p>
        </motion.div>
      </div>
    </section>
  );
}
