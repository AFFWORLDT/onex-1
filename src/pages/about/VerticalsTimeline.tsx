"use client";

import React from "react";
import { motion } from "framer-motion";

const VerticalsTimeline: React.FC = () => {
  const verticals = [
    {
      topLogo: "DEVELOPMENT",
      topDesc: "Real Estate Development",
      color: "from-gold/40 to-gold",
      bottomDesc: "Higher Education",
      bottomLogo: "VOCATECH",
    },
    {
      topLogo: "ACADEMY",
      topDesc: "Professional Training",
      color: "from-gold/30 to-gold/80",
      bottomDesc: "Luxury Hospitality",
      bottomLogo: "SEVEN SEAS",
    },
    {
      topLogo: "PROPERTIES",
      topDesc: "Asset Management",
      color: "from-gold/20 to-gold/60",
      bottomDesc: "Tokenization",
      bottomLogo: "BPTX",
    },
    {
      topLogo: "MARKETING",
      topDesc: "Global Events",
      color: "from-gold/30 to-gold/80",
      bottomDesc: "Vacation Homes",
      bottomLogo: "HOMEX",
    },
    {
      topLogo: "CONSULTANCY",
      topDesc: "Advisory Services",
      color: "from-gold/40 to-gold",
      bottomDesc: "Social Impact",
      bottomLogo: "FOUNDATION",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center bg-white px-6 md:px-16 overflow-hidden">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase">
          OneX Group <span className="text-gold">Verticals</span>
        </h2>
        <p className="text-gray-400 mt-4 text-xs font-bold tracking-[0.4em] uppercase">
          A Global Ecosystem of Excellence
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-7xl mx-auto w-full">
        
        {/* LINE */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent hidden md:block" />

        <div className="grid md:grid-cols-5 gap-12 relative z-10">
          {verticals.map((v, idx) => (
            
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >

              {/* TOP */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="flex flex-col items-center mb-8 w-full"
              >
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${v.color} flex items-center justify-center text-white text-[8px] md:text-[9px] font-black text-center shadow-2xl transition duration-500 group-hover:scale-110`}
                >
                  {v.topLogo}
                </div>

                <div className="mt-4 bg-white p-3 rounded-xl shadow-sm border border-black/5 text-center text-[10px] font-bold tracking-widest text-gray-500 uppercase group-hover:shadow-xl transition">
                  {v.topDesc}
                </div>
              </motion.div>

              {/* DOT */}
              <div className="hidden md:block w-3 h-3 rounded-full bg-white border border-gold shadow-lg z-20" />

              {/* BOTTOM */}
              <motion.div 
                whileHover={{ y: 10 }}
                className="flex flex-col items-center mt-8 w-full"
              >
                <div className="mb-4 bg-white p-3 rounded-xl shadow-sm border border-black/5 text-center text-[10px] font-bold tracking-widest text-gray-500 uppercase group-hover:shadow-xl transition">
                  {v.bottomDesc}
                </div>

                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${v.color} flex items-center justify-center text-white text-[8px] md:text-[9px] font-black text-center shadow-2xl transition duration-500 group-hover:scale-110`}
                >
                  {v.bottomLogo}
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalsTimeline;