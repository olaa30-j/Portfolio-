
export const profile = {
  name: "Ola Adel Elsayed Mohamed",
  role: "ReactJS & Next.js Developer",
  email: "olaadel.967@gmail.com",
  phone: "+20 120 024 1817",
  location: "Alexandria, Egypt · Remote",
  summary:
    "ReactJS Developer with 2+ years of experience building responsive web applications and scalable systems using React, Next.js, TypeScript, and Tailwind CSS. Experienced in REST API integration, Redux Toolkit, RTK Query, role-based access control, and multi-tenant applications.",
  availability: "Open to opportunities",
  github: "", // Add your GitHub URL
  linkedin: "", // Add your LinkedIn URL
};

export type Project = {
  no: string;
  title: string;
  summary: string;
  metricLabel: string;
  before: string;
  after: string;
  beforePct: number;
  afterPct: number;
  problem: string;
  approach: string;
  result: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    no: "01",
    title: "Dalili Souq — Multi-Vendor E-commerce",
    summary:
      "A multi-tenant e-commerce platform supporting customers, sellers, and store owners through a unified account system.",
    metricLabel: "User roles",
    before: "Single workflow",
    after: "3 user roles",
    beforePct: 33,
    afterPct: 100,
    problem:
      "Different user types require distinct workflows, permissions, and product management experiences within one platform.",
    approach:
      "Built scalable frontend structures using Next.js and TypeScript, with NextAuth, RBAC, RTK Query, React Hook Form, and Tailwind CSS.",
    result:
      "Implemented role-based interfaces, protected routes, product management workflows, order handling, and geolocated delivery features using Leaflet.",
    tags: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "NextAuth",
      "Tailwind CSS",
      "React Hook Form",
      "Leaflet",
    ],
  },
  {
    no: "02",
    title: "Elsaqr Family Webapp",
    summary:
      "A MERN-based platform for family tree visualization, profile management, and role-based access.",
    metricLabel: "Access levels",
    before: "Shared access",
    after: "Admin / Member",
    beforePct: 35,
    afterPct: 100,
    problem:
      "Managing family relationships and personal information requires clear permissions and an accessible way to explore family connections.",
    approach:
      "Developed responsive interfaces using React, Tailwind CSS, Swiper, and RTK Query, with Node.js and MongoDB supporting the application.",
    result:
      "Delivered interactive family tree mapping, profile management, role-based permissions, and automated email notifications through EmailJS.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "RTK Query",
      "Tailwind CSS",
      "Swiper",
      "EmailJS",
    ],
  },
  {
    no: "03",
    title: "Khamsat Clone",
    summary:
      "A multilingual service marketplace with payment integrations and real-time communication.",
    metricLabel: "Payment gateways",
    before: "Not integrated",
    after: "Stripe + PayPal",
    beforePct: 0,
    afterPct: 100,
    problem:
      "A service marketplace needs multilingual interfaces, reliable communication, and integrated payment workflows.",
    approach:
      "Built with Next.js, Node.js, MongoDB Atlas, and Tailwind CSS, integrating Socket.IO for real-time communication.",
    result:
      "Implemented multilingual support, real-time messaging, Stripe and PayPal integrations, and deployment on Vercel.",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB Atlas",
      "Socket.IO",
      "Stripe",
      "PayPal",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    no: "04",
    title: "Webinar Landing Page",
    summary:
      "A responsive webinar landing page with automated data logging and SMS confirmations.",
    metricLabel: "Automation integrations",
    before: "Manual follow-up",
    after: "Automated workflow",
    beforePct: 30,
    afterPct: 100,
    problem:
      "Collecting webinar registrations and confirming submissions can require repetitive manual work.",
    approach:
      "Built the page with HTML, CSS, and vanilla JavaScript, connecting Google Apps Script, Google Sheets, and Twilio.",
    result:
      "Implemented automated registration logging and instant SMS confirmations.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Google Apps Script",
      "Google Sheets",
      "Twilio",
    ],
  },
];

export const scores = [];

export const vitals = [];

