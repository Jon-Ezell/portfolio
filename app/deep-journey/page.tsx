import Nav from "@/components/layout/Nav";
import DeepJourneyHero from "@/components/case-study/DeepJourneyHero";
import DeepJourneyTLDR from "@/components/case-study/DeepJourneyTLDR";
import DeepJourneyOutcome from "@/components/case-study/DeepJourneyOutcome";
import DeepJourneyBackground from "@/components/case-study/DeepJourneyBackground";
import DeepJourneyStrategy from "@/components/case-study/DeepJourneyStrategy";
import DeepJourneyProcess from "@/components/case-study/DeepJourneyProcess";
import DeepJourneySolution from "@/components/case-study/DeepJourneySolution";
import DeepJourneyImpact from "@/components/case-study/DeepJourneyImpact";
import DeepJourneyFutureVision from "@/components/case-study/DeepJourneyFutureVision";
import DeepJourneyLocalNav from "@/components/case-study/DeepJourneyLocalNav";
import FooterCTA from "@/components/sections/FooterCTA";

export const metadata = {
  title: "Deep Journey — Jon Ezell",
};

export default function DeepJourneyPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO + META ─── */}
        <DeepJourneyHero
          metaItems={[
            { label: "Company", value: "Scoot — Enterprise virtual events platform" },
            { label: "Role", value: "Design Lead" },
            { label: "Scope", value: "Defined and shipped an AI-driven sales intelligence interface to consolidate fragmented revenue workflows" },
            { label: "Business Context", value: "Enterprise B2B SaaS serving revenue and sales leadership teams" },
            { label: "Primary Focus", value: "Reducing reporting time and increasing confidence in sales insights" },
          ]}
        />

        {/* ─── TL;DR OVERVIEW + METRICS ─── */}
        <DeepJourneyTLDR />

        {/* ─── STICKY LOCAL NAV ─── */}
        <DeepJourneyLocalNav />

        {/* ─── BACKGROUND ─── */}
        <DeepJourneyBackground />

        {/* ─── OUTCOME CARDS ─── */}
        <div id="outcomes">
          <DeepJourneyOutcome />
        </div>

        {/* ─── AUDIENCES ─── */}
        <DeepJourneyStrategy />

        {/* ─── PROCESS ─── */}
        <div id="process">
          <DeepJourneyProcess />
        </div>

        {/* ─── SOLUTION ─── */}
        <div id="solution">
          <DeepJourneySolution />
        </div>

        {/* ─── IMPACT ─── */}
        <DeepJourneyImpact />

        {/* ─── FUTURE VISION ─── */}
        <DeepJourneyFutureVision />

        {/* ZEPHYR HIDDEN — when re-enabling Zephyr, restore: nextProject={{ href: "/zephyr", label: "Zephyr" }} */}
        <FooterCTA nextProject={{ href: "/altr", label: "ALTR" }} />
      </main>
    </>
  );
}
