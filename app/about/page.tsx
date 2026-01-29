

import Cta from "@/components/Cta";
import HeroSection from "@/components/HeroSection";
import OurMission from "@/components/OurMission";
import OurStory from "@/components/OurStory";
import OurValues from "@/components/OurValues";
import OurVision from "@/components/OurVision";

const About = () => {
  return (
    <>
    <HeroSection 
      title="About Us"
      subtitle="Research contributions advancing knowledge in sustainable agriculture and forestry sciences"
      background="/hero_background.png"
    >
    </HeroSection>
    <OurStory />
    <OurMission />
    <OurVision />
    <OurValues />
    <Cta />
    
    </>
  );
};

export default About;
