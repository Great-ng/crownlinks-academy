const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F8FC] via-[#FBFCFE] to-white py-20 sm:py-24 lg:py-28">
      {/* Background Decorations */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#DDEBFF] opacity-80 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[12%] h-[340px] w-[340px] rounded-full border border-[#D6E5FF]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-[25%] h-[220px] w-[220px] rounded-full bg-[#FFE7D7] opacity-70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-[25%] h-[300px] w-[300px] rounded-full bg-[#EEF5FF] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-70px] right-[25%] h-[210px] w-[210px] rounded-full border border-[#EDF3FD]"
      />

      {/* Subtle Dot Pattern */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#2B5DE0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}

        <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE5F4] bg-white px-5 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-orange)]" />

          <span className="text-sm font-semibold text-[var(--brand-blue)]">
            Contact Us
          </span>
        </div>

        {/* Heading */}

        <h1 className="mx-auto mt-7 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-[#17263D] sm:text-5xl lg:text-6xl">
          Get in Touch
        </h1>

        {/* Accent Line */}

        <div className="mx-auto mt-6 h-[4px] w-28 rounded-full bg-gradient-to-r from-[var(--brand-orange)] to-[#FFD8BD]" />

        {/* Description */}

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Have a question? We&apos;d love to hear from you. Send us a message
          and our team will get back to you as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;