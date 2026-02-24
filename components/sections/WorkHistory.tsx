"use client";

import { motion } from "framer-motion";

const history = [
  {
    year: "2025",
    role: "DESIGN LEAD",
    company: "Scoot",
    description:
      "Led design and co-led product for immersive virtual event startup. Built out and shipped core product offering. Company closed first fortune 500 deals during my tenure.",
    dot: false,
  },
  {
    year: "2024",
    role: "DESIGN CONSULTANT",
    company: "WELL – YC W23",
    description: "Designed core UX/UI and branding for YC company Well.",
    dot: false,
  },
  {
    year: "2023",
    role: "CO-FOUNDER",
    company: "ZEPHYR",
    description:
      "Created cutting edge heath and wellness branding, product, and experience.",
    dot: true,
  },
  {
    year: "2023",
    role: "UX CONSULTANT",
    company: "REFLECTION SCIENCES",
    description: "Led UX of Gates Foundation funded Ed-tech startup",
    dot: false,
  },
  {
    year: "2022",
    role: "UX DESIGNER",
    company: "ALTR",
    description:
      "Led Design for VC funded tokenization-based data security startup. Company went from 100k → 1M+ ARR during my tenure.",
    dot: false,
  },
  {
    year: "2019",
    role: "WEB DESIGNER",
    company: "CAVIS",
    description:
      "Re-imaged branding and web-assets for turn-key energy optimization leader",
    dot: false,
  },
];

export default function WorkHistory() {
  return (
    <section
      style={{ backgroundColor: "#f5f0e8", padding: "clamp(48px, 7vw, 100px) clamp(24px, 6vw, 80px)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"MD Nichrome Dark", Verdana, sans-serif',
            fontSize: "22px",
            letterSpacing: "0.08em",
            color: "#000",
            marginBottom: "clamp(40px, 6vw, 80px)",
          }}
        >
          HISTORY
        </motion.p>

        {/* Rows */}
        <div>
          {history.map((item, i) => (
            <motion.div
              key={`${item.year}-${item.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Row content */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "clamp(120px, 16vw, 200px) 1fr clamp(200px, 30vw, 380px)",
                  gap: "clamp(16px, 3vw, 40px)",
                  alignItems: "center",
                  padding: "clamp(28px, 4vw, 52px) 0",
                  position: "relative",
                }}
              >
                {/* Year */}
                <span
                  style={{
                    fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
                    fontSize: "clamp(3rem, 7vw, 6.5rem)",
                    lineHeight: 1,
                    color: "#000",
                  }}
                >
                  {item.year}
                </span>

                {/* Role + Company */}
                <div>
                  <p
                    style={{
                      fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
                      fontSize: "clamp(1.4rem, 3vw, 2.6rem)",
                      lineHeight: 1.0,
                      color: "#000",
                      margin: 0,
                    }}
                  >
                    {item.role}
                  </p>
                  <p
                    style={{
                      fontFamily: '"PP Neue Machina", Arial, sans-serif',
                      fontSize: "clamp(10px, 1vw, 13px)",
                      fontWeight: 400,
                      letterSpacing: "0.1em",
                      color: "#e76e52",
                      marginTop: "6px",
                      margin: "6px 0 0",
                    }}
                  >
                    {item.company}
                  </p>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: '"PP Neue Machina", Arial, sans-serif',
                    fontSize: "clamp(12px, 1.1vw, 14px)",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: "#3a3a3a",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.15)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
