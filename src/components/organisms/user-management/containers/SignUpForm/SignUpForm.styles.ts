import { Box, styled, Theme } from "@mui/material";

const StyledSignUpForm = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
  flex: 0.3,
  [theme.breakpoints.down(1100)]: {
    flex: 0.4,
  },
  [theme.breakpoints.down(600)]: {
    flex: 0.6,
  },
  [theme.breakpoints.down(400)]: {
    flex: 0.8,
  },
}));

const StyledInputTemplate = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  margin: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "100%",
}));

const StyledButtonsContainer = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export { StyledSignUpForm, StyledInputTemplate, StyledButtonsContainer };
