import { type UserModel } from "@/components/organisms/user-management/state/user-model";
import { type ProductsModel } from "@/components/organisms/store-management/state/products-model";
import { type ShoppingCartModel } from "@/components/organisms/shopping-cart-management/state/shoppingcart-model";
import { type AlertModel } from "@/components/atoms/CustomAlert/state/alert-model";
export interface StoreModel {
  alert: AlertModel;
  products: ProductsModel;
  cartItems: ShoppingCartModel;
  user: UserModel;
}
