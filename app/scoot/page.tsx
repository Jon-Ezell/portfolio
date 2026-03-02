import Nav from "@/components/layout/Nav";
import ScootHero from "@/components/case-study/ScootHero";
import ScootTLDR from "@/components/case-study/ScootTLDR";
import ScootOutcome from "@/components/case-study/ScootOutcome";
import ScootStrategy from "@/components/case-study/ScootStrategy";
import ScootProcess from "@/components/case-study/ScootProcess";
import ScootSolution from "@/components/case-study/ScootSolution";
import ScootFutureVision from "@/components/case-study/ScootFutureVision";
import ScootLocalNav from "@/components/case-study/ScootLocalNav";
import FooterCTA from "@/components/sections/FooterCTA";

export const metadata = {
  title: "Scoot — Jon Ezell",
};

export default function ScootPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO + META ─── */}
        <ScootHero
          metaItems={[
            { label: "Company", value: "Scoot — Immersive enterprise event platform" },
            { label: "Role", value: "Director of Product Design — Lead IC", subvalue: "Owned product strategy, design execution, and cross-functional decision making with founders" },
            { label: "Business Model", value: "B2B SaaS powering virtual events with measurable engagement and sales outcomes" },
            { label: "Primary Focus", value: "Activation, engagement, and enterprise adoption" },
          ]}
        />

        {/* ─── TL;DR OVERVIEW + METRICS ─── */}
        <ScootTLDR />

        {/* ─── STICKY LOCAL NAV ─── */}
        <ScootLocalNav />

        {/* ─── OUTCOME CARDS ─── */}
        <div id="outcomes">
          <ScootOutcome />
        </div>

        {/* ─── STRATEGY + AUDIENCES ─── */}
        <ScootStrategy />

        {/* ─── PROCESS ─── */}
        <div id="process">
          <ScootProcess />
        </div>

        {/* ─── SOLUTION ─── */}
        <div id="solution">
          <ScootSolution />
        </div>

        {/* ─── FUTURE VISION ─── */}
        <div id="next-steps">
          <ScootFutureVision />
        </div>

        <FooterCTA nextProject={{ href: "/deep-journey", label: "Deep Journey" }} />
      </main>
    </>
  );
}
