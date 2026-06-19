export type Competition = {
  id: string;
  title: string;
  category: string;
  organizer: string;
  image: string;
  role?: string;
};

export type Award = {
  id: string;
  type: string;
  title: string;
  organizer: string;
  description: string;
  year: string;
};

export type Certification = {
  id: string;
  title: string;
  provider: string;
  year: string;
  details: string;
};

export type Project = {
  id: string;
  title: string;
  tags: string[];
  image: string;
  description: string;
};

export const profile = {
  name: "Nino",
  status: "AVAILABLE FOR PROJECTS",
  roles: ["PM", "SOFTWARE", "DATA ANALYST"],
  bio:
    "I turn abstract ideas into actionable plans. As a Software Engineering student, I combine technical logic with Agile discipline—focusing on sprint planning, QA, and requirement scoping. My goal? Organize the chaos, align the team, and make sure we ship on time.",
  quote: "Making project timelines surprisingly fun.",
  photo:
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80&auto=format&fit=crop",
  cvUrl: "#cv",
  contact: {
    email: "mailto:nino@example.com",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/",
    gitlab: "https://gitlab.com/",
  },
};

export const highlights = [
  { id: "ach", icon: "trophy", value: "5+", label: "ACHIEVEMENTS", color: "emerald" },
  { id: "cert", icon: "award", value: "3", label: "CERTIFICATES", color: "blue" },
  { id: "proj", icon: "folder", value: "10+", label: "PROJECTS", color: "teal" },
];

export const competitions: Competition[] = [
  {
    id: "c1",
    title: "Universitas Brawijaya Hackathon",
    category: "SOFTWARE DEVELOPMENT",
    organizer: "Universitas Brawijaya",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "c2",
    title: "Universitas Siliwangi Data Cup",
    category: "DATA SCIENCE",
    organizer: "Universitas Siliwangi",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "c3",
    title: "Gemastik Web Innovation",
    category: "WEB DEVELOPMENT",
    organizer: "Kemdikbud",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "c4",
    title: "Product Management Sprint",
    category: "PRODUCT MANAGEMENT",
    organizer: "PMI Indonesia",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format&fit=crop",
  },
];

export const awards: Award[] = [
  {
    id: "a1",
    type: "SCHOLARSHIP",
    title: "BEST Ambassador Scholarship",
    organizer: "PT Semen Gresik",
    description:
      "Awarded for academic performance, initiative, and active engagement in both academic and non-academic activities.",
    year: "2025",
  },
  {
    id: "a2",
    type: "SCHOLARSHIP",
    title: "KAVOGAMA Award Scholarship",
    organizer: "Alumni of Vocational School UGM",
    description:
      "Recognized for consistent academic progress and contribution to the campus community.",
    year: "2024",
  },
  {
    id: "a3",
    type: "LEADERSHIP AWARD",
    title: "Top 13 – Lead The Future",
    organizer: "Lead The Future",
    description:
      "Selected as a finalist among 25.000+ applicants, highlighting dedication to leadership and impact-driven work.",
    year: "2024",
  },
];

export const certifications: Certification[] = [
  {
    id: "cert1",
    title: "Huawei Certified ICT Associate – AI",
    provider: "Huawei",
    year: "2024",
    details:
      "Foundational concepts in Artificial Intelligence, machine learning algorithms, and Huawei's AI ecosystem (Ascend, MindSpore).",
  },
  {
    id: "cert2",
    title: "Database Programming with SQL",
    provider: "Oracle Academy",
    year: "2023",
    details:
      "Designed and queried relational databases using SQL—covering joins, subqueries, normalization, and transactions.",
  },
  {
    id: "cert3",
    title: "Public Speaking Training",
    provider: "Pegasus Speakers",
    year: "2023",
    details:
      "Hands-on training in audience analysis, narrative structure, and live presentation delivery.",
  },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Tuntun – Accessibility App",
    tags: ["Accessibility", "AI", "Product"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80&auto=format&fit=crop",
    description:
      "A street-navigation app for visually impaired users with on-device object detection and haptic feedback.",
  },
  {
    id: "p2",
    title: "BEM KM UGM Website",
    tags: ["Organization", "Web System"],
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80&auto=format&fit=crop",
    description:
      "Official website for the student executive board featuring articles, transparency reports, and event archives.",
  },
  {
    id: "p3",
    title: "Zerlinda Dental Care Website",
    tags: ["Client", "Company Profile"],
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80&auto=format&fit=crop",
    description:
      "Company-profile site for a dental clinic—booking widget, service catalog, and patient testimonials.",
  },
  {
    id: "p4",
    title: "Sekolah Alam LMS",
    tags: ["LMS", "Education"],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80&auto=format&fit=crop",
    description:
      "A learning-management system tailored to nature-based schools: classes, progress tracking, and parent reports.",
  },
  {
    id: "p5",
    title: "Sprint Insights Dashboard",
    tags: ["Data", "PM Tool"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    description:
      "Internal dashboard turning Jira exports into velocity, burndown, and blocker analytics for engineering leads.",
  },
];
