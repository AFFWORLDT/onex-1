import React from 'react';

const ProjectUAE: React.FC = () => {
  const uaeProjects = [
    {
      img: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=1000&auto=format&fit=crop",
      title: "Seven Seas Hotel",
      subtitle: "4 Star , Dubai",
      desc: "Welcome to a world of comfort and elegance. With 317 spacious rooms, 5 dining outlets, pool, banquet & club."
    },
    {
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
      title: "Green County Villa Project In Ajman",
      subtitle: "Onex Villa Project - Ajman 100+ Villas",
      desc: "A newly developed premium villa community designed for modern living with spacious layouts and prime location."
    }
  ];

  return (
    <div className="relative w-full bg-[#0d102a] px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden font-sans">

      {/* 🌆 BURJ BACKGROUND */}
      <div className="absolute bottom-0 right-0 w-[50%] max-w-[600px] h-[90%] opacity-70 pointer-events-none">
        <img 
          src="/images/burhR.png"
          className="w-full h-full object-contain object-bottom"
          alt=""
        />
      </div>

      {/* 🌟 DARK OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d102a] via-[#0d102a]/90 to-transparent"></div>

      {/* 🌟 LIGHT GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* HEADER */}
        <header className="mb-12 md:mb-16">
          <h1 className="flex flex-wrap items-baseline gap-3 text-white">
            <span className="text-2xl sm:text-3xl md:text-4xl font-light italic opacity-80 tracking-wide">
              PROJECT IN
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              UAE
            </span>
          </h1>
        </header>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 max-w-5xl">

          {uaeProjects.map((p, i) => (
            <div
              key={i}
              className="group flex-1 relative rounded-[35px] md:rounded-[45px] p-5 sm:p-6 md:p-7
              bg-gradient-to-br from-[#b38a4d] via-[#9c7536] to-[#7a5a2a]
              border border-white/10
              shadow-[0_25px_80px_rgba(0,0,0,0.4)]
              transition-all duration-500 hover:-translate-y-3"
            >

              {/* Glow inside card */}
              <div className="absolute -top-16 -right-16 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

              {/* IMAGE */}
              <div className="rounded-[25px] md:rounded-[35px] overflow-hidden mb-5 h-48 sm:h-56 md:h-64 border border-white/20">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* TEXT */}
              <div className="text-white px-1 pb-3 relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-1 leading-tight">
                  {p.title}
                </h3>

                <h4 className="text-sm sm:text-base font-semibold mb-2 opacity-90">
                  {p.subtitle}
                </h4>

                <p className="text-[11px] sm:text-xs md:text-sm font-light leading-relaxed text-white/90">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER LINE */}
        <div className="mt-16 border-t border-white/10 pt-4 text-xs text-white/60 tracking-wide">
          Premium Developments Across UAE – Delivering Luxury & Innovation
        </div>
      </div>
    </div>
  );
};

export default ProjectUAE;