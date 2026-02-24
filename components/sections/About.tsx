"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl font-medium text-white">About</h2>
        <p className="mt-6 text-lg text-white/60 leading-relaxed">
          I&apos;m Jon Ezell — a Senior Product Designer with a focus on AI-powered products,
          systems thinking, and consumer experience. I work at the intersection of design
          craft and technical depth, building products that feel intelligent and human at
          the same time.
        </p>
      </motion.div>
    </section>
  );
}
