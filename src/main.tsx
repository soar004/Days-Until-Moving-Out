// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // if you’re using Bootstrap
import "./index.css"; // your own globals

import MoveOutDateProvider from "./contexts/MoveOutDateContext";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MoveOutDateProvider>
      <App />
    </MoveOutDateProvider>
  </React.StrictMode>
);
