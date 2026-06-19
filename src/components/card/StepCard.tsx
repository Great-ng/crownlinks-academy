import type { StepItem } from "../../types/home.types";

interface StepCardProps {
  step: StepItem;
  isLast?: boolean;
}

const StepCard = ({ step, isLast = false }: StepCardProps) => {
  return (
    <div className="relative">
      {!isLast && (
        <div className="absolute left-[50%] top-6 hidden h-[2px] w-full bg-[#DDE5F5] lg:block" />
      )}

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#17263D] text-xl font-extrabold text-white shadow-sm">
          {step.number}
        </div>
        <h3 className="mt-5 text-lg font-bold text-[#17263D]">{step.title}</h3>
        <p className="mt-3 max-w-[240px] text-sm leading-7 text-slate-600">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
