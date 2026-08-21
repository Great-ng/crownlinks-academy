const ContactMap = () => {
  return (
    <section className="bg-[#F7F8FC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[var(--brand-blue)]">
            Visit Us
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#17263D]">
            Find Our Office
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
            We'd love to welcome you to our office. Use the interactive map
            below to locate us quickly and easily.
          </p>

        </div>

        {/* Map */}

        <div className="mt-14 overflow-hidden rounded-[30px] border border-[var(--brand-line)] bg-white shadow-[0_16px_45px_rgba(15,23,42,0.06)]">

          <iframe
            title="CrownLinks Office Location"
            src="https://www.google.com/maps?q=46+Lymington+Road,+Dagenham,+Essex,+RM8+1RR&output=embed"
            loading="lazy"
            className="h-[500px] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

        {/* Address Card */}

        <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-[24px] border border-[var(--brand-line)] bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.05)] lg:flex-row">

          <div>

            <h3 className="text-2xl font-bold text-[#17263D]">
              CrownLinks Academy
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              46 Lymington Road
              <br />
              Dagenham
              <br />
              Essex RM8 1RR
              <br />
              United Kingdom
            </p>

          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=46+Lymington+Road,+Dagenham,+Essex,+RM8+1RR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[var(--brand-orange)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Get Directions →
          </a>

        </div>

      </div>
    </section>
  );
};

export default ContactMap;