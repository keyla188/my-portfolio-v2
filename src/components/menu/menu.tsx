import { IconHome } from '@tabler/icons-react';
import { IconUser } from '@tabler/icons-react';
import { IconFolder } from '@tabler/icons-react';
import { IconTool } from '@tabler/icons-react';
import { IconMessage } from '@tabler/icons-react';
import './menu.css';
import { useEffect, useState } from 'react';
const Menu = () => {
    const [activeSection, setActiveSection] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#about-me', '#projects', '#tech', '#contact'];
      const offsets = sections.map((section) => {
        const element = document.querySelector(section);
        return element instanceof HTMLElement ? element.offsetTop : 0;
      });

      const currentScroll = window.scrollY + window.innerHeight / 2;
      const activeIndex = offsets.findIndex((offset, i) => {
        return currentScroll >= offset && currentScroll < (offsets[i + 1] || Infinity);
      });

      setActiveSection(sections[activeIndex] || '#home');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', () => setActiveSection(window.location.hash));

    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', () => setActiveSection(window.location.hash));
    };
  }, []);

  return (
    <div className="menu">
      <div className={`item ${activeSection === '#home' ? 'active' : ''}`}>
        <a href="#home">
          <IconHome stroke={2} />
        </a>
      </div>
      <div className={`item ${activeSection === '#about-me' ? 'active' : ''}`}>
        <a href="#about-me">
          <IconUser stroke={2} />
        </a>
      </div>
      <div className={`item ${activeSection === '#projects' ? 'active' : ''}`}>
        <a href="#projects">
          <IconFolder stroke={2} />
        </a>
      </div>
      <div className={`item ${activeSection === '#tech' ? 'active' : ''}`}>
        <a href="#tech">
          <IconTool stroke={2} />
        </a>
      </div>
      <div className={`item ${activeSection === '#contact' ? 'active' : ''}`}>
        <a href="#contact">
          <IconMessage stroke={2} />
        </a>
      </div>
    </div>
  );
};
  
export default Menu;