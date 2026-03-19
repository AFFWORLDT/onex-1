"use client";

import React from "react";
import { motion } from "framer-motion";

const VerticalsTimeline: React.FC = () => {
  const verticals = [
    {
      topLogo: "ONEX DEVELOPMENT",
      topDesc: "Real Estate Development & Management",
      color: "from-indigo-400 to-indigo-600",
      bottomDesc: "Vocatech University",
      bottomLogo: "VOCATECH",
    },
    {
      topLogo: "ONEX ACADEMY",
      topDesc: "Real Estate Academy",
      color: "from-cyan-400 to-cyan-600",
      bottomDesc: "Hotel",
      bottomLogo: "SEVEN SEAS HOTEL",
    },
    {
      topLogo: "ONEX PROPERTIES",
      topDesc: "Properties",
      color: "from-lime-400 to-lime-600",
      bottomDesc: "Real Estate Tokenization",
      bottomLogo: "BPTX",
    },
    {
      topLogo: "ONEX ENTERTAINMENT",
      topDesc: "Event & Marketing",
      color: "from-yellow-400 to-yellow-600",
      bottomDesc: "Vacation Homes",
      bottomLogo: "HOMEX",
    },
    {
      topLogo: "ONEX CONSULTANCY",
      topDesc: "Consulting & Advisory",
      color: "from-red-400 to-red-600",
      bottomDesc: "OneX Foundation",
      bottomLogo: "ONEX FOUNDATION",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center bg-[#f5f7fb] px-6 md:px-16 overflow-hidden">
      
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight">
          OneX Group
        </h2>
        <p className="text-gray-500 mt-2 text-sm tracking-wide">
          Our Verticals Ecosystem
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-7xl mx-auto w-full">
        
        {/* LINE */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-400 via-cyan-400 via-lime-400 via-yellow-400 to-red-400 hidden md:block" />

        <div className="grid md:grid-cols-5 gap-6 relative z-10">
          {verticals.map((v, idx) => (
            
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >

              {/* TOP */}
              <motion.div 
                whileHover={{ y: -6 }}
                className="flex flex-col items-center mb-6 w-full"
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${v.color} flex items-center justify-center text-white text-[9px] md:text-[10px] font-bold text-center shadow-lg transition duration-300 group-hover:scale-110`}
                >
                  {v.topLogo}
                </div>

                <div className="mt-3 bg-white p-3 rounded-lg shadow-sm text-center text-xs md:text-sm text-gray-700 group-hover:shadow-md transition">
                  {v.topDesc}
                </div>
              </motion.div>

              {/* DOT */}
              <div className="hidden md:block w-4 h-4 rounded-full bg-white border-2 border-gray-300 shadow-md z-20" />

              {/* BOTTOM */}
              <motion.div 
                whileHover={{ y: 6 }}
                className="flex flex-col items-center mt-6 w-full"
              >
                <div className="mb-3 bg-white p-3 rounded-lg shadow-sm text-center text-xs md:text-sm text-gray-700 group-hover:shadow-md transition">
                  {v.bottomDesc}
                </div>

                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${v.color} flex items-center justify-center text-white text-[9px] md:text-[10px] font-bold text-center shadow-lg transition duration-300 group-hover:scale-110`}
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