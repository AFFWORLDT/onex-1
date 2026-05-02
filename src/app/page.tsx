import DrNittinHero from "@/component/DrNittinHero";
import OneXEmpireHero from "@/pages/home/OneXEmpireHero";
import VisionaryLeadership from "@/pages/about/VisionaryLeadership";
import GlobalImpact from "@/component/GlobalImpact";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";
import VenturesGrid from "@/component/VenturesGrid";
import CurrentPresence from "@/component/CurrentPresence";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      {/* 1. HERO SECTION */}
      <section id="home">
        <DrNittinHero />
        <OneXEmpireHero />
      </section>

      {/* 2. ABOUT TEASER */}
      <section id="about" className="relative">
        <VisionaryLeadership />
        <div className="container mx-auto px-6 pb-20 flex justify-center">
          <Link 
            href="/about" 
            className="group flex items-center gap-3 bg-white/5 border border-white/10 px-10 py-5 rounded-full font-bold hover:bg-gold hover:text-black transition-all"
          >
            READ FULL BIOGRAPHY <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 3. VENTURES HUB (The Core of the Multi-page Structure) */}
      <VenturesGrid />

      {/* 3.5 CURRENT PRESENCE */}
      <CurrentPresence />

      {/* 4. CONTACT TEASER */}
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
