"use client";

import React from 'react';

const ProvenSuccess: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-white flex items-center overflow-hidden font-sans border-y border-black/5">
      
      {/* 1. BACKGROUND WORLD MAP (High Precision) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg 
          viewBox="0 0 1000 500" 
          className="w-full h-full scale-125 md:scale-110" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <image 
            href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
            width="1000" 
            height="500" 
            className="filter grayscale opacity-20"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 px-6 md:px-12 items-end">
        
        {/* 2. LEFT CONTENT AREA (Column Span 7) */}
        <div className="md:col-span-7 py-20 self-center">
          <header className="mb-10">
            <h1 className="text-5xl md:text-7xl font-black text-black leading-[1.05] tracking-tight uppercase">
              20+ Years of <br />
              <span className="text-gold">Proven Success</span>
            </h1>
          </header>

          <article className="space-y-6 max-w-xl">
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              It is an honor to be associated with <span className="text-black font-bold">OneX Group</span>, 
              a brand that stands for more than business — it stands for belief, trust, and sustainable growth. 
              What makes OneX truly different is its unified vision across all verticals — 
              OneX Development, OneX Properties, OneX Academy, and OneX Foundation.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              This is a group building opportunities, empowering individuals, and 
              creating long-term value.
            </p>

            <p className="text-black text-lg font-bold italic">
              As a Brand Ambassador, I proudly represent an empire that believes in:
            </p>

            {/* List with Custom Bullets */}
            <ul className="space-y-3">
              {['Transparency over promises', 'Relationships over transactions', 'Sustainable growth over short-term success'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-gray-400 text-sm pt-4 leading-relaxed border-t border-black/5 font-medium uppercase tracking-widest">
              OneX is creating a global ecosystem where development meets integrity, 
              education meets opportunity, and business meets social responsibility. 
              I am proud to be part of a movement that is not only shaping skylines — 
              but shaping futures.
            </p>
          </article>
        </div>

        {/* 3. RIGHT IMAGE AREA (Column Span 5) */}
        <div className="md:col-span-5 relative h-full flex flex-col justify-end items-center md:items-end">
          
          {/* Persona Image - Bottom Aligned to the floor */}
          <div className="relative w-full max-w-[480px] h-[550px] md:h-[750px] flex items-end overflow-visible">
            <img 
              src="/images/found2.png" 
              alt="Sangram Singh"
              className="w-full h-full object-contain object-bottom transition-all duration-700 hover:scale-[1.02]"
            />
            
            {/* Ambassador Label - Positioned exactly as per image */}
            <div className="absolute bottom-12 -left-4 md:-left-20 z-20">
              <h3 className="text-3xl font-black text-black tracking-wide bg-white/80 backdrop-blur-md px-6 py-2 rounded-xl">
                Sangram Singh
              </h3>
              <p className="text-[10px] font-bold tracking-[0.4em] text-gold uppercase mt-2 pl-6">
                OneX Brand Ambassador
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvenSuccess;