import { styled, Theme, CardContent } from "@mui/material";

const StyledCardContent = styled(CardContent)<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  }),
);

export { StyledCardContent };
