import { timeline } from "../data/aboutData";

const StoryTimelineSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black text-[#17263D]">Our Story</h2>
          <p className="mt-4 text-sm text-slate-500 sm:text-base">
            A journey of continuous growth and commitment to educational excellence.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 lg:block" />

          <div className="space-y-20">
            {timeline.map((item) => (
              <div key={item.year} className="grid items-center gap-8 lg:grid-cols-2">
                <div
                  className={`${
                    item.side === "left" ? "lg:pr-16 lg:text-right" : "lg:order-2 lg:pl-16 lg:text-left"
                  }`}
                >
                  <div
                    className="text-4xl font-black"
                    style={{ color: item.accent }}
                  >
                    {item.year}
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-[#17263D]">{item.title}</h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500 lg:mx-0">
                    {item.description}
                  </p>
                </div>

                <div className="hidden justify-center lg:flex">
                  <span
                    className="relative z-10 h-4 w-4 rounded-full border-4 border-white shadow-md"
                    style={{ backgroundColor: item.accent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTimelineSection;