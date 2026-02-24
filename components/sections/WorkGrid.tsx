"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    slug: "scoot",
    title: "Scoot",
    description: "Redesigning urban micromobility for a smarter city experience.",
    tags: ["Product Design", "Mobile"],
  },
  {
    slug: "deep-journey",
    title: "Deep Journey",
    description: "An AI-powered tool for reflective, long-form journaling.",
    tags: ["AI Product", "Consumer"],
  },
  {
    slug: "zephyr",
    title: "Zephyr",
    description: "A design system built for speed and consistency at scale.",
    tags: ["Design Systems", "Tooling"],
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="px-8 py-24">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/${project.slug}`}
              className="group block overflow-hidden rounded-2xl bg-white/5 p-8 transition-colors hover:bg-white/10"
            >
              <div className="mb-6 h-48 rounded-xl bg-white/10" />
              <h2 className="text-xl font-medium text-white">{project.title}</h2>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
