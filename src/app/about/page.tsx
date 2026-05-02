import VisionaryLeadership from "@/pages/about/VisionaryLeadership";
import VisionaryStory from "@/component/VisionaryStory";
import ProvenSuccess from "@/pages/about/ProvenSuccess";
import VerticalsTimeline from "@/pages/about/VerticalsTimeline";

export default function AboutPage() {
  return (
    <main className="bg-white text-black pt-32 min-h-screen">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase text-black">
          The <span className="text-gold">Visionary</span>
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto text-lg md:text-xl font-medium">
          Discover the journey, the values, and the unwavering commitment to excellence that defines Dr. Nittin K.A.
        </p>
      </div>

      <VisionaryLeadership />
      <div className="bg-[#fcfcfc] py-20">
        <VisionaryStory />
      </div>
      <ProvenSuccess />
      <div className="bg-white py-20">
        <VerticalsTimeline />
      </div>
    </main>
  );
}
