"use client";

import { motion } from "framer-motion";

const col = (title: string, items: string[]) => ({ title, items });

const COLUMNS = [
  col("The Problem", [
    "75% of onboarding starters never subscribed",
    "80% of trial purchasers went dormant within 3 days",
    "Only 7% of purchasers were still active at day 30",
  ]),
  col("The Solution", [
    "Onboarding rebuilt as Ella's first conversation: 14 steps became 4",
    "IA rebuilt around the user's loop: 5 tabs became 3, with Ella as an ambient layer",
    "An activation ring tied to the four behaviors that predict retention",
  ]),
  col("The Results", [
    "Shipped June 2026, instrumented at launch",
    "Metric committed before design: trial-to-core users in 7 days, ~20% → 40% target",
    "Projected ~3× more core users per 100 onboarding starts (5 → 15)",
  ]),
];

const machina = '"PP Neue Machina", Arial, sans-serif';

export default function LymeLessTLDR() {
  return (
    <section style={{ backgroundColor: "var(--theme-bg)", padding: "clamp(2rem, 4vw, 4rem) 2rem" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ border: "2px dashed var(--theme-divider)", borderRadius: "20px", padding: "clamp(1.5rem, 5vw, 4rem)" }}
        >
          <p
            className="text-center"
            style={{
              fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
              fontSize: "55px",
              fontWeight: 800,
              color: "var(--theme-text)",
              marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            tl;dr
          </p>

          <p
            className="text-center mx-auto"
            style={{
              fontFamily: machina,
              fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)",
              fontWeight: 700,
              lineHeight: 1.55,
              color: "var(--theme-text)",
              maxWidth: "780px",
              marginBottom: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            LymeLess worked, but it didn&apos;t retain. Analytics showed where users dropped off; interviews showed why: the
            product never showed how its parts fit together. Users of all four core features stayed at 3.6× the rate of
            everyone else, so I redesigned onboarding, activation, and IA as one change that leads every user to all four.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <p style={{ fontFamily: machina, fontSize: "14px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.75rem" }}>
                  {c.title}
                </p>
                <ul style={{ fontFamily: machina, fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-text)", paddingLeft: 0, listStyle: "none" }}>
                  {c.items.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.4rem", marginTop: i > 0 ? "0.4rem" : 0 }}>
                      <span style={{ flexShrink: 0 }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
