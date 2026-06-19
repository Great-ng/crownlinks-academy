import Button from "../components/Button";
import CourseButtonLink from "../components/CourseButtonLink";
import { HiOutlineShieldCheck, HiOutlineAcademicCap, HiOutlineBookOpen, HiOutlineBadgeCheck } from "react-icons/hi";

const stats = [
  {
    id: "students",
    value: "50K+",
    label: "Students Enrolled",
    icon: HiOutlineAcademicCap,
    borderColor: "border-l-[#2B5DE0]",
    iconBg: "bg-blue-50",
    iconColor: "text-[#2B5DE0]",
  },
  {
    id: "courses",
    value: "200+",
    label: "Courses Available",
    icon: HiOutlineBookOpen,
    borderColor: "border-l-[#F08A4B]",
    iconBg: "bg-orange-50",
    iconColor: "text-[#F08A4B]",
  },
  {
    id: "success",
    value: "98%",
    label: "Success Rate",
    icon: HiOutlineBadgeCheck,
    borderColor: "border-l-[#10B981]",
    iconBg: "bg-emerald-50",
    iconColor: "text-[#10B981]",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F7F8FC_0%,#FFFFFF_100%)]">
      <div className="absolute right-0 top-0 h-105 w-105 rounded-full bg-[#EEF3FB]" />
      <div className="absolute left-[36%] top-[54%] h-65 w-65 rounded-full bg-[#F4F7FD]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-9 lg:py-20">
        <div className="relative z-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D9E3F6] bg-white px-4 py-2 text-sm font-medium text-[#1F4CC3] shadow-[0_10px_30px_rgba(31,75,199,0.05)]">
            <span className="inline-flex h-2 w-2 rounded-full bg-(--brand-orange)" />
            UK’s Leading Online Training Provider
          </div>

          <h1 className="mt-7 max-w-xl text-[2.65rem] font-black leading-[1.06] tracking-tight text-[#17263D] sm:text-5xl lg:text-[3.95rem]">
            Transform Your Career With
            <span className="block text-(--brand-blue)">
              Accredited Qualifications
            </span>
          </h1>

          <div className="mt-6 h-0.75 w-44 rounded-full bg-[linear-gradient(90deg,#F4B185_0%,#F9DDCF_100%)]" />

          <p className="mt-6 max-w-xl text-[17px] leading-8 text-slate-600">
            Join over 50,000 professionals who have advanced their careers with CrownLinks Academy.
            Industry-recognized certifications, expert tutors, and flexible online learning designed
            for your success.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CourseButtonLink>
              Browse Courses →
            </CourseButtonLink>
            <Button variant="secondary" className="px-7 py-4 text-[15px]">
              Contact Us
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 rounded-[18px] border border-(--brand-line) bg-white p-2 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className={`flex min-w-42 items-center gap-4 rounded-[14px] border-l-4 bg-white px-5 py-4 ${stat.borderColor}`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.iconBg} ${stat.iconColor}`}>
                    <Icon className="text-2xl" />
                  </div>
                  <div>
                    <div className="text-[1.55rem] font-extrabold leading-none text-[#17263D]">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-135">
            <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[#EEF3FB]" />
            <div className="absolute -left-10 bottom-10 h-32 w-32 rounded-full bg-[#F4F7FD]" />

            <div className="relative overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
                alt="Students studying together"
                className="h-105 w-full object-cover sm:h-125"
              />

              <div className="absolute -left-6 bottom-9 rounded-3xl border border-white bg-white px-4 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-(--brand-blue)">
                    <HiOutlineShieldCheck className="text-lg" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#17263D]">Accredited</div>
                    <div className="text-xs text-slate-500">Industry Recognized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


