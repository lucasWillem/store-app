import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0, 121, 107)",
    },
    secondary: {
      main: "rgb(0, 0, 0)",
    },
    error: {
      main: "rgb(220, 53, 69)",
    },
    success: {
      main: "rgb(40, 167, 69)",
    },
    background: {
      default: "rgb(245, 245, 245)",
    },
    text: {
      primary: "rgb(51, 51, 51)",
      secondary: "rgb(117, 117, 117)",
    },
  },
});
