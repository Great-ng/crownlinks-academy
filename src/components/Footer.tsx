import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { courseCategories } from "../data/coursesData";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(180deg,#F7F8FC_0%,#FFFFFF_100%)]">
      <section className="bg-[#2F5D7C] px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Ready to Start Your Learning
            <br />
            Journey?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            Join thousands of students and take the next step in your career today.
          </p>

          <Link
            to="/courses"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--brand-orange)] px-7 py-4 text-[15px] font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Browse Courses Now
          </Link>

          <div className="mt-6 text-sm text-blue-100">
            <span className="mr-2 text-[#F08A4B]">★</span>
            Rated 4.8/5 by 2,500+ students
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-[24px] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            <img
              src="/logo.png"
              alt="CrownLinks Academy"
              className="h-12 w-auto object-contain"
            />

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-600">
              Professionals training and certification courses to advance your career.
              Accredited qualifications delivered online.
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="mt-0.5 text-lg text-slate-500" />
                <span>
                  CrownLinks Academy 46 Lymington Road Dagenham, Essex RM8 1RR
                </span>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlinePhone className="text-lg text-slate-500" />
                <span>+44 (7) 53 9382 444</span>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineMail className="text-lg text-slate-500" />
                <span>Ade@crownlinksinternational.com</span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                <FaTwitter className="text-sm" />
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                <FaLinkedinIn className="text-sm" />
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                <FaInstagram className="text-sm" />
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                <FaFacebookF className="text-sm" />
              </span>
            </div>
          </aside>

          <div className="rounded-[24px] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            <div className="grid gap-10 lg:grid-cols-4">
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.28em] text-slate-700">
                  Explore
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  <li><Link to="/courses" className="hover:text-[var(--brand-blue)]">All Courses</Link></li>
                  <li><a href="#about" className="hover:text-[var(--brand-blue)]">About Us</a></li>
                  <li><a href="#contact" className="hover:text-[var(--brand-blue)]">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.28em] text-slate-700">
                  Popular Categories
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  {courseCategories
                    .filter((item) => item !== "All")
                    .map((category) => (
                      <li key={category}>
                        <Link to="/courses" className="hover:text-[var(--brand-blue)]">
                          {category}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.28em] text-slate-700">
                  Company
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  <li><a href="#about" className="hover:text-[var(--brand-blue)]">About Us</a></li>
                  <li><a href="#contact" className="hover:text-[var(--brand-blue)]">FAQs</a></li>
                  <li><a href="#contact" className="hover:text-[var(--brand-blue)]">Terms & Conditions</a></li>
                  <li><a href="#contact" className="hover:text-[var(--brand-blue)]">Privacy Policy</a></li>
                </ul>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/courses"
                      className="inline-flex items-center justify-center rounded-full bg-[var(--brand-orange)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                    >
                      Create a free account
                    </Link>

                    <Link
                      to="/courses"
                      className="inline-flex items-center justify-center rounded-full border border-[var(--brand-line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-ink)] transition hover:bg-slate-50"
                    >
                      Enroll now
                    </Link>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex overflow-hidden rounded-xl border border-slate-200">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="min-w-0 flex-1 bg-[#1F2937] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
                    />
                    <button className="bg-[var(--brand-orange)] px-5 py-3 text-sm font-semibold text-white">
                      Subscribe →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-4 px-1 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CrownLinks Academy. All rights reserved.</p>
          <p>Designed for focused learning and career growth.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;