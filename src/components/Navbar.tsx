import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "text-sm font-medium transition",
      isActive
        ? "text-[var(--brand-blue)] border-b-2 border-[var(--brand-blue)] pb-1"
        : "text-slate-700 hover:text-[var(--brand-blue)]",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--brand-line)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="CrownLinks Academy"
            className="h-20 w-auto object-contain"
          />
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/courses" className={linkClass}>
            Courses
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

        </nav>

        <Link
          to="/courses"
          className="inline-flex items-center justify-center rounded-full bg-[var(--brand-orange)] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-orange)]"
        >
          Get Started
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--brand-line)] bg-white text-2xl text-slate-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--brand-line)] bg-white px-4 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:px-2">
            <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/courses" className={linkClass} onClick={() => setOpen(false)}>
              Courses
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
              Contact
            </NavLink>
            <NavLink
              to="/courses"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-orange)] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-orange)]"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;