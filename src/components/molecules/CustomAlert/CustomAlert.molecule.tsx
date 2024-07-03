import { FC, memo } from "react";
import { Alert, ClickAwayListener } from "@mui/material";
import { AlertProps as MuiAlertProps } from "@mui/material/Alert";
import { AlertSeverity } from "./state/alert-model";
import { StyledCustomAlertContainer } from "./CustomAlert.styles";

export interface AlertProps extends Omit<MuiAlertProps, "color"> {
  isVisible: boolean;
  handleOnModalClose: () => void;
  message: string;
  severity?: AlertSeverity;
}

const CustomAlert: FC<AlertProps> = ({
  isVisible,
  handleOnModalClose,
  message,
  severity,
}) => {
  return (
    <>
      {isVisible && (
        <ClickAwayListener onClickAway={handleOnModalClose}>
          <StyledCustomAlertContainer>
            <Alert
              data-cy="alert"
              onClose={handleOnModalClose}
              severity={severity}
            >
              {message}
            </Alert>
          </StyledCustomAlertContainer>
        </ClickAwayListener>
      )}
    </>
  );
};

export default memo(CustomAlert);
