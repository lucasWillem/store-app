import { Action, action } from "easy-peasy";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface ProductsModel {
  products: Product[];
  storeproducts: Action<ProductsModel, Product[]>;
}

const productsModel: ProductsModel = {
  products: [],
  storeproducts: action((state, payload) => {
    state.products = payload;
  }),
};

export default productsModel;
