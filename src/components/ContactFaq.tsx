import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const faqs = [
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

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[var(--brand-blue)]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#17263D]">
            You Might Be Wondering...
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-500">
            Find answers to the most common questions about our courses,
            enrolment process, payment options, and student support.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const open = activeIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[22px] border border-[var(--brand-line)] bg-white shadow-sm transition-all duration-300"
              >

                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-slate-50"
                >
                  <span className="text-lg font-semibold text-[#17263D]">
                    {faq.question}
                  </span>

                  <HiChevronDown
                    className={`text-2xl text-[var(--brand-blue)] transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">

                    <div className="border-t border-slate-100 px-8 py-6">

                      <p className="leading-8 text-slate-500">
                        {faq.answer}
                      </p>

                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[30px] bg-gradient-to-r from-[var(--brand-blue)] to-[#4A7BEE] px-10 py-12 text-center text-white">

          <h3 className="text-3xl font-black">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-blue-100 leading-8">
            Our admissions team is always available to help you choose the
            right programme and guide you through the enrolment process.
          </p>

          <button className="mt-8 rounded-full bg-[var(--brand-orange)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            Contact Our Team →
          </button>

        </div>

      </div>
    </section>
  );
};

export default ContactFaq;