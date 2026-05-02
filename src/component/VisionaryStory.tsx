"use client";

import { motion } from "framer-motion";

export default function VisionaryStory() {
  const points = [
    { title: "20+ Years", desc: "Of leadership excellence across multiple continents." },
    { title: "Global Reach", desc: "Leading projects in UAE, Canada, and India." },
    { title: "Innovation", desc: "Pioneering new standards in real estate development." },
  ];

  return (
    <section id="vision" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-gold font-bold text-sm tracking-widest uppercase mb-6">The Legacy</h2>
            <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              A Journey of <br />
              <span className="text-gray-500">Excellence & Vision.</span>
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Dr. Nittin K.A. is not just an entrepreneur; he is a visionary who sees potential where others see obstacles. With a career spanning over two decades, he has been at the forefront of transformative developments that redefine skylines and lifestyles.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {points.map((point, index) => (
                <div key={index}>
                  <h4 className="text-gold text-2xl font-bold mb-2">{point.title}</h4>
                  <p className="text-sm text-gray-500">{point.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass relative">
              {/* Placeholder for Dr. Nittin's portrait */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent" />
              <div className="flex items-center justify-center h-full text-gray-700 font-bold text-4xl">
                 PORTRAIT
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl border-gold/20 hidden md:block">
              <span className="text-gold text-5xl font-black block mb-2">ONEX</span>
              <span className="text-sm tracking-widest text-white uppercase">Empire Founder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
