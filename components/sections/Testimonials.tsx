"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Jon has a rare ability to hold the big picture and the pixel-level detail at the same time. He ships work that looks as good as it functions.",
    name: "Testimonial Name",
    title: "Title, Company",
    headshot: "/headshot-1.png",
  },
  {
    quote:
      "Working with Jon was one of the best creative experiences I've had. He asked the right questions before ever opening Figma.",
    name: "Testimonial Name",
    title: "Title, Company",
    headshot: "/headshot-2.png",
  },
  {
    quote:
      "Jon brings a systems mindset to every project. His design decisions always trace back to user needs and business goals.",
    name: "Testimonial Name",
    title: "Title, Company",
    headshot: "/headshot-3.png",
  },
  {
    quote:
      "The quality of Jon's work speaks for itself, but it's his process and communication that set him apart.",
    name: "Testimonial Name",
    title: "Title, Company",
    headshot: "/headshot-4.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black px-8 py-32" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background vase — sits behind all content */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <Image
          src="/decor-vase.png"
          alt=""
          width={700}
          height={900}
          style={{ width: "clamp(400px, 55vw, 800px)", height: "auto", objectFit: "contain", opacity: 0.35, mixBlendMode: "screen" }}
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
            color: "#fff",
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
              style={{ backgroundColor: "#191919cc" }}
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
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
                    fontSize: "14px",
                    color: "#fff",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: '"PP Neue Machina", Arial, sans-serif',
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "#8a8a8a",
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
