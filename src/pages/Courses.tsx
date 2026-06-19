import MainLayout from "../layouts/MainLayout";
import CoursesHero from "../components/CoursesHero";
import CoursesGrid from "../components/CoursesGrid";
//import CTASection from "../components/CTASection";

const Courses = () => {
  return (
    <MainLayout>
      <CoursesHero />
      <CoursesGrid />
    
    </MainLayout>
  );
};

export default Courses;
