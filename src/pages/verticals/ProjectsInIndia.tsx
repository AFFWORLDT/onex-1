import React from 'react';

const ProjectsInIndia: React.FC = () => {
  const indiaProjects = [
    {
      title: "Palm Residency – Greater Faridabad (NCR)",
      status: "100% Completed",
      details: "Handover: Successfully handed over to RWA"
    },
    {
      title: "RAS Residency – Sector 35, Karnal",
      status: "100% Completed",
      details: ""
    },
    {
      title: "RAS Residency II – Sector 35/36, Karnal",
      status: "Approx. 50% Completed",
      details: ""
    },
    {
      title: "RAS Basera – Integrated Township",
      status: "Total Units: 1,091 Residential Units",
      details: ""
    }
  ];

  return (
    <section className="relative w-full bg-[#f3f4f6] px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden font-sans">

      {/* 🌍 Background Map */}
      <div className="absolute inset-0 z-0 opacity-[0.04] flex items-center justify-center pointer-events-none">
        <img 
          src="/images/india-svgrepo-com.svg" 
          className="w-[80%] max-w-[900px] object-contain"
          alt=""
        />
      </div>

      {/* 🌟 Soft Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/70 to-transparent"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* 🟡 LEFT CARD */}
        <div className="lg:col-span-7 flex justify-center">
          
          {/* OUTER WRAPPER → creates spacing + shadow separation */}
          <div className="w-full max-w-[650px]">

            <div className="relative rounded-[40px] md:rounded-[50px] p-6 sm:p-8 md:p-12 
              bg-gradient-to-br from-[#c18d3e] via-[#a97933] to-[#7a5524] 
              shadow-[0_30px_100px_rgba(0,0,0,0.35)]
              border border-white/10
              overflow-hidden group">

              {/* 🔥 Glow Layer */}
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

              {/* 🖼 Images */}
             <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
  {["/images/h1.png", "/images/h2.png"].map((img, i) => (
    <div
      key={i}
      className="h-40 sm:h-52 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 shadow-lg"
    >
      <img
        src={img}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        alt={`project-${i}`}
      />
    </div>
  ))}
</div>

              {/* 📝 Content */}
              <div className="text-white space-y-5 md:space-y-6 relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
                  OneX Ras Developments <br /> in India
                </h2>
                
                <ul className="space-y-3 text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-xl">
                  {[
                    "OneX RAS Development Pvt. Ltd. is one of India's leading real estate and construction company headquartered in Delhi.",
                    "From a journey that began with humble beginnings in the year 2004, we have come a long way.",
                    "Successfully delivered multiple multi-story housing projects."
                  ].map((item,i)=>(
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-white rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* ⚫ RIGHT SIDE */}
        <div className="lg:col-span-5 flex flex-col gap-10">

          {/* HEADING */}
          <div className="text-left lg:text-right">
            <span className="text-xl sm:text-2xl font-black italic text-slate-800">
              "PROJECT IN"
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.9]">
              INDIA
            </h1>
          </div>

          {/* LIST */}
          <div className="space-y-6 md:space-y-8">
            {indiaProjects.map((p, i) => (
              <div key={i} className="relative pl-6 border-l border-slate-300 hover:border-slate-900 transition">
                <div className="absolute -left-[6px] top-1 w-3 h-3 rounded-full bg-slate-900"></div>

                <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Status: {p.status}
                </p>

                {p.details && (
                  <p className="text-xs text-slate-500 italic mt-1">
                    {p.details}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="border-t border-slate-300 pt-4 text-xs text-slate-500">
            Delivering Excellence in Real Estate Development Across India
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsInIndia;