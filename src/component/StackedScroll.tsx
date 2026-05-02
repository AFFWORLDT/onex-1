"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import all components
import DrNittinHero from "@/component/DrNittinHero";
import VisionaryStory from "@/component/VisionaryStory";
import GlobalImpact from "@/component/GlobalImpact";
import ContactSection from "@/component/ContactSection";
import OneXEmpireHero from "@/pages/home/OneXEmpireHero";
import VisionaryLeadership from "@/pages/about/VisionaryLeadership";
import ProvenSuccess from "@/pages/about/ProvenSuccess";
import VerticalsTimeline from "@/pages/about/VerticalsTimeline";
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
import AwardsGrid from "@/pages/contact/AwardsGrid";
import KeyHighlights from "@/pages/contact/KeyHighlights";

gsap.registerPlugin(ScrollTrigger);

export default function StackedScroll() {
  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    panels.forEach((panel: any, i) => {
      if (i === 0) return;

      gsap.fromTo(
        panel,
        { y: "100%" },
        {
          y: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const sections = [
    DrNittinHero,
    OneXEmpireHero,
    VisionaryLeadership,
    VisionaryStory,
    ProvenSuccess,
    VerticalsTimeline,
    GlobalImpact,
    GlobalReach,
    OnexDevelopment,
    WhyOnexDevelopments,
    ProjectsInCanada,
    ProjectsInIndia,
    ProjectUAE,
    OneXPresentation,
    OneXCourses,
    OneXPropertiesHero,
    AboutOnex,
    PeopleSection,
    OnexEntertainment,
    RealEstateServiceSlide,
    AnalysisServices,
    VocaTechSlide,
    VocatechAbout,
    SevenSeasHero,
    HotelShowcase,
    RealEstateTokenization,
    BPTXMarketplace,
    HomeXSlide,
    OneXFoundation,
    CSRShowcase,
    SocialAwardsSection,
    AwardsGrid,
    KeyHighlights,
    ContactSection,
  ];

  return (
    <div className="bg-black">
      {sections.map((Component, index) => (
        <div key={index} className="panel min-h-screen relative z-[10] bg-black">
          <Component />
        </div>
      ))}
    </div>
  );
}