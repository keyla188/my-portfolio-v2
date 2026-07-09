import type { ReactNode } from "react";
import "./reveal-section.css";

interface RevealSectionProps {
  id: string;
  className?: string;
  sectionRef: (el: HTMLElement | null) => void;
  revealed: boolean;
  children: ReactNode;
}

const RevealSection = ({ id, className = "", sectionRef, revealed, children }: RevealSectionProps) => {
  return (
    <section
      id={id}
      ref={sectionRef}
      className={`reveal ${revealed ? "reveal--visible" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
};

export default RevealSection;
