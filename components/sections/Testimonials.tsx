"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Jon is a talented designer with a thoughtful approach to his work. He has a solid understanding of user experience across various devices and platforms. He also has a really good eye and knows what is beautiful and what is not.",
    name: "Ed Stevens",
    title: "CEO & Founder – Scoot",
    headshot: "/ed.png",
  },
  {
    quote:
      "Jon's expertise in UX design and his ability to quickly understand our business needs is truly impressive. His professionalism, responsiveness, and attention to detail are top-notch, and he is a pleasure to work with.",
    name: "Shaun Wood",
    title: "CTO – Reflection Sciences",
    headshot: "/shaun.png",
  },
  {
    quote:
      "Jon gladly takes on large product work. He will research and mock up thoughtful solutions. Whether it's a new product feature, or solving an issue in the product, he takes pride in the UX process.",
    name: "Kate McCarter",
    title: "Senior UX Designer – Datadog",
    headshot: "/kate.png",
  },
  {
    quote:
      "His work consistently reflects aesthetic excellence and strategic depth. Jon is an amazing human who deeply cares about his work and teammates. Any team would be lucky to work with him!",
    name: "Lukas Kelsey",
    title: "Software Engineer – Stripe",
    headshot: "/lukas.png",
  },
];

export default function Testimonials() {
  return (
    <section
      className="px-8 py-32"
      style={{ backgroundColor: "var(--theme-bg)", position: "relative", overflow: "hidden" }}
    >
      {/* Background vase — sits behind all content */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <Image
          src="/decor-vase.png"
          alt=""
          width={700}
          height={900}
          style={{
            width: "clamp(400px, 55vw, 800px)",
            height: "auto",
            objectFit: "contain",
            opacity: 0.35,
            mixBlendMode: "var(--theme-vase-blend)" as React.CSSProperties["mixBlendMode"],
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
          style={{
            fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
            fontSize: "44px",
            color: "var(--theme-text)",
          }}
        >
          DON&apos;T JUST TAKE MY WORD FOR IT
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-[10px] p-8 flex flex-col gap-6"
              style={{
                backgroundColor: "color-mix(in srgb, var(--theme-surface) 60%, transparent)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid var(--theme-divider)",
              }}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={t.headshot}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                style={{
                  fontFamily: '"PP Neue Machina", Arial, sans-serif',
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "var(--theme-text)",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
                    fontSize: "14px",
                    color: "var(--theme-text)",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: '"PP Neue Machina", Arial, sans-serif',
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "var(--theme-muted)",
                  }}
                >
                  {t.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
