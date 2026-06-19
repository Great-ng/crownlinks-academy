import { courseCategories } from "../data/coursesData";

const CoursesHero = () => {
  return (
    <section className="bg-[linear-gradient(90deg,#264E86_0%,#1F3B67_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-5xl font-black text-white">Our Courses</h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
          Discover our wide range of accredited online courses designed to help you achieve your career goals.
        </p>

        <div className="mt-10 rounded-[24px] bg-white p-5 shadow-xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <input
              type="text"
              placeholder="Search courses..."
              className="h-14 flex-1 rounded-2xl border border-slate-200 px-5 outline-none"
            />
            <div className="flex flex-wrap gap-3">
              {courseCategories.map((category) => (
                <button
                  key={category}
                  className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium transition hover:bg-[#2B5DE0] hover:text-white"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
