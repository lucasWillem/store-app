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

/**
 * `ErrorBoundary` is a React component that serves as an error boundary for its child components. It utilizes the `react-error-boundary` package to provide a graceful error handling mechanism. When an error occurs in any of the child components, instead of crashing the entire application, `ErrorBoundary` catches the error and displays a user-friendly error message, allowing users to attempt to recover from the error.

 * The component is designed with customization in mind, using styled components (`StyledErrorBoundaryWrapper`, `StyledErrorFallback`, `StyledAlertHeading`, `StyledMessage`) for the error display, making it easy to adapt the look and feel according to the application's design requirements.

 * **Props:**
   - `ErrorBoundaryProps`: Accepts a single prop, `children`, which represents the child components that the error boundary is protecting.
   - `ErrorFallbackProps`: Used by the `ErrorFallback` component, it includes `error`, which is the caught error object, and `resetErrorBoundary`, a function to reset the error boundary state.

 * **Components:**
   - `ErrorFallback`: A functional component that renders the UI to be shown when an error is caught. It displays a message and a "Try again" button, which attempts to recover from the error by reloading the page.
   - `_ErrorBoundary`: The main error boundary component that wraps the `ReactErrorBoundary` component from the `react-error-boundary` package. It specifies the `FallbackComponent` as `ErrorFallback` and defines an `onReset` handler that reloads the page to try and clear the error state.

 * **Usage:**

  - `ErrorBoundary` is incorporated  within our `AppProvider.provider` component to protect the application from unhandled errors. This ensures that an error in a part of the UI does not take down the entire application.

  */

const ErrorBoundary = memo(_ErrorBoundary);
export default ErrorBoundary;
