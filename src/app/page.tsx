import Navbar from "@/component/Navbar";
import OneXEmpireHero from "@/pages/home/OneXEmpireHero";
import VisionaryLeadership from "@/pages/about/VisionaryLeadership";
import ProvenSuccess from "@/pages/about/ProvenSuccess";
import VerticalsTimeline from "@/pages/about/VerticalsTimeline";
import GlobalReach from "@/pages/verticals/GlobalReach";
import OnexDevelopment from "@/pages/verticals/OnexDevelopment";
import WhyOnexDevelopments from "@/pages/verticals/WhyOnexDevelopments";
import ProjectsInCanada from "@/pages/verticals/ProjectsInCanada"
import ProjectsInIndia from "@/pages/verticals/ProjectsInIndia";
import ProjectUAE from "@/pages/verticals/ProjectUAE";
import OneXPresentation from "@/pages/projects/OneXPresentation";
import  OneXCourses from "@/pages/projects/OneXCourses";
import OneXPropertiesHero from "@/pages/projects/OneXPropertiesHero";
import AboutOnex from "@/pages/projects/AboutOnex";
import PeopleSection from "@/pages/projects/PeopleSection";
import OnexEntertainment from "@/pages/projects/OnexEntertainment";

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
  <WhyOnexDevelopments/>
  <ProjectsInCanada/>
  <ProjectsInIndia/>
  <ProjectUAE/>

</section>
<section id="projects">
  <OneXPresentation/>
  <OneXCourses/>
  <OneXPropertiesHero/>
  <AboutOnex/>
  <PeopleSection/>
  <OnexEntertainment/>
</section>
<section id="academy">Academy</section>
<section id="properties">Properties</section>
<section id="services">Services</section>
<section id="foundation">Foundation</section>
<section id="contact">Contact</section>
    </main>
   </>
  );
}
