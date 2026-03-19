import React from 'react';

const OnexDevelopment: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden font-sans">
      
      {/* 1. TECHNICAL BLUEPRINT BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/architect.png'), url('/images/floor-plan-technical.jpg')`, // Replace with a real blueprint image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(1.2)'
        }}
      ></div>

      {/* 2. HAND & TABLET OVERLAY (Right Side) */}
      <div className="absolute right-0 top-0 h-full w-full md:w-[60%] z-10 pointer-events-none overflow-hidden">
        <img 
          src="/images/architect-hand-drawing.png" // Image of hand with red pen and tablet
          alt="Architect Drawing"
          className="w-full h-full object-contain object-right transform translate-x-10 translate-y-10 scale-110"
        />
      </div>

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-10 md:px-24">
        <div className="max-w-md flex flex-col items-start">
          
          {/* Logo Section */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl font-black text-[#0a1d47] tracking-tighter flex flex-col leading-[0.8]">
              ONEX
              <span className="text-2xl md:text-3xl tracking-[0.4em] font-bold mt-2 text-[#0a1d47] border-t-2 border-[#0a1d47] pt-2">
                DEVELOPMENT
              </span>
            </h1>
          </div>

          {/* Slogan */}
          <div className="mt-6">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 leading-tight">
              Creating world-class <br />
              <span className="font-semibold">infrastructure</span>
            </h2>
          </div>

        </div>
      </div>

      {/* 4. PAGE NUMBER */}
      <div className="absolute bottom-10 right-10 text-slate-400 font-mono text-xl font-bold opacity-60">
        6
      </div>

      {/* Subtle Bottom Gradient for depth */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-100/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default OnexDevelopment;