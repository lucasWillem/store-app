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
  clearCart: Action<ShoppingCartModel>;
}

/**
 * Defines the model for a shopping cart using the Easy Peasy state management library.
 * This model includes actions for adding and removing items from the cart.
 *
 * Interfaces:
 * - `CartItem`: Represents an individual item in the shopping cart, including its id, title,
 *   price, description, category, image, rating, and count (quantity).
 * - `ProductRating`: Represents the rating of a product, including the rate and count of reviews.
 * - `ShoppingCartModel`: Defines the structure of the shopping cart model, including the list of cart items
 *   and actions for modifying the cart contents.
 *
 * The `shoppingCartModel` object:
 * - `cartItems`: An array of `CartItem` objects representing the items currently in the cart.
 * - `removeCartItem`: An action to remove an item from the cart or decrement its count. It takes the item's id as a payload.
 *   If the item's count after decrementing is zero or less, the item is removed from the cart.
 * - `addCartItem`: An action to add an item to the cart or increment its count if it already exists. It takes a `CartItem` object as a payload.
 *   If the item already exists in the cart, its count is incremented. Otherwise, the item is added to the cart with a count of 1.
 *
 * Usage:
 * - Import the `shoppingCartModel` into your store configuration.
 * - Access and modify the cart's state using the provided actions within your application's components.
 */

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
  clearCart: action((state) => {
    state.cartItems = [];
  }),
};

export default shoppingCartModel;
