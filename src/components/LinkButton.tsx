// src/components/common/LinkButton.tsx
import { Link } from "react-router-dom";

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const LinkButton = ({ to, children, className = "" }: LinkButtonProps) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 ${className}`.trim()}
    >
      {children}
    </Link>
  );
};

export default LinkButton;