import MainLayouts from "../layouts/MainLayouts";
import AboutHero from "../components/AboutHero";
import MissionVisionSection from "../components/MissionVisionSection";
import AboutImageSection from "../components/AboutImageSection";
import AboutStatsSection from "../components/AboutStatsSection";
import StoryTimelineSection from "../components/StoryTimelineSection";
import CoreValuesSection from "../components/CoreValuesSection";
import WhatWeOfferSection from "../components/WhatWeOfferSection";
import AboutAccreditationsSection from "../components/AboutAccreditationsSection";
import AboutCTASection from "../components/AboutCTASection";

const About = () => {
  return (
    <MainLayouts>
      <AboutHero />
      <MissionVisionSection />
      <AboutImageSection />
      <AboutStatsSection />
      <StoryTimelineSection />
      <CoreValuesSection />
      <WhatWeOfferSection />
      <AboutAccreditationsSection />
      <AboutCTASection />
    </MainLayouts>
  );
};

export default About;