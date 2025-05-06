import React, { useCallback } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  const onToggle = useCallback(() => {
    toggle();
  }, [toggle]);

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={onToggle}
        aria-label="Toggle theme"
      />
      <span className="slider">
        <span className="sun" aria-hidden="true">
          ☀️
        </span>
        <span className="moon" aria-hidden="true">
          🌙
        </span>
      </span>
    </label>
  );
};

export default React.memo(ThemeToggle);
