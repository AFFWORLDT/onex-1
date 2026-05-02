"use client";

import { motion } from 'framer-motion';

const VisionaryLeadership: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-4 md:p-10 font-sans selection:bg-blue-100 overflow-hidden">
      {/* Main Container - Full Width on Mobile, Max-7xl on Desktop */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-0 bg-white overflow-hidden relative">
        
        {/* LEFT COLUMN: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-5 relative group p-4"
        >
          <div className="relative z-10">
            <div className="overflow-hidden rounded-tl-[40px] rounded-tr-[120px] rounded-bl-[40px] rounded-br-[40px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src="/images/Nitinsir.png" 
                alt="Dr. Nittin K.A."
                className="w-full h-[500px] md:h-[650px] object-cover object-top"
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 left-0 w-[85%] bg-white p-8 shadow-[20px_20px_60px_rgba(0,0,0,0.08)] rounded-tr-[60px] border-b-4 border-blue-600"
            >
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Dr. Nittin K.A.
              </h2>
              <p className="text-sm font-bold tracking-[0.2em] text-gold mt-2 uppercase">
                Chairman & Founder
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Narrative */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-7 flex flex-col justify-center p-8 md:p-20 relative"
        >
          <header className="mb-10">
            <span className="inline-block w-12 h-1 bg-gold mb-6"></span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter">
              Visionary <br /> 
              <span className="text-gold">Leadership</span>
            </h1>
          </header>

          <div className="space-y-8 max-w-2xl">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              ONEX Group was founded in Canada with a vision to create a globally trusted
              enterprise built on excellence, innovation, and long-term value. Today, we
              proudly operate in more than 10 countries, with major presence in Canada,
              India, and the UAE.
            </p>
            {/* ... rest of the content ... */}

            <div className="py-6 border-l-4 border-slate-900 pl-6 bg-slate-50 rounded-r-xl">
              <h3 className="text-lg font-bold text-slate-900">
                Our three core pillars — Real Estate, Education, and Hospitality
              </h3>
            </div>

            {/* Pillars Icons Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-12 py-3">
              {[
                { label: 'REAL ESTATE', icon: 'M3 21h18M3 10l9-7 9 7v11H3V10z' },
                { label: 'EDUCATION', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0v6' },
                { label: 'HOSPITALITY', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1' }
              ].map((pillar, idx) => (
                <div key={idx} className="flex flex-col items-center group cursor-default">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-slate-100 mb-4 transition-all duration-300 group-hover:bg-gold group-hover:shadow-gold/20">
                    <svg className="w-8 h-8 stroke-slate-900 group-hover:stroke-black transition-colors" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={pillar.icon} />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs font-black tracking-widest text-slate-500 group-hover:text-gold text-center">
                    {pillar.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-slate-600 leading-relaxed">
              Drive our commitment to quality, growth, and meaningful impact. From
              developing premium properties to empowering future leaders and
              delivering world-class hospitality experiences, we focus on building value
              that lasts.
            </p>

            <p className="text-slate-500 italic text-sm border-t border-slate-100 p3-6">
              At ONEX Group, we are not just expanding businesses — we are building a
              global legacy based on trust, integrity, and opportunity.
            </p>
          </div>

          {/* Page Indicator */}
          
        </motion.div>
      </div>
    </div>
  );
};

export default VisionaryLeadership;
