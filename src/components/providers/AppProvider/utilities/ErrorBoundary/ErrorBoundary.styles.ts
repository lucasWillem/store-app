import { Box, Typography, styled } from "@mui/material";

const StyledErrorBoundaryWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.secondary.main,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}));

const StyledErrorFallback = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  width: "50%",
  backgroundColor: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.warning.main}`,
  padding: theme.spacing(2),
}));

const StyledAlertHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const StyledMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export {
  StyledErrorBoundaryWrapper,
  StyledErrorFallback,
  StyledAlertHeading,
  StyledMessage,
};
