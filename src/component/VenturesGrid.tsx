"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Building2, Briefcase, Globe, Heart, Shield } from "lucide-react";
import Link from "next/link";

export default function VenturesGrid() {
  const ventures = [
    {
      title: "ONEX Academy",
      desc: "Empowering the next generation of leaders through cutting-edge educational platforms.",
      icon: <GraduationCap size={32} />,
      href: "/ventures/academy",
      image: "/images/a1.png"
    },
    {
      title: "Real Estate",
      desc: "Transforming skylines with premium residential and commercial developments globally.",
      icon: <Building2 size={32} />,
      href: "/ventures/properties",
      image: "/images/burj.png"
    },
    {
      title: "Business Services",
      desc: "Innovative solutions in tokenization, marketplace, and strategic consulting.",
      icon: <Briefcase size={32} />,
      href: "/ventures/services",
      image: "/images/consulting.png"
    },
    {
      title: "Global Verticals",
      desc: "Diversified operations across 10+ countries including UAE, Canada, and India.",
      icon: <Globe size={32} />,
      href: "/ventures/verticals",
      image: "/images/canada.jpg"
    },
    {
      title: "ONEX Foundation",
      desc: "Commitment to social impact, community development, and humanitarian excellence.",
      icon: <Heart size={32} />,
      href: "/ventures/foundation",
      image: "/images/foundation.png"
    },
    {
      title: "Secure Investments",
      desc: "Building a legacy of trust and financial growth for partners worldwide.",
      icon: <Shield size={32} />,
      href: "/ventures/projects",
      image: "/images/market.png"
    }
  ];

  return (
    <section id="ventures" className="py-32 bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-gold font-bold text-sm tracking-[0.3em] uppercase mb-6">Strategic Portfolio</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              The <span className="text-gold">Ventures</span>
            </h3>
          </div>
          <p className="text-gray-500 max-w-md text-lg leading-relaxed">
            Exploring the diverse ecosystem of ONEX Group's global enterprises and innovative breakthroughs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px] bg-[#0A0A0A] border border-white/5 hover:border-gold/30 transition-all p-8 flex flex-col min-h-[400px] md:h-[450px]"
            >
              {/* Background Image Overlay */}
              <div 
                className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${venture.image})` }}
              />
              
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  {venture.icon}
                </div>
                
                <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                  {venture.title}
                </h4>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {venture.desc}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    href={venture.href}
                    className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase py-4 px-8 rounded-full border border-white/10 group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-500"
                  >
                    Explore Venture <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
