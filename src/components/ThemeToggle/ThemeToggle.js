import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useCallback } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";
const ThemeToggle = () => {
    const { theme, toggle } = useTheme();
    const isDark = theme === "dark";
    const onToggle = useCallback(() => {
        toggle();
    }, [toggle]);
    return (_jsxs("label", { className: "theme-switch", children: [_jsx("input", { type: "checkbox", checked: isDark, onChange: onToggle, "aria-label": "Toggle theme" }), _jsxs("span", { className: "slider", children: [_jsx("span", { className: "sun", "aria-hidden": "true", children: "\u2600\uFE0F" }), _jsx("span", { className: "moon", "aria-hidden": "true", children: "\uD83C\uDF19" })] })] }));
};
export default React.memo(ThemeToggle);
