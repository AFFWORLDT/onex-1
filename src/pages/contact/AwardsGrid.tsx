import React from 'react';
import Image from 'next/image';

interface AwardItem {
  id: number;
  imageUrl: string;
  presenter?: string;
  title: string;
  subtitle?: string;
  description: string;
}

const awards: AwardItem[] = [
  {
    id: 1,
    imageUrl: "/images/award2.png",
    presenter: "Dr Nittin K.A. Receiving",
    title: "BHARAT SIKSHA RATAN AWARD",
    description: "From Union Minister Sh. Harish Rawat at New Delhi."
  },
  {
    id: 2,
    imageUrl: "/images/1.png",
    presenter: "Outstanding Accomplishment and Excellence in the field of Technical Education Dr Nittin K.A. Receiving",
    title: "SIKSHA RATAN AWARD",
    description: "From Shri. Shivraj Patil (Governor) Punjab."
  },
  {
    id: 3,
    imageUrl: "/images/a2.png",
    presenter: "Dr Nittin K.A. Receiving",
    title: "BIRLA SCHOOL ALUMNI AWARD, 2013",
    description: "For EXCELLENCE IN EDUCATION MANAGEMENT."
  },
  {
    id: 4,
    imageUrl: "/images/a3.png",
    presenter: "Dr Nittin K.A. Receiving",
    title: "CMAI National Haryana Education Awards 2014",
    description: "Given Hon'ble Dr. ML Ranga Vice Chancellor"
  },
  {
    id: 5,
    imageUrl: "/images/ZeeAward.png",
    presenter: "Governor Acharya Devrat presented",
    title: "ZEE PRIDE AWARD",
    description: "Pride of Punjab, Haryana, Himachal ward \"Best Emerging Brand\" Dr Nittin K.A Receiving A Social Activity Free Distribution a 10,000 Pair of Shoes Needy Kids in India."
  },
  {
    id: 6,
    imageUrl: "/images/3.png",
    presenter: "Dr Nittin K.A. Receiving",
    title: "Outstanding College Award 2012,",
    description: "by a panel of experts at \"SOE Global Education Awards\"."
  },
  {
    id: 7,
    imageUrl: "/images/a1.png",
    presenter: "Social Activities Free Education Bus, Shiksha Yatra To teach Digital Education for Rural Poor kids, Women and Old Men",
    title: "PRANAMI SWABHIMAN AWARD",
    description: "Given Hon'ble Swami Sadanand ji Maharaj"
  },
  {
    id: 8,
    imageUrl: "/images/a4.png",
    presenter: "Dr Nittin K.A. Receiving",
    title: "Mother TERESA SADBHAVANA AWARD",
    description: "FOR Outstanding Individual Achievement and Distinguished Services to the Nation 2013"
  }
];

export default function AwardsGrid() {
  return (
    <section className="bg-white py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Awards & Recognitions</h2>
        <p className="text-xs text-slate-500 font-medium mt-1">My Priority Nation First</p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {awards.map((award) => (
          <div key={award.id} className="bg-slate-50 p-5 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden border border-slate-200 bg-white">
              <Image
                src={award.imageUrl}
                alt={award.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow">
              {award.presenter && (
                <p className="text-[10px] leading-tight text-slate-500 font-medium mb-1 uppercase italic">
                  {award.presenter}
                </p>
              )}
              <h3 className="text-[13px] font-black text-slate-800 leading-tight mb-2 tracking-tight">
                {award.title}
              </h3>
              <p className="text-[10px] leading-relaxed text-slate-600 mt-auto border-t border-slate-200 pt-2">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}