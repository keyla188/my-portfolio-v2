import SectionHeading from "../../components/section-heading/section-heading";
import experience from "../../data/experience";
import "./experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <SectionHeading eyebrow="02 — Trayectoria" title="Experiencia" />
      <div className="experience__timeline">
        {experience.map((job) => (
          <div key={job.id} className="experience__row">
            <p className="experience__dates">{job.period}</p>
            <div className="experience__details">
              <div>
                <p className="experience__role">{job.role}</p>
                <p className="experience__company">{job.company}</p>
              </div>
              <ul className="experience__highlights">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="experience__stack">
                {job.stack.map((tech) => (
                  <span key={tech} className="experience__stack-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
