import React from "react";
import {
  FaChartLine,
  FaKey,
  FaConciergeBell,
  FaCity,
  FaUserShield,
  FaMapMarkerAlt,
  FaFileContract,
  FaGem,
  FaHome,
} from "react-icons/fa";

const WhyOnexDevelopments: React.FC = () => {
  const features = [
    { icon: FaChartLine, title: "High ROI", desc: "A managed project, designed for profitable returns." },
    { icon: FaKey, title: "Freehold Ownership", desc: "Full ownership rights." },
    { icon: FaConciergeBell, title: "Amenities", desc: "Luxury lifestyle facilities." },
    { icon: FaCity, title: "Appreciation", desc: "High-value prime locations." },
    { icon: FaUserShield, title: "Track Record", desc: "Trusted & reliable brand." },
    { icon: FaMapMarkerAlt, title: "Locations", desc: "Strategic positioning." },
    { icon: FaFileContract, title: "Compliance", desc: "Fully regulated projects." },
    { icon: FaGem, title: "Luxury", desc: "Premium interiors & design." },
    { icon: FaHome, title: "Mortgage", desc: "Flexible mortgage solutions." },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#060918] flex items-center justify-center px-4 py-10 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/left.jpg"
          className="absolute bottom-0 left-0 w-[35%] opacity-25"
          alt=""
        />
        <img
          src="/images/right.jpg"
          className="absolute top-0 right-0 w-[30%] opacity-25"
          alt=""
        />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-5xl bg-gradient-to-br from-[#b38743] via-[#d4af37] to-[#8a632a] rounded-2xl shadow-2xl border border-white/20 px-6 md:px-10 py-8">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white italic mb-2">
            Why ONEX Developments?
          </h1>
          <p className="text-white/80 text-xs md:text-sm max-w-xl mx-auto">
            High-growth investments backed by expertise, strategic locations, and premium developments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-black/10 border border-white/10 rounded-lg p-3 text-center hover:bg-black/20 transition"
              >
                <div className="w-9 h-9 mx-auto mb-2 flex items-center justify-center rounded-full bg-white/10">
                  <Icon className="text-yellow-100 text-sm" />
                </div>

                <h3 className="text-[11px] font-semibold text-white uppercase mb-1">
                  {f.title}
                </h3>

                <p className="text-[10px] text-white/70 leading-tight">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
       
      </div>
    </div>
  );
};

export default WhyOnexDevelopments;