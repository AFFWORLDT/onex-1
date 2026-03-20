import React from 'react';

const AboutOnex: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#1a1c3d] text-white py-20 px-6 md:px-16 overflow-hidden flex items-center">
      
      {/* Background Image Overlay (Building perspective) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c3d] via-[#1a1c3d]/80 to-transparent" />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="space-y-6 max-w-xl">
          <header className="mb-8">
            <h2 className="text-3xl font-light">About</h2>
            <h1 className="text-5xl font-black tracking-tight leading-none">
              ONEX PROPERTIES
            </h1>
          </header>

          <div className="space-y-4 text-[13px] leading-relaxed text-gray-300 font-light">
            <p>
              At OneX Properties, we are not just property consultants — we are trusted 
              advisors and long-term partners in your investment journey.
            </p>
            <p>
              Headquartered in Canada with a major operational hub in Dubai, UAE, 
              OneX Properties is an international real estate brokerage and investment 
              firm specializing in residential and commercial sales, luxury off-plan 
              investments, and high-growth property opportunities.
            </p>
            <p>
              We don't focus only on closing deals. We focus on understanding each 
              client's goals and guiding them toward the right investment and the right 
              future. With deep expertise in the Dubai real estate market and a strong 
              network of leading developers, OneX Properties has built a reputation for 
              delivering consistent results and long-term value.
            </p>
            <p>
              Through our innovative affiliate-based partnership model, professional 
              advisory team, and global reach, we proudly serve investors and 
              homebuyers across the UAE, Canada, and international markets.
            </p>
            <p>
              As we continue to expand across the GCC, the Indian Subcontinent, 
              Southeast Asia, and beyond, our mission remains simple:
            </p>
            <p className="text-white font-medium text-base pt-2">
              to create smart property opportunities and lasting wealth <br />
              for our clients worldwide.
            </p>
          </div>
        </div>

        {/* Right Side: Stats & Tagline */}
        <div className="flex flex-col justify-center items-center lg:items-start space-y-12">
          <h3 className="text-3xl font-medium leading-tight text-center lg:text-left">
            We Don't Just Sell — <br />
            We Guide, Support, and Partner
          </h3>

          {/* Stats Circles */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Stat 1 */}
            <div className="w-36 h-36 rounded-full border-[3px] border-white flex flex-col items-center justify-center p-4 text-center">
              <span className="text-4xl font-black leading-none">20+</span>
              <span className="text-[9px] uppercase mt-2 tracking-tighter leading-tight font-light">
                "Years on the Global and Dubai Market"
              </span>
            </div>

            {/* Stat 2 */}
            <div className="w-36 h-36 rounded-full border-[3px] border-white flex flex-col items-center justify-center p-4 text-center">
              <span className="text-4xl font-black leading-none">10</span>
              <span className="text-[9px] uppercase mt-2 tracking-tighter leading-tight font-light">
                Operating in 10+ markets worldwide
              </span>
            </div>

            {/* Stat 3 */}
            <div className="w-36 h-36 rounded-full border-[3px] border-white flex flex-col items-center justify-center p-4 text-center">
              <span className="text-[10px] uppercase font-light">Access to</span>
              <span className="text-3xl font-black leading-none my-1">13000+</span>
              <span className="text-[10px] uppercase font-light">agents globally</span>
            </div>
          </div>

          <p className="text-xl font-light italic text-gray-300 max-w-md text-center lg:text-left">
            This is what sets us apart — real estate done with 
            integrity, care, and partnership.
          </p>
        </div>
      </div>

      {/* Slide Number (Bottom Right) */}
      
    </div>
  );
};

export default AboutOnex;