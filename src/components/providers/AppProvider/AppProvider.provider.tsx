import { FC, ReactNode, memo } from "react";
import { StoreProvider } from "easy-peasy";
import { ThemeProvider } from "@mui/material";

import { theme } from "@/styles/theme";
import { store } from "@/redux";
import { AppWrapper } from "./utilities/AppWrapper";
import { NetworkProvider } from "@/networking";
import { ErrorBoundary } from "./utilities/ErrorBoundary";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <StoreProvider store={store}>
          <NetworkProvider>
            <AppWrapper>{children}</AppWrapper>
          </NetworkProvider>
        </StoreProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default memo(AppProvider);
