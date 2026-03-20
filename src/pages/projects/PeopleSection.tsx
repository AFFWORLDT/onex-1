"use client";

import React from "react";
import { motion } from "framer-motion";

const PeopleSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20 px-4 sm:px-6 lg:px-16">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-center lg:text-left"
        >

          <h2 className="text-[#1a1c3d] text-4xl sm:text-5xl font-extrabold leading-tight">
            People Behind <br />
            <span className="text-red-500">OneX Properties</span>
          </h2>

          <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">

            <p>
              At OneX Properties, we have 100+ multilingual real estate 
              consultants trained to advise, not sell. We guide clients 
              toward smart, secure investments aligned with their goals.
            </p>

            <p>
              Founded by <span className="font-bold text-[#1a1c3d]">Mr Nittin K.A</span>, 
              the company brings 20+ years of global experience across 
              Canada, Dubai, and international markets.
            </p>

            <p>
              Backed by top developers, financial experts, and legal advisors, 
              we leverage real-time market insights to deliver high-value 
              investment opportunities.
            </p>

            <p className="font-semibold text-lg text-[#1a1c3d] pt-2">
              Not just a broker — a strategic partner for global investors.
            </p>

          </div>

        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] sm:h-[600px] lg:h-[650px]"
        >

          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden rounded-[40px]">
            <img
              src="/images/ZeeAward.png"
              alt="Team"
              className="w-full h-full object-cover scale-110 hover:scale-125 transition duration-[2000ms]"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Glass Card Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white shadow-xl"
          >
            <h4 className="text-lg font-bold mb-2">
              Global Team Excellence
            </h4>
            <p className="text-sm text-gray-200">
              A network of professionals delivering trust, transparency, and results worldwide.
            </p>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default PeopleSection;