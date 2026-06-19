//import Button from "./Button";
import CourseButtonLink from "../components/CourseButtonLink";
const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#1F2A37] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,138,75,0.28),transparent_38%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(240,138,75,0.14),transparent_28%)]" />
      <div className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-[#F08A4B]/25 blur-3xl animate-drift-slow" />
      <div className="absolute right-[10%] top-[12%] h-64 w-64 rounded-full bg-white/8 blur-3xl animate-drift-reverse" />
      <div className="absolute bottom-[-8%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#F08A4B]/20 blur-3xl animate-soft-pulse" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold leading-tight text-[#F6E7DB] sm:text-4xl">
          Ready to Start Your Learning
          <br />
          Journey?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#E9D7C8] sm:text-base">
          Join thousands of students and take the next step in your career today.
        </p>

        <CourseButtonLink className="mt-8 bg-[var(--brand-orange)] px-7 py-4 text-[15px] shadow-sm">
          Browse Courses Now
        </CourseButtonLink>

        <div className="mt-6 text-sm text-[#E6CCB6]">
          <span className="mr-2 text-[var(--brand-orange)]">★</span>
          Rated 4.8/5 by 2,500+ students
        </div>
      </div>
    </section>
  );
};

export default CTASection;