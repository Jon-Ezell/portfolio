"use client";

import { Section, Reveal, Pill, H2, H3, P, B, Callout, Dashes, GoDeeper, labelStyle } from "./LymeLessShared";

const SearchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ROUNDS = [
  {
    n: "01",
    title: "Heuristic audit",
    body: "Surfaced the obvious fixes, but couldn't say where users were actually lost. A fix list, not a diagnosis.",
  },
  {
    n: "02",
    title: "Behavioral analytics",
    body: "Mixpanel funnels (n=612) found the drop-offs. Then I pressure-tested the team's favorite activation signal.",
  },
  {
    n: "03",
    title: "Five user interviews",
    body: "Core users, from undiagnosed to remission, explained why breadth works.",
  },
];

const BREADTH = [
  { label: "1 of 4", n: 54, pct: 17, step: "baseline" },
  { label: "2 of 4", n: 40, pct: 30, step: "+13 pts" },
  { label: "3 of 4", n: 33, pct: 39, step: "+9 pts" },
  { label: "4 of 4 (core)", n: 40, pct: 62, step: "+23 pts" },
];

export default function LymeLessResearch() {
  return (
    <Section id="research">
      <Reveal>
        <Pill icon={<SearchIcon />}>Research</Pill>
        <H2>Three rounds: from a symptom list to the root cause</H2>
      </Reveal>

      {/* Three rounds */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ margin: "2.5rem 0 clamp(3rem, 6vw, 4.5rem)" }}>
        {ROUNDS.map((r, i) => (
          <Reveal
            key={r.n}
            delay={i * 0.08}
            style={{ border: "1px solid var(--theme-divider)", borderRadius: "14px", padding: "1.5rem", backgroundColor: "var(--theme-surface)" }}
          >
            <p style={{ ...labelStyle, marginBottom: "0.75rem" }}>Round {r.n}</p>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "15px", fontWeight: 700, color: "var(--theme-text)", marginBottom: "0.6rem" }}>
              {r.title}
            </p>
            <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "var(--theme-muted)" }}>
              {r.body}
            </p>
          </Reveal>
        ))}
      </div>

      {/* The key finding */}
      <Reveal>
        <H3>The key finding: feature breadth drives retention, not insights</H3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
          <P>
            Reaching an insight looked like the aha moment: 94% of users who did came back. I stress-tested it before
            building on it. Over a longer window that fell to 64%, and insight-reachers turned out to be users who were
            already engaged, not users the insight had won over.
          </P>
          <P>
            What held up was <B>breadth</B>: retention climbs with each core feature a user adopts (check-ins, Ella,
            journal, treatment checklist), with no plateau.
          </P>
        </div>
      </Reveal>

      <Reveal>
        <table className="lyme-table" aria-label="Retention by number of core features used">
          <thead>
            <tr>
              <th>Features used</th>
              <th>Users</th>
              <th style={{ width: "45%" }}>Retained (active in last 14 days)</th>
              <th>Step</th>
            </tr>
          </thead>
          <tbody>
            {BREADTH.map((r) => (
              <tr key={r.label}>
                <td style={{ fontWeight: r.pct === 62 ? 700 : 300 }}>{r.label}</td>
                <td>{r.n}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div className="lyme-bar" style={{ width: `${(r.pct / 62) * 100}%`, opacity: r.pct === 62 ? 1 : 0.45 }} />
                    <span style={{ fontWeight: 700, minWidth: "2.5rem" }}>{r.pct}%</span>
                  </div>
                </td>
                <td style={{ color: "var(--theme-muted)" }}>{r.step}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif', fontSize: "12px", fontWeight: 300, color: "var(--theme-muted)", marginTop: "0.75rem" }}>
          Users who use all four features are retained at 3.6× the rate of single-feature users.
        </p>
      </Reveal>

      <Reveal>
        <Callout title="Why breadth was rare">
          Features sat in silos: <B>70% check in → 27% also journal → 19% also use the checklist → 12% touch all four.</B>{" "}
          The product was a navigation grid, not a journey.
        </Callout>
      </Reveal>

      <Reveal>
        <H3>Interviews: the job is to synthesize</H3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <P>
            Every user had the same job: <B>make an overwhelming illness legible</B>, to themselves and their doctors. That
            job spans features, which is why breadth retains.
          </P>
          <P>
            One finding changed the design: <B>Ella&apos;s value is ambient.</B> Two of five core users rarely chatted but
            stayed for what Ella produced from their data. She needed to be a layer over the product, not a place in it.
          </P>
        </div>
      </Reveal>

      <GoDeeper id="deeper-analytics" title="The full quantitative analysis" summary="Drop-off points · why the insights metric failed · the core-user definition">
        <P>
          <B>Locating the losses.</B> Onboarding converts 25% start-to-trial on the 90-day baseline (33% in the trailing 30
          days), with two high-severity drop-offs. Symptoms → Treatments loses 26% in both windows, because the treatments
          form demands answers from memory and has no exit. Registration → Subscription loses 45% on the 90-day view. A
          fresh regression also appeared: Welcome → Meet Ella went from a 16% to a 34% drop and was flagged for diagnosis
          by app version.
        </P>
        <div>
          <p style={{ ...labelStyle, marginBottom: "0.75rem" }}>Stress-testing the insights hypothesis (May 5, n=167)</p>
          <Dashes
            items={[
              <><B>The 94% return rate didn&apos;t survive a longer timeline.</B> With a time-based retention definition it falls to 64%, and 48% of everyone who ever generated an insight did it exactly once and never came back.</>,
              <><B>Other criteria predicted retention better.</B> Of five candidate definitions, &ldquo;all four behaviors at meaningful dose&rdquo; beat reaching an insight on both predictive lift (2.5× vs. 2.2×) and absolute retention (68%).</>,
              <><B>Insight-reachers were already power users.</B> They check in about 7× more than other retained users, and the median first insight lands on Day 5–6, after the Days 1–3 drop-off.</>,
              <><B>Ella usage is bimodal.</B> 31% of users send 3 or fewer messages and leave; 38% become 16+ message power users. There&apos;s no middle.</>,
            ]}
          />
        </div>
        <Callout title="The core user: a measurable, controllable definition">
          ≥5 check-ins · ≥3 Ella messages · ≥1 journal entry · ≥1 treatment checklist update. 20% of users meet it today;
          68% of them stay active, a 2.5× lift that is measurable from Day 1 rather than Day 5. It replaced &ldquo;reach
          generate_insights&rdquo; as the activation metric.
        </Callout>
      </GoDeeper>

      <GoDeeper id="deeper-interviews" title="Interview findings and the design principles they earned" summary="Five core users · May 11–27">
        <P>
          Unprompted, users described the more-in, more-out curve: Ella gets better the more they put in. Five core-user
          interviews covered the full journey: undiagnosed, newly diagnosed, active treatment, long-term
          management, and remission. One user condenses a 37-item protocol into questions for appointments; another spotted
          a 3-day flare cycle; another hunts for correlations; another tracks a &ldquo;moving target&rdquo; of monthly
          changes. One estimated Ella at about 80% accurate and blamed the gap on incomplete data, the strongest point where
          the interviews and the analytics agreed.
        </P>
        <div>
          <p style={{ ...labelStyle, marginBottom: "0.75rem" }}>Also confirmed</p>
          <Dashes
            items={[
              <><B>Manual entry is the universal tax.</B> One user quit diet tracking outright because entering it at the end of the day was too much when fatigued.</>,
              <><B>The doctor-ready Warrior Report is undervalued by the usage data</B> but among the most valued things in the app. It was just buried.</>,
              <><B>Insights aren&apos;t what drives retention, but they are what motivates people:</B> they&apos;re the reason logging feels worth it.</>,
            ]}
          />
        </div>
        <div>
          <p style={{ ...labelStyle, marginBottom: "0.75rem" }}>Design principles earned</p>
          <Dashes
            items={[
              "Chips and sliders over typing. Every input is skippable, and skipping is framed as honestly putting it off, never as failure.",
              "Honest copy calibrated to chronic illness. These users have been overpromised by every wellness product they've tried: validation and legibility, never “feel better in 30 days.”",
            ]}
          />
        </div>
      </GoDeeper>
    </Section>
  );
}
