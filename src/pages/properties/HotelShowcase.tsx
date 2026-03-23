"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BrandCardProps {
  image: string;
  name: string;
  isLarge?: boolean;
}

const BrandCard: React.FC<BrandCardProps> = ({ image, name, isLarge }) => (
  <div className="group relative overflow-hidden rounded-xl cursor-pointer">

    {/* Image */}
    <div className={`${isLarge ? "aspect-[16/10]" : "aspect-video"} overflow-hidden`}>
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />
    </div>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
      <h3 className="text-white text-sm md:text-base font-semibold tracking-wide">
        {name}
      </h3>

      <div className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
        <ArrowUpRight size={18} className="text-white" />
      </div>
    </div>

    {/* Luxury Gold Border */}
    <div className="absolute inset-0 border border-yellow-500/20 group-hover:border-yellow-400/60 transition-all duration-500 rounded-xl"></div>
  </div>
);

const HotelShowcase: React.FC = () => {
  return (
    <div className="relative bg-[#0b0b0b] text-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden font-sans">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-xs text-yellow-500 mb-4">
            Our Brands
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Global Hospitality <br /> Portfolio
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-sm md:text-base">
            Whether you're launching your first hotel or scaling a global
            hospitality business, Seven Tree Hotels provides the brand
            strength, operational excellence, and global recognition to
            help you succeed.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT LARGE */}
          <div className="flex flex-col gap-8">
            <BrandCard
              name="Al Bustan Hotel, Sharjah"
             image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
              // image="/images/nasreenhotel.png"
              isLarge
            />
            <BrandCard
              name="Nesrine Hammamet, Tunisia"
             // image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800"
             image="/images/nasreenhotel.png"
             isLarge
            />
          </div>

          {/* RIGHT GRID */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Geoffrey's Resto Bar", 
                img : "/images/geoffreysRetobar.png"
                //img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400"
               },
              
              { name: "Rockafellas Club", img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=400" },
              { name: "OVO English Club", img: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=400" },
              { name: "Nafas Al Balad", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400" },
              { name: "Salt Restaurant",img:"/images/saltresturant.png"
                
              //  img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400"
              
              },
             
                { name: "Express Punjabi Dhaba", 
                  img : "/images/punjabidhaba.png"
                //  img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=400" 
                
                }
           
                ].map((item, index) => (
              <div
                key={index}
                className="opacity-0 translate-y-10 animate-[fadeUp_0.8s_ease_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BrandCard name={item.name} image={item.img} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
       

      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(30px);
          }
        }
      `}</style>
    </div>
  );
};

export default HotelShowcase;