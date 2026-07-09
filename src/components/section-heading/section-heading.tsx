import "./section-heading.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}

const SectionHeading = ({ eyebrow, title, align = "center" }: SectionHeadingProps) => {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title">{title}</h2>
    </div>
  );
};

export default SectionHeading;
