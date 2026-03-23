"use client";
import React from "react";
import { ArrowDown } from "lucide-react";

const VocaTechSlide: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[500px] overflow-hidden bg-black font-sans text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-[slowZoom_20s_linear_infinite]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        {/* Multi-layer Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-blue-950/70 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600/20 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-[6%] md:px-[10%]">

        <div className="max-w-4xl">

          {/* Label */}
          <p className="uppercase tracking-[0.4em] text-xs text-blue-400 mb-6 animate-fadeIn">
            Future of Learning
          </p>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[110px] font-extrabold leading-[0.95] tracking-tight">
            VOCATECH
          </h1>

          {/* Divider */}
          <div className="w-20 h-[2px] bg-blue-500 mt-6 mb-6"></div>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
            Empowering skills for a global workforce through
            <span className="text-white font-medium"> AI-driven training</span>,
            innovation, and real-world expertise.
          </p>

          {/* CTA */}
          
        </div>
      </div>

      {/* Floating Info Card */}
      <div className="hidden lg:block absolute bottom-16 right-16 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 max-w-sm shadow-2xl">
        <p className="text-sm text-gray-200 leading-relaxed">
          Bridging the gap between technology and talent by delivering
          industry-ready skills for tomorrow’s workforce.
        </p>

       
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
        <span className="text-xs tracking-widest">SCROLL</span>
        <ArrowDown className="animate-bounce" size={18} />
      </div>

      {/* Slide Number */}
      

      {/* Animations */}
      <style jsx>{`
        @keyframes slowZoom {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.2); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default VocaTechSlide;