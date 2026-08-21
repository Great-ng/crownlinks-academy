import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
import OfficeHours from "./OfficeHours";

const ContactSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}

        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-[#EEF3FF] px-4 py-2 text-sm font-semibold text-[var(--brand-blue)]">
            Get In Touch
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#17263D] sm:text-4xl">
            We&apos;re Here to Help
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Whether you have a question about our courses, enrolment,
            payments, or learning options, our team is ready to assist you.
          </p>
        </div>

        {/* Main Contact Layout */}

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1.55fr_0.85fr] lg:items-start">
          {/* Contact Form */}

          <ContactForm />

          {/* Right Column */}

          <div className="space-y-8">
            <ContactCard />

            <OfficeHours />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;