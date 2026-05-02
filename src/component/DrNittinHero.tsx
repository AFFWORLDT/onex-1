"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DrNittinHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#050505]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-gold font-bold tracking-[0.3em] text-sm uppercase">Visionary • Entrepreneur • Leader</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-tight text-white"
        >
          DR. NITTIN <br />
          <span className="text-gold">K.A.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 max-w-2xl text-lg md:text-xl mb-12 leading-relaxed"
        >
          Redefining global development through visionary leadership and unwavering excellence. Building empires that stand the test of time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <button className="bg-gold text-black px-10 py-4 rounded-full font-black hover:scale-105 transition-transform">
            EXPLORE THE VISION
          </button>
          <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-black hover:bg-white hover:text-black transition-all">
            READ BIOGRAPHY
          </button>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
