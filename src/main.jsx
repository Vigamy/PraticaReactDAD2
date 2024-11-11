import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/APP/ProvaApp.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
