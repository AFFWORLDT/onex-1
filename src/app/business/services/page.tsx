import SmoothScroll from "@/component/SmoothScroll";

import BPTXMarketplace from "@/pages/services/BPTXMarketplace";
import HomeXSlide from "@/pages/services/HomeXSlide";
import RealEstateTokenization from "@/pages/services/RealEstateTokenization";

export default function ServicesPage() {
  
  return (
    <>
    <SmoothScroll >
       <RealEstateTokenization/>,
  <BPTXMarketplace/>,
  <HomeXSlide/>
      </SmoothScroll>
    </>   
  );
}