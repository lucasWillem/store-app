import { type UserModel } from "@/components/organisms/user-management/state/user-model";
import { type ProductsModel } from "@/components/organisms/store-management/state/products-model";
import { type ShoppingCartModel } from "@/components/organisms/shopping-cart-management/state/shoppingcart-model";
export interface StoreModel {
  products: ProductsModel;
  cartItems: ShoppingCartModel;
  user: UserModel;
}
