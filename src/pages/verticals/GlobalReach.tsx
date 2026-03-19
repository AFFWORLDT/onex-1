"use client";

import React from "react";
import { motion } from "framer-motion";

const GlobalReach: React.FC = () => {
  const features = [
    {
      title: "Global Presence",
      description:
        "OneX Group operates in 10 markets globally, connecting agents across borders. This creates opportunities to collaborate. Share best practices and expand your reach to new markets.",
    },
    {
      title: "Powerful Referral Network",
      description:
        "OneX global network provides access to a vast pool of agents, allowing you to refer clients and receive referrals from agents around the world. This strengthens your business and creates opportunities for growth.",
    },
    {
      title: "Global Community of Experts",
      description:
        "Connect with experienced professionals from diverse insights, best practices, and resources. This creates a collaborative environment for continuous learning and growth.",
    },
  ];

  const flags = [
    { src: "https://flagcdn.com/w80/ca.png", alt: "Canada" },
    { src: "https://flagcdn.com/w80/ae.png", alt: "UAE" },
    { src: "https://flagcdn.com/w80/in.png", alt: "India" },
    { src: "https://flagcdn.com/w80/bh.png", alt: "Bahrain" },
  ];

  return (
    <div className="relative w-full min-h-screen flex items-stretch overflow-hidden font-sans">
      
      {/* BACKGROUND */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/canada2.png"
          alt="Global City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row w-full">
        
        {/* LEFT SIDEBAR */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-[30%] bg-[#1a1f3d] p-10 md:p-16 flex flex-col justify-center"
        >
          <header className="mb-12">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-bold text-white leading-tight"
            >
              Global
            </motion.h1>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-bold text-gray-500/50 leading-tight -mt-2"
            >
              Reach
            </motion.h1>
          </header>

          <div className="mt-auto">
            <p className="text-white text-xs font-bold tracking-[0.2em] mb-6 uppercase">
              Global Presence
            </p>

            {/* FLAGS */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {flags.map((flag, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="overflow-hidden rounded shadow-sm border border-white/10"
                >
                  <img
                    src={flag.src}
                    alt={flag.alt}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
              10+ More Countries
            </p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-[70%] p-8 md:p-16 flex items-center justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-[#1a1f3d]/90 backdrop-blur-sm p-8 pt-16 pb-16 border-t-4 border-transparent hover:border-yellow-500 transition-all duration-300 min-h-[450px] flex flex-col group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-yellow-400 blur-2xl transition"></div>

                {/* Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 rounded-bl-xl"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-tr-xl"></div>

                <h3 className="text-yellow-500 font-bold text-lg mb-6 leading-tight">
                  {item.title}
                </h3>

                <p className="text-white/80 text-[13px] leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PAGE NUMBER */}
       
      </div>
    </div>
  );
};

export default GlobalReach;