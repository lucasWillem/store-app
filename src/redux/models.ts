import { persist } from "easy-peasy";

import type { StoreModel } from "./types";

import productsModel from "./products-model";

export const models: StoreModel = {
  products: persist(productsModel),
};
