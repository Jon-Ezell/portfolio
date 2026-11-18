"use client";

import { Section, Reveal, Pill, H2, P, B, Stats, Figure, GoDeeper } from "./LymeLessShared";

const BookIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export default function LymeLessBackground() {
  return (
    <Section id="background">
      <Reveal>
        <Pill icon={<BookIcon />}>Background</Pill>
        <H2>Two cliffs, one structural failure</H2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <P>
            LymeLess helps people with Lyme disease track symptoms and treatments, with{" "}
            <B>Ella, an AI companion</B>, at its center. Users often arrive with brain fog and pay $14.99/month after a
            30-day trial. <B>The features worked. The business didn&apos;t retain.</B>
          </P>
          <P>
            Users dropped off in onboarding and in their first days after purchase, for the same reason: the app asked
            cognitively taxed users to find their own way, with no anchor, no visible progress, and no payoff.
          </P>
        </div>
      </Reveal>

      <Stats
        items={[
          { value: "75%", label: "of onboarding starters never subscribe" },
          { value: "80%", label: "of trial purchasers go dormant within 3 days" },
          { value: "7%", label: "of purchasers are still active at day 30" },
        ]}
      />

      <Reveal>
        <Figure
          img="funnel-before"
          alt="Full-journey funnel from onboarding start to day-30 active user"
          caption="Per 100 onboarding starts, 25 start a trial and 2 are still active at Day 30. Source: Mixpanel, 90 days."
        />
      </Reveal>

      <GoDeeper id="deeper-scope" title="Funnel detail, scope, and process" summary="Where each user was lost · how the project ran">
        <P>
          <B>Reading the funnel.</B> Per 100 onboarding starts: 46 reach registration, 25 start a trial, 5 are active on
          Days 1–3, and 2 remain at Day 30. The two biggest losses are inside onboarding (54 lost) and right after purchase
          (20 of 25 purchasers dormant by Day 3). 155 of 612 starters reached a trial on the 90-day baseline; the trailing
          30 days improved to 33%.
        </P>
        <P>
          I was the product strategist and designer, solo and end to end: find out why users leave, turn the findings into
          a design thesis, then redesign onboarding, first-run activation, and the core information architecture as one
          coherent change.
        </P>
        <Figure
          img="process-chain"
          alt="Process chain from research to instrumented launch"
          caption="Three research rounds (April to mid-May) led to a validated hypothesis. That hypothesis drove three design workstreams, shipped together as one instrumented launch (mid-May to June)."
        />
      </GoDeeper>
    </Section>
  );
}
