import Nav from "@/components/layout/Nav";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyMeta from "@/components/case-study/CaseStudyMeta";
import Metrics from "@/components/case-study/Metrics";
import TextSection from "@/components/case-study/TextSection";
import MediaSection from "@/components/case-study/MediaSection";
import FooterCTA from "@/components/sections/FooterCTA";

export const metadata = {
  title: "Zephyr — Jon Ezell",
};

export default function ZephyrPage() {
  return (
    <>
      <Nav />
      <main>
        <CaseStudyHero
          preHeadline="BREATH ON /"
          headline="STRESS"
          accentWords="OFF"
          description="A wearable device and companion app designed to regulate your nervous system anywhere, in seconds. CU Boulder venture challenge semi-finalist."
        />

        <CaseStudyMeta
          items={[
            { label: "Company", value: "Zephyr" },
            { label: "Year", value: "2023" },
            { label: "Role", value: "Lead Product Designer" },
            { label: "Platform", value: "iOS / Wearable" },
          ]}
        />

        <TextSection
          label="Overview"
          headline="Regulate your nervous system anywhere, in seconds."
          body="Zephyr is a wearable wristband and iOS app that uses haptic feedback, heart rate sensing, and biofeedback-guided breathing to bring users from stressed to calm — without apps, without screens, without thinking about it."
          dark={false}
        />

        <MediaSection
          label="Product hero — wristband + app"
          aspectRatio="9/16"
          dark={false}
          src="/zephyr-phone-hero.png"
        />

        <Metrics
          dark={false}
          metrics={[
            { value: "112", label: "Users surveyed" },
            { value: "100+", label: "Pages of scientific literature reviewed" },
            { value: "2", label: "Target audiences: Help Seekers & Biohackers" },
          ]}
        />

        <TextSection
          label="The Problem"
          headline="Stress management tools require the attention of the person who is already overwhelmed."
          body={[
            "Meditation apps need you to sit down and focus. Breathing guides need you to watch a screen. Therapy requires scheduling. All of them demand bandwidth from the person who has none.",
            "Zephyr inverts this: the device does the sensing, the device does the guiding. You just wear it.",
          ]}
          dark={true}
        />

        <MediaSection
          label="Heart rate coherence research"
          aspectRatio="16/9"
          dark={true}
          src="/zephyr-coherence-chart.png"
        />

        <TextSection
          label="Research"
          headline="112 users. 100+ pages of science. Two very different audiences."
          body={[
            "Help Seekers want relief from daily anxiety — they're looking for something passive and unobtrusive. Biohackers want data and control — they want to track HRV, optimize recovery, and understand their nervous system.",
            "The design challenge was serving both without compromising either.",
          ]}
          dark={false}
        />

        <TextSection
          label="Solution"
          headline="A wristband that senses, guides, and gets out of the way."
          body={[
            "The hardware includes haptic motors, a heart rate sensor, LED indicators, and a custom PCB with coherence calculation — all in a band small enough to wear all day.",
            "The iOS app surfaces the data for Biohackers without requiring it from Help Seekers. Two modes, one device.",
          ]}
          dark={false}
        />

        <MediaSection
          label="App screens — Breath session & Home"
          aspectRatio="9/16"
          dark={false}
          columns={2}
          src="/zephyr-breath-app.png"
          src2="/zephyr-app-mockup.png"
        />

        <MediaSection
          label="App screens — Data & Analytics"
          aspectRatio="9/16"
          dark={false}
          columns={2}
          src="/zephyr-app-full.png"
          src2="/zephyr-app-home.png"
        />

        <MediaSection
          label="Hardware prototype — wristband"
          aspectRatio="4/3"
          dark={true}
          src="/zephyr-hardware.png"
        />

        <TextSection
          label="Outcome"
          headline="Semi-finalist in CU's venture challenge. Seed funding from University of Colorado Boulder."
          body="The prototype was validated with real users across both segments. The venture received seed funding and recognition from CU Boulder's entrepreneurship program — and the design system has been documented for the next engineering phase."
          dark={true}
          accentLabel={true}
        />

        <Metrics
          dark={true}
          metrics={[
            { value: "Top 8", label: "CU Boulder venture challenge" },
            { value: "Seed", label: "Funding received" },
            { value: "2", label: "Hardware prototypes shipped" },
          ]}
        />

        <FooterCTA />
      </main>
    </>
  );
}
