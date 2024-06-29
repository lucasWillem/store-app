import type { ProductsModel } from "./products-model";
import type { ShoppingCartModel } from "./shoppingcart-model";

export interface StoreModel {
  products: ProductsModel;
  cartItems: ShoppingCartModel;
}
