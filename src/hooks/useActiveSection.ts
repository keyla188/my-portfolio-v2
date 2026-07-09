import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionIds.map((id) => {
        const element = document.getElementById(id);
        return element ? element.offsetTop : 0;
      });

      const currentScroll = window.scrollY + window.innerHeight / 2;
      const activeIndex = offsets.findIndex((offset, i) => {
        return currentScroll >= offset && currentScroll < (offsets[i + 1] ?? Infinity);
      });

      setActiveSection(sectionIds[activeIndex] ?? sectionIds[0]);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
}
