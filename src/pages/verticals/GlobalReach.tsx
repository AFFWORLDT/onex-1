"use client";

import React from "react";
import { motion } from "framer-motion";

const GlobalReachPremium: React.FC = () => {
  const features = [
    {
      title: "Global Presence",
      description:
        "Operate across 10+ international markets with a strong ecosystem of partners, enabling seamless cross-border collaboration and expansion.",
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Powerful Referral Network",
      description:
        "Leverage a worldwide referral network that allows you to generate and receive high-quality leads across regions.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Global Community of Experts",
      description:
        "Connect with experienced professionals, share insights, and grow within a trusted global community.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const flags = [
    { src: "https://flagcdn.com/w320/ca.png", name: "Canada" },
    { src: "https://flagcdn.com/w320/ae.png", name: "UAE" },
    { src: "https://flagcdn.com/w320/in.png", name: "India" },
    { src: "https://flagcdn.com/w320/gb.png", name: "UK" },
    { src: "https://flagcdn.com/w320/us.png", name: "USA" },
    { src: "https://flagcdn.com/w320/au.png", name: "Australia" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row font-sans">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col md:flex-row">

        {/* LEFT PANEL */}
        <div className="w-full md:w-[35%] h-full bg-white/5 backdrop-blur-2xl border-r border-white/10 flex flex-col overflow-hidden">

          <div className="h-full overflow-y-auto px-6 md:px-10 py-10 space-y-10">

            {/* TITLE */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold text-white"
              >
                Global
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-white/30 -mt-2"
              >
                Reach
              </motion.h1>
            </div>

            {/* DESCRIPTION */}
            <p className="text-white/70 text-sm leading-relaxed">
              Expanding across borders with a powerful ecosystem of agents,
              partners, and global opportunities.
            </p>

            {/* FLAGS */}
            <div>
              <p className="text-white text-xs tracking-[0.25em] uppercase mb-5">
                Global Network
              </p>

              <div className="grid grid-cols-3 gap-3">
                {flags.map((flag, i) => (
                  <div
                    key={i}
                    className="group relative rounded-lg overflow-hidden border border-white/10 aspect-[4/3]"
                  >
                    <img
                      src={flag.src}
                      alt={flag.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-[65%] h-full flex items-center px-6 md:px-12">

          {/* DESKTOP GRID */}
          <div className="hidden md:grid grid-cols-3 gap-8 w-full">

            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl min-h-[420px]"
              >

                {/* IMAGE */}
                <div className="h-1/2 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col justify-between h-1/2">
                  <h3 className="text-white font-semibold text-xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-20 transition-all duration-300" />
                </div>

              </motion.div>
            ))}

          </div>

          {/* MOBILE SLIDER */}
          <div className="md:hidden w-full flex gap-5 overflow-x-auto snap-x snap-mandatory">

            {features.map((item, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.97 }}
                className="min-w-[85%] snap-center rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
              >

                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default GlobalReachPremium;