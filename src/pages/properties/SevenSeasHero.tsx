"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const SevenSeasHero: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[550px] overflow-hidden font-sans text-white">

      {/* Background */}
      {/* https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2000 */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-[zoom_20s_linear_infinite]"
        style={{
          backgroundImage: `url(
          '/images/sevenseashotel.png')`,
       
        }}
      >
        {/* Luxury Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

        {/* Top Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

        {/* Subtle Texture */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-between px-[6%] md:px-[10%]">

        {/* LEFT SIDE */}
        <div className="max-w-xl space-y-8">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 border border-yellow-400/60 rounded-full flex items-center justify-center">
              <span className="text-2xl font-serif italic text-yellow-400">S</span>
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-serif tracking-[0.3em] uppercase">
                Seven Seas
              </h1>
              <p className="text-xs tracking-[0.5em] text-gray-300 uppercase">
                Luxury Hotel
              </p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex text-yellow-400 tracking-[0.4em] text-sm">
            ★★★★★
          </div>

          {/* Divider */}
          <div className="w-20 h-[1px] bg-yellow-400/60"></div>

          {/* Tagline */}
          <p className="text-lg md:text-xl font-light italic text-gray-200 leading-relaxed">
            “We craft unforgettable experiences where luxury meets
            timeless elegance and world-class hospitality.”
          </p>

          {/* CTA */}
         
        </div>

        {/* RIGHT SIDE GLASS CARD */}
        <div className="hidden lg:block max-w-sm backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">

          <h3 className="text-lg font-semibold mb-3 text-white">
            Experience Luxury Redefined
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            Located in the heart of the city, Seven Seas Hotel
            offers premium suites, fine dining, and unmatched
            hospitality tailored for global travelers.
          </p>

          {/* Stats */}
          <div className="flex justify-between mt-6 text-sm">
            <div>
              <p className="text-yellow-400 text-lg font-bold">Luxury</p>
              <p className="text-gray-400">Rooms</p>
            </div>
            <div>
              <p className="text-yellow-400 text-lg font-bold">5★</p>
              <p className="text-gray-400">Rating</p>
            </div>
            <div>
              <p className="text-yellow-400 text-lg font-bold">24/7</p>
              <p className="text-gray-400">Service</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
     

      {/* Animation */}
      <style jsx>{`
        @keyframes zoom {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default SevenSeasHero;