interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  maxWidthClassName?: string;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  showAccentLine?: boolean;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  center = true,
  maxWidthClassName = "max-w-3xl",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  showAccentLine = false,
}: SectionHeadingProps) => {
  return (
    <div className={`${center ? "text-center" : "text-left"} ${className}`.trim()}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ${eyebrowClassName}`}
        >
          <span className="h-2 w-2 rounded-full bg-[var(--brand-orange)]" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={[
          "mt-6 font-black tracking-tight text-[#17263D]",
          "text-3xl sm:text-4xl lg:text-[3rem]",
          titleClassName,
        ].join(" ")}
      >
        {title}
      </h2>

      {showAccentLine && (
        <div
          className={`mx-auto mt-6 h-[3px] w-28 rounded-full bg-[linear-gradient(90deg,#F4B185_0%,#F9DDCF_100%)] ${
            center ? "" : "mx-0"
          }`}
        />
      )}

      {description && (
        <p
          className={`mx-auto mt-4 ${maxWidthClassName} text-sm leading-7 text-slate-500 sm:text-base ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;