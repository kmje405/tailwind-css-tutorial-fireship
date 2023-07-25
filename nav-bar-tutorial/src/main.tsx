import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Sidebar from "./components/Sidebar.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Sidebar />
  </React.StrictMode>
);
