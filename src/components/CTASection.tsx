//import Button from "./Button";
import CourseButtonLink from "../components/CourseButtonLink";
const CTASection = () => {
  return (
    <section className="bg-[#2F5D7C] px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
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
