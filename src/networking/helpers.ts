import { NO_NETWORK_ERROR_MESSAGE } from "./constants";
import {
  type ProductsAPIErrorResponse,
  type StrapiAPIErrorResponse,
} from "./serverResponseTypes";

export const handleNetworkError = (
  error: StrapiAPIErrorResponse | ProductsAPIErrorResponse,
) => {
  throw new Error(
    error?.response?.data?.error?.message ?? NO_NETWORK_ERROR_MESSAGE,
  );
};
