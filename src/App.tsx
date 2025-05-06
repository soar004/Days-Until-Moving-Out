import React from "react";
import Counter from "./components/Counter/Counter";
import Confetti from "./components/Confetti/Confetti";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => (
  <div className="container-fluid min-vh-100 d-flex flex-column">
    {/* top‐right toggle */}
    <div className="d-flex justify-content-end p-3">
      <ThemeToggle />
    </div>
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="col-auto text-center">
        <Counter />
        <Confetti />
      </div>
    </div>
  </div>
);

export default App;
