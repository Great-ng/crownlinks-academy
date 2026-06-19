interface StatPillProps {
  value: string;
  label: string;
  icon: string;
  iconBg: string;
  iconText: string;
}

const StatPill = ({ value, label, icon, iconBg, iconText }: StatPillProps) => {
  return (
    <div className="flex min-w-[160px] items-center gap-4 rounded-3xl border border-[var(--brand-line)] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg} ${iconText}`}>
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <div className="text-2xl font-extrabold text-[#17263D]">{value}</div>
        <div className="text-sm text-slate-500">{label}</div>
      </div>
    </div>
  );
};

export default StatPill;
