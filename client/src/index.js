import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { AccountProvider } from "./contexts/accountContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AccountProvider>
    <App />
  </AccountProvider>
);
