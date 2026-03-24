"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaKey,
  FaConciergeBell,
  FaCity,
  FaUserShield,
  FaMapMarkerAlt,
  FaFileContract,
  FaGem,
  FaHome,
} from "react-icons/fa";

const WhyOnexDevelopments: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    { icon: FaChartLine, title: "High ROI", desc: "Strong investment returns." },
    { icon: FaKey, title: "Freehold", desc: "Full ownership rights." },
    { icon: FaConciergeBell, title: "Amenities", desc: "Luxury lifestyle." },
    { icon: FaCity, title: "Growth", desc: "Prime locations." },
    { icon: FaUserShield, title: "Trusted", desc: "Reliable brand." },
    { icon: FaMapMarkerAlt, title: "Location", desc: "Strategic areas." },
    { icon: FaFileContract, title: "Compliance", desc: "Fully regulated." },
    { icon: FaGem, title: "Luxury", desc: "Premium design." },
    { icon: FaHome, title: "Mortgage", desc: "Flexible plans." },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#040714] flex items-center justify-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl h-full flex flex-col justify-center px-5">

        {/* SAFE TOP SPACE (Navbar fix) */}
        <div className="h-[60px] md:hidden" />

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            Why <span className="text-yellow-400">ONEX</span> Developments
          </h1>
          <p className="text-white/60 text-xs md:text-sm mt-2 max-w-md mx-auto">
            Designed for growth, stability, and premium real estate investment outcomes.
          </p>
        </motion.div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-4">

          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 text-center backdrop-blur-xl hover:bg-white/10 transition"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-black text-lg shadow-lg">
                  <Icon />
                </div>

                <h3 className="text-white text-sm font-semibold mb-2">
                  {f.title}
                </h3>

                <p className="text-white/60 text-xs leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* 🔥 MOBILE PREMIUM CAROUSEL */}
        <div
          ref={containerRef}
          className="md:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory px-2 pb-4"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                whileTap={{ scale: 0.95 }}
                className="min-w-[80%] snap-center bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-black text-xl shadow-lg">
                  <Icon />
                </div>

                <h3 className="text-white text-base font-semibold mb-2">
                  {f.title}
                </h3>

                <p className="text-white/60 text-sm">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyOnexDevelopments;