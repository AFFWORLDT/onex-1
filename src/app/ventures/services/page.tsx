import BPTXMarketplace from "@/pages/services/BPTXMarketplace";
import HomeXSlide from "@/pages/services/HomeXSlide";
import RealEstateTokenization from "@/pages/services/RealEstateTokenization";

export default function ServicesPage() {
  return (
    <main className="bg-[#050505] text-white pt-32">
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
          Expert <span className="text-gold">Services</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Pioneering the future of real estate tokenization and digital marketplaces with secure, transparent, and innovative business solutions.
        </p>
      </div>

      <RealEstateTokenization />
      <BPTXMarketplace />
      <HomeXSlide />
    </main>
  );
}