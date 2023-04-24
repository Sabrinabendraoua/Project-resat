import React from "react";
import ReactDOM from "react-dom/client";
// Import de index.css dans lequel on a mis le fichier reset css
import "./index.css";
// Import du composant App
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
