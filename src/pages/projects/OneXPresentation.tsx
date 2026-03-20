import React from 'react';
import Image from 'next/image';

const OneXPresentation: React.FC = () => {
  return (
    <div className="relative w-full bg-[#1a1c3d] overflow-hidden font-sans py-12 lg:py-0">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000" 
          alt="City Background" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-[#1a1c3d]/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col space-y-5 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            
            <h2 className="text-white text-3xl sm:text-4xl xl:text-5xl font-black italic leading-tight">
              ONE-X
              <span className="block text-[10px] sm:text-xs tracking-[0.4em] uppercase mt-2 font-light not-italic opacity-80">
                ACADEMY
              </span>
            </h2>

            <h1 className="text-white text-2xl sm:text-3xl xl:text-5xl font-serif leading-snug">
              Upskill your <br />
              <span className="italic font-light">career</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              We are committed to empowering the next generation with global learning 
              opportunities, practical knowledge, and future-ready skills.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end items-center w-full">
            
            {/* Background Shape */}
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 
                         w-[90%] sm:w-[75%] lg:w-[70%] max-w-[500px] 
                         h-[300px] sm:h-[380px] lg:h-[75%] 
                         bg-[#e2e4e7]"
              style={{ 
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
                borderRadius: '40px 0 0 40px' 
              }}
            />

            {/* Image */}
            <div className="relative z-10 w-[70%] sm:w-[60%] lg:w-[65%] max-w-[420px]">
              <Image 
                src="/images/found2.png"
                alt="Instructor"
                width={600}
                height={800}
                className="object-contain w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default OneXPresentation;