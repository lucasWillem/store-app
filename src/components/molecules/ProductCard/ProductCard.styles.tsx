import { styled, Card, Theme, CardContent } from "@mui/material";

const StyledProductCard = styled(Card)<{ theme?: Theme }>(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const StyledCardContent = styled(CardContent)<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  }),
);

export { StyledProductCard, StyledCardContent };
