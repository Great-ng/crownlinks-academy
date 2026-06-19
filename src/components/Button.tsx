import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200";

const styles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-[var(--brand-orange)] text-white shadow-sm hover:opacity-90",
  secondary: "bg-white text-[var(--brand-ink)] border border-[var(--brand-line)] hover:bg-slate-50",
  ghost: "bg-transparent text-[var(--brand-ink)] hover:bg-white/70",
};

const Button = ({ variant = "primary", children, className = "", ...props }: ButtonProps) => {
  return (
    <button className={`${base} ${styles[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;
