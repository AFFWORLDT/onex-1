import GlobalReach from "@/pages/verticals/GlobalReach";
import OnexDevelopment from "@/pages/verticals/OnexDevelopment";
import ProjectUAE from "@/pages/verticals/ProjectUAE";
import ProjectsInCanada from "@/pages/verticals/ProjectsInCanada";
import ProjectsInIndia from "@/pages/verticals/ProjectsInIndia";
import WhyOnexDevelopments from "@/pages/verticals/WhyOnexDevelopments";

export default function VerticalsPage() {
  return (
    <main className="bg-[#050505] text-white pt-32">
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
          Market <span className="text-gold">Verticals</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Unrivaled presence in 10+ countries, driving growth and value in major global markets.
        </p>
      </div>

      <GlobalReach />
      <OnexDevelopment />
      <WhyOnexDevelopments />
      <ProjectsInCanada />
      <ProjectsInIndia />
      <ProjectUAE />
    </main>
  );
}