import type { KeyboardEvent, MouseEvent } from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import type { Project } from "../../types/project";
import "./project-card.css";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  const stopPropagation = (e: MouseEvent) => e.stopPropagation();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(project);
    }
  };

  return (
    <div
      className="project-card"
      onClick={() => onOpen(project)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="project-card__cover">
        <img src={project.images[0]} alt={project.name} loading="lazy" />
        <div className="project-card__overlay" />
      </div>
      <div className="project-card__body">
        <p className="project-card__name">{project.name}</p>
        <div className="project-card__tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-card__links">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="project-card__icon-link"
              onClick={stopPropagation}
              aria-label="Ver código en GitHub"
            >
              <IconBrandGithub stroke={2} size={16} />
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="project-card__icon-link"
              onClick={stopPropagation}
              aria-label="Ver demo"
            >
              <IconExternalLink stroke={2} size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
