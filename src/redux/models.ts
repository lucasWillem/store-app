import { persist } from "easy-peasy";

import type { StoreModel } from "./types";

import productsModel from "./products-model";
import shoppingCartModel from "./shoppingcart-model";

export const models: StoreModel = {
  products: persist(productsModel),
  cartItems: persist(shoppingCartModel),
};
