import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "../../hooks/useTheme";
import "./dark-mode-toggle.css";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {theme === "dark" ? <IconMoon stroke={2} size={18} /> : <IconSun stroke={2} size={18} />}
    </button>
  );
};

export default DarkModeToggle;
