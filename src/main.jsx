import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TimeTrackingProvider } from "./Context/TimeTrackingProvider";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TimeTrackingProvider>
      <App />
    </TimeTrackingProvider>
  </React.StrictMode>
);
