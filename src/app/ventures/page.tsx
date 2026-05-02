import GlobalImpact from "@/component/GlobalImpact";
import GlobalReach from "@/pages/verticals/GlobalReach";
import OnexDevelopment from "@/pages/verticals/OnexDevelopment";
import WhyOnexDevelopments from "@/pages/verticals/WhyOnexDevelopments";
import ProjectsInCanada from "@/pages/verticals/ProjectsInCanada";
import ProjectsInIndia from "@/pages/verticals/ProjectsInIndia";
import ProjectUAE from "@/pages/verticals/ProjectUAE";
import OneXPresentation from "@/pages/projects/OneXPresentation";
import OneXCourses from "@/pages/projects/OneXCourses";
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
import BPTXMarketplace from "@/pages/services/BPTXMarketplace";
import HomeXSlide from "@/pages/services/HomeXSlide";
import OneXFoundation from "@/pages/foundation/OneXFoundation";
import CSRShowcase from "@/pages/foundation/CSRShowcase";
import SocialAwardsSection from "@/pages/foundation/SocialAwardsSection";

export default function VenturesPage() {
  return (
    <main className="bg-[#050505] text-white pt-32">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
          The <span className="text-gold">Ventures</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl">
          A strategic portfolio of global enterprises driving innovation and excellence across Real Estate, Education, Hospitality, and beyond.
        </p>
      </div>

      <GlobalImpact />
      <GlobalReach />
      <OnexDevelopment />
      <WhyOnexDevelopments />
      <ProjectsInCanada />
      <ProjectsInIndia />
      <ProjectUAE />
      <OneXPresentation />
      <OneXCourses />
      <OneXPropertiesHero />
      <AboutOnex />
      <PeopleSection />
      <OnexEntertainment />
      <RealEstateServiceSlide />
      <AnalysisServices />
      <VocaTechSlide />
      <VocatechAbout />
      <SevenSeasHero />
      <HotelShowcase />
      <RealEstateTokenization />
      <BPTXMarketplace />
      <HomeXSlide />
      <OneXFoundation />
      <CSRShowcase />
      <SocialAwardsSection />
    </main>
  );
}