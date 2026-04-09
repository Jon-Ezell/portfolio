import Nav from "@/components/layout/Nav";
import AltrHero from "@/components/case-study/AltrHero";
import AltrTLDR from "@/components/case-study/AltrTLDR";
import AltrLocalNav from "@/components/case-study/AltrLocalNav";
import AltrBackground from "@/components/case-study/AltrBackground";
import AltrProcess from "@/components/case-study/AltrProcess";
import AltrSolution from "@/components/case-study/AltrSolution";
import AltrImpact from "@/components/case-study/AltrImpact";
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
            { label: "Company", value: "ALTR — Enterprise data security platform" },
            { label: "Role", value: "Lead Product Designer" },
            { label: "Scope", value: "Owned onboarding in close partnership with product and engineering" },
            { label: "Business Model", value: "B2B SaaS serving enterprise data teams" },
            { label: "Primary Focus", value: "Activation, value discovery, and scalable self-serve growth" },
          ]}
        />

        {/* ─── TL;DR OVERVIEW + METRICS ─── */}
        <AltrTLDR />

        {/* ─── STICKY LOCAL NAV ─── */}
        <AltrLocalNav />

        {/* ─── BACKGROUND ─── */}
        <AltrBackground />

        {/* ─── RESEARCH + PROCESS ─── */}
        <div id="research">
          <AltrProcess />
        </div>

        {/* ─── SOLUTION ─── */}
        <div id="solution">
          <AltrSolution />
        </div>

        {/* ─── IMPACT ─── */}
        <AltrImpact />

        {/* ─── TAKEAWAYS ─── */}
        <div id="takeaways">
          <AltrTakeaways />
        </div>

        <FooterCTA nextProject={{ href: "/scoot", label: "Scoot" }} />
      </main>
    </>
  );
}
