import { styled, Box, Theme } from "@mui/material";

const StyledFlatList = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  maxWidth: "90vw",
  margin: theme.spacing(2, "auto"),
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: theme.spacing(2),
  paddingTop: theme.spacing(4),
  overflow: "auto",
  maxHeight: "90vh",
  "::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none",
  "scrollbar-width": "none",
}));

export { StyledFlatList };
