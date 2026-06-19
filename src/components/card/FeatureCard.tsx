import type { FeatureItem } from "../../types/home.types";

interface FeatureCardProps {
  feature: FeatureItem;
}

const iconMap: Record<FeatureItem["icon"], string> = {
  award: "🎓",
  briefcase: "💼",
  clock: "⏰",
  certificate: "🏅",
};

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <article className="rounded-3xl border border-(--brand-line) bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg} ${feature.iconColor}`}>
        <span className="text-2xl">{iconMap[feature.icon]}</span>
      </div>
      <h3 className="text-lg font-bold text-[#17263D]">{feature.title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
    </article>
  );
};

export default FeatureCard;
