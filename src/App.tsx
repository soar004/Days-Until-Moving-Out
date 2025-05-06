// src/App.tsx
import React from "react";
import Counter from "./components/Counter/Counter";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Confetti from "./components/Confetti/Confetti";

const App: React.FC = () => (
  <div className="container py-5">
    <Counter />
    <ProgressBar />
    <Confetti />
  </div>
);

export default App;
