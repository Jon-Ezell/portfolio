import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import WorkIntro from "@/components/sections/WorkIntro";
import WhoIAm from "@/components/sections/WhoIAm";
import Testimonials from "@/components/sections/Testimonials";
import Philosophy from "@/components/sections/Philosophy";
import CaseStudies from "@/components/sections/CaseStudies";
import WorkHistory from "@/components/sections/WorkHistory";
import AboutPill from "@/components/sections/AboutPill";
import FooterCTA from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkIntro />
        <CaseStudies />
        <WhoIAm />
        <Testimonials />
        <Philosophy />
        <WorkHistory />
        <AboutPill />
        <FooterCTA />
      </main>
    </>
  );
}
