import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin
} from "react-icons/hi2";

export const contactInfo = [
  {
    id: 1,
    title: "Email Address",
    value: "info@crownlinksacademy.co.uk",
    href: "mailto:info@crownlinksacademy.co.uk",
    icon: HiOutlineEnvelope,
    bg: "bg-blue-50",
    color: "text-[var(--brand-blue)]",
  },
  {
    id: 2,
    title: "Phone Number",
    value: "+44 (0) 753 9382 444",
    href: "tel:+447539382444",
    icon: HiOutlinePhone,
    bg: "bg-orange-50",
    color: "text-[var(--brand-orange)]",
  },
  {
    id: 3,
    title: "Office Address",
    value: "46 Lymington Road, Dagenham, Essex RM8 1RR",
    href: "https://maps.google.com/?q=46+Lymington+Road,+Dagenham,+RM8+1RR",
    icon: HiOutlineMapPin,
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
];

export const officeHours = [
  {
    id: 1,
    day: "Monday - Friday",
    time: "9:00 AM - 6:00 PM",
  },
  {
    id: 2,
    day: "Saturday",
    time: "10:00 AM - 4:00 PM",
  },
  {
    id: 3,
    day: "Sunday",
    time: "Closed",
  },
];

export const contactFaqs = [
  {
    id: 1,
    question: "How quickly will I receive a response?",
    answer:
      "Our admissions team usually responds within one business day.",
  },
  {
    id: 2,
    question: "Can I visit your office?",
    answer:
      "Yes. Office visits are available during working hours or by appointment.",
  },
  {
    id: 3,
    question: "Do you offer online courses?",
    answer:
      "Yes. Most of our programmes are delivered online with tutor support.",
  },
  {
    id: 4,
    question: "Do you offer payment plans?",
    answer:
      "Yes. Flexible payment plans are available on selected programmes.",
  },
  {
    id: 5,
    question: "How do I enrol?",
    answer:
      "Browse a course, open the course details page, click Enrol Now, complete the application form, and proceed to payment.",
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    url: "https://facebook.com",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://instagram.com",
  },
];

export const contactSubjects = [
  "General Enquiry",
  "Course Information",
  "Admissions",
  "Payment Support",
  "Technical Support",
  "Partnership",
  "Complaint",
  "Other",
];

export const officeLocation = {
  name: "CrownLinks Academy",
  address: "46 Lymington Road",
  city: "Dagenham",
  county: "Essex",
  postcode: "RM8 1RR",
  country: "United Kingdom",
};

export const googleMap = {
  embedUrl:
    "https://www.google.com/maps?q=46+Lymington+Road,+Dagenham,+Essex,+RM8+1RR&output=embed",

  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=46+Lymington+Road,+Dagenham,+Essex,+RM8+1RR",
};

export const responseTime = {
  title: "Average Response Time",
  description: "We usually respond to all enquiries within 24 business hours.",
};

export const contactHero = {
  badge: "CONTACT US",
  title: "Get in Touch",
  description:
    "Have a question about our courses, admissions, partnerships or learning opportunities? Our team is here to help.",
};