"use client";

import { motion } from "framer-motion";

export default function OneXEmpireHero() {
  return (
    <section className="relative w-full h-screen bg-[#050505] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
        
        {/* Animated Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase mb-6 block">The Global Enterprise</span>
          <h1 className="text-white text-7xl md:text-9xl font-black tracking-tighter leading-none mb-8 uppercase">
            ONE<span className="text-gold">X</span> EMPIRE
          </h1>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            A diversified portfolio of industry-leading ventures, committed to excellence and sustainable global growth.
          </p>
        </motion.div>

        {/* Floating Decorative Stats */}
        <div className="hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-40 glass p-6 rounded-2xl border-white/10"
          >
            <span className="text-gold text-3xl font-black block">10+</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">Countries</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-20 -right-40 glass p-6 rounded-2xl border-white/10"
          >
            <span className="text-gold text-3xl font-black block">25+</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">Ventures</span>
          </motion.div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      </div>
    </section>
  );
}