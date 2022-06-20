import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
