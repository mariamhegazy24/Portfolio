/**
 * Project content. Everything uncertain lives HERE, not in components.
 * Rules: never invent features, results or responsibilities. Anything unverified goes in `pending`.
 * Images/links with approval flags false (or missing) are never rendered.
 */

export type ImageAsset = { src: string; alt: string; width: number; height: number };

export type ProjectLink = { label: string; href: string };

/** Optional walkthrough video. Rendered only if the file actually exists under /public. */
export type ProjectVideo = { src: string; label: string };

export interface CaseStudy {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  role: string;
  /** Team / company framing shown next to the role. */
  scope: string;
  stack: string[];
  /** Only what has been confirmed by Mariam. */
  built: string[];
  /** Plain-language list of what is still to be added (rendered as a quiet note). */
  pending: string[];
  confidential?: boolean;
  confidentialNote?: string;
  /** Approved images only. */
  images: ImageAsset[];
  video?: ProjectVideo;
  links: ProjectLink[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tablya",
    title: "Tablya",
    kind: "Homemade food platform",
    summary:
      "Tablya (طبلية) is a platform for homemade food. Customers browse home cooks and their menus and order dishes, and cooks manage their own menus. The interface comes in English and Arabic, in dark and light themes.",
    role: "Admin dashboard and landing page",
    scope: "I worked on the admin dashboard and the landing page.",
    stack: ["React", "Redux Toolkit", "Chakra UI", "Supabase"],
    built: [
      "Complete admin dashboard for platform-wide oversight and operations management",
      "Chef request management — reviewing, approving and onboarding home cooks onto the platform",
      "Order management system for tracking and handling customer orders across all cooks",
      "KPI dashboards giving admins a live view of key platform metrics",
      "Ticketing system for handling support and operational issues",
      "Public landing page for the platform in Arabic and English",
    ],
    pending: [],
    images: [
      {
        src: "/projects/tablya/tablya-overview-1725x970.webp",
        alt: "Tablya homemade food platform: the landing page in dark and light themes, mobile screens listing home cooks and a cook's menu, a menu management view, and the Arabic tagline for homemade food.",
        width: 1725,
        height: 970,
      },
    ],
    video: { src: "https://res.cloudinary.com/dky9xhwln/video/upload/v1792499989/Tablya_1_c1wq1g.mp4", label: "Walkthrough video" },
    links: [],
  },
  {
    slug: "dental-clinic",
    title: "Dental Clinic Management System",
    kind: "Personal project, web application",
    summary:
      "A clinic website and management dashboard for a dentist: a public site with a gallery of clinical cases, appointment booking, and a doctor dashboard for managing appointments.",
    role: "Personal project",
    scope: "Built independently.",
    stack: ["React", "Redux Toolkit", "TypeScript", "Firebase Authentication"],
    built: [
      "Responsive web application for managing dental clinic operations including patient records, appointments, and treatment tracking",
      "Booking system for patients to schedule appointments with real-time availability updates",
      "State management with Redux Toolkit and Firebase Authentication for secure login",
      "Clean, user-centric UI and production-ready code",
    ],
    pending: [],
    images: [
      {
        src: "/projects/dental-clinic/dental-clinic-overview-1366x768.webp",
        alt: "Dental clinic management system: a dark green clinic website with a landing page and clinical cases gallery, mobile views, and a doctor dashboard with an appointments table.",
        width: 1366,
        height: 768,
      },
    ],
    video: { src: "https://res.cloudinary.com/dky9xhwln/video/upload/v1792495065/Dental_Clinic_diunpy.mp4", label: "Walkthrough video" },
    links: [{ label: "Live demo", href: "https://dental-clinic-blush-five.vercel.app/" }],
  },
  {
    slug: "brandsdeal",
    title: "BrandsDeal E-commerce",
    kind: "Company project, e-commerce",
    summary: "An e-commerce frontend built in a company setting.",
    role: "Frontend developer",
    scope: "Company project. I worked on the frontend.",
    stack: ["Nuxt", "TypeScript", "Nuxt UI", "TanStack Vue Query", "Pinia", "i18n", "API integration"],
    built: [
      "Frontend development of the storefront",
      "Arabic and English interface (i18n)",
      "API integration",
    ],
    pending: [],
    confidential: true,
    confidentialNote:
      "Confidential company work. Only screenshots and descriptions approved for public use appear here: no source code, internal data or private links.",
    images: [
      {
        src: "/projects/brandsdeal/brandsdeal-overview-1366x768.webp",
        alt: "BrandsDeal e-commerce storefront on desktop and mobile: the homepage with a free-shipping banner, a product page, and the shopping cart.",
        width: 1366,
        height: 768,
      },
    ],
    links: [],
  },
];

