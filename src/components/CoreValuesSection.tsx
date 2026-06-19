import { coreValues } from "../data/aboutData";

const CoreValuesSection = () => {
  return (
    <section className="bg-[#F7F8FC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black text-[#17263D]">Our Core Values</h2>
          <p className="mt-4 text-sm text-slate-500 sm:text-base">
            The principles that guide everything we do at CrownLinks Academy.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coreValues.map((value) => (
            <article key={value.title} className="rounded-[18px] border border-[#E8ECF3] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-2xl" style={{ color: value.accent }}>
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-[#17263D]">{value.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;