"use client";
import React from "react";
import Image from "next/image";

interface AwardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  receiver: string;
  className?: string;
}

const AwardCard = ({
  image,
  title,
  subtitle,
  description,
  receiver,
  className,
}: AwardProps) => (
  <div className={`flex flex-col ${className}`}>
    <div className="relative aspect-video w-full overflow-hidden border border-gray-200 bg-gray-50 rounded-sm">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>

    <div className="mt-3">
      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
        {receiver}
      </p>
      <h4 className="text-sm font-bold text-slate-800 leading-tight mt-0.5">
        {title}
      </h4>
      <p className="text-[10px] font-semibold text-gray-500 uppercase mt-1">
        {subtitle}
      </p>
      <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function SocialAwardsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 bg-white font-sans">

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

        {/* LEFT */}
        <div className="lg:col-span-7">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
              Social Activities
            </h2>

            <div className="w-12 h-12 sm:w-14 sm:h-14 relative flex-shrink-0">
              <div className="bg-orange-500 rounded-full w-full h-full flex items-center justify-center text-[8px] sm:text-[10px] text-white font-bold text-center leading-none p-1">
                SHIKSHA YATRA
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative mb-16 md:mb-20">
            <div className="relative h-[250px] sm:h-[320px] md:h-[400px] w-full rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/a9.png"
                alt="Main Social Activity"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <h3 className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-white text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
                SHIKSHA YATRA
              </h3>
            </div>

            {/* Overlapping Images */}
            <div className="absolute -bottom-8 sm:-bottom-10 right-2 sm:right-4 flex gap-2 sm:gap-3">
              {["/images/a12.png", "/images/a11.png"].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative border-4 border-white shadow-2xl rounded-sm overflow-hidden"
                >
                  <Image src={i} alt="Sub" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <article className="space-y-4 text-gray-600">
            <h4 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-wide">
              Free Computer Awareness At Your Door By Prannath Parnami Foundation
            </h4>

            <p className="text-sm leading-relaxed text-justify">
              Education is a fundamental right of all citizens of India. Our revered Swami Shri Sadanandji Maharaj believes that we must do everything possible to educate the masses.
            </p>

            <p className="text-sm leading-relaxed text-justify">
              The syllabus includes Computer basics, MS-Word, PowerPoint, Excel, and internet usage. The journey began in February 2013 to empower rural children.
            </p>
          </article>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5">

          {/* Header */}
          <header className="mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              International Awards & Recognitions
            </h2>
            <p className="text-[10px] sm:text-[11px] text-gray-400 tracking-[0.2em] uppercase mt-1">
              My Priority Nation First
            </p>
          </header>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-8 md:gap-y-12">

            <AwardCard
              receiver="Dr Nittin K.A. Receiving"
              image="/images/a6.png"
              title="Asia - Pacific Award, 2011"
              subtitle="Best SportsScienceTechnology, HongKong"
              description="Recognized for excellence in sports technology."
            />

            <AwardCard
              receiver="Dr Nittin K.A. Receiving"
              image="/images/a8.png"
              title="Creative Design Award, 2015"
              subtitle="SportsDesign & Science Technology"
              description="Given by Hon'ble Mr. Intaj Khan, Australia."
            />

            <AwardCard
              receiver="Dr Nittin K.A. Receiving"
              image="/images/a7.png"
              title="Thailand's Export Award, 2016"
              subtitle="Exporter Performance"
              description="Thai government recognition."
            />

            <AwardCard
              receiver="Dr Nittin K.A. Receiving"
              image="/images/a5.png"
              title="WSA MAGIC TRADE Award, 2017"
              subtitle="WSA@Magic Fair, Las Vegas"
              description="Global footwear recognition."
            />
          </div>
        </div>
      </div>
    </div>
  );
}