"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const RealEstateTokenization: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#050816] overflow-hidden font-sans text-white px-6 md:px-16 lg:px-24 py-20 flex items-center">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/20 blur-[140px] rounded-full"></div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT SIDE */}
        <div className="space-y-8 z-10">

          {/* Tag */}
          <p className="uppercase tracking-[0.4em] text-xs text-blue-400">
            Blockchain Platform
          </p>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
              BPTX
            </h1>

            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <div className="absolute inset-0 bg-blue-500 clip-chevron"></div>
              <div className="absolute inset-0 bg-indigo-500 clip-chevron translate-x-3 opacity-80"></div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-light text-gray-300">
            Real Estate <span className="text-white font-medium">Tokenization</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed max-w-lg">
            Unlock liquidity in real estate through blockchain-powered
            fractional ownership. Invest, trade, and manage properties
            with transparency, security, and efficiency.
          </p>

          {/* CTA */}
        
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">

          {/* Phone */}
          <div className="relative w-[260px] md:w-[320px] aspect-[9/19.5] bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden animate-[float_6s_ease-in-out_infinite]">

            {/* Screen */}
            <div className="absolute inset-2 rounded-[2.5rem] bg-white p-4 pt-10 text-slate-900">

              <div className="w-full aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-bold">Studio Apartment</h3>

              <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] font-semibold text-slate-500">
                <div>
                  <p>Yield</p>
                  <p className="text-slate-900">7.44%</p>
                </div>
                <div>
                  <p>Net</p>
                  <p className="text-slate-900">5.98%</p>
                </div>
                <div>
                  <p>Return</p>
                  <p className="text-slate-900">47.85%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-36 aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/20 animate-[float_5s_ease-in-out_infinite]">
            <img
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=400"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute right-0 top-1/4 w-28 aspect-square rounded-2xl overflow-hidden shadow-lg border border-white/10 opacity-70 animate-[float_7s_ease-in-out_infinite]">
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Glow Ring */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-blue-500/20 animate-spin-slow"></div>
        </div>
      </div>

      {/* Footer */}
      

      {/* Styles */}
      <style jsx>{`
        .clip-chevron {
          clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default RealEstateTokenization;