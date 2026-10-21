import { Project, WorkExperience, SkillCategory } from '../types/portfolio';

export const SOCIAL_LINKS = {
  github: 'https://github.com/adi-de9',
  githubProfileAlt: 'https://github.com/Aditya-Deshmukh9',
  linkedin: 'https://linkedin.com/in/adi-de9',
  twitter: 'https://x.com/adityadesh937',
  resume: 'https://drive.google.com/file/d/1yKxi_hJVWkj8reHTsrLAfZhSbxc9TUOq/view?usp=sharing',
  email: 'adityadesh937@gmail.com',
  website: 'https://adityapro.online',
  oldPortfolio: 'https://adityafsd.online',
} as const;

export const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'Quick Events Platform and Exhibitor Mobile App',
    category: 'Backend & Cloud',
    stack: ['React Native (Expo)', 'NestJS', 'AWS EC2', 'AWS RDS PostgreSQL', 'AWS S3', 'MSG91'],
    description:
      'Full-cycle exhibitor registration, live QR pass validation, and automated SMS OTP dispatches running on AWS infrastructure. Designed relational schemas in PostgreSQL with strict transaction isolation for stall and ticket bookings, configured pre-signed S3 file uploads, and managed Google Play Console release tracks.',
    nodes: ['React Native (Expo)', 'NestJS Backend Services', 'AWS RDS PostgreSQL & S3'],
    githubUrl: 'https://github.com/adi-de9',
    liveUrl: 'https://adityapro.online',
    imageUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200&auto=format',
  },
  {
    number: '02',
    title: 'Content Genie Publishing and Subscription Platform',
    category: 'Web Platforms',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Gemini AI', 'Razorpay Webhooks'],
    description:
      'Subscription-based content workspace with structured editor templates, real-time text streaming, and automated usage metering. Implemented idempotent Razorpay webhook signature verification so account usage quotas update reliably upon payment confirmation.',
    nodes: ['Next.js Workspace', 'Node.js Metering Service', 'PostgreSQL & Razorpay'],
    githubUrl: 'https://github.com/Aditya-Deshmukh9/ai-content-generator',
    liveUrl: 'https://contentgenie.adityapro.online/',
    imageUrl: '/projects/content-genie.webp',
  },
  {
    number: '03',
    title: 'Retail E-Commerce Storefront and Checkout System',
    category: 'Web Platforms',
    stack: ['Next.js', 'Express.js', 'MongoDB', 'Razorpay Webhooks'],
    description:
      'Fast-loading retail storefront and checkout workflow built to prevent inventory overselling during flash sales. Tuned Core Web Vitals and Lighthouse performance scores to 98+ while keeping cart state and payment settlement synchronized across sessions.',
    nodes: ['Next.js Storefront', 'Express & Node.js API', 'MongoDB & Razorpay'],
    githubUrl: 'https://github.com/Aditya-Deshmukh9/Ecommerce',
    liveUrl: 'https://ecom-colab-a.vercel.app/',
    imageUrl: '/projects/ecommerce.webp',
  },
  {
    number: '04',
    title: 'NotifiQ Mobile Application',
    category: 'Mobile Apps',
    stack: ['React Native', 'TypeScript', 'Custom Canvas Animations', 'REST APIs'],
    description:
      'Cross-platform mobile application for task tracking, progress circles, and automated notification alerts. Features offline-first local storage sync and responsive cloud endpoints deployed with custom routing.',
    nodes: ['React Native UI', 'Push Notification Engine', 'Cloud Sync (Vercel)'],
    githubUrl: 'https://github.com/adi-de9',
    liveUrl: 'https://notifiq-app.vercel.app',
    imageUrl: '/projects/notifiq.png',
  },
  {
    number: '05',
    title: 'CONVOMAX Enterprise Portal Component Library',
    category: 'Web Platforms',
    stack: ['React.js', 'Tailwind CSS', 'REST Data Adapters'],
    description:
      'Frontend refactoring project that converted 200+ legacy portal screens into a standardized, accessible React component library for university and government administration dashboards.',
    nodes: ['Design System Tokens', '200+ React Components', 'REST Data Adapters'],
    githubUrl: 'https://github.com/adi-de9',
    liveUrl: 'https://github.com/adi-de9',
    imageUrl:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200&auto=format',
  },
  {
    number: '06',
    title: 'Weather Forecast Web Application',
    category: 'Web Platforms',
    stack: ['JavaScript', 'REST APIs', 'OpenWeatherMap API', 'Netlify'],
    description:
      'Interactive, high-accuracy weather forecasting platform with dynamic condition styling, automated geolocation sensing, and 5-day predictive forecasts.',
    nodes: ['Browser Geolocation', 'OpenWeatherMap API', 'Netlify Edge Deployment'],
    githubUrl: 'https://github.com/Aditya-Deshmukh9/weather-forecast-webapp-javascript',
    liveUrl: 'https://weather-forecast-internshala.netlify.app/',
    imageUrl: '/projects/weather.webp',
  }
];

export const EXPERIENCES: WorkExperience[] = [
  {
    role: 'Associate Software Engineer (Full-Stack)',
    company: 'Quick Events',
    badge: 'Current, Remote',
    isCurrent: true,
    stack: 'NestJS · React Native (Expo) · AWS EC2, RDS & S3',
    highlights: [
      'Built exhibitor onboarding, badge generation, and live event management workflows using NestJS services and React Native (Expo).',
      'Configured and maintained production AWS EC2 instances, RDS PostgreSQL databases, and S3 bucket storage pipelines.',
      'Integrated MSG91 DLT-compliant OTP verification controllers and handled Google Play Console internal and production releases.'
    ]
  },
  {
    role: 'Frontend Developer Intern',
    company: 'CONVOMAX',
    badge: 'Frontend Architecture',
    stack: 'React.js · Tailwind CSS · Portal Systems',
    highlights: [
      'Refactored over 200 legacy UI screens into reusable React components for university and government web portals.',
      'Reduced unnecessary state re-renders and standardized responsive mobile breakpoints across data-heavy administrative views.'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Sanggo',
    badge: 'Interactive Web',
    stack: 'Next.js · Three.js · Real-Time Messaging',
    highlights: [
      'Built interactive 3D web pages with Next.js and Three.js tuned for smooth 60fps rendering on mobile devices.',
      'Developed an automated lead-capture and customer messaging workflow with low-latency streaming responses.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend and Databases',
    skills: ['NestJS', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'MySQL']
  },
  {
    title: 'Frontend and Mobile',
    skills: ['Next.js', 'React', 'React Native (Expo)', 'TypeScript', 'Tailwind CSS', 'Three.js']
  },
  {
    title: 'Cloud and Deployment',
    skills: ['AWS EC2', 'AWS RDS', 'AWS S3', 'Docker', 'Vercel DNS', 'Google Play Console']
  },
  {
    title: 'Payments and Integrations',
    skills: ['Razorpay Webhooks', 'MSG91 DLT OTP', 'Strapi CMS', 'REST APIs']
  }
];

export const SPEECH_LINES: string[] = [
  'Building with NestJS & AWS',
  'Shipping to Google Play',
  'Remote from India',
  '200+ UI modules rebuilt at CONVOMAX',
  'Next.js & React Native (Expo)'
];

export const MARQUEE_ITEMS: string[] = [
  'NestJS',
  'Node.js',
  'Next.js',
  'React Native (Expo)',
  'AWS EC2, RDS & S3',
  'PostgreSQL & MongoDB',
  'TypeScript & Tailwind CSS',
  'Three.js',
  'Razorpay Webhooks & MSG91',
  'Google Play Console'
];
