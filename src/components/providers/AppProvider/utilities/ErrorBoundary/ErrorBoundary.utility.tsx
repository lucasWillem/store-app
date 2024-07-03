import { memo, ReactNode, FC } from "react";

import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import {
  StyledErrorBoundaryWrapper,
  StyledErrorFallback,
  StyledAlertHeading,
  StyledMessage,
} from "./ErrorBoundary.styles";
import { Button } from "@mui/material";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <StyledErrorFallback>
      <StyledAlertHeading variant="h6">
        Something went wrong:
      </StyledAlertHeading>
      <StyledMessage variant="body1">{`${error.message.substring(0, 50)}...`}</StyledMessage>
      <div>
        <Button onClick={resetErrorBoundary} variant="outlined" color="warning">
          Try again
        </Button>
      </div>
    </StyledErrorFallback>
  );
};

const _ErrorBoundary: FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <StyledErrorBoundaryWrapper>
      <ReactErrorBoundary
        onReset={() => window.location.reload()}
        FallbackComponent={ErrorFallback}
      >
        {children}
      </ReactErrorBoundary>
    </StyledErrorBoundaryWrapper>
  );
};

const ErrorBoundary = memo(_ErrorBoundary);
export default ErrorBoundary;
