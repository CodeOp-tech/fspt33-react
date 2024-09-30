import ReactDOM from "react-dom";
import { App } from "./App";

// target root div
const rootElement = document.getElementById("root");

// createRoot
const root = ReactDOM.createRoot(rootElement);

// render
root.render(<App />);
