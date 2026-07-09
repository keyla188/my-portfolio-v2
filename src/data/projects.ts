import type { Project } from "../types/project";

const projects: Project[] = [
  {
    id: "influplace",
    name: "Influplace",
    images: [
      "/assets/projects/influplace/influplace.png",
      "/assets/projects/influplace/influplace-2.png",
      "/assets/projects/influplace/influplace-3.png",
      "/assets/projects/influplace/influplace-4.png",
    ],
    technologies: ["Astro", "Next.js", "React Native", "Firebase", "Tailwind", "OAuth"],
    githubLink: null,
    demoLink: "https://www.influplace.com/",
  },
  {
    id: "cvmatcher",
    name: "CVMATCHER",
    images: [
      "/assets/projects/cvmatcher/cvmatcher.png",
      "/assets/projects/cvmatcher/cvmatcher-2.png",
      "/assets/projects/cvmatcher/cvmatcher-3.png",
      "/assets/projects/cvmatcher/cvmatcher-4.png",
      "/assets/projects/cvmatcher/cvmatcher-landing.png",
      "/assets/projects/cvmatcher/cvmatcher-landing-2.png",
      "/assets/projects/cvmatcher/cvmatcher-landing-3.png",
      "/assets/projects/cvmatcher/cvmatcher-landing-4.png",
    ],
    technologies: ["Angular", "HTML", "SCSS", "API RESTful", "Tailwind", "Figma", "Angular Material", "Git", "Astro"],
    githubLink: null,
    demoLink: "https://dashboard.cvmatcher.app/login",
  },
  {
    id: "aptura-labs",
    name: "Aptura Labs — SaaS SEO",
    images: [
      "/assets/projects/aptura-labs/ranker.png",
      "/assets/projects/aptura-labs/ranker-2.png",
      "/assets/projects/aptura-labs/ranker-3.png",
      "/assets/projects/aptura-labs/ranker-4.png",
    ],
    technologies: ["Next.js", "Astro", "MongoDB", "Scrum", "Tailwind", "OpenAI API", "GraphQL", "Stripe", "BitBucket", "Node.js"],
    githubLink: null,
    demoLink: null,
  },
  {
    id: "influplace-mobile",
    name: "Influplace — App Mobile",
    images: [
      "/assets/projects/influplace-mobile/influplace-m-2.jpeg",
      "/assets/projects/influplace-mobile/influplace-m-3.jpeg",
      "/assets/projects/influplace-mobile/influplace-m-4.jpeg",
      "/assets/projects/influplace-mobile/influplace-m.jpeg",
    ],
    technologies: ["React Native", "Firebase", "TypeScript", "Tailwind", "OAuth"],
    githubLink: null,
    demoLink: null,
  },
];

export default projects;
