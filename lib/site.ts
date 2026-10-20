/** Single source of truth for site-wide facts. Phone number is intentionally absent (private by decision). */
export const site = {
  name: "Mariam Hegazy",
  role: "Frontend Developer",
  location: "Cairo, Egypt",
  // Provisional public address: re-confirm before launch (see docs/CONTENT_AND_CONTACT.md).
  email: "mariamhegazy24@gmail.com",
  linkedin: "https://www.linkedin.com/in/mariam-hegazy-a12051358",
  github: "https://github.com/mariamhegazy24",
  cv: "/cv/Mariam-Hegazy-CV.pdf",
  description:
    "Mariam Hegazy is a frontend developer building responsive interfaces with React, Next.js and TypeScript.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "landing-pages", label: "Landing Pages" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
] as const;
