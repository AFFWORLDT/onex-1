"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const OneXFoundation: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050816] text-white overflow-hidden font-sans px-6 md:px-16 lg:px-24 py-20 flex items-center">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/20 blur-[140px] rounded-full"></div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* Tag */}
          <p className="uppercase tracking-[0.4em] text-xs text-blue-400">
            Social Impact Initiative
          </p>

          {/* Logo */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold italic tracking-tight">
            ONE<span className="text-blue-500">-</span>X
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-light text-gray-300 tracking-wide">
            Foundation
          </h2>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed max-w-xl">
            Empowering communities through education, innovation, and
            opportunity. ONE-X Foundation is dedicated to building a
            future where talent meets access and dreams turn into
            reality.
          </p>

          {/* CTA */}
         
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">

          {/* Main Image */}
          <div className="relative w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl group">
            <img
             // src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
              src="/images/foundation.png"
              alt="Empowering Futures"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Floating Glass Card */}
          <div className="absolute bottom-6 left-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-5 max-w-xs shadow-xl">
            <p className="text-sm text-white">
              Supporting education and innovation for underserved
              communities worldwide.
            </p>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-6 -right-6 bg-blue-600 px-4 py-2 rounded-full text-xs shadow-lg animate-[float_5s_ease-in-out_infinite]">
            Impact Driven
          </div>

          {/* Glow Ring */}
          <div className="absolute w-[350px] h-[350px] border border-blue-500/20 rounded-full animate-spin-slow"></div>
        </div>
      </div>

      {/* Footer */}
     

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default OneXFoundation;