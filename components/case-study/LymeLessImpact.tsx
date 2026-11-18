"use client";

import { Section, Reveal, Pill, H2, H3, P, B, Figure, labelStyle } from "./LymeLessShared";

const ImpactIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const LEARNINGS = [
  {
    title: "Pressure-test the aha before building on it",
    body: "The team's favorite signal described users who were already engaged; it didn't cause retention. Checking it first changed what we built.",
  },
  {
    title: "Fix the destination before the on-ramp",
    body: "Onboarding gains are capped by what users find after they pay. Activation first means every onboarding win compounds.",
  },
  {
    title: "Make AI a layer, not a destination",
    body: "Ella's value was mostly ambient. Moving her into every surface matched how users got value, and set up the north star.",
  },
];

export function LymeLessFutureVision() {
  return (
    <Section>
      <Reveal>
        <Pill>North Star</Pill>
        <H2>Race car first, so the tricycle points somewhere</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ alignItems: "start", marginTop: "2rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <P>
              Alongside the shipping work I delivered a north star: Ella grows from a Q&amp;A feature into{" "}
              <B>an AI care agent that acts</B>, completing check-ins and logging treatments for the user.
            </P>
            <P>
              Designing the future first means every near-term decision leads toward it: the ambient Ella bar and the single
              check-in flow are exactly what Ella will later run by voice. <B>The flywheel:</B> more value means more data
              in, which makes Ella smarter.
            </P>
          </div>
          <Figure
            img="ns-intake"
            alt="Conversational health intake"
            caption="The first concrete piece: conversational health intake that replaces the old forms."
          />
        </div>
      </Reveal>
    </Section>
  );
}

export default function LymeLessImpact() {
  return (
    <Section id="impact">
      <Reveal>
        <Pill icon={<ImpactIcon />}>Impact</Pill>
        <H2>Shipped June 2026, with the metric committed in advance</H2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "720px" }}>
          <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "14px", fontWeight: 700, lineHeight: 1.8, color: "var(--theme-text)", margin: 0 }}>
            The success metric was defined, and pressure-tested, before a single screen was drawn: the share of trial
            purchasers who become core users within 7 days. Today it&apos;s about 20%; the target is 40%.
          </p>
          <P>
            Two fixes multiply: per 100 starts, 25 × 20% ≈ 5 core users today, versus ~38 × 40% ≈ 15 after.{" "}
            <B>Three times the core users from the same traffic.</B> Measurement shipped with the design; the first groups
            of users are still maturing.
          </P>
        </div>
      </Reveal>

      <Reveal style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
        <H3>Key learnings</H3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginTop: "1.5rem" }}>
          {LEARNINGS.map((l, i) => (
            <div
              key={l.title}
              style={{ border: "1px solid var(--theme-divider)", borderRadius: "14px", padding: "1.5rem", backgroundColor: "var(--theme-surface)" }}
            >
              <p style={{ ...labelStyle, marginBottom: "0.75rem" }}>0{i + 1}</p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "15px", fontWeight: 700, lineHeight: 1.35, color: "var(--theme-text)", marginBottom: "0.6rem" }}>
                {l.title}
              </p>
              <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-muted)" }}>
                {l.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
