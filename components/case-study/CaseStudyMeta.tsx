"use client";

import { motion } from "framer-motion";

interface MetaItem {
  label: string;
  value: string;
}

interface CaseStudyMetaProps {
  items: MetaItem[];
}

export default function CaseStudyMeta({ items }: CaseStudyMetaProps) {
  return (
    <section
      className="px-8 py-20"
      style={{ backgroundColor: "#f8f3ec" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b py-10"
          style={{ borderColor: "rgba(0,0,0,0.12)" }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                style={{
                  fontFamily: '"PP Neue Machina", Arial, sans-serif',
                  fontSize: "11px",
                  fontWeight: 300,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#8a8a8a",
                  marginBottom: "6px",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
                  fontSize: "16px",
                  color: "#000",
                }}
              >
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
