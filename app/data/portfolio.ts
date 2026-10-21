export const SOCIALS = {
  email: "adityadesh937@gmail.com",
  phone: "+91 93737 82499",
  website: "https://adityafsd.online",
  github: "https://github.com/adi-de9",
  linkedin: "https://linkedin.com/in/adi-de9",
  resume:
    "https://drive.google.com/file/d/110Ua396ydV8O_wVzndjxmtiQ16atSCWC/view",
  location: "Nagpur, India",
} as const;

export interface ExpertiseItem {
  index: string;
  title: string;
  description: string;
  tech: string;
}

export const EXPERTISE: ExpertiseItem[] = [
  {
    index: "2.1",
    title: "Frontend Architecture",
    description:
      "Reusable component systems that stay coherent as products and teams scale.",
    tech: "React · Next.js · TypeScript · Tailwind",
  },
  {
    index: "2.2",
    title: "Backend & APIs",
    description:
      "NestJS microservices and REST contracts engineered for throughput.",
    tech: "Node.js · NestJS · Express · Webhooks",
  },
  {
    index: "2.3",
    title: "Data & State",
    description: "Predictable data layers — indexed, cached and idempotent.",
    tech: "PostgreSQL · MongoDB · Redis · RTK Query",
  },
  {
    index: "2.4",
    title: "Cloud, AI & Craft",
    description: "Shipped on AWS, accelerated by AI-assisted workflows.",
    tech: "AWS · Docker · Gemini AI · Jest",
  },
];

export interface ExperienceItem {
  index: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    index: "3.1",
    role: "Full Stack / Backend Engineer",
    company: "Quick Events · Remote",
    period: "Nov 2025 — Present",
    description:
      "NestJS microservices, event-driven booking workflows and Razorpay webhooks on AWS.",
  },
  {
    index: "3.2",
    role: "Frontend Developer Intern",
    company: "Convomax · Nagpur, MH",
    period: "Jun 2025 — Oct 2025",
    description:
      "DMIHER University portal — 15+ reusable components, accessibility raised 78% → 92%.",
  },
  {
    index: "3.3",
    role: "Frontend Developer Intern",
    company: "Sanggo Tech · Remote",
    period: "Jan 2025 — Apr 2025",
    description:
      "Next.js 13 + GSAP builds and an AI lead-qualification assistant on Gemini/OpenAI.",
  },
];

export interface CredentialItem {
  index: string;
  title: string;
  issuer: string;
  period: string;
}

export const CREDENTIALS: CredentialItem[] = [
  {
    index: "5.1",
    title: "Full Stack Web Development Specialization",
    issuer: "Internshala · Certification",
    period: "2025",
  },
  {
    index: "5.2",
    title: "AI Foundations Certificate",
    issuer: "OpenAI · Certification",
    period: "2026",
  },
  {
    index: "5.3",
    title: "Bachelor of Computer Applications",
    issuer: "IGNOU · BCA",
    period: "2023 — 2026",
  },
  {
    index: "5.4",
    title: "Higher Secondary Certificate",
    issuer: "SFL High School, Amravati · HSC",
    period: "2020 — 2022",
  },
];

export interface Project {
  num: string;
  title: string;
  meta: string;
  tags: string[];
  tech: string;
  image: string;
  alt: string;
  live: string;
  repo: string;
}

export const PROJECTS: Project[] = [
  {
    num: "01",
    title: "Content Genie",
    meta: "2025 — AI SaaS Platform",
    tags: ["Next.js", "TypeScript", "Gemini AI", "Razorpay"],
    tech: "Next.js · TypeScript · Gemini AI",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200&auto=format",
    alt: "Dark analytics dashboard with charts — photo by Luke Chesser on Unsplash",
    live: "#",
    repo: "https://github.com/adi-de9",
  },
  {
    num: "02",
    title: "Veirdo",
    meta: "2025 — Full-Stack E-Commerce",
    tags: ["Next.js", "Express.js", "MongoDB", "Razorpay"],
    tech: "Next.js · Express · MongoDB",
    image:
      "https://images.pexels.com/photos/7621352/pexels-photo-7621352.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Laptop showing a fashion e-commerce website — photo by Ivan S on Pexels",
    live: "#",
    repo: "https://github.com/adi-de9",
  },
  {
    num: "03",
    title: "DMIHER University Portal",
    meta: "2025 — Frontend · Convomax",
    tags: ["React", "TypeScript", "Tailwind"],
    tech: "React · TypeScript · Tailwind",
    image:
      "https://images.unsplash.com/photo-1560452895-7d709050768f?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200&auto=format",
    alt: "Laptop showing an education website — photo by Mometrix Test Prep on Unsplash",
    live: "#",
    repo: "https://github.com/adi-de9",
  },
  {
    num: "04",
    title: "SanggoTech Platform",
    meta: "2025 — Frontend · Sanggo Tech",
    tags: ["Next.js 13", "GSAP", "SEO"],
    tech: "Next.js 13 · GSAP",
    image:
      "https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Dark workspace with a monitor showing a colorful web design — photo by Josh Sorenson on Pexels",
    live: "#",
    repo: "https://github.com/adi-de9",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "2+", label: "Years building" },
  { value: "10+", label: "APIs shipped" },
  { value: "92%", label: "A11y compliance" },
  { value: "∞", label: "Cups of coffee" },
];
