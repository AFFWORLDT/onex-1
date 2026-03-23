"use client";
import React from "react";
import Image from "next/image";

interface HighlightItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageRight: boolean;
}

const highlights: HighlightItem[] = [
  {
    id: 1,
    title: "Beti Bachao, Beti Padhao",
    description:
      "Empowering young girls through awareness programs and education initiatives.",
    imageUrl: "/images/sa6.png",
    imageRight: true,
  },
  {
    id: 2,
    title: "Shri Ram Dan Kathuria Scholarship",
    description:
      "Supporting 300+ meritorious students with higher education opportunities.",
    imageUrl:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400",
    imageRight: false,
  },
  {
    id: 3,
    title: "Charity for Old Age Homes",
    description:
      "Raised ₹11,00,000 to support elderly care initiatives.",
    imageUrl: "/images/sa7.png",
    imageRight: true,
  },
  {
    id: 4,
    title: "One for One Programme",
    description:
      "Donated 10,000+ pairs of shoes to underprivileged children.",
    imageUrl: "/images/sa8.png",
    imageRight: false,
  },
];

const galleryImages = [
  "/images/sa.png",
  "/images/vent.png",
  "/images/trofy.png",
  "/images/RizwanSajanwith.png",
  "/images/sa2.png",
  "/images/girl.png",
  "/images/sa3.png",
  "/images/sa4.png",
  "/images/sa5.png",
];

export default function KeyHighlights() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-12 bg-white">
      
      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Key Highlights
        </h2>
        <div className="w-16 h-[3px] bg-blue-600 mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT */}
        <section className="lg:col-span-5 space-y-10">
          {highlights.map((item) => (
            <div
              key={item.id}
              className={`group flex flex-col sm:flex-row gap-5 items-center ${
                item.imageRight
                  ? "sm:flex-row"
                  : "sm:flex-row-reverse"
              }`}
            >
              {/* TEXT */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* IMAGE (FIXED FACE ISSUE) */}
              <div className="relative w-full sm:w-44 md:w-48 h-32 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-contain object-top transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </section>

        {/* RIGHT - GALLERY */}
        <section className="lg:col-span-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl shadow-sm group bg-gray-100
                  ${index === 0 ? "col-span-2 row-span-2 h-[260px]" : "h-[150px]"}
                `}
              >
                <Image
                  src={img}
                  alt="gallery"
                  fill
                  className={`
                    ${
                      index === 0
                        ? "object-cover object-top"
                        : "object-contain object-top"
                    }
                    transition duration-700 group-hover:scale-105
                  `}
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}