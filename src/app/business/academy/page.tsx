import SmoothScroll from "@/component/SmoothScroll";
import AnalysisServices from "@/pages/academy/AnalysisServices";
import RealEstateServiceSlide from "@/pages/academy/RealEstateServiceSlide";
import VocaTechSlide from "@/pages/academy/VocaTechSlide";

export default function AcademyPage() {



  return (
    <>
     <SmoothScroll>
      <RealEstateServiceSlide/>
       <AnalysisServices/>
  <VocaTechSlide/>
      </SmoothScroll>
    </>
  );
}