import { courses } from "../data/coursesData";
import CourseCard from "../components/card/CourseCard";

const CoursesGrid = () => {
  return (
    <section className="bg-[#F7F8FC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-sm font-medium text-slate-500">
          Showing {courses.length} courses
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;
