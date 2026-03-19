import React from 'react';

const ProvenSuccess: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#0d0f26] flex items-center overflow-hidden font-sans">
      
      {/* 1. BACKGROUND WORLD MAP (High Precision) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
        <svg 
          viewBox="0 0 1000 500" 
          className="w-full h-full scale-125 md:scale-110" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Replace this with a detailed World Map SVG Path or an SVG image link */}
          <image 
            href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
            width="1000" 
            height="500" 
            className="filter invert sepia saturate-0 brightness-200"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 px-6 md:px-12 items-end">
        
        {/* 2. LEFT CONTENT AREA (Column Span 7) */}
        <div className="md:col-span-7 py-20 self-center">
          <header className="mb-10">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              20+ Years of <br />
              <span className="text-white opacity-100">Proven Success</span>
            </h1>
          </header>

          <article className="space-y-6 max-w-xl">
            <p className="text-slate-300 text-[15px] leading-relaxed">
              It is an honor to be associated with <span className="text-white font-semibold">OneX Group</span>, 
              a brand that stands for more than business — it stands for belief, trust, and sustainable growth. 
              What makes OneX truly different is its unified vision across all verticals — 
              OneX Development, OneX Properties, OneX Academy, and OneX Foundation.
            </p>

            <p className="text-slate-300 text-[15px] leading-relaxed">
              This is a group building opportunities, empowering individuals, and 
              creating long-term value.
            </p>

            <p className="text-slate-300 text-[15px] font-medium italic">
              As a Brand Ambassador, I proudly represent a empire that believes in:
            </p>

            {/* List with Custom Bullets */}
            <ul className="space-y-3">
              {['Transparency over promises', 'Relationships over transactions', 'Sustainable growth over short-term success'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-[15px]">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-slate-400 text-[14px] pt-4 leading-relaxed border-t border-white/10">
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
              src="/images/found2.png" // Ensure this is a high-quality transparent PNG
              alt="Sangram Singh"
              className="w-full h-full object-contain object-bottom drop-shadow-[20px_0_50px_rgba(0,0,0,0.8)] transition-all duration-700 hover:scale-[1.02]"
            />
            
            {/* Ambassador Label - Positioned exactly as per image */}
            <div className="absolute bottom-12 -left-4 md:-left-20 z-20">
              <h3 className="text-3xl font-black text-white tracking-wide drop-shadow-lg">
                Sangram Singh
              </h3>
              <p className="text-[12px] font-bold tracking-[0.4em] text-slate-400 uppercase mt-1">
                OneX Brand Ambassador
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* 4. PAGE NUMBER DECORATION */}
     

    </div>
  );
};

export default ProvenSuccess;