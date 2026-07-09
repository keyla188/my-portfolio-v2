import {
  IconBriefcase,
  IconFolder,
  IconHome,
  IconMessage,
  IconTool,
  IconUser,
} from "@tabler/icons-react";
import navItems from "../../data/nav";
import { useActiveSection } from "../../hooks/useActiveSection";
import type { NavIconKey } from "../../types/nav";
import "./bottom-nav.css";

const ICONS: Record<NavIconKey, typeof IconHome> = {
  home: IconHome,
  about: IconUser,
  experience: IconBriefcase,
  projects: IconFolder,
  tech: IconTool,
  contact: IconMessage,
};

const sectionIds = navItems.map((item) => item.id);

const BottomNav = () => {
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = ICONS[item.icon];
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            title={item.label}
            className={`bottom-nav__item ${isActive ? "bottom-nav__item--active" : ""}`}
          >
            <Icon stroke={2} size={18} />
          </a>
        );
      })}
    </nav>
  );
};

export default BottomNav;
