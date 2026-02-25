"use client";

import { motion } from "framer-motion";

interface VideoSectionProps {
  src: string;
  darknessOverlay?: number;
  dark?: boolean;
  aspectRatio?: string;
}

export default function VideoSection({
  src,
  darknessOverlay = 0.55,
  dark = true,
  aspectRatio = "16/9",
}: VideoSectionProps) {
  const bg = dark ? "#191919" : "#f8f3ec";

  return (
    <section className="px-8 py-16" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-xl overflow-hidden"
          style={{ aspectRatio }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={src} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(0,0,0,${darknessOverlay})` }}
          />
        </motion.div>
      </div>
    </section>
  );
}
