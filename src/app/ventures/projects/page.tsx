import AboutOnex from "@/pages/projects/AboutOnex";
import OneXCourses from "@/pages/projects/OneXCourses";
import OnexEntertainment from "@/pages/projects/OnexEntertainment";
import OneXPresentation from "@/pages/projects/OneXPresentation";
import OneXPropertiesHero from "@/pages/projects/OneXPropertiesHero";
import PeopleSection from "@/pages/projects/PeopleSection";

export default function ProjectsPage() {
  return (
    <main className="bg-[#050505] text-white pt-32">
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
          Global <span className="text-gold">Projects</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          A showcase of our most ambitious and impactful projects across multiple industries and continents.
        </p>
      </div>

      <OneXPresentation />
      <OneXCourses />
      <OneXPropertiesHero />
      <AboutOnex />
      <PeopleSection />
      <OnexEntertainment />
    </main>
  );
}