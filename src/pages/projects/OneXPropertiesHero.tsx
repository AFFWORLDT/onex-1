import React from 'react';

const OneXPropertiesHero: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      
      {/* 1. Background Image with Golden/Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000" 
          alt="Dubai Skyline Sunset" 
          className="w-full h-full object-cover"
        />
        {/* Dark Vignette Overlay to make text pop */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-8 md:px-16 z-10">
        <div className="max-w-xl">
          
          {/* Brand Logo Section */}
          <div className="mb-6">
            <h1 className="text-white text-8xl font-[900] italic tracking-tighter leading-none">
              ONE-X
            </h1>
            <p className="text-white text-xl tracking-[0.6em] font-bold uppercase mt-1">
              PROPERTIES
            </p>
          </div>

          {/* Tagline Text */}
          <div className="w-full h-[1px] bg-white/30 my-6" /> {/* Optional thin line for structure */}
          
          <p className="text-white text-lg md:text-xl font-light leading-relaxed tracking-wide opacity-90 max-w-lg">
            we focus on developing premium residential, 
            commercial, and mixed-use spaces that 
            redefine quality living and smart investments.
          </p>

        </div>
      </div>

      {/* Page Number Placeholder (Bottom Right like the image) */}
      
    </div>
  );
};

export default OneXPropertiesHero;