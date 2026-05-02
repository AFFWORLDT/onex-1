import SevenSeasHero from "@/pages/properties/SevenSeasHero";
import HotelShowcase from "@/pages/properties/HotelShowcase";
import VocatechAbout from "@/pages/properties/VocatechAbout";

export default function PropertiesPage() {
  return (
    <main className="bg-[#050505] text-white pt-32">
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
          The <span className="text-gold">Properties</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Redefining luxury living and hospitality with iconic developments that stand at the intersection of innovation and comfort.
        </p>
      </div>

      <SevenSeasHero />
      <HotelShowcase />
      <VocatechAbout />
    </main>
  );
}