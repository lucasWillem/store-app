import { styled, Box, Theme } from "@mui/material";

const StyledLoaderWrapper = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "100%",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  paddingTop: theme.spacing(4),
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  zIndex: 9999,
}));

export { StyledLoaderWrapper };
