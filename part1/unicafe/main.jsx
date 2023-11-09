import ReactDOM from "react-dom/client";
import App from "./App";

// Assuming you have an element with id 'root' in your index.html
const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render: Render the App component to the DOM.
root.render(<App />);
