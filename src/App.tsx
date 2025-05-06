import "./App.css";
import Counter from "./components/Counter";

function App() {
  const moveOutDate = "2025-07-01T12:00:00";

  return (
    <div className="App">
      <Counter targetDate={moveOutDate} />
    </div>
  );
}

export default App;
