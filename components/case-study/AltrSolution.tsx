"use client";

import { motion } from "framer-motion";

const RefreshIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);

interface SolutionBlockProps {
  headline: string;
  body: string;
  children: React.ReactNode;
  delay?: number;
}

function SolutionBlock({ headline, body, children, delay = 0 }: SolutionBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: "clamp(5rem, 9vw, 8rem)" }}
    >
      {/* Pill */}
      <div style={{ marginBottom: "1.5rem" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          border: "1px solid var(--theme-accent)", borderRadius: "100px",
          padding: "0.35rem 0.85rem",
          fontFamily: '"PP Neue Machina", Arial, sans-serif',
          fontSize: "13px", fontWeight: 400, color: "var(--theme-accent)",
        }}>
          <RefreshIcon />
          Solution
        </span>
      </div>

      {/* Headline */}
      <h3 style={{
        fontFamily: '"PP Neue Machina", Arial, sans-serif',
        fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
        fontWeight: 700,
        lineHeight: 1.3,
        color: "#ffffff",
        maxWidth: "820px",
        marginBottom: "1.25rem",
      }}>
        {headline}
      </h3>

      {/* Body */}
      <p style={{
        fontFamily: '"PP Neue Machina", Arial, sans-serif',
        fontSize: "14px", fontWeight: 300, lineHeight: 1.8,
        color: "rgba(255,255,255,0.55)",
        maxWidth: "720px",
        marginBottom: "2.5rem",
      }}>
        {body}
      </p>

      {/* Media */}
      {children}
    </motion.div>
  );
}

/* Step tile for the onboarding flow overview */
function StepTile({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div style={{
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "12px",
      padding: "1.25rem",
      backgroundColor: "rgba(255,255,255,0.05)",
    }}>
      <p style={{
        fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
        fontSize: "1.75rem",
        lineHeight: 1,
        color: "var(--theme-accent)",
        marginBottom: "0.5rem",
        letterSpacing: "-0.02em",
      }}>
        {number}
      </p>
      <p style={{
        fontFamily: '"PP Neue Machina", Arial, sans-serif',
        fontSize: "13px",
        fontWeight: 700,
        lineHeight: 1.3,
        color: "#ffffff",
        marginBottom: "0.4rem",
      }}>
        {title}
      </p>
      <p style={{
        fontFamily: '"PP Neue Machina", Arial, sans-serif',
        fontSize: "12px",
        fontWeight: 300,
        lineHeight: 1.6,
        color: "rgba(255,255,255,0.5)",
      }}>
        {description}
      </p>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Welcome",
    description: "Product intro video, context on what ALTR does, and what users will complete in this flow.",
  },
  {
    number: "02",
    title: "Configure",
    description: "Choose between Express Configuration (recommended) or Manual — with plain-language explanations of each.",
  },
  {
    number: "03",
    title: "Connect",
    description: "Copy a single consolidated code snippet from inside the product and paste it into Snowflake.",
  },
  {
    number: "04",
    title: "Select Data",
    description: "Choose which databases to connect via a simple dropdown — ALTR fetches available options automatically.",
  },
  {
    number: "05",
    title: "Classify",
    description: "A progress bar and real-time checklist shows exactly what's happening in the background.",
  },
  {
    number: "06",
    title: "Let's Go!",
    description: "Completion screen confirms activation and directs users to their next meaningful action in the product.",
  },
];

