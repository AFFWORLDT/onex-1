import React from 'react';

const ProjectsInCanada: React.FC = () => {

  const mainProjects = [
    {
      img: '/images/gulf.jpg',
      title: "ST. Ignace Golf Club, Saint-Ignace, NB",
      desc: "The New Golf Club to be launched in St.-Margarets, New Brunswick located on Highway 11 minutes away from Moncton."
    },
    {
      img: '/images/Moncton.jpg',
      title: "The Propeller Of Moncton, NB",
      desc: [
        "Propeller is one of the major cities in New Brunswick being a part of the Greater Moncton Area.",
        "The property is a 1.25 acres-shaped lot on a prime commercial location being right opposite the Moncton Airport.",
        "This property is a perfect place to put up a large-vessel plaza welcoming a large crowd from all over.",
        "We plan to build around 7 shops and a restaurant in the plaza."
      ]
    }
  ];

  const otherProjects = [
    { img: '/images/queen.jpg', title: "Queen's Castle By RAS" },
    { img: '/images/street.jpg', title: "Cunard Street, Richibucto, NB" },
    { img: '/images/water.jpg', title: "Water Street, Miramichi, NB" }
  ];

  const projectList = [
    "The Propeller Of Moncton, NB", "Queen's Castle By RAS", "The Monarch, Moncton, NB", 
    "Pine Glenn Road", "Highlandview Road, Moncton, NB", "Anne Street, Moncton, NB", 
    "Amirault Street, Dieppe, NB", "Route 440, St. Margarets, NB", "Hwy 115, Irish Town, NB", 
    "Wesley Street, Moncton, NB", "Main Street, Grand Falls, NB", "Rt 8, Ludlow Parish, NB", 
    "Pointe-Canot, Gloucester, NB", "3 Houses in Saint-John, NB"
  ];

  return (
    <div className="relative w-full bg-[#070b22] flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-16 overflow-hidden font-sans">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-600/10 backdrop-blur-3xl transform -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start lg:items-end">

        {/* LEFT */}
        <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">

          {/* TOP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {mainProjects.map((p, i) => (
              <div key={i} className="group border border-white/20 rounded-[30px] md:rounded-[40px] bg-white/5 backdrop-blur-sm p-5 sm:p-6 md:p-8 hover:border-yellow-500 hover:bg-white/10 flex flex-col items-center text-center">

                <div className="rounded-[20px] md:rounded-[30px] overflow-hidden w-full mb-4 md:mb-6 border border-white/10">
                  <img src={p.img} alt={p.title} className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover" />
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                  {p.title}
                </h3>

                {Array.isArray(p.desc) ? (
                  <ul className="space-y-1 md:space-y-2 text-[11px] sm:text-xs text-gray-300 leading-relaxed text-left w-full">
                    {p.desc.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-yellow-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                    {p.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* BOTTOM */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {otherProjects.map((p, i) => (
              <div key={i} className="group border border-white/20 rounded-[20px] md:rounded-[30px] bg-white/5 backdrop-blur-sm p-4 md:p-6 hover:border-yellow-500 hover:bg-white/10 flex flex-col items-center text-center">
                
                <div className="rounded-[15px] md:rounded-[20px] overflow-hidden w-full mb-4 md:mb-5 border border-white/10">
                  <img src={p.img} alt={p.title} className="w-full h-[130px] sm:h-[150px] object-cover" />
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-white">
                  {p.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4 flex flex-col h-full relative mt-6 lg:mt-0">

          {/* HEADING */}
          <header className="mb-6 md:mb-10 text-left lg:text-right">
            <span className="text-white text-xl sm:text-2xl md:text-3xl italic block">
              "PROJECT IN"
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1]">
              CANADA
            </h1>
          </header>

          {/* LIST */}
          <div className="mt-4 pl-3 md:pl-4 border-l border-white/10 mb-10 md:mb-16 max-h-[250px] md:max-h-[350px] overflow-y-auto">
            <ul className="space-y-1 text-[11px] sm:text-xs text-slate-300">
              {projectList.map((project, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-slate-400">{idx + 1}.</span>
                  {project}
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGES */}
          <div className="relative mt-auto w-full h-[200px] sm:h-[260px] md:h-80 flex items-center justify-end">

            <div className="absolute top-0 right-0 w-[50%] md:w-[60%] h-full opacity-60">
              <img src="/images/parliament.jpg" alt="" className="w-full h-full object-contain object-top" />
            </div>

            <div className="absolute bottom-0 left-0 md:-left-10 w-[110%] md:w-[120%]">
              <img src="/images/flagIs.png" alt="Canadian Flag" className="w-full object-contain" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectsInCanada;