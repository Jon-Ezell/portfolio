"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const RefreshIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

interface SolutionBlockProps {
  headline: string;
  body: string;
  children: React.ReactNode;
  delay?: number;
  variant?: "solution" | "results";
}

function SolutionBlock({ headline, body, children, delay = 0, variant = "solution" }: SolutionBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: "clamp(5rem, 9vw, 8rem)" }}
    >
      {/* Pill */}
      <div style={{ marginBottom: "1.5rem" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          border: "1px solid var(--theme-accent)", borderRadius: "100px",
          padding: "0.35rem 0.85rem",
          fontFamily: '"PP Neue Machina", Arial, sans-serif',
          fontSize: "13px", fontWeight: 400, color: "var(--theme-accent)",
        }}>
          {variant === "results" ? <StarIcon /> : <RefreshIcon />}
          {variant === "results" ? "Results" : "Solution"}
        </span>
      </div>

      {/* Headline */}
      <h3 style={{
        fontFamily: '"PP Neue Machina", Arial, sans-serif',
        fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
        fontWeight: 700,
        lineHeight: 1.3,
        color: "#ffffff",
        maxWidth: "820px",
        marginBottom: "1.25rem",
      }}>
        {headline}
      </h3>

      {/* Body */}
      <p style={{
        fontFamily: '"PP Neue Machina", Arial, sans-serif',
        fontSize: "14px", fontWeight: 300, lineHeight: 1.8,
        color: "rgba(255,255,255,0.55)",
        maxWidth: "720px",
        marginBottom: "2.5rem",
      }}>
        {body}
      </p>

      {/* Media */}
      {children}
    </motion.div>
  );
}

function FullImage({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div style={{ borderRadius: "12px", overflow: "hidden" }}>
      <Image src={src} alt={alt} width={1400} height={900} className="w-full h-auto" />
    </div>
  );
}

function TwoColImages({
  left,
  right,
  cols = "1fr 1fr",
}: {
  left: string;
  right: string;
  cols?: string;
}) {
  return (
    <div className="two-col-grid" style={{ display: "grid", gridTemplateColumns: cols, gap: "1rem", alignItems: "center" }}>
      <div style={{ borderRadius: "12px", overflow: "hidden" }}>
        <Image src={left} alt="" width={700} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
      <div style={{ borderRadius: "12px", overflow: "hidden" }}>
        <Image src={right} alt="" width={700} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
    </div>
  );
}

function ThreeColMedia({
  img1,
  img2,
  video,
}: {
  img1: string;
  img2: string;
  video: string;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr 1fr", gap: "1rem", alignItems: "center" }}>
      <div style={{ borderRadius: "12px", overflow: "hidden" }}>
        <Image src={img1} alt="" width={600} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
      <div style={{ borderRadius: "12px", overflow: "hidden" }}>
        <Image src={img2} alt="" width={600} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
      <div style={{ borderRadius: "12px", overflow: "hidden" }}>
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    </div>
  );
}

export default function ZephyrSolution() {
  return (
    <section style={{ backgroundColor: "var(--theme-nav)", padding: "clamp(4rem, 8vw, 7rem) 2rem" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section intro */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            maxWidth: "820px",
            marginBottom: "clamp(4rem, 7vw, 6rem)",
          }}
        >
          Rather than designing another meditation app, the work focused on creating a closed-loop
          regulation system — combining wearable feedback, behavioral reinforcement, and measurable
          physiological outcomes.
        </motion.h2>

        {/* ── Block 1: Wearable-first ── */}
        <SolutionBlock
          headline="Wearable-first interaction enabling discreet, real-time regulation"
          body="The meditation bracelet was designed to be used agnostically of the smartphone app — with the intention of being able to trigger practice discreetly, anywhere at any time. Breathing practice can also be triggered within the app, which monitors coherence in real time, and allows you to schedule and track practice."
        >
          <ThreeColMedia img1="/homeZ.png" img2="/band.png" video="/loopZ.mp4" />
        </SolutionBlock>

        {/* ── Block 2: Behavioral reinforcement ── */}
        <SolutionBlock
          headline="Behavioral reinforcement through progression and social signaling"
          body="The mobile app incorporates a social experience to allow users to progress, achieve levels, awards, and statuses compared to other users based on their frequency and volume of use. Competitive leaderboards and streak tracking create intrinsic motivation to maintain consistent practice."
          delay={0.05}
        >
          <FullImage src="/heroZ.png" alt="Zephyr app — leaderboard and social progression" />
        </SolutionBlock>

        {/* ── Block 3: Data visualization ── */}
        <SolutionBlock
          headline="Visualizing physiological change to reinforce habit formation"
          body="In the report function of the app experience, users are able to see empirically how their coherence is changing in relation to their practice frequency. Being able to visualize the cause and effect relationship enables users to see the impact their practice is having on their bodies, and aids them in maintaining consistency to optimize the value of their practice."
          delay={0.05}
        >
          <div style={{ width: "50%", margin: "0 auto" }}>
            <FullImage src="/dataZ.png" alt="Zephyr app — physiological data visualization" />
          </div>
        </SolutionBlock>

        {/* ── Block 4: Results ── */}
        <SolutionBlock
          headline="The team entered Zephyr in CU's New Venture Challenge, a prestigious Venture Capital Pitching competition"
          body="Semi-finalists — top 10% out of 50+ ideas and teams. Received 2 rounds of seed funding from University of Colorado Boulder. The prototype was validated with real users across both segments, and the design system has been documented for the next engineering phase."
          variant="results"
          delay={0.05}
        >
          <div style={{ width: "50%" }}>
            <FullImage src="/nvcZ.png" alt="Zephyr — New Venture Challenge" />
          </div>
        </SolutionBlock>

      </div>
    </section>
  );
}
