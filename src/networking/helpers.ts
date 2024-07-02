import { NO_NETWORK_ERROR_MESSAGE } from "./constants";
import { type CustomStrapiError } from "./serverResponseTypes";

export const handleNetworkError = (error: CustomStrapiError) => {
  throw new Error(error?.response?.data?.message ?? NO_NETWORK_ERROR_MESSAGE);
};
