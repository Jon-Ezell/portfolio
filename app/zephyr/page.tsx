import Nav from "@/components/layout/Nav";
import ZephyrHero from "@/components/case-study/ZephyrHero";
import ZephyrTLDR from "@/components/case-study/ZephyrTLDR";
import ZephyrOutcome from "@/components/case-study/ZephyrOutcome";
import ZephyrResults from "@/components/case-study/ZephyrResults";
import ZephyrStrategy from "@/components/case-study/ZephyrStrategy";
import ZephyrProcess from "@/components/case-study/ZephyrProcess";
import ZephyrSolution from "@/components/case-study/ZephyrSolution";
import ZephyrLocalNav from "@/components/case-study/ZephyrLocalNav";
import FooterCTA from "@/components/sections/FooterCTA";

export const metadata = {
  title: "Zephyr — Jon Ezell",
};

export default function ZephyrPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO + META ─── */}
        <ZephyrHero
          metaItems={[
            { label: "Company", value: "Zephyr LLC" },
            { label: "Project", value: "Zephyr App" },
            { label: "Year", value: "2023" },
            { label: "System Focus", value: "continuity between breath and physiology." },
          ]}
        />

        {/* ─── TL;DR OVERVIEW + METRICS ─── */}
        <ZephyrTLDR />

        {/* ─── STICKY LOCAL NAV ─── */}
        <ZephyrLocalNav />

        {/* ─── OUTCOME ─── */}
        <div id="outcomes">
          <ZephyrOutcome />
        </div>

        {/* ─── RESULTS / WRISTBAND PROTOTYPE ─── */}
        <ZephyrResults />

        {/* ─── STRATEGY + AUDIENCE ─── */}
        <ZephyrStrategy />

        {/* ─── PROCESS ─── */}
        <div id="process">
          <ZephyrProcess />
        </div>

        {/* ─── SOLUTION ─── */}
        <div id="solution">
          <ZephyrSolution />
        </div>

        <FooterCTA nextProject={{ href: "/altr", label: "ALTR" }} />
      </main>
    </>
  );
}
