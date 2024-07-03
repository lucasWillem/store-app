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

const _CustomAlert: FC<AlertProps> = ({
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

const CustomAlert = memo(_CustomAlert);
export default CustomAlert;
