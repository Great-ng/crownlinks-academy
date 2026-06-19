import { Link } from "react-router-dom";
import type { Course } from "../../types/course.types";
import { HiClock, HiDesktopComputer } from "react-icons/hi";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article className={`overflow-hidden rounded-3xl border border-[#E6EBF3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${course.accent} border-t-4p`}>
      <div className="relative">
        <img src={course.image} alt={course.title} className="h-60 w-full object-cover" />
        <div className="absolute left-4 top-4 rounded-full bg-[#EAF1FF] px-3 py-1 text-xs font-semibold text-[#2B5DE0]">
          {course.category}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-[#FFF2E8] px-3 py-1 text-xs font-semibold text-[#F08A4B]">
          {course.level}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-extrabold leading-tight text-[#17263D]">
          {course.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {course.description}
        </p>

        <div className="mt-5 flex items-center gap-5 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <HiClock />
            {course.duration || "Flexible"}
          </div>
          <div className="flex items-center gap-2">
            <HiDesktopComputer />
            {course.mode || "Online"}
          </div>
        </div>

        <div className="mt-6 text-3xl font-black text-[#17263D]">
          {course.price}
        </div>

        <Link
          to={`/courses/${course.slug}`}
          className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-[#17263D] px-6 py-4 text-sm font-bold text-[#17263D] transition hover:bg-[#17263D] hover:text-white"
        >
          View Course Details →
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;
