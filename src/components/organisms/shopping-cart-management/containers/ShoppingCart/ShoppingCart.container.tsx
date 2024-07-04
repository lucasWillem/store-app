import { CSSProperties, FC, memo, useState } from "react";
import {
  IconButton,
  Badge,
  Drawer,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Box,
  Button,
} from "@mui/material";

import { useStoreActions, useStoreState } from "@/redux";
import {
  MdShoppingCart,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

import { StyledDrawerList, StyledListItemText } from "./ShoppingCart.styles";
import { CartItem } from "../../state/shoppingcart-model";
import { useSubmitCart } from "./network-hooks/useSubmitCart";
import { StoreEndPoints } from "@/components/organisms/user-management/constants";
import { AlertSeverity } from "@/components/molecules/CustomAlert/state/alert-model";
import dayjs from "dayjs";

interface ShoppingCartProps {
  containerStyle?: CSSProperties;
}

const _ShoppingCart: FC<ShoppingCartProps> = ({ containerStyle }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { removeCartItem } = useStoreActions((actions) => actions.cartItems);
  const { cartItems } = useStoreState((state) => state.cartItems);
  const { addCartItem } = useStoreActions((actions) => actions.cartItems);

  const configureAlert = useStoreActions(
    (actions) => actions.alert.configureAlert,
  );

  const configureLoader = useStoreActions(
    (actions) => actions.loader.configureLoader,
  );

  const { user } = useStoreState((state) => state.user);

  const { mutate: submitCart } = useSubmitCart({
    url: StoreEndPoints.SubmitCart,
    options: {
      onMutate: () => {
        configureLoader({ isVisible: true });
      },
      onSettled: (data, error) => {
        configureLoader({ isVisible: false });

        if (error) {
          const { message } = error as Error;
          configureAlert({
            isVisible: true,
            message: message ?? "An error occurred while submitting cart",
            severity: AlertSeverity.Error,
          });
        } else if (data) {
          configureAlert({
            isVisible: true,
            message: "Payment process starts here...",
            severity: AlertSeverity.Info,
          });
        }
      },
    },
  });

  const handleSubmitCart = (cartItems: CartItem[]) => {
    if (user?.id === undefined) return;

    const cart = {
      userId: user?.id,
      date: dayjs().format("YYYY-MM-DD"),
      products: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.count,
      })),
    };
    submitCart(cart);
  };

  const handleRemoveItem = (id: number) => {
    removeCartItem(id);
  };

  const handleAddItem = (product: CartItem) => {
    addCartItem(product);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Box style={containerStyle}>
      <IconButton disabled={cartItems.length === 0} onClick={toggleCart}>
        <Badge badgeContent={cartItems.length} color="primary">
          <MdShoppingCart />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}>
        <StyledDrawerList>
          <Box>
            {cartItems.length === 0 ? (
              <ListItem>
                <ListItemText primary="No items in cart" />
              </ListItem>
            ) : (
              cartItems.map((item) => (
                <ListItem key={item.id}>
                  <StyledListItemText
                    sx={{ marginRight: 8 }}
                    primary={`${item.title.substring(0, 30)}...`}
                  />

                  <ListItemSecondaryAction>
                    <Badge
                      style={{ marginRight: 8 }}
                      badgeContent={item.count}
                      color="primary"
                    />
                    <IconButton
                      color="primary"
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <MdRemoveCircleOutline />
                    </IconButton>

                    <IconButton
                      color="primary"
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleAddItem(item)}
                    >
                      <MdAddCircleOutline />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            )}
          </Box>
          {cartItems.length > 0 && (
            <Button
              onClick={() => {
                toggleCart();
                handleSubmitCart(cartItems);
              }}
            >
              Check out
            </Button>
          )}
        </StyledDrawerList>
      </Drawer>
    </Box>
  );
};

const ShoppingCart = memo(_ShoppingCart);
export default ShoppingCart;
