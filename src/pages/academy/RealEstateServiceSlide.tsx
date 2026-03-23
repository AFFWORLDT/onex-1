"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const RealEstateServiceSlide: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[500px] overflow-hidden font-sans text-white">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url('/images/consulting.png')`,
        }}
      >
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/90 via-[#0a192f]/80 to-[#020617]/95"></div>

        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between h-full px-[6%] py-16">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-8 max-w-xl">

          {/* Logo */}
          <div className="flex items-end">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold italic tracking-tight">
              ONE
            </h1>
            <span className="text-6xl md:text-7xl lg:text-8xl font-extrabold italic ml-[-4px] text-blue-400">
              -X
            </span>
          </div>

          {/* Subtitle */}
          <p className="uppercase tracking-[0.35em] text-sm md:text-base text-gray-300 font-light">
            Consulting Services & Advisory
          </p>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-blue-400"></div>

          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            Strategic Real Estate Solutions
            <span className="block text-gray-400 font-normal text-lg mt-2">
              Driving value through expertise & innovation
            </span>
          </h2>

          {/* CTA Buttons */}
         
        </div>

        {/* RIGHT SIDE (GLASS CARD) */}
        <div className="hidden lg:flex items-center justify-end">
          <div className="max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">

            <p className="text-sm md:text-base leading-relaxed tracking-wide text-gray-200">
              We provide expert advisory services to governments,
              developers, and investors across the real estate
              lifecycle. From large-scale mixed-use developments to
              site-specific feasibility studies, our solutions are
              tailored to maximize long-term value and efficiency.
            </p>

            {/* Small stats */}
           
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      

      {/* Page Number */}
    

    </div>
  );
};

export default RealEstateServiceSlide;