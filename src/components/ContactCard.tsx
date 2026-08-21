import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineChatBubbleOvalLeftEllipsis,
} from "react-icons/hi2";

const contactItems = [
  {
    id: 1,
    icon: HiOutlineEnvelope,
    title: "Email Address",
    value: "Ade@crownlinksinternational.com",
    href: "mailto:info@crownlinksacademy.co.uk",
    bg: "bg-blue-50",
    color: "text-[var(--brand-blue)]",
  },
  {
    id: 2,
    icon: HiOutlinePhone,
    title: "Phone Number",
    value: "+44 (0) 753 9382 444",
    href: "tel:+447539382444",
    bg: "bg-orange-50",
    color: "text-[var(--brand-orange)]",
  },
  {
    id: 3,
    icon: HiOutlineMapPin,
    title: "Office Address",
    value: "46 Lymington Road, Dagenham, Essex RM8 1RR",
    href: "https://maps.google.com",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
];

const ContactCard = () => {
  return (
    <div className="rounded-[28px] border border-[var(--brand-line)] bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
      {/* Header */}

      <div>
        <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[var(--brand-blue)]">
          Contact Information
        </span>

        <h3 className="mt-5 text-2xl font-black text-[#17263D]">
          We're Here to Help
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          Reach out through any of the contact methods below and our team
          will be happy to assist you.
        </p>
      </div>

      {/* Contact Items */}

      <div className="mt-8 space-y-6">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={item.href}
              target={item.id === 3 ? "_blank" : undefined}
              rel={item.id === 3 ? "noopener noreferrer" : undefined}
              className="group flex items-start gap-4 rounded-2xl border border-slate-100 p-4 transition-all duration-300 hover:border-[var(--brand-blue)] hover:shadow-md"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon className={`text-2xl ${item.color}`} />
              </div>

              <div className="flex-1">
                <h4 className="text-sm font-semibold text-[#17263D]">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-slate-500 group-hover:text-slate-700">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Quick Support */}

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#2B5DE0] to-[#4F7EF3] p-6 text-white">
        <div className="flex items-start gap-3">
          <HiOutlineChatBubbleOvalLeftEllipsis className="mt-1 text-3xl" />

          <div>
            <h4 className="text-lg font-bold">
              Need Immediate Assistance?
            </h4>

            <p className="mt-2 text-sm leading-6 text-blue-100">
              Chat with our admissions team for instant guidance on courses,
              enrolment, or payment options.
            </p>

            <button className="mt-5 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[var(--brand-blue)] transition hover:bg-slate-100">
              Chat on WhatsApp →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;