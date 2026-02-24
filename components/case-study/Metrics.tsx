"use client";

import { motion } from "framer-motion";

interface Metric {
  value: string;
  label: string;
}

interface MetricsProps {
  metrics: Metric[];
  dark?: boolean;
}

export default function Metrics({ metrics, dark = false }: MetricsProps) {
  const bg = dark ? "#000" : "#f8f3ec";
  const valueColor = dark ? "#fff" : "#000";
  const labelColor = "#8a8a8a";

  return (
    <section className="px-8 py-24" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                style={{
                  fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: 1,
                  color: "#e76e52",
                }}
              >
                {m.value}
              </p>
              <p
                className="mt-2"
                style={{
                  fontFamily: '"PP Neue Machina", Arial, sans-serif',
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: labelColor,
                }}
              >
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
