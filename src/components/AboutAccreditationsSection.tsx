const AboutAccreditationsSection = () => {
  return (
    <section className="bg-[linear-gradient(180deg,#F7F8FC_0%,#FFFFFF_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black text-[#17263D]">Our Global Accreditations</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
            CrownLinks Academy is officially accredited by leading UK awarding bodies, ensuring every qualification you deliver meets the highest professional standards
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-[18px] border-t-4 border-[#2B5DE0] bg-white p-8 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-3xl font-black text-[#17263D]">
              ilm
            </div>
            <h3 className="text-xl font-bold text-[#17263D]">Institute of Leadership & Management (ILM)</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Accredited by ILM, a globally recognized body under City & Guilds, empowering professionals with leadership and management qualifications that drive real workplace impact.
            </p>
          </article>

          <article className="rounded-[18px] border-t-4 border-[#F04A4A] bg-white p-8 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-3xl font-black text-[#17263D]">
              City& Guilds
            </div>
            <h3 className="text-xl font-bold text-[#17263D]">City & Guilds of London Institute</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Accredited by City & Guilds, one of the world’s most respected vocational education organizations, ensuring our learners gain qualifications recognized and valued by employers worldwide.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutAccreditationsSection;