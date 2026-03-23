"use client";
import React from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";

const BPTXMarketplace: React.FC = () => {
  return (
    <section className="relative bg-[#050816] text-white min-h-screen px-6 md:px-16 lg:px-24 py-24 overflow-hidden font-sans">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/20 blur-[140px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT SIDE */}
        <div className="space-y-16">

          {/* Marketplace */}
          <section className="space-y-6">
            <p className="uppercase tracking-[0.4em] text-xs text-blue-400">
              Marketplace
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              The BPTX Marketplace
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-xl">
              Buy and sell property tokens 24/7 with seamless access to
              Dubai’s real estate market. Fractional ownership allows you
              to invest without purchasing entire properties.
            </p>

            {/* Highlights Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                "Start from AED 2,000",
                "8–12% Estimated Return",
                "Fractional Ownership",
                "Blockchain Powered",
                "24/7 Trading",
                "Transparent Records",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition"
                >
                  <CheckCircle size={16} className="text-blue-400" />
                  <span className="text-sm text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 italic">
              *Estimated returns are projections and not guaranteed.
            </p>
          </section>

          {/* Why Choose */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Why Choose BPTX</h2>

            <div className="space-y-4">
              {[
                {
                  title: "Digital Real Estate",
                  desc: "Combining traditional property with blockchain innovation.",
                },
                {
                  title: "Secure & Regulated",
                  desc: "Built within a trusted and compliant environment.",
                },
                {
                  title: "Easy Transactions",
                  desc: "Buy, hold, and sell seamlessly in one platform.",
                },
                {
                  title: "Simplified Investing",
                  desc: "No complex paperwork or delays.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition"
                >
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-16 relative">

          {/* Token Section */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              What Is a Token?
            </h2>

            <p className="text-gray-400">
              A token represents fractional ownership in a property,
              enabling investors to own small shares securely on blockchain.
            </p>

            {/* Glass Quote */}
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 italic text-gray-300">
              “If a property is divided into 1,000,000 tokens, each token
              represents a fraction of ownership.”
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              {["Liquidity", "Accessibility", "Transparency", "Diversification"].map((item, i) => (
                <div
                  key={i}
                  className="p-3 text-sm text-center rounded-lg bg-white/5 border border-white/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* App Mockups */}
          <div className="relative h-[420px]">

            {/* Center Phone */}
            <div className="absolute left-1/2 -translate-x-1/2 z-20 w-[240px] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden bg-slate-900 animate-[float_6s_ease-in-out_infinite]">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=500"
                className="w-full"
              />
            </div>

            {/* Left */}
            <div className="absolute left-0 bottom-0 w-[180px] rounded-[2rem] border border-white/10 shadow-xl overflow-hidden opacity-70 -rotate-6 animate-[float_5s_ease-in-out_infinite]">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=500" />
            </div>

            {/* Right */}
            <div className="absolute right-0 bottom-10 w-[180px] rounded-[2rem] border border-white/10 shadow-xl overflow-hidden opacity-70 rotate-6 animate-[float_7s_ease-in-out_infinite]">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=500" />
            </div>

            {/* Glow Ring */}
            <div className="absolute w-[400px] h-[400px] border border-blue-500/20 rounded-full animate-spin-slow"></div>
          </div>

        </div>
      </div>

      {/* Footer */}
      

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
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
    </section>
  );
};

export default BPTXMarketplace;