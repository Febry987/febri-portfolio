import febryPhoto from "../img/febryfix.png";
import scm1Photo1 from "../img/scm1.jpeg";
import scm1Photo2 from "../img/scm2.png";
import scm1Photo3 from "../img/scm3.png";
import scm1Photo4 from "../img/scm4.jpeg";
import scm1Photo5 from "../img/scm5.jpeg";
import scm1Photo6 from "../img/scm6.jpeg";
import scm2Photo1 from "../img/scm9.jpeg";
import scm3Photo1 from "../img/scm10.jpg";
import scm4Photo1 from "../img/scm12.jpeg";
import certification1 from "../img/certif1.jpeg";
import certification1Detail from "../img/certif1detail.jpg";

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
  coverImage: string;
  image: string;
};

export type Project = {
  id: string;
  title: string;
  tags: string[];
  image: string;
  description: string;
};

export type WorkExperienceDocument = {
  id: string;
  title: string;
  image: string;
};

export type WorkExperience = {
  id: string;
  company: string;
  role: string;
  location: string;
  employmentType: string;
  start: string;
  end: string;
  coverImage: string;
  summary: string;
  tags: string[];
  responsibilities: string[];
  achievements: string[];
  documents: WorkExperienceDocument[];
};

export const profile = {
  name: "Febry",
  status: "AVAILABLE FOR PROJECTS",
  roles: [],
  bio:
    "I turn complex supply chain challenges into actionable strategies. By combining Supply Chain Management expertise with Data Analytics, I transform data into insights, optimize processes, and drive smarter business decisions.",
  quote: "Making supply chains surprisingly efficient.",
  photo: febryPhoto,
  cvUrl: "#cv",
  contact: {
    email: "mailto:febrimp12@gmail.com",
    instagram: "https://instagram.com/febrympratama/",
    linkedin: "https://linkedin.com/in/febrymahendrapratama/",
    youtube: "https://youtube.com/@febrymahendrapratama1628",
  },
};

export const highlights = [
  { id: "ach", icon: "trophy", value: "5+", label: "ACHIEVEMENTS", color: "emerald" },
  { id: "cert", icon: "award", value: "3", label: "CERTIFICATES", color: "blue" },
  { id: "proj", icon: "folder", value: "10+", label: "PROJECTS", color: "teal" },
];

