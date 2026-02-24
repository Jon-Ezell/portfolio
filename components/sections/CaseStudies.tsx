"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "scoot",
    title: "Scoot",
    headline: "EVENTS THAT ENGAGE & SELL",
    description:
      "A complete immersive virtual event platform that creates meaningful connections and drives sales.",
    tags: ["Product Design", "Mobile", "2025"],
    thumbnail: "/scoot-laptop-phone.png",
  },
  {
    slug: "deep-journey",
    title: "Deep Journey",
    headline: "THOUSANDS OF CONVERSATIONS AT YOUR FINGERTIPS",
    description:
      "AI-powered conversational analytics that reduced reporting from 6 hrs/week to under 15 minutes.",
    tags: ["AI Product", "Web", "2024"],
    thumbnail: "/deep-journey-laptop.png",
  },
  {
    slug: "zephyr",
    title: "Zephyr",
    headline: "BREATH ON / STRESS OFF",
    description:
      "A wearable and app designed to regulate your nervous system anywhere, in seconds.",
    tags: ["Wearable", "iOS", "2023"],
    thumbnail: "/zephyr-app-mockup.png",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="bg-black px-8 py-32">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
          style={{
            fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
            fontSize: "44px",
            color: "#fff",
          }}
        >
          CASE STUDIES
        </motion.p>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/${project.slug}`}
                className="group grid grid-cols-1 md:grid-cols-2 gap-8 rounded-[10px] p-8 transition-colors"
                style={{
                  backgroundColor: "#191919",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "#242424")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "#191919")
                }
              >
                {/* Thumbnail */}
                <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Meta */}
                <div className="flex flex-col justify-center">
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
                      fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                      lineHeight: 1.1,
                      color: "#fff",
                    }}
                  >
                    {project.headline}
                  </p>
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: '"PP Neue Machina", Arial, sans-serif',
                      fontSize: "14px",
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: '"PP Neue Machina", Arial, sans-serif',
                          fontSize: "11px",
                          fontWeight: 300,
                          letterSpacing: "0.1em",
                          color: "#8a8a8a",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "4px",
                          padding: "4px 10px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
