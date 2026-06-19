import SectionHeading from "./SectionHeading";
import { steps } from "../data/homeData";
import StepCard from "./card/StepCard";

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          description="Getting started with your professional development is simple and straightforward."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
