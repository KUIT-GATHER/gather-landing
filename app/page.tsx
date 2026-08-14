import { BottomCtaSection } from "@/components/landing/BottomCtaSection";
import { BrandStatementSection } from "@/components/landing/BrandStatementSection";
import { DifferenceSection } from "@/components/landing/DifferenceSection";
import { ExploreSection } from "@/components/landing/ExploreSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { JourneySection } from "@/components/landing/JourneySection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { VolunteerTypeSection } from "@/components/landing/VolunteerTypeSection";
import { LandingMotion } from "@/components/motion/LandingMotion";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <LandingMotion />

      <main className="overflow-hidden" data-motion-root>
        <HeroSection />
        <FeaturesSection />
        <DifferenceSection />
        <JourneySection />
        <VolunteerTypeSection />
        <ExploreSection />
        <BrandStatementSection />
        <BottomCtaSection />
      </main>

      <LandingFooter />
    </>
  );
}
