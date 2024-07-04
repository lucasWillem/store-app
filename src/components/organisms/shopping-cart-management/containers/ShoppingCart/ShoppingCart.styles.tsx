import { styled, List, Theme, ListItemText } from "@mui/material";

const StyledDrawerList = styled(List)<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  width: 400,
  [theme.breakpoints.between(450, 519)]: {
    width: 350,
  },
  [theme.breakpoints.between(350, 449)]: {
    width: 300,
  },
  [theme.breakpoints.between(320, 349)]: {
    width: 270,
  },
  [theme.breakpoints.between(260, 319)]: {
    width: 240,
  },
  [theme.breakpoints.down(259)]: {
    width: 200,
  },
}));

const StyledListItemText = styled(ListItemText)<{ theme?: Theme }>(
  ({ theme }) => ({
    marginRight: theme.spacing(1),
  }),
);

export { StyledDrawerList, StyledListItemText };
