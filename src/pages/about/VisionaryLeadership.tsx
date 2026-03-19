import React from 'react';

const VisionaryLeadership: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-4 md:p-10 font-sans selection:bg-blue-100">
      {/* Main Container - Full Width on Mobile, Max-7xl on Desktop */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-0 bg-white overflow-hidden relative">
        
        {/* BACKGROUND DECORATIVE ELEMENT (Top Right Waves) */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.6,-0.9C84,14,77.5,28,68.4,40.1C59.3,52.2,47.5,62.4,34.1,69.1C20.7,75.8,5.7,78.9,-9.5,77.3C-24.7,75.7,-40.1,69.4,-52.6,59.3C-65.1,49.2,-74.7,35.3,-79.1,19.9C-83.5,4.5,-82.7,-12.4,-76.3,-27.2C-69.9,-42,-57.9,-54.7,-44.1,-61.7C-30.3,-68.7,-14.7,-70,-0.1,-69.8C14.5,-69.6,29,-67.9,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        {/* LEFT COLUMN: Profile Image (Spans 5 columns) */}
        <div className="md:col-span-5 relative group p-4">
          <div className="relative z-10">
            {/* Image with MNC style asymmetrical rounding */}
            <div className="overflow-hidden rounded-tl-[40px] rounded-tr-[120px] rounded-bl-[40px] rounded-br-[40px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src="/images/Nitinsir.png" 
                alt="Dr. Nittin K.A."
                className="w-full h-[500px] md:h-[650px] object-cover object-top"
              />
            </div>

            {/* Floating Name Card - Exact Image Style */}
            <div className="absolute -bottom-6 left-0 w-[85%] bg-white p-8 shadow-[20px_20px_60px_rgba(0,0,0,0.08)] rounded-tr-[60px] border-b-4 border-blue-600">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Dr. Nittin K.A.
              </h2>
              <p className="text-sm font-bold tracking-[0.2em] text-blue-600 mt-2 uppercase">
                Chairman & Founder
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Narrative (Spans 7 columns) */}
        <div className="md:col-span-7 flex flex-col justify-center p-8 md:p-20 relative">
          
          <header className="mb-10">
            <span className="inline-block w-12 h-1 bg-blue-600 mb-6"></span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter">
              Visionary <br /> 
              <span className="text-blue-600">Leadership</span>
            </h1>
          </header>

          <div className="space-y-8 max-w-2xl">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              ONEX Group was founded in Canada with a vision to create a globally trusted
              enterprise built on excellence, innovation, and long-term value. Today, we
              proudly operate in more than 10 countries, with major presence in Canada,
              India, and the UAE.
            </p>

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
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-slate-100 mb-4 transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-blue-200">
                    <svg className="w-8 h-8 stroke-slate-900 group-hover:stroke-white transition-colors" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={pillar.icon} />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs font-black tracking-widest text-slate-500 group-hover:text-blue-600 text-center">
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
          
        </div>
      </div>
    </div>
  );
};

export default VisionaryLeadership;
