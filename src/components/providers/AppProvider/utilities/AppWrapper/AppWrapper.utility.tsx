import { memo, ReactNode, FC, useCallback } from "react";

import { Box } from "@mui/material";

import { CustomAlert } from "@/components/atoms/CustomAlert";
import { useStoreActions, useStoreState } from "@/redux";
import { Loader } from "@/components/atoms/Loader";

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
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

export default memo(AppWrapper);
