import { config } from "./config";

export const NO_NETWORK_ERROR_MESSAGE =
  "Please ensure that you have a stable internet connection.";

export const RegisterEndPoint = `${config.strapiUrl}/api/auth/local/register`;
export const LoginEndPoint = `${config.strapiUrl}/api/auth/local`;
export const FetchProductsEndPoint = `${config.storeUrl}/products`;
export const SubmitCartEndPoint = `${config.storeUrl}/carts`;
