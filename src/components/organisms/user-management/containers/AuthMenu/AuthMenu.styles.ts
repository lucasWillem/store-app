import { Box, styled, Theme } from "@mui/material";

const StyledIconButton = styled(Box)<{
  theme?: Theme;
}>(({ theme }) => ({
  color: theme.palette.text.primary,
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.primary.main,
  },
}));

export { StyledIconButton };
