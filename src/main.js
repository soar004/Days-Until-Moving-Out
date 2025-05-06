import { jsx as _jsx } from "react/jsx-runtime";
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import MoveOutDateProvider from "./contexts/MoveOutDateContext";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ThemeProvider, { children: _jsx(MoveOutDateProvider, { children: _jsx(App, {}) }) }) }));
