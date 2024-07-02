import { memo, ReactNode, FC, CSSProperties, useCallback } from "react";

import { StyledAppWrapper } from "./AppWrapper.styles";
import { CustomAlert } from "@/components/atoms/CustomAlert";
import { useStoreActions, useStoreState } from "@/redux";

interface AppWrapperProps {
  children: ReactNode;
  containerStyle?: CSSProperties;
}

const AppWrapper: FC<AppWrapperProps> = ({ children, containerStyle }) => {
  const { isVisible, message, severity } = useStoreState(
    (state) => state.alert.alertConfig,
  );

  const configureAlert = useStoreActions(
    (actions) => actions.alert.configureAlert,
  );

  const handleModalClose = useCallback(() => {
    configureAlert({ isVisible: false, message: "" });
  }, [configureAlert]);

  return (
    <StyledAppWrapper style={containerStyle}>
      <CustomAlert
        isVisible={isVisible}
        handleOnModalClose={handleModalClose}
        message={message}
        severity={severity}
      />

      {children}
    </StyledAppWrapper>
  );
};

export default memo(AppWrapper);
