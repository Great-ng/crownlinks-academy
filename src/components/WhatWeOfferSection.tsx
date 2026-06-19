import { offers } from "../data/aboutData";

const WhatWeOfferSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black text-[#17263D]">What We Offer</h2>
          <p className="mt-4 text-sm text-slate-500 sm:text-base">
            Comprehensive training solutions designed for your success
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {offers.map((offer) => (
            <article key={offer.title} className="rounded-[16px] border border-[#E8ECF3] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
              <div className="flex items-start gap-4">
                <div className="text-2xl">{offer.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-[#17263D]">{offer.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{offer.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;