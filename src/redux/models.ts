import { persist } from "easy-peasy";

import { type StoreModel } from "./types";

import userModel from "@/components/organisms/user-management/containers/state/user-model";
import productsModel from "@/components/organisms/store-management/containers/StoreFront/state/products-model";
import shoppingCartModel from "@/components/organisms/shopping-cart-management/containers/ShoppingCart/state/shoppingcart-model";
import alertsModel from "@/components/molecules/CustomAlert/state/alert-model";
import loaderModel from "@/components/atoms/Loader/state/loader-model";

export const models: StoreModel = {
  alert: alertsModel,
  loader: loaderModel,
  products: persist(productsModel),
  cartItems: persist(shoppingCartModel),
  user: persist(userModel),
};
