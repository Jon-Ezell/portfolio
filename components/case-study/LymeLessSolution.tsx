"use client";

import { Section, Reveal, Pill, H3, P, B, Callout, Dashes, Figure, FigureGrid, GoDeeper, labelStyle } from "./LymeLessShared";

const RefreshIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

function Block({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <Reveal style={{ marginBottom: "clamp(5rem, 9vw, 8rem)" }}>
      <Pill icon={<RefreshIcon />}>Solution {n}</Pill>
      {children}
    </Reveal>
  );
}

const Label = ({ children }: { children: React.ReactNode }) => (
  <p style={{ ...labelStyle, color: "#ffffff", marginBottom: "0.75rem" }}>{children}</p>
);

export default function LymeLessSolution() {
  return (
    <Section id="solution" dark>
      <Reveal>
        <h2
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
          Three workstreams, shipped as one change.
        </h2>
      </Reveal>

      {/* ── 01 Onboarding ── */}
      <Block n="01 · Onboarding">
        <H3 dark>From a 14-step form to Ella&apos;s first conversation</H3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
          <P dark>
            The old flow described Ella instead of letting users meet her, and collected data without making anything feel
            personal. Now onboarding is <B dark>the start of the Ella relationship</B>: one chat, a sample insight{" "}
            <em>before</em> the email ask, and an activation ring already at 20% on Day 0.
          </P>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ alignItems: "start" }}>
          <Figure dark img="ob-meet-ella" alt="Meet Ella onboarding chat" caption="Meet Ella: the AI disclaimer folds into her introduction." />
          <Figure dark img="ob-intake" alt="Onboarding intake and value tease" caption="Chips over typing, every question skippable, and a sample insight before the email ask." />
        </div>
        <GoDeeper dark id="deeper-onboarding" title="Every onboarding screen, plus what was removed and added" summary="Splash → Meet Ella → intake → celebrate → paywall">
          <FigureGrid
            dark
            items={[
              { img: "ob-splash", alt: "Splash screen", caption: "Step 0 · Splash, kept as-is because it already converted: real customer portraits and a community frame." },
              { img: "ob-close", alt: "Close of the onboarding chat", caption: "The close of the chat: “Skip for now” on every optional ask, then email/password or Google/Apple sign-in, and straight into the product." },
              { img: "ob-celebrate", alt: "Celebrate screen with 20% progress ring", caption: "Step 3 · Celebrate: a progress ring starting at 20%, with the four core behaviors as visible cells. Activation begins on Day 0, not Day 4." },
              { img: "ob-paywall", alt: "Paywall variants", caption: "Step 4 · Paywall, kept as-is because it already converted: yearly by default, benefits framed as outcomes, and the 30-day trial close." },
            ]}
          />
          <Figure dark img="ob-prototype" alt="Live onboarding prototype states" caption="The live prototype: every state designed, so the gallery doubles as the behavioral spec for the build." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Removed</Label>
              <Dashes dark items={["Welcome and Meet-Ella content screens", "The standalone AI-disclaimer checkbox", "Symptom and treatment forms (moved into the product)", "Reminders, provider, and referral pages", "The “you're all set” page"]} />
            </div>
            <div>
              <Label>Added</Label>
              <Dashes dark items={["A conversation from the first screen", "Segmentation by stage of illness", "A sample insight before the paywall", "The four-feature activation ring, visible on Day 0", "“Skip for now” on every optional ask, in an honest brand voice"]} />
            </div>
          </div>
        </GoDeeper>
      </Block>

      {/* ── 02 IA re-rack ── */}
      <Block n="02 · Information architecture">
        <H3 dark>Rebuilding the architecture around the user&apos;s actual loop</H3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
          <P dark>
            The navigation mirrored how the app was built, not what users do. Symptoms, the thing users valued most, had no
            home, and the doctor-ready report was buried. I reorganized everything around the loop:{" "}
            <B dark>define → log → read → carry</B>.
          </P>
        </div>
        <Callout dark title="The new map">
          <B dark>Home</B> (log) · <B dark>Insights</B> (read) · <B dark>Records</B> + Warrior Report (carry) ·{" "}
          <B dark>Manage your day</B> behind Home (define). Ella left the tab bar: as a tab, she&apos;d stay a feature you
          visit.
        </Callout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ alignItems: "start", marginBottom: "1rem" }}>
          <Figure dark img="ia-before" alt="Information architecture before" caption="Before: five tabs, built feature by feature." />
          <Figure dark img="ia-after" alt="Information architecture after" caption="After: three tabs mapped to the loop, Ella above them all." />
        </div>
        <Figure dark img="final-nav" alt="Navigation and Ella, final" caption="The new chrome: three tabs, with Ella as a frosted bar on every screen. Tapping it opens chat, check-in, and journaling in one place." />

        <div style={{ marginTop: "2.5rem" }}>
          <P dark>
            <B dark>One check-in, two workflows.</B> How you feel and what you&apos;ve taken used to be separate flows in
            separate places. Now it&apos;s one skippable flow, saved in one tap.
          </P>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <Figure dark img="ba-checkin" alt="Daily check-in before and after" caption="Before & after · Daily check-in." />
        </div>

        <GoDeeper dark id="deeper-ia-modules" title="Before & after, module by module" summary="Home · check-in · symptoms · treatments · schedule · insights · records">
          <FigureGrid
            dark
            items={[
              { img: "ba-home", alt: "Home before and after", caption: "Home: a stack of unrelated status cards becomes a time-anchored Day View driven by the check-in." },
              { img: "ba-symptoms", alt: "Symptoms before and after", caption: "Symptoms, the gap filled: a browsable, editable list with per-symptom trends and the treatments that target each one." },
              { img: "ba-treatments", alt: "Treatments before and after", caption: "Treatments: “Checklist” meant two things. The daily list stays on Home, and the full regimen (pause, skip with a reason, discontinue) moves to Manage your day." },
              { img: "ba-schedule", alt: "Schedule before and after", caption: "Schedule: meal times go from a buried reminder setting to “when do you eat?”, with treatments attached to each meal. Changing a time rebuilds the day." },
              { img: "ba-insights", alt: "Insights before and after", caption: "Insights: a clean, read-only synthesis. Edit controls route back to Manage your day, and the report moves to Records." },
              { img: "ba-records", alt: "Records before and after", caption: "Records: “Health Info” becomes the persistent layer, with the Warrior Report one tap away from the header." },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6" style={{ alignItems: "start" }}>
            <Figure dark img="checkin-flow" alt="Unified daily check-in flow" caption="The unified check-in: “How you feel” (a slider per symptom, “Resolved” in one tap), then “What you've taken” grouped under meal times, saved with one tap." />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <Figure dark img="records-full" alt="Records full-length screens" caption="Records in full: current context, the health timeline (“your story”), and the Warrior Report sheet." />
              <Figure dark img="carry-new" alt="Warrior Report builder, appointments and documents" caption="Carry, built from scratch: the Warrior Report builder (date range + sections → a clean export a clinician can read), Appointments, and Documents & records." />
            </div>
          </div>
        </GoDeeper>

        <GoDeeper dark id="deeper-ia-states" title="Every state designed: 43 frames" summary="Empty, loading, partial, past due, skipped, paused, discontinued, not enough data">
          <FigureGrid
            dark
            items={[
              { img: "final-checkin", alt: "Daily check-in, final", caption: "The daily check-in, opened from the top of Home. “Save check-in” saves both steps and returns to the day." },
              { img: "final-symptoms", alt: "Manage your day: symptoms", caption: "Manage your day · Symptoms: an editable list with detail and history; severity can be logged any time from a quick sheet." },
              { img: "final-honest-states", alt: "Empty and not-enough-data states", caption: "Honest states: a warm empty state with two ways in, and a “not enough data” state for a new symptom: no faked chart." },
              { img: "final-treatments", alt: "Manage your day: treatments", caption: "Manage your day · Treatments: adherence, target symptoms, add from a library, and chips and steppers instead of typing." },
              { img: "final-lifecycle", alt: "Treatment lifecycle states", caption: "The full lifecycle as first-class states: edit, empty, paused (history kept), and skip a dose with an optional reason, never shaming." },
              { img: "final-discontinue", alt: "Discontinue guardrail", caption: "The discontinue guardrail: dose history and adherence stay in Records and the Warrior Report." },
              { img: "final-schedule", alt: "Schedule explorations", caption: "Schedule, explored in three layouts (cards, timeline, conversational). The lowest-effort one shipped: “when do you usually eat?”" },
              { img: "final-insights", alt: "Insights final", caption: "Insights, final: trends by category, Ella's recap of what changed, and an honest early state (“patterns are still forming”)." },
            ]}
          />
        </GoDeeper>
      </Block>

      {/* ── 03 Activation ── */}
      <Block n="03 · Activation">
        <H3 dark>Making the first days feel like progress</H3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
          <P dark>
            80% of purchasers went dormant in Days 1–3. The <B dark>activation ring</B> maps one-to-one to the core-user
            definition: tap it to see what&apos;s left, jump straight into each flow, and at 100% get the payoff onboarding
            promised, a real pattern from your own data. It lives in the header, never on a screen of its own.{" "}
            <B dark>Visible everywhere, prominent nowhere.</B>
          </P>
        </div>
        <Figure dark img="act-peak-end" alt="All caught up and Day Complete states" caption="The end of the day: a calm Day Complete moment. No confetti. “Rest up, Maya · you showed up for yourself.”" />
        <GoDeeper dark id="deeper-activation" title="Activation states and first-run guidance" summary="The ring in every header · every day state · Ella-voiced nudges">
          <FigureGrid
            dark
            cols={1}
            items={[
              { img: "act-wheel-headers", alt: "Activation ring in every tab header", caption: "The ring in every tab's header, shown at the early post-onboarding state (~20%). Nothing was removed to fit it in." },
              { img: "act-day-states", alt: "Every day state", caption: "Every day state designed: partway through, past due, skipped dose, and a heavy protocol (37 items collapse to “next few + N more”). Missed moments get a light tag and an easy catch-up." },
            ]}
          />
          <P dark>
            First-run guidance is in Ella&apos;s voice, continuing the relationship onboarding started. Ella-voiced iOS
            notifications handle nudges and value teases that invite rather than nag (&ldquo;No pressure, I&apos;ll be here
            when you&apos;re ready&rdquo;). Empty and setup states invite a first entry without pressure, because for this
            group, effort drives abandonment.
          </P>
        </GoDeeper>
      </Block>
    </Section>
  );
}
