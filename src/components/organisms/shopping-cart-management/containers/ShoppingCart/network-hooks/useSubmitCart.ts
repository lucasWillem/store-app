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

/**
 * Provides a custom hook `useSubmitCart` for submitting a shopping cart to a specified URL
 * and managing the mutation's state using React Query.
 *
 * This module integrates with Axios for HTTP requests and React Query for state management
 * of asynchronous mutations. It is designed to submit a shopping cart object to a server endpoint
 * and handle the response or errors accordingly.
 *
 * Types:
 * - `Data`: Represents the shape of the shopping cart data to be submitted.
 * - `CartResponse`: Extends the cart entity with an additional `id` field, representing the server's response.
 * - `Response`: Wraps the `CartResponse` in a `ProductsAPIResponse` to handle both successful and error responses uniformly.
 *
 * Functions:
 * - `submitCart`: An asynchronous function that takes a URL and cart data, submits the data using a POST request,
 *   and returns the server's response or handles errors.
 *
 * Hooks:
 * - `useSubmitCart`: A custom hook that takes a URL and optional mutation options. It returns a mutation object
 *   from React Query's `useMutation` hook, configured to submit the cart data to the provided URL and manage the mutation state.
 *
 * Usage:
 * - Import the hook into a React component.
 * - Call `useSubmitCart` with the required URL and any custom mutation options.
 * - Use the returned mutation object to trigger the cart submission and track its status.
 *
 * @module useSubmitCart
 */

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
