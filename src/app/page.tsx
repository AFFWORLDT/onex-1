import Navbar from "@/component/Navbar";
import OneXEmpireHero from "@/pages/home/OneXEmpireHero";
import VisionaryLeadership from "@/pages/about/VisionaryLeadership";
import ProvenSuccess from "@/pages/about/ProvenSuccess";
import VerticalsTimeline from "@/pages/about/VerticalsTimeline";
import GlobalReach from "@/pages/verticals/GlobalReach";
import OnexDevelopment from "@/pages/verticals/OnexDevelopment";
export default function Home() {
  return (
   <>
   <Navbar />
    <main>
      <section id="home">
        <OneXEmpireHero/>
      </section>
<section id="about">
  <VisionaryLeadership/>
  <ProvenSuccess/>
  <VerticalsTimeline/>
</section>
<section id="verticals">
  <GlobalReach/>
  <OnexDevelopment/>

</section>
<section id="projects">Projects</section>
<section id="academy">Academy</section>
<section id="properties">Properties</section>
<section id="services">Services</section>
<section id="foundation">Foundation</section>
<section id="contact">Contact</section>
    </main>
   </>
  );
}
