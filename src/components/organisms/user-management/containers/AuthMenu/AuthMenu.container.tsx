import { FC, memo, CSSProperties, useState, MouseEvent } from "react";
import { Box, Menu, MenuItem } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

import { useCheckIfLoggedIn } from "@/global";
import { useStoreActions } from "@/redux";
import { RoutePaths } from "@/routing";

import { StyledIconButton } from "./AuthMenu.styles";
export interface AuthMenuProps {
  containerStyle?: CSSProperties;
}

const _AuthMenu: FC<AuthMenuProps> = ({ containerStyle }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isLoggedIn = useCheckIfLoggedIn();

  const navigate = useNavigate();

  const { logout } = useStoreActions((actions) => actions.user);
  const { clearCart } = useStoreActions((actions) => actions.cartItems);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
    clearCart();
    navigate(RoutePaths.Login);
  };

  return (
    <>
      {isLoggedIn && (
        <Box sx={containerStyle}>
          <StyledIconButton
            fontSize={20}
            color="secondary"
            onClick={handleClick}
          >
            <GiHamburgerMenu />
          </StyledIconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      )}
    </>
  );
};

const AuthMenu = memo(_AuthMenu);
export default AuthMenu;
