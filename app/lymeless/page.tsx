import Nav from "@/components/layout/Nav";
import LymeLessHero from "@/components/case-study/LymeLessHero";
import LymeLessTLDR from "@/components/case-study/LymeLessTLDR";
import LymeLessLocalNav from "@/components/case-study/LymeLessLocalNav";
import LymeLessBackground from "@/components/case-study/LymeLessBackground";
import LymeLessResearch from "@/components/case-study/LymeLessResearch";
import LymeLessStrategy from "@/components/case-study/LymeLessStrategy";
import LymeLessSolution from "@/components/case-study/LymeLessSolution";
import LymeLessImpact, { LymeLessFutureVision } from "@/components/case-study/LymeLessImpact";
import FooterCTA from "@/components/sections/FooterCTA";

export const metadata = {
  title: "LymeLess — Jon Ezell",
};

export default function LymeLessPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO + META ─── */}
        <LymeLessHero
          metaItems={[
            { label: "Client", value: "LymeLess — D2C Lyme disease management app, $14.99/mo" },
            { label: "Role", value: "Product Strategist + Designer (end-to-end, solo)" },
            { label: "Timeline", value: "April to June 2026 · Shipped June 2026" },
            { label: "Methods", value: "Heuristic audit · Mixpanel behavioral analysis · 5 user interviews · IA & UI design" },
            { label: "Primary Focus", value: "Onboarding conversion, first-week activation, and retention" },
          ]}
        />

        {/* ─── TL;DR ─── */}
        <LymeLessTLDR />

        {/* ─── STICKY LOCAL NAV (index) ─── */}
        <LymeLessLocalNav />

        <LymeLessBackground />
        <LymeLessResearch />
        <LymeLessStrategy />
        <LymeLessSolution />
        <LymeLessFutureVision />
        <LymeLessImpact />

        <FooterCTA nextProject={{ href: "/altr", label: "ALTR" }} />
      </main>
    </>
  );
}
