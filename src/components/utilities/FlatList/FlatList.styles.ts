import { styled, Box, Theme } from "@mui/material";

const StyledFlatList = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  maxWidth: "90vw",
  maxHeight: "90vh",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: theme.spacing(2),
  overflow: "auto",
  "::-webkit-scrollbar": {
    display: "none",
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
}));

export { StyledFlatList };
