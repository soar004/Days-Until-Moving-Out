import React from "react";
import Counter from "./components/Counter/Counter";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Confetti from "./components/Confetti/Confetti";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => (
  <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
    <div className="col-auto text-center">
      <Counter />
      <ProgressBar />
      <Confetti />
    </div>
  </div>
);

export default App;
