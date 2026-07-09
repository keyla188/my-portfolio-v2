import { useState } from "react";
import SectionHeading from "../../components/section-heading/section-heading";
import ProjectCard from "../../components/project-card/project-card";
import Modal from "../../components/modal/modal";
import projects from "../../data/projects";
import type { Project } from "../../types/project";
import "./projects.css";

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="projects">
      <SectionHeading eyebrow="03 — Trabajo" title="Proyectos" />
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} />
        ))}
      </div>
      <Modal
        isOpen={selected !== null}
        images={selected?.images ?? []}
        altText={selected?.name}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};

export default Projects;
