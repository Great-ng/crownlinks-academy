import { HiOutlineFlag, HiOutlineSparkles } from "react-icons/hi";
//import SectionHeading from "../components/SectionHeading";

const missionPoints = [
  "High-quality, accredited training",
  "Accessible, affordable, and flexible learning",
  "Support for learners to achieve career goals",
];

const visionPoints = [
  "Pioneering flexible learning methodologies",
  "Expanding access to UK-accredited education",
  "Building a community of ambitious professionals",
];

const MissionVisionSection = () => {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-[18px] border border-[#E8ECF3] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2B5DE0]">
            <HiOutlineFlag className="text-2xl" />
          </div>

          <h2 className="text-2xl font-extrabold text-[#17263D]">Our Mission</h2>

          <h3 className="mt-4 text-base font-bold text-[#2B5DE0]">
            Making Quality Education Accessible to Everyone
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            At CrownLinks Academy, we believe that professional development should be accessible,
            affordable, and flexible. Our mission is to provide high-quality, accredited training
            that empowers individuals to achieve their career goals and reach their full potential.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            We partner with leading UK awarding bodies to deliver courses that are recognised by
            employers worldwide, ensuring that our qualifications have real value in the job market.
          </p>

          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            {missionPoints.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-[#2B5DE0]">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[18px] border border-[#E8ECF3] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[var(--brand-orange)]">
            <HiOutlineSparkles className="text-2xl" />
          </div>

          <h2 className="text-2xl font-extrabold text-[#17263D]">Our Vision</h2>

          <h3 className="mt-4 text-base font-bold text-[var(--brand-orange)]">
            Shaping the Future of Professional Learning
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            We envision a world where continuous learning is the cornerstone of professional
            success. CrownLinks Academy aims to be the premier global provider of online vocational
            training, setting the standard for innovation, quality, and student support.
          </p>

          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            {visionPoints.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-[#10B981]">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default MissionVisionSection;