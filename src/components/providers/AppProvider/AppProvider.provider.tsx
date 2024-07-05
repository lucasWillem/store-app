import { FC, ReactNode, memo } from "react";
import { StoreProvider } from "easy-peasy";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { theme } from "@/styles/theme";
import { store } from "@/redux";
import { NetworkProvider } from "@/networking";

import { AppWrapper, ErrorBoundary } from "./utilities";

interface AppProviderProps {
  children: ReactNode;
}

const _AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <StoreProvider store={store}>
          <NetworkProvider>
            <CssBaseline>
              <AppWrapper>{children}</AppWrapper>
            </CssBaseline>
          </NetworkProvider>
        </StoreProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

const AppProvider = memo(_AppProvider);
export default AppProvider;
