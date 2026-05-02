import OneXFoundation from "@/pages/foundation/OneXFoundation";
import CSRShowcase from "@/pages/foundation/CSRShowcase";
import SocialAwardsSection from "@/pages/foundation/SocialAwardsSection";

export default function FoundationPage() {
  return (
    <main className="bg-[#050505] text-white pt-32">
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
          ONEX <span className="text-gold">Foundation</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Dedicated to humanitarian excellence and creating lasting social impact through strategic philanthropy and community development.
        </p>
      </div>

      <OneXFoundation />
      <CSRShowcase />
      <SocialAwardsSection />
    </main>
  );
}