import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components//HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PopularCoursesSection from "../components/PopularCoursesSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import AboutAccreditationsSection from "../components/AboutAccreditationsSection";
import CourseButtonLink from "../components/CourseButtonLink";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <PopularCoursesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <AboutAccreditationsSection />
      <CourseButtonLink />
    </MainLayout>
  );
};

export default Home;
