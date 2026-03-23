"use client";
import React from "react";

/* Card Component */
const CSRActivity = ({
  title,
  subtitle,
  description,
  images,
}: {
  title: string;
  subtitle?: string;
  description: string;
  images: string[];
}) => (
  <div className="flex flex-col space-y-3 group transition duration-300 hover:-translate-y-1">

    {/* Title */}
    <div>
      {subtitle && (
        <span className="text-[10px] text-blue-500 uppercase tracking-widest">
          {subtitle}
        </span>
      )}
      <h3 className="text-sm font-extrabold text-slate-800 uppercase">
        {title}
      </h3>
    </div>

    {/* Images */}
    <div className="grid grid-cols-2 gap-2">
      {images.map((img, i) => (
        <div
          key={i}
          className="aspect-video rounded-md overflow-hidden shadow-sm"
        >
          <img
            src={img}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>

    {/* Description */}
    <p className="text-[11px] leading-relaxed text-gray-600">
      {description}
    </p>
  </div>
);

const CSRShowcase: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-white text-black font-sans overflow-hidden">

      {/* SIDEBAR → hidden on mobile */}
      <div className="hidden lg:flex w-[18%] min-w-[220px] bg-gradient-to-b from-[#0a0e31] to-[#111a4a] flex-col items-center justify-between py-12 px-6 rounded-r-[3rem] text-white shadow-2xl">

        <div className="text-center">
          <h1 className="text-4xl font-black italic tracking-tight">
            ONE<span className="text-blue-400">-X</span>
          </h1>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-70">
            Foundation
          </span>
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-6xl font-black tracking-tight">YOU</h2>
          <p className="text-[10px] font-bold tracking-widest leading-tight opacity-70">
            CORPORATE SOCIAL RESPONSIBILITY
          </p>
        </div>

        <div className="w-10 h-[2px] bg-blue-400 rounded-full opacity-70"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="
        flex-1 
        p-5 sm:p-6 md:p-10 lg:p-12 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-6 md:gap-10
        overflow-y-auto
      ">

        {/* Row 1 */}
        <CSRActivity
          subtitle="Donate Shoes"
          title="One for One"
          description="Empowering young lives by providing 10,000+ pairs of shoes to underprivileged children, supporting their journey towards education and a better future.."
          images={[
            "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=400",
          ]}
        />

        {/* Center Card */}
        <div className="flex flex-col space-y-3 group items-center text-center transition duration-300 hover:-translate-y-1">
          <span className="text-blue-600 font-semibold text-sm">
            NGO Social Activities
          </span>

          <div className="w-full aspect-video rounded-md overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <p className="text-[11px] text-gray-500">
            Supporting communities through outreach programs.
          </p>
        </div>

        <CSRActivity
          title="COVID Relief"
          description="Facilitated the distribution of oxygen cylinders and frontline healthcare resources, strengthening emergency response during COVID-19."
          images={[
            "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=400",
          ]}
        />

        {/* Row 2 */}
        <CSRActivity
          subtitle="Gift of"
          title="Sight"
          description="Delivered comprehensive eye care services through free medical camps, including vision screening and distribution of corrective eyewear"
          images={[
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=400",
            "/images/a16.png"
         
          ]}
        />

        <CSRActivity
          title="Paralympic Support"
          description="Strengthening athletic potential by supporting training, development, and participation opportunities for aspiring athletes."
          images={[
               "/images/a19.png",
               "/images/a7.png"
          ]}
        />

        <CSRActivity
          title="Laptop Distribution"
          description="Helping students."
          images={[
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
          ]}
        />

        {/* Row 3 */}
        <CSRActivity
          subtitle="Gift of"
          title="Education"
          description="Empowering students."
          images={[
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400",
          ]}
        />

        <CSRActivity
          subtitle="Gift of"
          title="Blood Donation"
          description="Facilitated organized donation campaigns to deliver critical resources and aid to underprivileged communities."
          images={[
            "/images/a17.png",
            "/images/a18.png"
           
          //  "https://images.unsplash.com/photo-1615461066841-6116ecaabb04?auto=format&fit=crop&q=80&w=400",
           // "https://images.unsplash.com/photo-1536856424748-5c163edd16ff?auto=format&fit=crop&q=80&w=400",
          ]}
        />

        <CSRActivity
          title="Scholarship Program"
          description="Enabled educational advancement for 300+ students through structured scholarship and academic support programs."
          images={[ 
            "/images/a11.png"
            //"https://images.unsplash.com/photo-1523050338692-7b835a07773f?auto=format&fit=crop&q=80&w=400",
           
        ]}
        />
      </div>
    </div>
  );
};

export default CSRShowcase;