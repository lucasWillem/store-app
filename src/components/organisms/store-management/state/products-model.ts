import { Action, action } from "easy-peasy";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

interface ProductRating {
  rate: number;
  count: number;
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
