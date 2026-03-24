"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ProjectsInCanada: React.FC = () => {
  const mainProjects = [
    {
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200",
      title: "ST. Ignace Golf Club",
      desc: "Premium golf development near Moncton with high investment potential.",
    },
    {
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
      title: "Propeller Of Moncton",
      desc: "Prime commercial plaza opposite airport with shops & restaurant.",
    },
  ];

  const otherProjects = [
    { img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800", title: "Queen’s Castle" },
    { img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800", title: "Cunard Street" },
    { img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800", title: "Water Street" },
    { img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800", title: "Downtown Hub" },
    { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800", title: "Skyline Tower" },
  ];

  const projectList = [
    "Moncton Projects", "Queen’s Castle", "The Monarch", "Pine Glenn Road",
    "Highlandview Road", "Anne Street", "Amirault Street", "Route 440"
  ];

  return (
    <section className="relative w-full h-full bg-[#050816] flex items-center overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600"
          alt="bg"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col md:grid md:grid-cols-12 gap-8 px-6 py-12 md:py-20">
        
        {/* LEFT SECTION (TEXT & LIST) */}
        <div className="md:col-span-4 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Projects in <br />
              <span className="text-yellow-400 font-black text-5xl md:text-8xl">Canada</span>
            </h1>
          </motion.div>

          <div className="bg-white/5 border-l-4 border-yellow-400 p-6 backdrop-blur-sm">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Key Locations</h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px] md:text-xs text-white/60">
              {projectList.map((p, i) => (
                <li key={i} className="hover:text-yellow-400 transition-colors cursor-default flex items-center">
                  <span className="text-yellow-400 mr-2">/</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION (CARDS & SLIDER) */}
        <div className="md:col-span-8 flex flex-col justify-center space-y-8 h-full overflow-hidden">
          
          {/* TOP FEATURED CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mainProjects.map((p, i) => (
              <div key={i} className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 p-2">
                <div className="h-40 md:h-48 rounded-xl overflow-hidden relative">
                  <img src={p.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{p.title}</h3>
                  <p className="text-white/50 text-xs line-clamp-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM GALLERY SLIDER */}
          <div className="w-full">
            <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 ml-1">Other Developments</h4>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1.5}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3.5 },
              }}
              className="pb-10"
            >
              {otherProjects.map((p, i) => (
                <SwiperSlide key={i}>
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 group">
                    <img src={p.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                      <p className="text-white text-[10px] font-bold uppercase tracking-wider">{p.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3) !important;
          width: 20px !important;
          border-radius: 4px !important;
          transition: all 0.3s !important;
        }
        .swiper-pagination-bullet-active {
          background: #facc15 !important;
          width: 40px !important;
        }
      `}</style>
    </section>
  );
};

export default ProjectsInCanada;