"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlobalReach from "@/pages/verticals/GlobalReach";
import OnexDevelopment from "@/pages/verticals/OnexDevelopment";
import WhyOnexDevelopments from "@/pages/verticals/WhyOnexDevelopments";
import ProjectsInCanada from "@/pages/verticals/ProjectsInCanada"
import ProjectsInIndia from "@/pages/verticals/ProjectsInIndia";
import ProjectUAE from "@/pages/verticals/ProjectUAE";

// import your components


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
            scrub: true, // 🔥 MAIN MAGIC (up/down control)
          },
        }
      );
    });

  }, []);

  // 👇 ALL COMPONENTS ARRAY
  const sections = [
    GlobalReach,
    OnexDevelopment,
    WhyOnexDevelopments,
    ProjectsInCanada,
    ProjectsInIndia,
    ProjectUAE,
    // 👉 yaha apne baaki 31 components add kar dena
  ];

  return (
    <div>
      {sections.map((Component, index) => (
        <div key={index} className="panel h-screen">
          <Component />
        </div>
      ))}
    </div>
  );
}