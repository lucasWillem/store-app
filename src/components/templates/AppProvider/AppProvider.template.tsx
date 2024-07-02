import { FC, ReactNode, memo } from "react";
import { StoreProvider } from "easy-peasy";
import { ThemeProvider } from "@mui/material";

import { theme } from "@/styles/theme";
import { store } from "@/redux";
import { AppWrapper } from "@/components/templates/AppWrapper";
import { NetworkProvider } from "@/networking";

interface ScreenWrapperProps {
  children: ReactNode;
}

const ScreenTemplate: FC<ScreenWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <NetworkProvider>
          <AppWrapper>{children}</AppWrapper>
        </NetworkProvider>
      </StoreProvider>
    </ThemeProvider>
  );
};

export default memo(ScreenTemplate);
