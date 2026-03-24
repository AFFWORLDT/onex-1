import SmoothScroll from "@/component/SmoothScroll";
import HotelShowcase from "@/pages/properties/HotelShowcase";
import SevenSeasHero from "@/pages/properties/SevenSeasHero";
import VocatechAbout from "@/pages/properties/VocatechAbout";

export default function PropertiesPage() {

  

  return (
    <>
    <SmoothScroll>
     <VocatechAbout/>
      <SevenSeasHero/>
      <HotelShowcase/>
    </SmoothScroll >
    </>
  );
}