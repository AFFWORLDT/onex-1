"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const HomeXSlide: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050816] text-white overflow-hidden font-sans px-6 md:px-16 lg:px-24 py-20">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          {/* Logo */}
          <div className="space-y-6">
            <div className="relative w-32 h-10">
              <div className="absolute left-0 border-l-[50px] border-l-white border-t-[25px] border-t-transparent"></div>
              <div className="absolute right-0 border-r-[50px] border-r-white border-t-[25px] border-t-transparent"></div>
              <div className="absolute bottom-[-8px] left-[-15px] right-[-15px] h-[3px] bg-yellow-400"></div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
              HOME<span className="text-yellow-400">X</span>
            </h1>
          </div>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-200">
            Vacation Homes
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-2xl text-gray-400 leading-relaxed max-w-xl">
            Transform your property into a{" "}
            <span className="text-white font-medium">
              premium vacation destination
            </span>{" "}
            with seamless management and global reach.
          </p>

          {/* CTA */}
          
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Home"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-5 max-w-xs shadow-xl">
            <p className="text-sm text-white">
              List your property globally and maximize your rental
              income with AI-powered pricing insights.
            </p>
          </div>

          {/* Small Floating Image */}
          <div className="absolute -top-6 -right-6 w-32 aspect-square rounded-xl overflow-hidden shadow-xl border border-white/10 animate-[float_6s_ease-in-out_infinite]">
            <img
              src="https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80&w=400"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Glow Ring */}
          <div className="absolute w-[350px] h-[350px] border border-yellow-400/20 rounded-full animate-spin-slow"></div>
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

export default HomeXSlide;