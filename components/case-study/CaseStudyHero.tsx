"use client";

import { motion } from "framer-motion";

interface CaseStudyHeroProps {
  preHeadline?: string;
  headline: string;
  accentWords?: string;
  description: string;
}

export default function CaseStudyHero({
  preHeadline,
  headline,
  accentWords,
  description,
}: CaseStudyHeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-black px-8 pb-24 pt-48">
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full"
      >
        <h1
          style={{
            fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
            fontSize: "clamp(2.5rem, 8vw, 7rem)",
            lineHeight: 0.95,
            color: "#fff",
          }}
        >
          {preHeadline && (
            <>
              {preHeadline}
              <br />
            </>
          )}
          {headline}
          {accentWords && (
            <>
              <br />
              <span style={{ color: "#e76e52" }}>{accentWords}</span>
            </>
          )}
        </h1>
        <p
          className="mt-8 max-w-xl"
          style={{
            fontFamily: '"PP Neue Machina", Arial, sans-serif',
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {description}
        </p>
      </motion.div>
    </section>
  );
}
