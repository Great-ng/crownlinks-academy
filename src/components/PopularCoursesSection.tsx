import SectionHeading from "./SectionHeading";
import CourseCard from "./card/CourseCard";
import { courses } from "../data/coursesData";
import Button from "./Button";

const PopularCoursesSection = () => {
  return (
    <section id="courses" className="bg-[#F7F8FC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Explore Our Popular Courses"
            title="Discover our most sought-after programs"
            description="Built to help learners advance their careers with practical and recognised qualifications."
            center={false}
          />
          <Button variant="secondary" className="self-start md:self-auto">
            View All Courses →
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {courses.slice(0, 4).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
