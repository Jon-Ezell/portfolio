import Nav from "@/components/layout/Nav";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyMeta from "@/components/case-study/CaseStudyMeta";
import Metrics from "@/components/case-study/Metrics";
import TextSection from "@/components/case-study/TextSection";
import MediaSection from "@/components/case-study/MediaSection";
import FooterCTA from "@/components/sections/FooterCTA";

export const metadata = {
  title: "Deep Journey — Jon Ezell",
};

export default function DeepJourneyPage() {
  return (
    <>
      <Nav />
      <main>
        <CaseStudyHero
          preHeadline="THOUSANDS OF CONVERSATIONS"
          headline="AT YOUR"
          accentWords="FINGERTIPS"
          description="An AI-powered conversational analytics platform that consolidates 6–8 fragmented tools into a single interface — and reduces reporting time from hours to minutes."
        />

        <CaseStudyMeta
          items={[
            { label: "Company", value: "Deep Journey" },
            { label: "Year", value: "2024" },
            { label: "Role", value: "Lead Product Designer" },
            { label: "Platform", value: "Web" },
          ]}
        />

        <TextSection
          label="tl;dr"
          headline="Rather than layering AI onto existing workflows, we shifted from navigation-driven analytics toward continuity-based interaction."
          body="Insight emerges through conversational context — not dashboards. Sales teams ask questions and get answers, instead of building reports and hoping they asked the right thing."
          dark={false}
        />

        <MediaSection
          label="Platform overview — Deep Journey"
          aspectRatio="16/9"
          dark={false}
          src="/deep-journey-laptop.png"
        />

        <Metrics
          dark={false}
          metrics={[
            { value: "8", label: "Conversation touchpoints mapped" },
            { value: "8–24×", label: "Faster insight retrieval" },
            { value: "5,000+", label: "Conversations analyzed" },
          ]}
        />

        <TextSection
          label="The Problem"
          headline="Sales teams were drowning in data and starving for insight."
          body={[
            "6–8 disconnected tools. 2–6 hours per week building reports. No single place to ask 'why is this deal stalling?' and get a real answer.",
            "The CRO persona was our north star: someone who needs strategic visibility across hundreds of conversations without living in a spreadsheet.",
          ]}
          dark={true}
        />

        <MediaSection
          label="CRO persona research"
          aspectRatio="16/9"
          dark={true}
          src="/deep-journey-cro-persona.png"
        />

        <MediaSection
          label="Current state journey map"
          aspectRatio="4/3"
          dark={true}
          src="/deep-journey-journey-map.png"
        />

        <TextSection
          label="Strategy"
          headline="Replace navigation with conversation. Replace reports with answers."
          body={[
            "We designed three core interaction modes: Ask (natural language query), Explore (structured browsing by deal, rep, or theme), and Surface (proactive AI-generated insights pushed to the user).",
            "Each mode reduces the cognitive load of a different user state — from 'I don't know what I'm looking for' to 'I need to validate a hypothesis.'",
          ]}
          dark={false}
        />

        <MediaSection
          label="Wireframes — interaction model"
          aspectRatio="16/9"
          dark={false}
          src="/deep-journey-wireframes.png"
        />

        <TextSection
          label="Solution"
          headline="A unified platform where insight emerges through conversation."
          body="The final product consolidated all 6–8 tools into a single interface. Reporting time dropped from 2–6 hours weekly to under 15 minutes. Teams stopped dreading Monday analytics reviews."
          dark={false}
        />

        <MediaSection
          label="Final product — Deep Journey interface"
          aspectRatio="16/9"
          dark={false}
          src="/deep-journey-ui.png"
        />

        <MediaSection
          label="Ask interface — Dara AI"
          aspectRatio="16/9"
          dark={false}
          columns={2}
          src="/deep-journey-ask.png"
          src2="/deep-journey-chat.png"
        />

        <Metrics
          dark={true}
          metrics={[
            { value: "−90%", label: "Reduction in weekly reporting time" },
            { value: "1", label: "Platform replacing 6–8 tools" },
            { value: "15min", label: "Average time to weekly insights" },
          ]}
        />

        <FooterCTA />
      </main>
    </>
  );
}
