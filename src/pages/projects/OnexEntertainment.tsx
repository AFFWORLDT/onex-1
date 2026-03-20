import React from 'react';

const OnexEntertainment: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#1a1c3d] text-white py-16 px-6 md:px-20 overflow-hidden flex items-center">
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Branding and List */}
        <div className="space-y-10">
          <header className="space-y-2">
            <h1 className="text-6xl font-[900] italic tracking-tighter leading-none">
              ONE-X
            </h1>
            <p className="text-sm tracking-[0.5em] font-light uppercase opacity-90">
              ENTERTAINMENT
            </p>
          </header>

          <div className="space-y-8">
            <h3 className="italic text-gray-300 text-sm font-light">
              Why Choose ONEX Entertainment?
            </h3>

            <div className="space-y-6 max-w-lg">
              {/* List Items */}
              <div className="flex gap-4">
                <span className="text-gray-400 font-medium">1.</span>
                <p className="text-[13px] leading-relaxed text-gray-200">
                  <span className="font-bold text-white">Global Network:</span> Our extensive connections ensure access to the best talent and resources in the industry.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-gray-400 font-medium">2.</span>
                <p className="text-[13px] leading-relaxed text-gray-200">
                  <span className="font-bold text-white">Expertise:</span> Our team of seasoned professionals brings a wealth of experience and creativity to every project.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-gray-400 font-medium">3.</span>
                <p className="text-[13px] leading-relaxed text-gray-200">
                  <span className="font-bold text-white">Quality:</span> We are committed to delivering high-quality entertainment that captivates and inspires audiences.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-gray-400 font-medium">4.</span>
                <p className="text-[13px] leading-relaxed text-gray-200">
                  <span className="font-bold text-white">Customisation:</span> We tailor our services to meet your specific needs, creating bespoke entertainment solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Stacked Images */}
        <div className="flex flex-col gap-6 items-center lg:items-end">
          {/* Top Image */}
          <div className="w-full max-w-[500px] h-[280px] rounded-[40px] overflow-hidden border border-gray-700/50 shadow-2xl">
            <img 
              src="/images/sa7.png" 
              alt="Entertainment Event 1" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Image */}
          <div className="w-full max-w-[500px] h-[280px] rounded-[40px] overflow-hidden border border-gray-700/50 shadow-2xl">
            <img 
              src="/images/3.png" 
              alt="Entertainment Event 2" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* Slide Number (Bottom Right) */}
     
    </section>
  );
};

export default OnexEntertainment;