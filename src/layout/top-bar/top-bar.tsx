import DarkModeToggle from "../../components/dark-mode-toggle/dark-mode-toggle";
import "./top-bar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <span className="top-bar__logo">
        KC<span className="top-bar__logo-dot">.</span>
      </span>
      <div className="top-bar__actions">
        <a href="mailto:kcabreraalcala@gmail.com" className="top-bar__email">
          kcabreraalcala@gmail.com
        </a>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default TopBar;