export const stack = [
  {
    key: "React",
    sub: "UI",
    title: "React.js",
    text: "Build reusable components, interactive interfaces, and responsive web applications using modern React patterns and hooks.",
  },
  {
    key: "Next",
    sub: "Framework",
    title: "Next.js",
    text: "Develop production-ready applications with the App Router, server-side rendering, static generation, and structured routing.",
  },
  {
    key: "TS",
    sub: "Language",
    title: "TypeScript",
    text: "Write maintainable, type-safe application code and improve reliability across complex frontend projects.",
  },
  {
    key: "RTK",
    sub: "State",
    title: "Redux Toolkit",
    text: "Manage application state with Redux Toolkit and RTK Query, including API integration, caching, and data synchronization.",
  },
  {
    key: "CSS",
    sub: "Styling",
    title: "Tailwind CSS",
    text: "Create responsive, consistent interfaces with utility-first styling and reusable UI patterns.",
  },
  {
    key: "API",
    sub: "Integration",
    title: "REST APIs",
    text: "Integrate backend services, handle asynchronous requests, and coordinate data flow between frontend and backend teams.",
  },
  {
    key: "Auth",
    sub: "Security",
    title: "Authentication & RBAC",
    text: "Implement authentication, role-based access control, permission-aware interfaces, and protected routes with NextAuth.",
  },
  {
    key: "Forms",
    sub: "Validation",
    title: "React Hook Form",
    text: "Build structured forms with validation and reusable field components for complex application workflows.",
  },
  {
    key: "Node",
    sub: "Backend",
    title: "Node.js",
    text: "Collaborate across the stack and work with backend APIs, server-side application logic, and integrations.",
  },
  {
    key: "Mongo",
    sub: "Database",
    title: "MongoDB",
    text: "Work with document-based data models and integrate MongoDB-backed applications.",
  },
  {
    key: "Git",
    sub: "Workflow",
    title: "Git & GitHub",
    text: "Use version control, collaborative workflows, and code reviews to maintain quality across team projects.",
  },
  {
    key: "Figma",
    sub: "Design",
    title: "Figma",
    text: "Translate design specifications into responsive interfaces while paying attention to layout and user experience.",
  },
  {
    key: "Angular",
    sub: "Framework",
    title: "Angular",
    text: "Build dashboard interfaces and collaborate on frontend projects using Angular.",
  },
  {
    key: "Test",
    sub: "Quality",
    title: "Testing & API Tools",
    text: "Work with Jasmine for unit testing, Swagger for API documentation, and Postman for API testing.",
  },
];

export const commits = [
  {
    hash: "dalili",
    date: "Sep 2025 — Present",
    title: "feat: multi-tenant e-commerce platform",
    text: "Developed role-based customer, seller, and store-owner workflows using Next.js, TypeScript, NextAuth, and RTK Query.",
    head: true,
  },
  {
    hash: "mostaql",
    date: "Mar 2025 — Present",
    title: "feat: full-stack web applications",
    text: "Integrated REST APIs, designed scalable frontend structures, implemented RBAC, and worked with Node.js and MongoDB.",
  },
  {
    hash: "slahhub",
    date: "Jan 2025 — Apr 2025",
    title: "feat: responsive seller platform",
    text: "Developed frontend features with Next.js, ShadCN, and Redux while collaborating with backend teams.",
  },
  {
    hash: "iti",
    date: "Apr 2024 — Nov 2024",
    title: "feat: MERN stack team projects",
    text: "Led a team of five interns, followed Agile practices, conducted code reviews, and worked with Git, Swagger, Jasmine, and Vercel.",
  },
  {
    hash: "education",
    date: "Sep 2016 — May 2020",
    title: "init: Alexandria University",
    text: "Graduated from the Faculty of Education with a Good grade.",
  },
];

export const reviews = [];

export const needs = [
  "Frontend Development",
  "React / Next.js Applications",
  "Full-Stack Web Applications",
  "API Integration",
  "Dashboard Development",
  "Performance Optimization",
];

export const budgets = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
];
