import { Link } from "react-router-dom";

interface CourseButtonLinkProps {
  children: React.ReactNode;
  className?: string;
}

const CourseButtonLink = ({ children, className = "" }: CourseButtonLinkProps) => {
  return (
    <Link
      to="/courses"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 bg-(--brand-orange) text-white shadow-sm hover:opacity-90 ${className}`.trim()}
    >
      {children}
    </Link>
  );
};

export default CourseButtonLink;