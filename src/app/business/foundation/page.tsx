import SmoothScroll from "@/component/SmoothScroll";
import FullSnapScroll from "@/component/SmoothScroll";
import CSRShowcase from "@/pages/foundation/CSRShowcase";
import OneXFoundation from "@/pages/foundation/OneXFoundation";
import SocialAwardsSection from "@/pages/foundation/SocialAwardsSection";

export default function FoundationPage() {

  return (
    <>
   <SmoothScroll>
      <OneXFoundation/>,
  <CSRShowcase/>,
  <SocialAwardsSection/>
    </SmoothScroll> 
    </>
  );
}