"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ image, title }: { image: string; title: string }) => (
  <div className="group relative overflow-hidden rounded-xl">

    {/* Image */}
    <div className="relative w-full aspect-[16/10] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale-[30%]"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] translate-x-[-100%] group-hover:translate-x-[100%]"></div>
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 w-full p-5 flex items-end justify-between">
      <h3 className="text-white text-lg md:text-xl font-semibold leading-snug max-w-[80%]">
        {title}
      </h3>

      <div className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <ArrowUpRight className="text-white" size={20} />
      </div>
    </div>

    {/* Border Glow */}
    <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-500"></div>
  </div>
);

const AnalysisServices: React.FC = () => {
  const services = [
    {
      title: "Conducting Feasibility Studies",
      image:"/images/faciability.png"
       
    },
    {
      title: "Highest & Best Use Studies",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Competitive Market Analysis",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Portfolio Optimization",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Investment Strategy Development",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Market Research & Insights",
      image:
        "/images/market.png",
    },
  ];

  return (
    <div className="relative bg-[#f8fafc] py-24 px-6 md:px-16 font-sans overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200/30 blur-[120px] rounded-full"></div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <p className="text-blue-600 uppercase tracking-[0.3em] text-xs mb-4 font-semibold">
          Our Expertise
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Real Estate Analysis <br className="hidden md:block" />
          & Strategic Advisory
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          We help clients navigate complex real estate landscapes through
          data-driven insights, feasibility assessments, and strategic
          planning. Our services are designed to maximize value and reduce risk
          across all stages of development.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="opacity-0 translate-y-10 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ServiceCard title={service.title} image={service.image} />
          </div>
        ))}
      </div>

      {/* Footer */}
     

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AnalysisServices;