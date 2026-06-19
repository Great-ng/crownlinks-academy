import type { AccreditationItem, FeatureItem, StepItem } from "../types/home.types";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const features: FeatureItem[] = [
  {
    id: "accredited",
    title: "Accredited Courses",
    description: "Internationally recognised qualifications.",
    iconBg: "bg-blue-50",
    iconColor: "text-[#2B5DE0]",
    icon: "award",
  },
  {
    id: "industry",
    title: "Industry-Focused",
    description: "Curriculum designed by experts.",
    iconBg: "bg-violet-50",
    iconColor: "text-[#6F4BFF]",
    icon: "briefcase",
  },
  {
    id: "self-paced",
    title: "Self-Paced Study",
    description: "Learn anytime, anywhere at your own pace.",
    iconBg: "bg-amber-50",
    iconColor: "text-[#F08A4B]",
    icon: "clock",
  },
  {
    id: "certified",
    title: "Certification Included",
    description: "Receive certificates upon completion.",
    iconBg: "bg-emerald-50",
    iconColor: "text-[#1C9E52]",
    icon: "certificate",
  },
];

export const steps: StepItem[] = [
  {
    id: "choose",
    number: "1",
    title: "Choose Your Course",
    description: "Browse our catalogue and select the perfect course for your career goals.",
  },
  {
    id: "enrol",
    number: "2",
    title: "Enrol & Pay",
    description: "Complete your enrolment with secure payment and receive instant access credentials.",
  },
  {
    id: "learn",
    number: "3",
    title: "Learn & Study",
    description: "Access your course materials on the learning platform and study at your own pace.",
  },
  {
    id: "certify",
    number: "4",
    title: "Get Certified",
    description: "Complete your course and receive your accredited certificate to boost your career.",
  },
];

export const accreditations: AccreditationItem[] = [
  {
    id: "ilm",
    name: "ILM",
    subtitle: "Institute of Leadership & Management",
    accent: "border-t-[#2B5DE0]",
  },
  {
    id: "city-guilds",
    name: "City & Guilds",
    subtitle: "London Institute",
    accent: "border-t-[#F04A4A]",
  },
  {
    id: "ncfe",
    name: "NCFE",
    subtitle: "Awarding Body",
    accent: "border-t-[#6F4BFF]",
  },
  {
    id: "othm",
    name: "OTHM",
    subtitle: "Qualifications",
    accent: "border-t-[#F08A4B]",
  },
];
