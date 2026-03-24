import SmoothScroll from "@/component/SmoothScroll";
import GlobalReach from "@/pages/verticals/GlobalReach";
import OnexDevelopment from "@/pages/verticals/OnexDevelopment";
import ProjectsInCanada from "@/pages/verticals/ProjectsInCanada";
import ProjectsInIndia from "@/pages/verticals/ProjectsInIndia";
import ProjectUAE from "@/pages/verticals/ProjectUAE";
import WhyOnexDevelopments from "@/pages/verticals/WhyOnexDevelopments";

export default function VerticalsPage() {
  
 
  return (
    <> 
    <SmoothScroll>
       <GlobalReach />
  <OnexDevelopment />
  <WhyOnexDevelopments />
  <ProjectsInCanada />
  <ProjectsInIndia />
  <ProjectUAE />
    </SmoothScroll>
   
    </>
  );
}