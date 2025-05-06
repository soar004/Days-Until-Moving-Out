import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      className="btn btn-outline-secondary btn-sm"
      onClick={toggle}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default React.memo(ThemeToggle);
