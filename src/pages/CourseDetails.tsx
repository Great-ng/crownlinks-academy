import { Link, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { courses } from "../data/coursesData";

const CourseDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <MainLayout>
        <section className="mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="text-3xl font-black text-[#17263D]">Course not found</h1>
          <Link
            to="/courses"
            className="mt-6 inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 font-semibold text-white"
          >
            Back to Courses
          </Link>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F8FC_100%)] py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
                Course Detail
              </div>

              <h1 className="mt-5 max-w-2xl text-4xl font-black leading-[1.05] text-[var(--brand-blue)] sm:text-5xl lg:text-[4rem]">
                {course.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {course.overview}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#EEF0FF] px-4 py-2 text-sm font-medium text-[#6B6FE8]">
                  {course.duration}
                </span>
                <span className="rounded-full bg-[#EEF0FF] px-4 py-2 text-sm font-medium text-[#6B6FE8]">
                  {course.level}
                </span>
                <span className="rounded-full bg-[#EEF0FF] px-4 py-2 text-sm font-medium text-[#6B6FE8]">
                  {course.mode}
                </span>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={`/enroll/${course.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-orange)] px-7 py-4 text-white shadow-sm transition hover:opacity-90"
                >
                  Enroll Now
                </Link>

                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--brand-line)] bg-white px-7 py-4 text-[var(--brand-ink)] transition hover:bg-slate-50"
                >
                  Back to Courses
                </Link>
              </div>
            </div>

            <div className="lg:pt-10">
              <img
                src={course.image}
                alt={course.title}
                className="h-[320px] w-full rounded-[24px] object-cover shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:h-[420px]"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[24px] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <h2 className="text-2xl font-black text-[#17263D]">Overview</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {course.overview}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {course.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-[#10B981]">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[24px] bg-[#F3F1FF] p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <h2 className="text-2xl font-black text-[#17263D]">Tuition & Outcomes</h2>
              <div className="mt-4 text-3xl font-black text-[var(--brand-orange)]">
                {course.price}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                This track includes mentor support, feedback loops, and career guidance.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {course.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-[#10B981]">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-[18px] bg-white p-5">
                <p className="text-sm text-slate-500">
                  Career opportunities after this course include:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {course.careerPaths.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#EEF0FF] px-4 py-2 text-xs font-semibold text-[#4B56C0]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CourseDetails;