import Nav from "@/components/layout/Nav";
import AltrHero from "@/components/case-study/AltrHero";
import AltrTLDR from "@/components/case-study/AltrTLDR";
import AltrLocalNav from "@/components/case-study/AltrLocalNav";
import AltrOutcome from "@/components/case-study/AltrOutcome";
import AltrStrategy from "@/components/case-study/AltrStrategy";
import AltrProcess from "@/components/case-study/AltrProcess";
import AltrSolution from "@/components/case-study/AltrSolution";
import AltrTakeaways from "@/components/case-study/AltrTakeaways";
import FooterCTA from "@/components/sections/FooterCTA";

export const metadata = {
  title: "ALTR — Jon Ezell",
};

export default function AltrPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO + META ─── */}
        <AltrHero
          metaItems={[
            { label: "Client", value: "ALTR Solution Inc." },
            { label: "Project", value: "Onboarding Redesign" },
            { label: "Year", value: "2022" },
            { label: "Role", value: "Project Lead, UX Designer" },
            { label: "Team", value: "Kate McCarter (Design), Jacob Wagh (Supervisor), Kevin Rose (Engineering)" },
            { label: "Timeline", value: "Jan 2022 – May 2022" },
          ]}
        />

        {/* ─── TL;DR OVERVIEW + METRICS ─── */}
        <AltrTLDR />

        {/* ─── STICKY LOCAL NAV ─── */}
        <AltrLocalNav />

        {/* ─── OUTCOME CARDS ─── */}
        <div id="outcomes">
          <AltrOutcome />
        </div>

        {/* ─── STRATEGY + AUDIENCES ─── */}
        <AltrStrategy />

        {/* ─── RESEARCH + PROCESS ─── */}
        <div id="research">
          <AltrProcess />
        </div>

        {/* ─── SOLUTION ─── */}
        <div id="solution">
          <AltrSolution />
        </div>

        {/* ─── TAKEAWAYS ─── */}
        <div id="takeaways">
          <AltrTakeaways />
        </div>

        <FooterCTA nextProject={{ href: "/scoot", label: "Scoot" }} />
      </main>
    </>
  );
}
