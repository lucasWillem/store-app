import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoreProvider } from "easy-peasy";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/styles/theme";
import { store } from "@/redux";
import { AppWrapper } from "@/components/templates/AppWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <AppWrapper>
          <App />
        </AppWrapper>
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
