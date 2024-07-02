import { Action, action } from "easy-peasy";

interface CartItem {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface ShoppingCartModel {
  cartItems: CartItem[];
  addCartItem: Action<ShoppingCartModel, CartItem>;
}

const shoppingCartModel: ShoppingCartModel = {
  cartItems: [],
  addCartItem: action((state, payload) => {
    state.cartItems.push(payload);
  }),
};

export default shoppingCartModel;
