import React from "react";
import { createRoot } from "react-dom/cjs/react-dom.production.min";
import { StrictMode } from "react/cjs/react.production.min";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
