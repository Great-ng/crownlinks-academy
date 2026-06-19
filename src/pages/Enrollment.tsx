import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { courses } from "../data/coursesData";

type Step = 1 | 2 | 3;

const Enrollment = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((item) => item.slug === slug);

  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    contactChannel: "WhatsApp",
    studyMode: "Online",
    paymentPlan: "Full Payment",
    startDate: "",
    notes: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  if (!course) {
    return (
      <MainLayout>
        <section className="mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="text-3xl font-black text-[#17263D]">Enrollment not found</h1>
          <Link
            to="/courses"
            className="mt-6 inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 font-semibold text-white"
          >
            Back to Courses
          </Link>
        </section>
      </MainLayout>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Payment flow placeholder. Connect your payment gateway here.");
  };

  return (
    <MainLayout>
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F8FC_100%)] py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-8"
          >
            <div className="inline-flex rounded-full bg-[#EEF0FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6FE8]">
              Enrollment
            </div>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] text-[#17263D] sm:text-5xl">
              Start your
              <br />
              learning journey.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Complete this short form to join the next cohort and get matched to the best track for your goals.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className={[
                  "rounded-full px-4 py-2 text-xs font-medium transition",
                  step === 1 ? "bg-[#EEF0FF] text-[#6B6FE8]" : "bg-slate-100 text-slate-500",
                ].join(" ")}
              >
                1. Your Details
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                className={[
                  "rounded-full px-4 py-2 text-xs font-medium transition",
                  step === 2 ? "bg-[#EEF0FF] text-[#6B6FE8]" : "bg-slate-100 text-slate-500",
                ].join(" ")}
              >
                2. Learning Plan
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className={[
                  "rounded-full px-4 py-2 text-xs font-medium transition",
                  step === 3 ? "bg-[#EEF0FF] text-[#6B6FE8]" : "bg-slate-100 text-slate-500",
                ].join(" ")}
              >
                3. Payment
              </button>
            </div>

            <div className="mt-4 h-1.5 w-full rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#2B5DE0_0%,#F08A4B_100%)] transition-all duration-300"
                style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
              />
            </div>

            {step === 1 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                />
                <Field
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                />
                <Field
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+234..."
                />
                <Field
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ibadan"
                />
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-slate-500">Preferred Contact Channel</label>
                  <select
                    name="contactChannel"
                    value={formData.contactChannel}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-blue)]"
                  >
                    <option>WhatsApp</option>
                    <option>Email</option>
                    <option>Phone Call</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-slate-500">Study Mode</label>
                  <select
                    name="studyMode"
                    value={formData.studyMode}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-blue)]"
                  >
                    <option>Online</option>
                    <option>Both</option>
                    <option>Onsite</option>
                  </select>
                </div>

                <Field
                  label="Preferred Start Date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  type="date"
                />

                <div>
                  <label className="mb-2 block text-sm text-slate-500">Payment Plan</label>
                  <select
                    name="paymentPlan"
                    value={formData.paymentPlan}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-blue)]"
                  >
                    <option>Full Payment</option>
                    <option>Installments</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-slate-500">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-blue)]"
                    placeholder="Tell us anything else you need..."
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-slate-500">Cardholder Name</label>
                  <input
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-blue)]"
                    placeholder="Name on card"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-slate-500">Card Number</label>
                  <input
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    inputMode="numeric"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-blue)]"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <Field
                  label="Expiry Date"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                />

                <Field
                  label="CVV"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                />
              </div>
            )}

            <div className="mt-8 flex justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep((prev) => (prev > 1 ? (prev - 1) as Step : 1))}
                className="rounded-full border border-[var(--brand-line)] px-6 py-3 text-sm font-semibold text-[var(--brand-ink)]"
              >
                Back
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep((prev) => (prev + 1) as Step)}
                  className="rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-semibold text-white"
                >
                  Proceed to Payment
                </button>
              )}
            </div>
          </form>

          <aside className="rounded-[28px] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-8">
            <h2 className="text-3xl font-black text-[#17263D]">Application Summary</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Your selections update in real time so you can confirm everything before submitting.
            </p>

            <div className="mt-6 rounded-[20px] bg-[#F4EAF0] p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Total Tuition
              </div>
              <div className="mt-2 text-4xl font-black text-[var(--brand-orange)]">
                {course.price}
              </div>
              <div className="mt-2 text-sm text-slate-600">
                Registration fee: {course.registrationFee}
              </div>
              <div className="text-sm text-slate-600">
                Payment plan: {formData.paymentPlan}
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <Row label="Name" value={formData.fullName || "Not set"} />
              <Row label="Email" value={formData.email || "Not set"} />
              <Row label="Course" value={course.title} />
              <Row label="Estimated Duration" value={course.duration} />
              <Row label="Mode" value={formData.studyMode || course.mode || "Not selected"} />
              <Row label="Registration Fee" value={course.registrationFee} />
              <Row label="Total Payable" value={course.price} />
              <Row label="Installments" value={formData.paymentPlan === "Installments" ? "Selected" : "1"} />
            </div>

            <div className="mt-6 rounded-[18px] bg-[#F3F0FF] p-5">
              <p className="text-sm text-slate-500">Need guidance before submitting?</p>
              <a href="#contact" className="mt-1 inline-block font-semibold text-[#6B6FE8]">
                Talk to admissions
              </a>
            </div>
          </aside>
        </div>
      </section>
    </MainLayout>
  );
};

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-500">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-blue)]"
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-3">
      <span className="text-slate-500">{label}</span>
      <span className="font-semibold text-[#17263D]">{value}</span>
    </div>
  );
}

export default Enrollment;