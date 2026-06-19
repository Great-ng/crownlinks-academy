import type { AccreditationItem } from "../../types/home.types";

interface AccreditationCardProps {
  accreditation: AccreditationItem;
}

const AccreditationCard = ({ accreditation }: AccreditationCardProps) => {
  return (
    <article className={`rounded-3xl border border-(--brand-line) bg-white p-8 text-center shadow-[0_8px_24px_rgba(15,23,42,0.04)] border-t-4 ${accreditation.accent}`}>
      <div className="mb-4 text-4xl font-black tracking-tight text-[#17263D]">
        {accreditation.name}
      </div>
      <p className="text-sm font-medium text-slate-500">{accreditation.subtitle}</p>
    </article>
  );
};

export default AccreditationCard;
