import { Box, styled } from "@mui/material";

const StyledPageWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export { StyledPageWrapper };
