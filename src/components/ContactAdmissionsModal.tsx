import { type FormEvent, useEffect, useRef, useState } from "react";

import { HiOutlineXMark } from "react-icons/hi2";

interface ContactAdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactAdmissionsModal = ({
  isOpen,
  onClose,
}: ContactAdmissionsModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleDialogClose = () => {
    onClose();
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Admissions enquiry:", formData);

    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleDialogClose}
      aria-labelledby="admissions-dialog-title"
      aria-describedby="admissions-dialog-description"
      className="m-auto w-[calc(100%-2rem)] max-w-2xl rounded-[28px] border border-slate-200 bg-white p-0 shadow-[0_30px_100px_rgba(15,23,42,0.25)] backdrop:bg-[#17263D]/60 backdrop:backdrop-blur-sm"
    >
      <div className="relative max-h-[90vh] overflow-y-auto">
        {/* Header */}

        <div className="border-b border-slate-100 px-6 py-6 sm:px-8">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close contact form"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-[#17263D] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]"
          >
            <HiOutlineXMark className="text-xl" />
          </button>

          <span className="inline-flex rounded-full bg-[#EEF3FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--brand-blue)]">
            Contact Admissions
          </span>

          <h2
            id="admissions-dialog-title"
            className="mt-4 pr-10 text-2xl font-black text-[#17263D] sm:text-3xl"
          >
            Let&apos;s help you get started
          </h2>

          <p
            id="admissions-dialog-description"
            className="mt-3 max-w-xl text-sm leading-7 text-slate-500"
          >
            Tell us what you need help with and a member of our admissions
            team will get back to you.
          </p>
        </div>

        {/* Form */}

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 px-6 py-6 sm:px-8 sm:py-8"
          >
            {/* Name + Email */}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="admissions-name"
                  className="mb-2 block text-sm font-semibold text-[#17263D]"
                >
                  Full Name
                </label>

                <input
                  id="admissions-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  autoComplete="name"
                  className="h-13 w-full rounded-xl border border-slate-200 bg-[#FAFBFD] px-4 text-sm text-[#17263D] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="admissions-email"
                  className="mb-2 block text-sm font-semibold text-[#17263D]"
                >
                  Email Address
                </label>

                <input
                  id="admissions-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  autoComplete="email"
                  className="h-13 w-full rounded-xl border border-slate-200 bg-[#FAFBFD] px-4 text-sm text-[#17263D] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Phone + Subject */}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="admissions-phone"
                  className="mb-2 block text-sm font-semibold text-[#17263D]"
                >
                  Phone Number
                </label>

                <input
                  id="admissions-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44..."
                  autoComplete="tel"
                  className="h-13 w-full rounded-xl border border-slate-200 bg-[#FAFBFD] px-4 text-sm text-[#17263D] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="admissions-subject"
                  className="mb-2 block text-sm font-semibold text-[#17263D]"
                >
                  Enquiry Type
                </label>

                <select
                  id="admissions-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-13 w-full rounded-xl border border-slate-200 bg-[#FAFBFD] px-4 text-sm text-[#17263D] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">Select an option</option>
                  <option value="Course Information">
                    Course Information
                  </option>
                  <option value="Admissions">Admissions</option>
                  <option value="Payment">Payment</option>
                  <option value="Course Guidance">Course Guidance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}

            <div>
              <label
                htmlFor="admissions-message"
                className="mb-2 block text-sm font-semibold text-[#17263D]"
              >
                Message
              </label>

              <textarea
                id="admissions-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can our admissions team help you?"
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-slate-200 bg-[#FAFBFD] px-4 py-3 text-sm leading-6 text-[#17263D] outline-none transition focus:border-[var(--brand-blue)] focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Actions */}

            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-[#17263D] transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-full bg-[var(--brand-orange)] px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Send Enquiry →
              </button>
            </div>
          </form>
        ) : (
          /* Success State */

          <div className="px-6 py-12 text-center sm:px-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-2xl text-emerald-600">
              ✓
            </div>

            <h3 className="mt-5 text-2xl font-black text-[#17263D]">
              Enquiry Sent Successfully
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
              Thank you for contacting CrownLinks Academy. Our admissions team
              will review your enquiry and get back to you as soon as possible.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-7 rounded-full bg-[var(--brand-blue)] px-7 py-3 text-sm font-semibold text-white transition hover:shadow-lg"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </dialog>
  );
};

export default ContactAdmissionsModal;