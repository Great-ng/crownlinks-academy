const AboutHero = () => {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F8FC_100%)] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[var(--brand-orange)]" />
          About Us
        </div>

        <h1 className="mt-6 text-4xl font-black tracking-tight text-[#17263D] sm:text-5xl">
          About CrownLinks
          <span className="block text-[var(--brand-blue)]">Academy</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Empowering professionals across the UK with accredited qualifications and industry-recognized certifications since 2009.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;