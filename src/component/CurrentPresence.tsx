"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, ArrowUpRight } from "lucide-react";

export default function CurrentPresence() {
  const locations = [
    {
      city: "Dubai",
      country: "United Arab Emirates",
      focus: "Global Headquarters & Real Estate Empire",
      status: "Primary Hub",
      coordinates: "Top Right"
    },
    {
      city: "Toronto",
      country: "Canada",
      focus: "Academy & Global Ventures Foundation",
      status: "North American Hub",
      coordinates: "Top Left"
    },
    {
      city: "Delhi/NCR",
      country: "India",
      focus: "Industrial Infrastructure & Smart Cities",
      status: "Emerging Markets Hub",
      coordinates: "Center Right"
    }
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left: Interactive Context */}
          <div className="lg:w-1/2">
            <h2 className="text-gold font-bold text-sm tracking-[0.3em] uppercase mb-6">Global Footprint</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none mb-12">
              Active <br /><span className="text-gold">Operations</span>
            </h3>
            
            <div className="space-y-8">
              {locations.map((loc, index) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-[30px] bg-white/5 border border-white/5 hover:border-gold/30 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">{loc.city}</h4>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{loc.country}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-gold/60 border border-gold/20 px-3 py-1 rounded-full uppercase tracking-widest">
                      {loc.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {loc.focus}
                  </p>
                  <div className="flex items-center gap-2 text-white font-bold text-[10px] tracking-widest uppercase group-hover:text-gold transition-colors">
                    Explore Region <ArrowUpRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Abstract Global Map Visual */}
          <div className="lg:w-1/2 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[600px]">
              <div className="absolute inset-0 bg-gold/5 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinity]" />
              <div className="absolute inset-10 border border-white/5 rounded-full animate-[spin_40s_linear_infinity_reverse]" />
              <div className="absolute inset-20 border border-white/5 rounded-full animate-[spin_20s_linear_infinity]" />
              
              {/* Pulsing Dots for Locations */}
              <motion.div 
                animate={{ scale: [1, 1.5, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/4 right-1/4 w-4 h-4 bg-gold rounded-full shadow-[0_0_20px_#d4af37]" 
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/3 left-1/4 w-3 h-3 bg-gold/50 rounded-full" 
              />
              <motion.div 
                animate={{ scale: [1, 1.4, 1] }} 
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-gold/80 rounded-full" 
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Globe size={300} className="text-white/5 stroke-[0.5]" />
              </div>

              <div className="absolute bottom-0 right-0 p-8 glass rounded-[30px] border-white/5">
                <p className="text-white font-bold text-3xl mb-2">10+</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Global Markets <br />Under Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
