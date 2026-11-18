"use client";

import { Section, Reveal, Pill, H2, P, B, Callout, Figure, GoDeeper } from "./LymeLessShared";

const TargetIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default function LymeLessStrategy() {
  return (
    <Section id="strategy">
      <Reveal>
        <Pill icon={<TargetIcon />}>Strategy</Pill>
        <H2>Clarify the journey; let Ella connect it</H2>
        <Callout title="The hypothesis">
          Users leave because the product never shows how its pieces fit together. If we{" "}
          <B>clarify the journey through the IA</B>, make <B>Ella the ambient connection across every surface</B>, and add
          a <B>light activation experience</B>, more users reach full activation, and they retain at 62% vs. 17%.
        </Callout>
      </Reveal>

      <Reveal style={{ marginBottom: "2.5rem" }}>
        <P>
          <B>Fix the destination first.</B> A polished onboarding that leads into a broken first week yields little. So
          activation was P0 and onboarding P1, shipped together: make the first days feel like progress, then make
          onboarding the on-ramp to exactly that.
        </P>
      </Reveal>

      <Reveal>
        <Figure
          img="funnel-after"
          alt="Projected after-state funnel showing gains at each stage"
          caption="Projected funnel: start-to-trial 25% → ~38%, trial-to-core 20% → 40%. Hatched bands are the projected gain."
        />
      </Reveal>

      <GoDeeper id="deeper-handoff" title="The metric math, and how onboarding hands off to activation" summary="How 3× was projected · why each surface does a different job">
        <P>
          <B>A metric we could be held to.</B> Activation was redefined as the share of trial purchasers who become core
          users within 7 days: about 20% today, with a target of 40%. Funnel modeling on the 90-day Mixpanel group projects
          onboarding fixes lifting start-to-trial from 25% to ~38%. Compounded per 100 onboarding starts: 25 × 20% ≈ 5 core
          users today, versus 38 × 40% ≈ 15 after, about 3×. Both targets were committed before design began and
          instrumented at launch.
        </P>
        <P>
          <B>Onboarding creates the aha and the appetite; the core experience delivers the meal.</B> Onboarding can&apos;t
          deliver breadth-driven value on Day 0 because there&apos;s no data yet. Instead it creates a felt sense of being
          understood (&ldquo;Ella already gets me&rdquo;) and shows a visible path. The activation layer inside the product
          then turns that appetite into the four behaviors that produce real value.
        </P>
        <P>
          Making Ella the centerpiece was the founding product instinct. The research backed it up and gave it a sharper
          reason: insights and reports are the payoff that makes the work worth it, the four core behaviors are the path to
          activation, and the information architecture is what makes that path visible and walkable for a brain-fogged user.
        </P>
      </GoDeeper>
    </Section>
  );
}
