"use client";

import React from "react";
import { motion } from "framer-motion";

const OnexDevelopment: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white font-sans">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/architec2.png"
          alt="Architecture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* LEFT SOFT WHITE GRADIENT (IMPORTANT FOR MATCH) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

      {/* TABLET OVERLAY (BLUR EFFECT LIKE IMAGE) */}
      <div className="absolute left-[10%] top-[20%] w-[420px] h-[300px] bg-white/20 backdrop-blur-md rounded-[30px] border border-white/30 z-20 hidden md:block"></div>

      {/* RIGHT HAND IMAGE (FOCUS AREA) */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute right-0 top-0 h-full w-full md:w-[60%] z-10"
      >
        <img
          src="/images/Architech.png"
          alt="Architect Drawing"
          className="w-full h-full object-cover object-right"
        />
      </motion.div>

      {/* TEXT CONTENT */}
      <div className="relative z-30 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-24 w-full">
          <div className="max-w-md">

            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl font-extrabold text-[#0a1d47] tracking-tight">
                ONEX
              </h1>

              <div className="mt-2 border-t border-[#0a1d47]/40 pt-2 w-fit">
                <span className="text-xs md:text-sm tracking-[0.5em] font-semibold text-[#0a1d47]">
                  DEVELOPMENT
                </span>
              </div>
            </motion.div>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Creating world-class <br />
              <span className="font-semibold text-black">
                infrastructure
              </span>
            </motion.p>

          </div>
        </div>
      </div>

      {/* PAGE NUMBER */}
     
    </div>
  );
};

export default OnexDevelopment;