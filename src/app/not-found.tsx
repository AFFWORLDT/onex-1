"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[150px] md:text-[200px] font-black text-white/5 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              Page <span className="text-gold">Not Found</span>
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-12">
              The page you are looking for has been moved or doesn't exist in the empire.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-3 bg-gold text-black px-10 py-4 rounded-full font-bold hover:scale-110 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            >
              <ArrowLeft size={20} /> BACK TO HOME
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
