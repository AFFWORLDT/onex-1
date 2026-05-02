"use client";

import { motion } from "framer-motion";

export default function GlobalImpact() {
  const regions = [
    { name: "UAE", project: "Luxury Developments", color: "from-blue-500/20" },
    { name: "CANADA", project: "Innovative Infrastructure", color: "from-red-500/20" },
    { name: "INDIA", project: "Visionary Real Estate", color: "from-orange-500/20" },
  ];

  return (
    <section id="impact" className="py-32 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold text-sm tracking-widest uppercase mb-4"
          >
            Global Footprint
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold"
          >
            A Worldwide <span className="text-gray-500">Legacy.</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative h-[400px] rounded-3xl overflow-hidden glass border-none group cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${region.color} to-transparent opacity-50`} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-10 left-10">
                <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2 block">{region.name}</span>
                <h4 className="text-3xl font-bold text-white">{region.project}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
