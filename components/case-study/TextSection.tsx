"use client";

import { motion } from "framer-motion";

interface TextSectionProps {
  label?: string;
  headline?: string;
  body: string | string[];
  dark?: boolean;
  accentLabel?: boolean;
}

export default function TextSection({
  label,
  headline,
  body,
  dark = false,
  accentLabel = false,
}: TextSectionProps) {
  const bg = dark ? "#191919" : "#f8f3ec";
  const headlineColor = dark ? "#fff" : "#000";
  const bodyColor = dark ? "rgba(255,255,255,0.6)" : "#000";
  const labelColor = accentLabel ? "#e76e52" : "#8a8a8a";

  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <section className="px-8 py-24" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Label column */}
          {label && (
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                style={{
                  fontFamily: '"PP Neue Machina", Arial, sans-serif',
                  fontSize: "11px",
                  fontWeight: 300,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: labelColor,
                }}
              >
                {label}
              </p>
            </motion.div>
          )}

          {/* Content column */}
          <motion.div
            className={label ? "md:col-span-9" : "md:col-span-12"}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {headline && (
              <h3
                className="mb-6"
                style={{
                  fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  lineHeight: 1.05,
                  color: headlineColor,
                }}
              >
                {headline}
              </h3>
            )}
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={i > 0 ? "mt-4" : ""}
                style={{
                  fontFamily: '"PP Neue Machina", Arial, sans-serif',
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: bodyColor,
                }}
              >
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
