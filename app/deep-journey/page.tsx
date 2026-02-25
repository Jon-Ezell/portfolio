import Nav from "@/components/layout/Nav";
import DeepJourneyHero from "@/components/case-study/DeepJourneyHero";
import DeepJourneyTLDR from "@/components/case-study/DeepJourneyTLDR";
import DeepJourneyOutcome from "@/components/case-study/DeepJourneyOutcome";
import DeepJourneyStrategy from "@/components/case-study/DeepJourneyStrategy";
import DeepJourneyProcess from "@/components/case-study/DeepJourneyProcess";
import DeepJourneySolution from "@/components/case-study/DeepJourneySolution";
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
            { label: "Company", value: "Scoot" },
            { label: "Project", value: "Deep Journey" },
            { label: "Year", value: "2025" },
            { label: "System Focus", value: "continuity across conversations." },
          ]}
        />

        {/* ─── TL;DR OVERVIEW + METRICS ─── */}
        <DeepJourneyTLDR />

        {/* ─── STICKY LOCAL NAV ─── */}
        <DeepJourneyLocalNav />

        {/* ─── OUTCOME CARDS ─── */}
        <div id="outcomes">
          <DeepJourneyOutcome />
        </div>

        {/* ─── STRATEGY + AUDIENCE ─── */}
        <DeepJourneyStrategy />

        {/* ─── PROCESS ─── */}
        <div id="process">
          <DeepJourneyProcess />
        </div>

        {/* ─── SOLUTION ─── */}
        <div id="solution">
          <DeepJourneySolution />
        </div>

        {/* ─── FUTURE VISION ─── */}
        <DeepJourneyFutureVision />

        <FooterCTA nextProject={{ href: "/zephyr", label: "Zephyr" }} />
      </main>
    </>
  );
}
