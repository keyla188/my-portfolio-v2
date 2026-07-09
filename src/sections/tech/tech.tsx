import SectionHeading from "../../components/section-heading/section-heading";
import Marquee from "../../components/marquee/marquee";
import techList from "../../data/tech";
import "./tech.css";

const Tech = () => {
  return (
    <div className="tech">
      <SectionHeading eyebrow="04 — Stack" title="Tecnologías" />
      <Marquee items={techList} />
    </div>
  );
};

export default Tech;
