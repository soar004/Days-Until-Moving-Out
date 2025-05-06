import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggle}
        aria-label="Toggle theme"
      />
      <span className="slider">
        <span className="sun">☀️</span>
        <span className="moon">🌙</span>
      </span>
    </label>
  );
};

export default React.memo(ThemeToggle);
