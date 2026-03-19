"use client";

import { ArrowRight } from "lucide-react";

export default function OneXEmpireHero() {
  return (
    <section className="relative w-full h-screen bg-[#0A0E2B] flex items-center justify-center overflow-hidden">

      {/* 🔥 Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E2B] via-[#0d133a] to-black" />

      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] top-1/3 left-1/2 -translate-x-1/2" />

      {/* 🔥 Content */}
      <div className="relative z-10 text-center px-6">

        {/* Logo Text */}
        <h1 className="text-white text-5xl md:text-8xl font-extrabold tracking-tight leading-tight">
          ONE<span className="text-blue-400">X</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-300 text-sm md:text-lg tracking-[0.3em] uppercase">
          Empire
        </p>

        {/* Description */}
        <p className="mt-6 text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Building global ventures across real estate, innovation, and future-driven industries.
        </p>

        {/* CTA Buttons 🔥 */}
       
      </div>

      {/* 🔥 Bottom Right Number */}
     

    </section>
  );
}