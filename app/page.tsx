import Cta from "@/components/Cta";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatSection";
import TeamPreview from "@/components/TeamPreview";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection 
        badgeText="Welcome to North Peak"
        title="Leading the Way in" 
        highlight="Healthcare Excellence"
        subtitle="Comprehensive Care, Compassionate Service - Your Health is Our Priority"
        background="/hero_background.png"
      />
        {/* <div className="flex gap-4 mt-8">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Emergency call</Button>
        </div> */}

      <StatsSection />
      <WhyUs />
      <ServicesPreview />
      <TeamPreview />
      <Cta />

      
    </>

  );
}
