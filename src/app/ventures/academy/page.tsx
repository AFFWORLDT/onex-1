
import AnalysisServices from "@/pages/academy/AnalysisServices";
import RealEstateServiceSlide from "@/pages/academy/RealEstateServiceSlide";
import VocaTechSlide from "@/pages/academy/VocaTechSlide";

export default function AcademyPage() {



  return (
    <main className="bg-[#050505] text-white pt-32">
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
          ONEX <span className="text-gold">Academy</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Pioneering the future of education and professional development with industry-leading courses and technical training.
        </p>
      </div>

      <RealEstateServiceSlide/>
      <AnalysisServices/>
      <VocaTechSlide/>
    </main>
  );
}