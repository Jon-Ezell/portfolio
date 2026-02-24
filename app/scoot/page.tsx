import Nav from "@/components/layout/Nav";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyMeta from "@/components/case-study/CaseStudyMeta";
import Metrics from "@/components/case-study/Metrics";
import TextSection from "@/components/case-study/TextSection";
import MediaSection from "@/components/case-study/MediaSection";
import FooterCTA from "@/components/sections/FooterCTA";

export const metadata = {
  title: "Scoot — Jon Ezell",
};

export default function ScootPage() {
  return (
    <>
      <Nav />
      <main>
        <CaseStudyHero
          preHeadline="EVENTS THAT"
          headline="ENGAGE &"
          accentWords="SELL"
          description="An immersive virtual event platform that creates meaningful connections and drives sales — designed and shipped end to end."
        />

        <CaseStudyMeta
          items={[
            { label: "Company", value: "Scoot" },
            { label: "Year", value: "2025" },
            { label: "Role", value: "Lead Product Designer" },
            { label: "Platform", value: "Web / Mobile" },
          ]}
        />

        <TextSection
          label="Overview"
          headline="Webinars force attention to speakers. Virtual events needed participant agency to drive real connection."
          body="Designed and shipped a complete immersive virtual event experience enabling organic conversation and leveraging conversational data for sales effectiveness. Three key audiences shaped every decision: Hosts & Producers, Attendees, and Sales People."
          dark={false}
        />

        <MediaSection
          label="Hero product screenshot"
          aspectRatio="16/9"
          dark={false}
          src="/scoot-laptop-phone.png"
        />

        <Metrics
          dark={false}
          metrics={[
            { value: "400+", label: "Screens designed" },
            { value: "30+", label: "Shipped feature sets" },
            { value: "212", label: "Unique components created" },
          ]}
        />

        <TextSection
          label="Problem"
          headline="Virtual events failed because they replicated physical constraints instead of removing them."
          body={[
            "Participants were passive. Sales teams couldn't act on conversations happening in real time. Hosts had no tools to shape energy or direct flow.",
            "The opportunity was to rebuild the format from scratch — not layer features onto a video call.",
          ]}
          dark={true}
        />

        <MediaSection
          label="Problem framing — fragmented tools"
          aspectRatio="4/3"
          dark={true}
          src="/scoot-problem-tools.png"
        />

        <TextSection
          label="Solution"
          headline="A spatial, room-based experience where conversation is the product."
          body={[
            "Participants move between rooms, join conversations organically, and control their own presence. Hosts shape the event as it unfolds.",
            "Sales teams get real-time conversational signals — who's talking to whom, what topics are resonating, where deals are forming.",
          ]}
          dark={false}
        />

        <MediaSection
          label="Room navigation UI — mobile"
          aspectRatio="9/16"
          dark={false}
          columns={2}
          src="/scoot-phones.png"
          src2="/scoot-multidevice.png"
        />

        <MediaSection
          label="Entry flows & event management"
          aspectRatio="16/9"
          dark={false}
          src="/scoot-entry-flows.png"
        />

        <TextSection
          label="Design System"
          headline="212 components. One cohesive language across web and mobile."
          body="Built a complete design system from scratch — atoms through templates — enabling the engineering team to move fast without sacrificing consistency. Every component documented, every pattern tested in real event contexts."
          dark={true}
        />

        <MediaSection
          label="Design system — Atoms, Molecules, Templates"
          aspectRatio="4/3"
          dark={true}
          src="/scoot-design-system.png"
        />

        <TextSection
          label="Future Vision"
          headline="AI agents that surface the right insight at the right moment."
          body="The next phase explores persistent AI agents that join events as silent participants — capturing threads, summarizing sentiment, and flagging high-value conversations for follow-up before the event ends."
          dark={false}
        />

        <MediaSection
          label="AI assistant concept — Scoot laptop"
          aspectRatio="16/9"
          dark={false}
          src="/scoot-laptop-ui.png"
        />

        <FooterCTA />
      </main>
    </>
  );
}
