//TODO: move to .env file
export const BASE_URL = "https://poker-app-api-0d4ea22a01f7.herokuapp.com";

export enum AuthenticationEndPoints {
  Register = `${BASE_URL}/api/auth/local/register`,
  Login = `${BASE_URL}/api/auth/local`,
}

export enum StoreEndPoints {
  FetchProducts = "https://fakestoreapi.com/products",
}
