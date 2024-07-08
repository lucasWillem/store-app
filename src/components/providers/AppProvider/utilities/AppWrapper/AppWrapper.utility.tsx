import { memo, ReactNode, FC, useCallback } from "react";

import { Box } from "@mui/material";

import { CustomAlert } from "@/components/molecules/CustomAlert";
import { useStoreActions, useStoreState } from "@/redux";
import { Loader } from "@/components/atoms/Loader";

interface AppWrapperProps {
  children: ReactNode;
}

const _AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  const { isVisible, message, severity } = useStoreState(
    (state) => state.alert.alertConfig,
  );

  const { isVisible: loaderIsVisible } = useStoreState(
    (state) => state.loader.loaderConfig,
  );

  const configureAlert = useStoreActions(
    (actions) => actions.alert.configureAlert,
  );

  const handleModalClose = useCallback(() => {
    configureAlert({ isVisible: false, message: "" });
  }, [configureAlert]);

  return (
    <Box>
      <CustomAlert
        isVisible={isVisible}
        handleOnModalClose={handleModalClose}
        message={message}
        severity={severity}
      />

      <Loader isLoading={loaderIsVisible} />

      {children}
    </Box>
  );
};

/**
 * `AppWrapper` is a high-level component designed to encapsulate the entire application's UI structure. It integrates a centralized `Loader` and `CustomAlert` to manage loading states and alerts across the application efficiently. This design pattern allows for a single instance of each UI element, which can be controlled and manipulated through global state management using Easy Peasy. This approach eliminates the redundancy of multiple instances and local state management for these elements throughout the application, leading to a cleaner and more maintainable codebase.

 * The component utilizes Easy Peasy's `useStoreActions` and `useStoreState` hooks to interact with the application's global state. This enables the `AppWrapper` to display or hide the `Loader` and `CustomAlert` based on the global state, which can be updated from anywhere within the application.

 * **Key Features:**
   - Centralized `Loader` and `CustomAlert` for the entire application.
   - Global state management of UI elements using Easy Peasy.
   - Simplified and maintainable approach to controlling common UI elements.

 * **Usage:**
   - `AppWrapper` is incorporated  within our `AppProvider.provider` component to ensure centralized control over the `Loader` and `CustomAlert` is maintained throughout the application.
   - Leverage Easy Peasy actions and state selectors to dynamically manage the visibility and content of the `Loader` and `CustomAlert` from any part of the application.

 */

const AppWrapper = memo(_AppWrapper);
export default AppWrapper;
