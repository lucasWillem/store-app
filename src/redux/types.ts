import { type UserModel } from "@/components/organisms/user-management/state/user-model";
import { type ProductsModel } from "@/components/organisms/store-management/state/products-model";
import { type ShoppingCartModel } from "@/components/organisms/shopping-cart-management/containers/ShoppingCart/state/shoppingcart-model";
import { type AlertModel } from "@/components/molecules/CustomAlert/state/alert-model";
import { type LoaderModel } from "@/components/atoms/Loader/state/loader-model";
export interface StoreModel {
  alert: AlertModel;
  loader: LoaderModel;
  products: ProductsModel;
  cartItems: ShoppingCartModel;
  user: UserModel;
}