export default function AltrSolution() {
  return (
    <section style={{ backgroundColor: "var(--theme-nav)", padding: "clamp(4rem, 8vw, 7rem) 2rem" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section intro */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif',
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            maxWidth: "820px",
            marginBottom: "clamp(4rem, 7vw, 6rem)",
          }}
        >
          The solution wasn&apos;t a better form — it was removing the form entirely
          and replacing it with a guided, in-product activation experience.
        </motion.h2>

        {/* ── Block 1: The onboarding wizard ── */}
        <SolutionBlock
          headline="A 6-step onboarding wizard that brings all context and tools into a single, sequential flow"
          body="Rather than presenting users with a bare form and pointing them to documentation, the new onboarding experience walks them through every step of the connection process inside the product. Each screen has one clear objective, a progress indicator, and all the information needed to complete it — no tab-switching required."
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {steps.map((step) => (
              <StepTile key={step.number} {...step} />
            ))}
          </div>
        </SolutionBlock>

        {/* ── Block 2: Express configuration ── */}
        <SolutionBlock
          headline="Express Configuration eliminated the need for external documentation"
          body="The original flow required users to find ALTR's documentation, navigate to the Snowflake connection page, copy two separate code snippets, switch to Snowflake to paste them, then return to ALTR to manually enter credentials. Express Configuration collapsed all of this into a single in-product step: one consolidated snippet, copied from within the onboarding wizard itself."
          delay={0.05}
        >
          <div style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "14px",
            padding: "clamp(1.5rem, 4vw, 3rem)",
            backgroundColor: "rgba(255,255,255,0.04)",
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--theme-accent)", marginBottom: "1rem" }}>Before</p>
                {[
                  "Find ALTR documentation (external URL)",
                  "Navigate to Snowflake connection page in docs",
                  "Copy first code snippet from docs",
                  "Log into Snowflake and select account admin",
                  "Paste first snippet, run it",
                  "Return to docs for second snippet",
                  "Back to Snowflake to paste and run second snippet",
                  "Return to ALTR and enter all credentials manually",
                  "Press Connect and hope nothing clears",
                ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginTop: i > 0 ? "0.5rem" : 0 }}>
                    <span style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "11px", color: "rgba(255,255,255,0.3)", flexShrink: 0, marginTop: "0.1rem" }}>{String(i + 1).padStart(2, "0")}</span>
                    <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "12px", fontWeight: 300, lineHeight: 1.5, color: "rgba(255,255,255,0.45)" }}>{step}</p>
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--theme-accent)", marginBottom: "1rem" }}>After</p>
                {[
                  "Sign into Snowflake",
                  "Find ALTR partner connect in Snowflake",
                  "Log into ALTR — onboarding launches automatically",
                  "Copy consolidated snippet directly from onboarding wizard",
                  "Paste into Snowflake",
                  "Select databases in ALTR — credentials auto-populated",
                  "Activation complete",
                ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginTop: i > 0 ? "0.5rem" : 0 }}>
                    <span style={{ fontFamily: '"MD Nichrome Ultra", Verdana, sans-serif', fontSize: "11px", color: "var(--theme-accent)", flexShrink: 0, marginTop: "0.1rem" }}>{String(i + 1).padStart(2, "0")}</span>
                    <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "12px", fontWeight: 300, lineHeight: 1.5, color: "rgba(255,255,255,0.75)" }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SolutionBlock>

        {/* ── Block 3: Progress and form integrity ── */}
        <SolutionBlock
          headline="Progress transparency and form integrity gave users the confidence to complete the process"
          body="Two small changes had an outsized impact on completion: progress indicators so users always knew how far they were from done, and form state persistence so a failed connection attempt didn't wipe out everything they'd typed. Together they addressed the two biggest drivers of abandonment identified in the usability research."
          delay={0.05}
        >
          <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
            <video
              src="/Onboarding ALTR Demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Progress Indicators",
                items: [
                  "Step counter and named progress bar on every screen",
                  "Users could see exactly how many steps remained",
                  "Named steps (Welcome, Configure, Connect...) gave context before arriving at each screen",
                ],
              },
              {
                title: "Form State Integrity",
                items: [
                  "Input values persisted through failed connection attempts",
                  "Inline error messaging surfaced on the specific field, not as a generic failure",
                  "Format hints and field descriptions added so users knew exactly what was expected",
                ],
              },
            ].map((card, i) => (
              <div key={i} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "1.5rem", backgroundColor: "rgba(255,255,255,0.04)" }}>
                <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, lineHeight: 1.3, color: "#ffffff", marginBottom: "1rem" }}>{card.title}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {card.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.4rem", fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.65, color: "rgba(255,255,255,0.55)", marginTop: j > 0 ? "0.5rem" : 0 }}>
                      <span style={{ flexShrink: 0, marginTop: "0.1rem" }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SolutionBlock>

      </div>
    </section>
  );
}
