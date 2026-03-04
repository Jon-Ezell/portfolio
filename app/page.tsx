import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import Outcomes from "@/components/sections/Outcomes";
import WhoIAm from "@/components/sections/WhoIAm";
import Highlights from "@/components/sections/Highlights";
import Testimonials from "@/components/sections/Testimonials";
import Philosophy from "@/components/sections/Philosophy";
import CaseStudies from "@/components/sections/CaseStudies";
import WorkHistory from "@/components/sections/WorkHistory";
import FooterCTA from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Outcomes />
        <WhoIAm />
        <Highlights />
        <Testimonials />
        <Philosophy />
        <CaseStudies />
        <WorkHistory />
        <FooterCTA />
      </main>
    </>
  );
}
