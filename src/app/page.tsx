
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
import RealEstateServiceSlide from "@/pages/academy/RealEstateServiceSlide";
import AnalysisServices from "@/pages/academy/AnalysisServices";
import VocaTechSlide from "@/pages/academy/VocaTechSlide";
import VocatechAbout from "@/pages/properties/VocatechAbout";
import SevenSeasHero from "@/pages/properties/SevenSeasHero";
import HotelShowcase from "@/pages/properties/HotelShowcase";
import RealEstateTokenization from "@/pages/services/RealEstateTokenization";
import BPTXMarketplace from "@/pages/services/BPTXMarketplace"
import HomeXSlide from "@/pages/services/HomeXSlide";
import OneXFoundation from "@/pages/foundation/OneXFoundation";
import CSRShowcase from "@/pages/foundation/CSRShowcase";
import SocialAwardsSection from "@/pages/foundation/SocialAwardsSection";
import AwardsGrid from "@/pages/contact/AwardsGrid";
import KeyHighlights from "@/pages/contact/KeyHighlights";
import ScrollReveal from "@/component/SmoothScroll";
import StackedScroll from "@/component/StackedScroll";


export default function Home() {
 


  return (
   <>
   
    <main>
      <section id="home">
       <OneXEmpireHero/>
        <VisionaryLeadership/>
        <ProvenSuccess/>
        <VerticalsTimeline/>
        
      </section>
    
<section id="contact">
  <AwardsGrid/>
  <KeyHighlights/>
   <OneXEmpireHero/>
</section>
    </main>
   </>
  );
}
