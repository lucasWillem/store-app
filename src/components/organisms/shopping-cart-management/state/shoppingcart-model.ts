import { Action, action } from "easy-peasy";
export interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
  count: number;
}

interface ProductRating {
  rate: number;
  count: number;
}

export interface ShoppingCartModel {
  cartItems: CartItem[];
  removeCartItem: Action<ShoppingCartModel, number>;
  addCartItem: Action<ShoppingCartModel, CartItem>;
}

const shoppingCartModel: ShoppingCartModel = {
  cartItems: [],
  removeCartItem: action((state, payload) => {
    // Find the index of the item to be removed or modified
    const itemIndex = state.cartItems.findIndex((item) => item.id === payload);

    if (itemIndex >= 0) {
      // Decrement the count of the item
      state.cartItems[itemIndex].count -= 1;

      // If the count reaches zero, remove the item from the cart
      if (state.cartItems[itemIndex].count <= 0) {
        state.cartItems.splice(itemIndex, 1);
      }
    }
  }),
  addCartItem: action((state, payload) => {
    // Check if the cart already contains an item with the same id
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === payload.id,
    );

    if (existingCartItemIndex >= 0) {
      // Item exists, increment the count
      state.cartItems[existingCartItemIndex].count += 1;
    } else {
      // Item does not exist, add it to the cart with count 1
      state.cartItems.push({ ...payload, count: 1 });
    }
  }),
};

export default shoppingCartModel;
