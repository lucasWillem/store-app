import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import {
  type ProductsAPIResponse,
  type CustomMutationOptions,
  type ProductsAPIErrorResponse,
  helpers,
  type entities,
} from "@/networking";

type Data = entities.Cart;

interface CartResponse extends entities.Cart {
  id: number;
}

type Response = ProductsAPIResponse<CartResponse>;

export const mutationKey = ["SubmitCart"];

async function submitCart(url: string, data: Data): Promise<Response> {
  try {
    const response = await axios.post<Response>(url, data);
    return response.data;
  } catch (error) {
    return helpers.handleNetworkError(error as ProductsAPIErrorResponse);
  }
}

export const useSubmitCart = ({
  url,
  options,
}: {
  url: string;
  options?: CustomMutationOptions<Response, Data>;
}) => {
  const mutationOptions = options ?? {};

  return useMutation({
    mutationKey,
    mutationFn: (data: Data) => submitCart(url, data),
    ...mutationOptions,
  });
};
