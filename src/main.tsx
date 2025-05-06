// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import MoveOutDateProvider from "./contexts/MoveOutDateContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <MoveOutDateProvider>
        <App />
      </MoveOutDateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
