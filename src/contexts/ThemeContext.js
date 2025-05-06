import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, } from "react";
const ThemeContext = createContext(undefined);
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useTheme must be used within a <ThemeProvider />");
    }
    return ctx;
}
export const ThemeProvider = ({ children, }) => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("bs-theme");
        if (saved === "light" || saved === "dark")
            return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });
    // whenever 'theme' changes, persist it and update <html data-bs-theme>
    useEffect(() => {
        localStorage.setItem("bs-theme", theme);
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]);
    const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));
    return (_jsx(ThemeContext.Provider, { value: { theme, toggle }, children: children }));
};
