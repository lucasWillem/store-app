import { styled, Box, Theme } from "@mui/material";

const StyledFlatList = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  maxWidth: "85vw",
  maxHeight: "90vh",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  overflow: "auto",
  "::-webkit-scrollbar": {
    display: "none",
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  [theme.breakpoints.down(1000)]: {
    maxWidth: "80vw",
  },
  [theme.breakpoints.down(750)]: {
    maxWidth: "75vw",
  },
  [theme.breakpoints.down(650)]: {
    maxWidth: "70vw",
  },
  [theme.breakpoints.down(500)]: {
    maxWidth: "65vw",
  },
  [theme.breakpoints.down(380)]: {
    maxWidth: "62vw",
  },
}));

export { StyledFlatList };
