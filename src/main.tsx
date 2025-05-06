// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; //

import MoveOutDateProvider from "./contexts/MoveOutDateContext";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <MoveOutDateProvider>
    <App />
  </MoveOutDateProvider>
);
