import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import ContactAdmissionsModal from "./ContactAdmissionsModal";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "Our admissions and support team typically responds to all enquiries within 24 business hours. During busy periods, responses may take slightly longer.",
  },
  {
    question: "Can I visit your office before enrolling?",
    answer:
      "Yes. Office visits are available by appointment during our working hours. Please contact us in advance so we can prepare for your visit.",
  },
  {
    question: "Do you offer online learning?",
    answer:
      "Yes. Most CrownLinks Academy programmes are delivered online, allowing you to study from anywhere while receiving tutor support.",
  },
  {
    question: "Do you provide payment plans?",
    answer:
      "Yes. Selected courses allow flexible payment plans. Our admissions team will explain the available options during enrolment.",
  },
  {
    question: "How do I enrol on a course?",
    answer:
      "Simply browse our courses, choose your preferred programme, click 'Enrol Now', complete the application form, and proceed with payment.",
  },
];

const ContactFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background decoration */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#EEF3FF] opacity-70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-32 h-80 w-80 rounded-full bg-[#FFF0E7] opacity-60 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-[#DCE6F7] bg-[#F4F7FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-blue)]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-[#17263D] sm:text-4xl lg:text-[2.75rem]">
            You Might Be Wondering...
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
            Find answers to the most common questions about our courses,
            enrolment process, payment options, and student support.
          </p>
        </div>

        {/* FAQ List */}

        <div className="mt-12 space-y-4 sm:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <article
                key={faq.question}
                className={[
                  "overflow-hidden rounded-[20px] border bg-white transition-all duration-300",
                  isOpen
                    ? "border-[#C9D9F5] shadow-[0_12px_35px_rgba(43,93,224,0.08)]"
                    : "border-[var(--brand-line)] shadow-[0_5px_20px_rgba(15,23,42,0.03)]",
                ].join(" ")}
              >
                {/* Question */}

                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(index)}
                  className={[
                    "flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-all duration-300 sm:px-8 sm:py-6",
                    isOpen
                      ? "bg-[#F8FAFF]"
                      : "bg-white hover:bg-slate-50",
                  ].join(" ")}
                >
                  <span className="text-base font-bold leading-7 text-[#17263D] sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={[
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                      isOpen
                        ? "bg-[var(--brand-blue)] text-white"
                        : "bg-[#EEF3FF] text-[var(--brand-blue)]",
                    ].join(" ")}
                  >
                    <HiChevronDown
                      aria-hidden="true"
                      className={[
                        "text-xl transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                    />
                  </span>
                </button>

                {/* Answer */}

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={[
                    "grid transition-all duration-300 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-slate-100 px-6 py-5 sm:px-8 sm:py-6">
                      <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="relative mt-16 overflow-hidden rounded-[30px] bg-gradient-to-r from-[var(--brand-blue)] via-[#3769E5] to-[#4A7BEE] px-6 py-12 text-center shadow-[0_20px_60px_rgba(43,93,224,0.18)] sm:mt-20 sm:px-10 sm:py-14">
          {/* Decorative circles */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -right-16 h-72 w-72 rounded-full border border-white/10 bg-white/5"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl"
          />

          {/* CTA Content */}

          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white sm:text-4xl">
              Still Have Questions?
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
              Our admissions team is always available to help you choose the
              right programme and guide you through the enrolment process.
            </p>

            <button
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--brand-orange)] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(240,138,75,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--brand-blue)]"
            >
              Contact Our Team
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Admissions Modal */}

      <ContactAdmissionsModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default ContactFaq;