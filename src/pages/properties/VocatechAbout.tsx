"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const VocatechAbout: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#f8fafc] font-sans overflow-hidden px-6 md:px-16 lg:px-24 py-20">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/40 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/40 blur-[120px] rounded-full"></div>

      {/* Header */}
      <div className="flex justify-between items-start mb-16 relative z-10">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-3">
            About Company
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Vocatech Overview
          </h1>
        </div>

        {/* Logo */}
        <div className="text-right hidden md:block">
          <h2 className="text-yellow-500 text-2xl font-bold tracking-tight">
            VOCATECH
          </h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            Empowering Skills for Global Career
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="space-y-12">

          {/* About */}
          <div className="animate-[fadeUp_0.8s_ease_forwards] opacity-0">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              About Vocatech
            </h2>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              Vocatech, powered by Braincruise, is a next-generation
              learning and transformation company focused on building
              future-ready skills. We combine AI-driven education,
              mentorship, and consulting to empower individuals,
              institutions, and enterprises in a rapidly evolving
              digital landscape.
            </p>
          </div>

          {/* Courses */}
          <div className="animate-[fadeUp_0.8s_ease_forwards] delay-100 opacity-0">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Courses / Programs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Artificial Intelligence",
                "Real Estate Business",
                "Healthcare Training",
                "Business Management",
                "70+ More Courses",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition"
                >
                  <CheckCircle className="text-cyan-500" size={18} />
                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Differentiators */}
          <div className="animate-[fadeUp_0.8s_ease_forwards] delay-200 opacity-0">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Key Differentiators
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Hands-On Learning",
                  desc: "70% practical labs, projects & tools.",
                },
                {
                  title: "Customisation",
                  desc: "Tailored programs for institutions & learners.",
                },
                {
                  title: "Post-Training Support",
                  desc: "Mentorship & community ecosystem.",
                },
                {
                  title: "Industry Curriculum",
                  desc: "Built from real AI implementation experience.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                  <p className="font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden lg:block">

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
              alt="AI Visual"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Floating Glass Card */}
          <div className="absolute bottom-6 left-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-5 max-w-xs shadow-xl">
            <p className="text-sm text-white">
              Transforming education with AI-powered learning
              systems and real-world applications.
            </p>
          </div>

          {/* Big AI Text */}
          <div className="absolute -bottom-10 -right-6 text-[120px] font-extrabold bg-gradient-to-t from-cyan-400 to-purple-500 bg-clip-text text-transparent opacity-20 select-none">
            AI
          </div>
        </div>
      </div>

      {/* Footer */}
      

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default VocatechAbout;