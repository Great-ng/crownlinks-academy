// src/data/coursesData.ts
import type { Course } from "../types/course.types";

export const courseCategories = [
  "All",
  "General",
  "Functional Skills & ICT",
  "Health & Social Care",
  "Leadership & Management",
  "Business & Management",
  "Education & Training",
  "Assessment & Quality Assurance",
];

export const courses: Course[] = [
  {
    id: "product-design-ui-ux",
    slug: "product-design-ui-ux-design",
    title: "Product Design (UI/UX Design)",
    category: "General",
    level: "All Levels",
    duration: "3 months",
    mode: "Both",
    price: "£300,000",
    description:
      "Shape digital experiences that people love to use. This course introduces learners to the world of UI/UX and product design.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    accent: "border-t-[#2B5DE0]",
    overview: 
    "This course equips learners with the practical skills needed to design modern digital products and user experiences that are functional, intuitive, and visually engaging.",
  
    highlights: [
      "Introduction to UI/UX Design",
      "Design thinking and problem solving",
      "User research and personas",
      "Wireframing and layout planning",
      "Interface design principles",
      "Prototyping",
      "User testing basics",
      "Portfolio and project presentation",
    ],
    outcomes: [
      "Understand the fundamentals of UI/UX and product design",
      "Apply design thinking and problem-solving techniques to digital products",
      "Conduct basic user research and create user personas",
      "Plan user journeys and organise layouts for better user experience",
      "Create wireframes and interface designs for websites and mobile applications",
      "Use tools such as Figma and Adobe XD for UI/UX projects",
      "Develop interactive prototypes for testing and presentation",
      "Design clear, functional, and visually engaging digital experiences",
    ],
    careerPaths: ["UI Designer", "UX Designer", "Product Design Intern"],
    registrationFee: "₦20,000",
  },

  {
    id: "adult-care-level-4",
    slug: "level-4-diploma-in-adult-care",
    title: "Level 4 Diploma in Adult Care",
    category: "Health & Social Care",
    level: "Level 4",
    duration: "12 Months",
    mode: "Online",
    price: "£2,000.00",
    description:
      "These qualifications are designed to equip learners with the skills and knowledge needed to work in adult care settings.",
    image:
      "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?auto=format&fit=crop&w=1200&q=80",
    accent: "border-t-[#2BB673]",
    overview:
      "A practical qualification for learners who want to build competence in adult care, leadership, safeguarding, and quality standards.",
    highlights: [
      "Adult care principles",
      "Safeguarding and duty of care",
      "Leadership and communication",
      "Health and safety in care",
      "Person-centred support",
      "Professional practice",
    ],
    outcomes: [
      "Understand adult care principles",
      "Lead and support teams effectively",
      "Apply safeguarding procedures correctly",
      "Improve workplace care standards",
    ],
    careerPaths: ["Care Manager", "Support Worker", "Team Leader"],
    registrationFee: "£20,000",
  },
];