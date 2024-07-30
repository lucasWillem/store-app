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

import dayjs from "dayjs";

import {
  MdShoppingCart,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

import { useStoreActions, useStoreState } from "@/redux";
import { constants } from "@/networking";
//kyk hoe entities import het en selfde doen
import { utils } from "@/global";

import { AlertSeverity } from "@/components/molecules/CustomAlert/state/alert-model";

import {
  StyledDrawerList,
  StyledListItemText,
  StyledActionSection,
  StyledPrice,
} from "./ShoppingCart.styles";
import { CartItem } from "./state/shoppingcart-model";
import { useSubmitCart } from "./network-hooks/useSubmitCart";

interface ShoppingCartProps {
  containerStyle?: CSSProperties;
}

const _ShoppingCart: FC<ShoppingCartProps> = ({ containerStyle }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { removeCartItem } = useStoreActions((actions) => actions.cartItems);
  const { addCartItem } = useStoreActions((actions) => actions.cartItems);
  const { configureAlert } = useStoreActions((actions) => actions.alert);
  const { configureLoader } = useStoreActions((actions) => actions.loader);

  const { user } = useStoreState((state) => state.user);
  const { cartItems } = useStoreState((state) => state.cartItems);

  const { mutate: submitCart } = useSubmitCart({
    url: constants.SubmitCartEndPoint,
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

  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.count,
    0,
  );

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.count, 0)
    .toFixed(2);

  const formattedTotalPrice = utils.getFormattedCurrencyString(totalPrice);

  return (
    <Box style={containerStyle}>
      <IconButton disabled={cartItems.length === 0} onClick={toggleCart}>
        <Badge badgeContent={totalItemCount} color="primary">
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
            <StyledActionSection>
              <StyledPrice>{`Total: $${formattedTotalPrice}`}</StyledPrice>
              <Button
                onClick={() => {
                  toggleCart();
                  handleSubmitCart(cartItems);
                }}
              >
                Check out
              </Button>
            </StyledActionSection>
          )}
        </StyledDrawerList>
      </Drawer>
    </Box>
  );
};

const ShoppingCart = memo(_ShoppingCart);
export default ShoppingCart;
