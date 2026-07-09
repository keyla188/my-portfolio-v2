import type { ExperienceItem } from "../types/experience";

const experience: ExperienceItem[] = [
  {
    id: "aptura-labs",
    period: "Sept 2025 – Jun 2026",
    role: "Junior FullStack Developer",
    company: "Aptura Labs",
    highlights: [
      "Desarrollé el 100% de las landing pages con Astro y Tailwind CSS, optimizadas para SEO.",
      "Implementé el flujo completo de suscripciones integrando Stripe como pasarela de pagos.",
      "Participé en más del 70% de las funcionalidades de una plataforma SaaS de gestión SEO.",
    ],
    stack: ["Next.js", "Astro", "GraphQL", "Stripe", "Node.js"],
  },
  {
    id: "cvmatcher-sac",
    period: "Mar 2025 – Sept 2025",
    role: "Frontend Developer",
    company: "CVMATCHER SAC",
    highlights: [
      "Implementé más del 95% de los estilos con HTML y SCSS, aumentando la satisfacción del usuario en un 35%.",
      "Diseñé prototipos de alta fidelidad en Figma, reduciendo cambios en desarrollo en un 50%.",
    ],
    stack: ["Angular", "SCSS", "Figma", "Angular Material"],
  },
  {
    id: "smart-system",
    period: "Ene 2025 – Mar 2025",
    role: "Practicante Programador JavaScript",
    company: "Smart System",
    highlights: [
      "Desarrollé una landing page con Astro, Tailwind y Three.js, logrando una mejora del 60% en velocidad de carga.",
      "Implementé la intranet con React y Node.js, con CRUD completo de productos, categorías y usuarios.",
    ],
    stack: ["Astro", "Three.js", "React", "Node.js"],
  },
  {
    id: "cvmatcher",
    period: "Ago 2024 – Dic 2024",
    role: "Practicante Frontend Angular",
    company: "CVMATCHER",
    highlights: [
      "Participé en el desarrollo del 90% del frontend, logrando una interfaz 100% responsiva y accesible.",
      "Integré el 100% de las funcionalidades clave mediante APIs RESTful.",
    ],
    stack: ["Angular", "SCSS", "HTML5", "Git"],
  },
];

export default experience;
