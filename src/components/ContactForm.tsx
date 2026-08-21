import { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    // Backend Integration
    // POST /api/contact
  };

  return (
    <div className="rounded-[30px] border border-[var(--brand-line)] bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.06)] lg:p-10">
      {/* Header */}

      <div>
        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[var(--brand-blue)]">
          Send us a Message
        </span>

        <h2 className="mt-5 text-3xl font-black text-[#17263D]">
          Get in Touch
        </h2>

        <p className="mt-3 text-slate-500 leading-7">
          Complete the form below and one of our advisors will
          respond as quickly as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">

        {/* First Row */}

        <div className="grid gap-6 md:grid-cols-2">

          <InputField
            icon={<HiOutlineUser />}
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
          />

          <InputField
            icon={<HiOutlineUser />}
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
          />

        </div>

        {/* Second Row */}

        <div className="grid gap-6 md:grid-cols-2">

          <InputField
            icon={<HiOutlineEnvelope />}
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@email.com"
          />

          <InputField
            icon={<HiOutlinePhone />}
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44..."
          />

        </div>

        {/* Subject */}

        <InputField
          icon={<HiOutlineChatBubbleLeftRight />}
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help?"
        />

        {/* Message */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-[#17263D]">
            Message
          </label>

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full rounded-2xl border border-slate-200 bg-[#FAFBFD] px-5 py-4 text-sm outline-none transition-all duration-300 focus:border-[var(--brand-blue)] focus:bg-white focus:ring-4 focus:ring-blue-100"
          />

        </div>

        {/* Button */}

        <button
          type="submit"
          className="inline-flex items-center rounded-full bg-[var(--brand-orange)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Send Message →
        </button>

      </form>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const InputField = ({
  label,
  name,
  value,
  placeholder,
  icon,
  onChange,
  type = "text",
}: InputFieldProps) => {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-[#17263D]">
        {label}
      </label>

      <div className="relative">

        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-slate-400">
          {icon}
        </span>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-14 w-full rounded-2xl border border-slate-200 bg-[#FAFBFD] pl-14 pr-5 text-sm outline-none transition-all duration-300 focus:border-[var(--brand-blue)] focus:bg-white focus:ring-4 focus:ring-blue-100"
        />

      </div>

    </div>
  );
};

export default ContactForm;