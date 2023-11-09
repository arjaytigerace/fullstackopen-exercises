import ReactDOM from "react-dom/client";
import App from "./App";

// Select the root element from the HTML
const container = document.getElementById("root");

// Create a root for the React application
const root = ReactDOM.createRoot(container);

// Initial render: Render the App component to the DOM
root.render(<App />);
