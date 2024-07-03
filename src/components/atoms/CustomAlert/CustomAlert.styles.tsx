import { Box, styled } from "@mui/material";

const StyledCustomAlertContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 9999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

export { StyledCustomAlertContainer };
