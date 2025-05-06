import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Counter from "./components/Counter/Counter";
import Confetti from "./components/Confetti/Confetti";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => (_jsxs("div", { className: "container-fluid min-vh-100 d-flex flex-column", children: [_jsx("div", { className: "d-flex justify-content-end p-3", children: _jsx(ThemeToggle, {}) }), _jsx("div", { className: "container-fluid min-vh-100 d-flex justify-content-center align-items-center", children: _jsxs("div", { className: "col-auto text-center", children: [_jsx(Counter, {}), _jsx(Confetti, {})] }) })] }));
export default App;
