import { aboutStats } from "../data/aboutData";

const AboutStatsSection = () => {
  return (
    <section className="bg-[#F7F8FC] py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {aboutStats.map((stat) => (
          <div key={stat.label} className="border-l-2 pl-4" style={{ borderColor: stat.accent }}>
            <div className="text-4xl font-black text-[#2C4B6E]">{stat.value}</div>
            <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStatsSection;