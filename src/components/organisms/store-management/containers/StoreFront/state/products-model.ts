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

/**
 * Defines the model for managing a collection of products within an application using the Easy Peasy state management library.
 * This model includes the structure for product data and an action to store products in the state.
 *
 * Interfaces:
 * - `Product`: Represents the structure of a single product, including its id, title, price, description, category, image, and rating.
 * - `ProductRating`: Represents the rating of a product, including the rate and count of reviews.
 *
 * The `ProductsModel` interface:
 * - `products`: An array of `Product` objects representing the collection of products managed by this model.
 * - `storeproducts`: An action for updating the `products` array in the state. It takes an array of `Product` objects as a payload.
 *
 * The `productsModel` object:
 * - Implements the `ProductsModel` interface.
 * - Initializes `products` as an empty array.
 * - Defines `storeproducts` as an action that replaces the current `products` array in the state with the provided payload.
 *
 * Usage:
 * - Import the `productsModel` into your store configuration.
 * - Access and modify the products state using the `storeproducts` action within your application's components.
 */

const productsModel: ProductsModel = {
  products: [],
  storeproducts: action((state, payload) => {
    state.products = payload;
  }),
};

export default productsModel;
