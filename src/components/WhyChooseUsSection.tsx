import SectionHeading from "../components/SectionHeading";

const reasons = [
  "Industry-recognized certifications",
  "Flexible self-paced learning",
  "Expert tutor support and guidance",
  "Affordable payment plans available",
];

const WhyChooseUsSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20">
      <div className="absolute left-0 top-12 h-64 w-64 rounded-full bg-[#F8EFE7]" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F2F5FB]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-[28px] shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80"
            alt="Learning environment"
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="Why Choose CrownLinks Academy?"
            title="A learning experience built for real progress"
            description="We are committed to accessible, high-quality education that empowers individuals to achieve their professional goals."
            center={false}
          />

          <div className="mt-8 space-y-4">
            {reasons.map((reason, index) => (
              <div key={reason} className="flex items-center gap-4 rounded-2xl bg-[#F6F8FD] px-5 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-orange)] text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="font-medium text-[#17263D]">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
