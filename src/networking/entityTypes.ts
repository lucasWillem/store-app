export interface Product {
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

export interface Cart {
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
}
