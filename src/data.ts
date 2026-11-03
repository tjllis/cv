// All page content lives here. Edit this file to update the site.

export const profile = {
  name: "Tanya Semenova",
  title: "Frontend Developer",
  location: "Berlin",
  bio: [
    "Frontend developer with a background in archival and records management, finishing 42 Berlin in 2026.",
    "I turn Figma mockups into React and TypeScript apps that are pretty and properly built",
  ],
  email: "tatiana.semenova.de@gmail.com",
  github: "https://github.com/tjllis",
  cvFile: "Frontend_dev_Semenova_CV.pdf",
};

export const stack = [
  { label: "Web & UI", items: ["React", "HTML5", "CSS3", "Figma"] },
  { label: "QA", items: ["Playwright", "Vitest"] },
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "C", "C++"],
  },
];

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  stack: string[];
  intro?: string;
  bullets: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "poolaki",
    title: "Poolaki",
    stack: ["React", "TypeScript", "MUI", "Figma", "Playwright", "Vitest"],
    intro: "Expense tracking web app. Team graduation project at 42 Berlin",
    bullets: [
      "Designed the app's pages and user flows, starting from Figma mockups.",
      "Built the frontend in React and TypeScript. Made the app work on mobile, with a separate navigation pattern for small screens.",
      "Created a custom design system: reusable components built with MUI primitives, such as forms, pop-up windows (modals), notifications and charts, plus a shared theme for colours and typography.",
      "Wrote end-to-end tests with Playwright for key user flows, run across Chromium, Firefox and WebKit, and unit tests with Vitest for core business logic.",
      "Used AI tools to speed up development, reviewing generated code and fixing its mistakes. Collaborated with the team through Git and pull requests.",
    ],
    links: [
      { label: "See the code", href: "https://github.com/tjllis/poolaki" },
    ],
  },
  {
    id: "tarot",
    title: "Tarot Reading App",
    stack: ["React", "TypeScript", "Vite", "GitHub Pages"],
    intro:
      "A web app that does humorous tarot readings in three steps: pick a reading, shuffle, reveal",
    bullets: [
      "Created the animated starfield background using the Canvas API.",
      "Used the View Transition API for smooth animated card flips.",
      "Deployed on GitHub Pages.",
    ],
    links: [
      { label: "Get a reading", href: "https://tjllis.github.io/bimbo_tarot" },
      { label: "Code", href: "https://github.com/tjllis/bimbo_tarot" },
    ],
  },
  {
    id: "kotlin",
    title: "Kotlin Website Migration",
    stack: [
      "React Router 7",
      "TypeScript",
      "Vite",
      "@rescui",
      "@jetbrains/kotlin-web-site-ui",
    ],
    intro: "Test assignment for a JetBrains internship application",
    bullets: [
      "Rebuilt the Kotlin website homepage on a new stack, moving away from outdated frameworks.",
      "Preserved the original design and layout.",
      "Implemented server-side rendering (SSR), improving the page’s SEO.",
    ],
    links: [
      {
        label: "See the code",
        href: "https://github.com/tjllis/kotlin-website-migration",
      },
    ],
  },
];

export type BackgroundEntry = {
  title: string;
  org?: string;
  meta: string;
  text?: { label?: string; body: string }[];
};

export const background: Record<
  "Education" | "Experience" | "Community",
  BackgroundEntry[]
> = {
  Education: [
    {
      title: "42 Berlin · Software Engineering Program",
      meta: "2024 – Present",
      text: [
        {
          label: "Core curriculum:",
          body: "C/C++ projects on memory management, algorithms and Unix systems programming.",
        },
        {
          label: "Python Discovery Piscine:",
          body: "2-week sprint covering Python basics, data structures, and scripting.",
        },
      ],
    },
    {
      title: "M.A. in Archive and Documentation Management",
      org: "Ural Federal University",
      meta: "2014 – 2016",
    },
    {
      title: "B.A. in Romance Linguistics",
      org: "Ural Federal University",
      meta: "2009 – 2013",
    },
  ],
  Experience: [
    {
      title: "Documentation Manager",
      org: "Kontur (IT)",
      meta: "RU · 2018 – 2019",
      text: [
        {
          body: "Managed full document lifecycles and data integrity within an eDMS. Optimised workflow logic with engineering teams to accelerate document retrieval.",
        },
      ],
    },
    {
      title: "Project Coordinator",
      org: "MOTIV (Telecom Sector)",
      meta: "RU · 2016 – 2018",
      text: [
        {
          body: "Collaborated with legal teams to ensure compliance with property laws and regulations. Coordinated landowners and technical teams to secure contract renewals and project delivery.",
        },
      ],
    },
    {
      title: "Manager / Archivist",
      org: "Archive & Telecom Sectors",
      meta: "RU · 2013 – 2016",
      text: [
        {
          body: "Structured and maintained large-scale documentation systems and corporate archives.",
        },
      ],
    },
  ],
  Community: [
    {
      title: "Stage Manager",
      org: "droidcon Berlin & Fluttercon Europe",
      meta: "Sep 2025",
      text: [
        {
          body: "Coordinated technical stage operations and international speakers for premier Android/Flutter events.",
        },
      ],
    },
    {
      title: "Speaker Support",
      org: "WeAreDevelopers World Congress",
      meta: "Jul 2025",
      text: [
        {
          body: "Technical and logistical assistance for keynote presenters at a global flagship tech congress.",
        },
      ],
    },
    {
      title: "On-Site Volunteer",
      org: "The Merge (GitButler)",
      meta: "Jun 2024",
      text: [
        {
          body: "Helped run a developer conference on the ground: attendee support, setup and logistics.",
        },
      ],
    },
  ],
};
