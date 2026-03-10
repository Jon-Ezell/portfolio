"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "altr",
    title: "ALTR",
    headline: "FROM 7% TO THE MOON",
    description:
      "A ground-up onboarding redesign that took ALTR's activation rate from 7% to over 50% and grew daily active users by 80% in two months.",
    tags: ["UX Research", "Onboarding", "2022"],
    thumbnail: "/ALTRHERO1.png",
  },
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
  // ZEPHYR HIDDEN — uncomment to re-enable
  // {
  //   slug: "zephyr",
  //   title: "Zephyr",
  //   headline: "BREATH ON / STRESS OFF",
  //   description:
  //     "A wearable and app designed to regulate your nervous system anywhere, in seconds.",
  //   tags: ["Wearable", "iOS", "2023"],
  //   thumbnail: "/zephyr-app-mockup.png",
  // },
];

export default function CaseStudies() {
  return (
    <section
      id="work"
      className="px-8 pt-8 pb-32"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background rocks — sits behind all content */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <Image
          src="/rocks.png"
          alt=""
          width={900}
          height={900}
          style={{
            width: "clamp(500px, 65vw, 900px)",
            height: "auto",
            objectFit: "contain",
            opacity: 0.3,
            mixBlendMode: "var(--theme-vase-blend)" as React.CSSProperties["mixBlendMode"],
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
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
                className="group grid grid-cols-1 md:grid-cols-2 gap-8 rounded-[10px] p-8"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid var(--theme-divider)",
                  textDecoration: "none",
                  transition: "background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--theme-surface)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(255, 255, 255, 0.02)";
                }}
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
                      color: "var(--theme-text)",
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
                      color: "var(--theme-text)",
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
                          color: "var(--theme-muted)",
                          border: "1px solid var(--theme-divider)",
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