export const workExperiences: WorkExperience[] = [
  {
    id: "we-coordinatorwarehouse",
    company: "PT Tempopress Mining Indonesia",
    role: "Coordinator Warehouse",
    location: "Onsite – KFM Site",
    employmentType: "Mining",
    start: "2026-01",
    end: "2026-06",
    coverImage: scm1Photo4,
    summary:
      "Managed inbound and outbound material flow for site operations by coordinating deliveries, maintaining inventory accuracy, and validating documentation to support timely availability of critical materials.",
    tags: ["Inventory Management System", "Logistic", "Vendor Coordination", "EHS Implementation"],
    responsibilities: [
      "Coordinated shipment schedules with vendors and site operational teams to align delivery timelines.",
      "Reconciled Delivery Orders (DO) with physical goods received on-site to ensure document accuracy.",
      "Monitored fast-moving inventory items and prepared priority material lists based on operational demand.",
      "Provided daily updates on shipment status, delivery progress, and operational constraints affecting material flow.",
      "Applied warehouse procedures and documentation standards in receiving and dispatch processes.",
    ],
    achievements: [
      "Improved shipment tracking visibility through consistent daily reporting and monitoring practices.",
      "Reduced delivery communication gaps by implementing structured confirmation procedures prior to unloading.",
    ],
    documents: [
      { id: "doc-1", title: "Design and Reconstruction Warehouse", image: scm1Photo2 },
      { id: "doc-2", title: "Reconstruction Warehouse New Layout", image: scm1Photo3 },
      { id: "doc-3", title: "Inbound Outbound Process Relocation", image: scm1Photo1 },
      { id: "doc-4", title: "Bungker Fueling Process From Vendor", image: scm1Photo5 },
      { id: "doc-5", title: "Bungker Fueling Process From Vendor", image: scm1Photo6 },
    ],
  },
  {
    id: "we-ldp",
    company: "PT Tempopress International Delivery",
    role: "Leadership Development Program (LDP)",
    location: "Mobile - Site & Head Office",
    employmentType: "Mining",
    start: "2024-12",
    end: "2025-12",
    coverImage: scm2Photo1,
    summary:
      "Participated in the Leadership Development Program (LDP), focusing on transforming Supply Chain and Production (Nickel) processes into integrated digital solutions adopted as internal enterprise systems.",
    tags: ["Research and System Development", "IT Infrastructure", "Supply Chain", "Production (Mining-Hauling-Barging)"],
    responsibilities: [
      "Completed cross-functional OJT across key business departments.",
      "Analyzed Supply Chain and Production business processes. Translated business needs into system requirements.",
      "Provided support for IT infrastructure operations, including installation, configuration, and maintenance of radio repeater systems, fingerprint attendance devices, and WiFi router networks, ensuring reliable connectivity and operational continuity onsite (MTL Site).",
      "Developed and implemented the TID Enterprise System, integrating core modules including Human Resource Information System (HRIS), Warehouse Management System (WMS), and Health, Safety, and Environment (HSE) Management System.",
    ],
    achievements: [
      "Acquired comprehensive knowledge of end-to-end Supply Chain and Production operations through cross-functional rotations and hands-on project assignments.",
      "Strengthened leadership, analytical thinking, stakeholder management, and project management capabilities through participation in strategic digital transformation initiatives.",
    ],
    documents: [
      { id: "doc-1", title: "Dokumentasi Dashboard", image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1400&q=80&auto=format&fit=crop" },
      { id: "doc-2", title: "Dokumentasi Dataset & EDA", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1400&q=80&auto=format&fit=crop" },
    ],
  },
  {
    id: "we-scm",
    company: "Henkel AG & Co. KGaA",
    role: "Supply Chain Intern (IISMA Program)",
    location: "Dusseldorf - Germany",
    employmentType: "Adhesives & Consumer Goods",
    start: "2024-06",
    end: "2024-06",
    coverImage: scm3Photo1,
    summary:
      "Supported supply chain activities for FMCG and adhesive products through inventory analysis, logistics coordination, and process improvement initiatives within a global manufacturing environment.",
    tags: ["Scope", "Sprint Planning", "Stakeholder"],
    responsibilities: [
      "Supported cross-functional supply chain projects involving procurement, production, and logistics, helping identify process improvements that reduced reporting turnaround time by 20%.",
      "Participated in process mapping and continuous improvement initiatives to understand end-to-end supply chain operations and identify operational bottlenecks.",
      "Assisted in preparing inventory and supply chain reports for FMCG and adhesive product categories, improving data accuracy by 10% through regular data validation and updates.",
    ],
    achievements: [
      "Gained practical exposure to supply chain operations in a multinational FMCG and adhesive manufacturing company.",
      "Strengthened analytical and problem-solving skills through data analysis and cross-functional project assignments in an international environment.",
    ],
    documents: [
      { id: "doc-1", title: "Dokumentasi Sprint Plan", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80&auto=format&fit=crop" },
      { id: "doc-2", title: "Dokumentasi Presentasi", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80&auto=format&fit=crop" },
    ],
  },
  {
    id: "we-business-analyst",
    company: "Techbros GmbH (PT Technologi Digital Nusantara)",
    role: "Business Analyst Intern (IISMA Program)",
    location: "Dusseldorf - Germany",
    employmentType: "Telecommunication & IoT",
    start: "2022-10",
    end: "2023-01",
    coverImage: scm4Photo1,
    summary:
      "Latihan end-to-end: problem framing, breakdown scope, rencana sprint, dan sinkronisasi stakeholder. Fokus pada eksekusi terukur dan komunikasi progres yang jelas.",
    tags: ["Scope", "Sprint Planning", "Stakeholder"],
    responsibilities: [
      "Menyusun user story, acceptance criteria, dan prioritas sprint.",
      "Membuat timeline delivery dan risk register sederhana.",
      "Mempresentasikan progress dan keputusan scope secara terstruktur.",
    ],
    achievements: [
      "Meningkatkan kemampuan framing masalah dan menjembatani kebutuhan stakeholder.",
      "Membiasakan ritme planning yang rapi untuk delivery yang lebih terprediksi.",
    ],
    documents: [
      { id: "doc-1", title: "Dokumentasi Sprint Plan", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80&auto=format&fit=crop" },
      { id: "doc-2", title: "Dokumentasi Presentasi", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80&auto=format&fit=crop" },
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert1",
    title: "The Best Graduate of Diploma 2022 of Telkom University",
    provider: "Academic",
    year: "2022",
    details: "Recognized as the top graduate for exceptional academic performance and contributions.",
    coverImage: certification1,
    image: certification1Detail,
  },
  {
    id: "cert2",
    title: "Database Programming with SQL",
    provider: "Oracle Academy",
    year: "2023",
    details:
      "Designed and queried relational databases using SQL—covering joins, subqueries, normalization, and transactions.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1400&q=80&auto=format&fit=crop",
  },
  {
    id: "cert3",
    title: "Public Speaking Training",
    provider: "Pegasus Speakers",
    year: "2023",
    details:
      "Hands-on training in audience analysis, narrative structure, and live presentation delivery.",
    coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&q=80&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80&auto=format&fit=crop",
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