export interface LandingPage {
  id: string;
  /** Show the project name only when approved. */
  nameApproved: boolean;
  name?: string;
  /** Show screenshots only when approved. */
  imagesApproved: boolean;
  desktop?: ImageAsset;
  mobile?: ImageAsset;
  /** Show purpose / stack / role only when confirmed. */
  copyApproved: boolean;
  purpose?: string;
  stack?: string[];
  role?: string;
  href?: string;
}

/**
 * Approved by Mariam (screenshots + links supplied for publishing).
 * Stack is not confirmed yet, so it shows "To be added". Add more entries the same way.
 */
export const landingPages: LandingPage[] = [
  {
    id: "nuzul",
    nameApproved: true,
    name: "Nuzul",
    imagesApproved: true,
    desktop: {
      src: "/projects/landing-pages/nuzul-1366x768.webp",
      alt: "Nuzul landing page on laptops and phones: a hero about booking and staying at group hotels from one app, with a language switch between Arabic and English.",
      width: 1366,
      height: 768,
    },
    copyApproved: true,
    purpose:
      "Landing page for a hotel group app covering booking, digital check-in, in-stay services and checkout, in Arabic and English.",
    role: "Built the landing page",
    href: "https://nuzul-self.vercel.app/",
  },
  {
    id: "stdystore",
    nameApproved: true,
    name: "StdyStore",
    imagesApproved: true,
    desktop: {
      src: "/projects/landing-pages/stdystore-1366x768.webp",
      alt: "StdyStore landing page on laptops, a tablet and phones: a white-label e-commerce platform with a website, mobile app and admin dashboard, plus a sales contact form.",
      width: 1366,
      height: 768,
    },
    copyApproved: true,
    purpose:
      "Landing page for a white-label e-commerce platform (website, mobile app and admin dashboard) with a sales contact form, in Arabic and English.",
    role: "Built the landing page",
    href: "https://stdystore.vercel.app/",
  },
];

export interface MoreProject {
  title: string;
  line: string;
  stack: string[];
  note?: string;
  image?: ImageAsset;
  links: ProjectLink[];
}

export const moreProjects: MoreProject[] = [
  {
    title: "Blog App",
    line: "A blogging app where users register, log in, and create, edit, publish and unpublish posts.",
    stack: ["React", "Vite", "Tailwind CSS", "DaisyUI", "JSON Server"],
    note: "Uses a simulated backend (JSON Server with authentication).",
    image: {
      src: "/projects/more/Tech Website.png",
      alt: "Blog App: a tech-styled website where users can register, log in, and create, edit, publish and unpublish posts.",
      width: 1366,
      height: 768,
    },
    links: [
      { label: "Live demo", href: "https://react-project-five-henna.vercel.app" },
      { label: "Code", href: "https://github.com/mariamhegazy24/react-project" },
    ],
  },
  {
    title: "AI Chat Assistant",
    line: "A ChatGPT-style assistant with a conversation view, saved chats, new chat and settings in a mobile-friendly layout. Messages go through an Express server to an AI model.",
    stack: ["React", "Vite", "Chakra UI", "Express"],
    image: {
      src: "/projects/more/ai-chat-assistant-1920x1080.webp",
      alt: "AI Chat Assistant on two phones: a conversation where the assistant answers questions about React and JavaScript, and a side menu with New Chat, Settings, Saved and a list of saved chats.",
      width: 1920,
      height: 1080,
    },
    links: [
      { label: "Live demo", href: "https://drive.google.com/file/d/1jCFkZYFDmS7G4uDdqDm2OsatbIYHkWnh/view?usp=drive_link" },
      { label: "Code", href: "https://github.com/mariamhegazy24/Ai-Chat-Assistant" },
    ],
  },
  {
    title: "HR Management System",
    line: "An HR web app covering attendance, permission requests, manager approvals and task management.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: {
      src: "/projects/more/Hr.png",
      alt: "HR Management System: an HR web app interface showing attendance tracking, permission requests and task management.",
      width: 1366,
      height: 768,
    },
    // Repo link intentionally omitted until the exact public URL is verified.
    links: [],
  },
];
