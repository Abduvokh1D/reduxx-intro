import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// step-4, just import store here.
import "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
