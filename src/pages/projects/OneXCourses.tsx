import React from 'react';

interface Course {
  image: string;
  title: string;
  description: string;
  outcome: string;
  format: string;
  level: string;
  duration: string;
}

const courses: Course[] = [
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
    title: "Real Estate Professional Program Structure",
    description: "Build essential skills in AI-powered real estate tools, digital workflows, and client engagement strategies.",
    outcome: "Industry-ready expertise with a Certified Real Estate Professional credential.",
    format: "Video + Live + Webinar + Tools",
    level: "Beginner, Intermediate",
    duration: "5 Weeks"
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
    title: "Real Estate Manager Program Structure",
    description: "Learn to design and optimize AI-driven real estate marketing campaigns that attract, convert, and retain clients.",
    outcome: "Practical mastery of lead generation and analytics with a Certified Real Estate Marketing Specialist certificate.",
    format: "Video + Live + Webinar + Tools",
    level: "Beginner, Intermediate",
    duration: "8 Weeks"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
    title: "Real Estate Expert Program Structure",
    description: "Advance your career by mastering AI-based market intelligence, predictive trends, and scalable growth strategies.",
    outcome: "Strategic leadership skills with a Certified Real Estate Expert designation.",
    format: "Video + Live + Webinar + Tools",
    level: "Intermediate, Expert",
    duration: "8 Weeks"
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    title: "Business Gateway Program",
    description: "To position entrepreneurs from Dry Fruits, Construction, Property, Forex, Crypto, Import-Export, Fabric, and Gold Jewellery sectors to explore Dubai's Business Influence-model while understanding cross-border trade dynamics.",
    outcome: "",
    format: "Dubai Tour + Class",
    level: "Intermediate, Industrial Expert",
    duration: "4 Nights | 5 Days"
  }
];

const OneXCourses = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-16 font-sans">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14 text-center lg:text-left">
          <h2 className="text-[#1a1c3d] text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            ONEX ACADEMY COURSES
          </h2>
          <div className="w-20 h-[3px] bg-[#1a1c3d] mt-3 mx-auto lg:mx-0" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base">
            Industry-focused programs designed to build practical expertise and global career opportunities.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                
                <h3 className="text-[#1a1c3d] font-bold text-lg leading-snug mb-3 group-hover:text-red-600 transition">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                {course.outcome && (
                  <p className="text-gray-700 text-sm mb-5">
                    <span className="font-semibold italic underline">Outcome:</span>{" "}
                    {course.outcome}
                  </p>
                )}

                {/* Footer */}
                <div className="mt-auto pt-5 border-t border-gray-100 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-gray-500">Format</p>
                    <p className="text-[11px] text-gray-700 leading-tight">{course.format}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-gray-500">Level</p>
                    <p className="text-[11px] text-gray-700 leading-tight">{course.level}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-gray-500">Duration</p>
                    <p className="text-[11px] text-gray-700 leading-tight">{course.duration}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Image */}
          <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg">
            <img 
            //   src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800" 
              src="/images/g1.png"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stats */}
          <div className="lg:col-span-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col justify-center">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              <div className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0 sm:pr-6">
                <h4 className="text-red-600 font-extrabold text-2xl">180+</h4>
                <p className="text-[#1a1c3d] font-semibold text-sm">Participants Trained in 2025</p>
              </div>

              <div className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0 sm:pr-6">
                <h4 className="text-[#1a1c3d] font-extrabold text-xl">
                  <span className="text-red-600">7.2M AED</span>
                </h4>
                <p className="text-[#1a1c3d] font-semibold text-sm">
                  Total Commissions Earned
                </p>
              </div>

              <div className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0 sm:pr-6">
                <h4 className="text-[#1a1c3d] font-extrabold text-sm uppercase">
                  Expert Training Programs Delivered
                </h4>
              </div>

              <div className="text-center sm:text-left">
                <h4 className="text-[#1a1c3d] font-extrabold text-2xl">10+</h4>
                <p className="text-[#1a1c3d] font-semibold text-sm uppercase">
                  Batches Completed
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default OneXCourses;