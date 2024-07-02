import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "@/components/templates/AppProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App data-cy="app" />
    </AppProvider>
  </React.StrictMode>,
);
