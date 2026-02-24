"use client";

import { motion } from "framer-motion";
import Placeholder from "@/components/ui/Placeholder";

export default function Guru() {
  return (
    <section
      className="relative overflow-hidden px-8 py-32"
      style={{ backgroundColor: "#f8f3ec" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — definition */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="mb-4"
              style={{
                fontFamily: '"MD Nichrome", Verdana, sans-serif',
                fontSize: "12px",
                fontWeight: 300,
                letterSpacing: "0.3em",
                color: "#8a8a8a",
                textTransform: "uppercase",
              }}
            >
              gu·ru / ɡo͝oroo /
            </p>
            <h2
              style={{
                fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
                fontSize: "clamp(4rem, 8vw, 7rem)",
                lineHeight: 0.9,
                color: "#000",
              }}
            >
              GURU
            </h2>
            <p
              className="mt-8 max-w-sm"
              style={{
                fontFamily: '"PP Neue Machina", Arial, sans-serif',
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.7,
                color: "#000",
              }}
            >
              An influential teacher or popular expert. Someone who helps
              translate complexity into clarity — and clarity into outcomes
              that move people.
            </p>
            <p
              className="mt-4 max-w-sm"
              style={{
                fontFamily: '"PP Neue Machina", Arial, sans-serif',
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.7,
                color: "#8a8a8a",
              }}
            >
              That&apos;s the work. Real products. Real constraints. Real impact.
            </p>
          </motion.div>

          {/* Right — placeholder for imagery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Placeholder label="Hero photo / illustration" aspectRatio="4/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
