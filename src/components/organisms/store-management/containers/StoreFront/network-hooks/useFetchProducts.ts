import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import {
  type ProductsAPIResponse,
  type CustomQueryOptions,
  type ProductsAPIErrorResponse,
  helpers,
  type entities,
} from "@/networking";

type Data = undefined;

type Response = ProductsAPIResponse<entities.Product[]>;

async function fetchProducts(url: string, data: Data): Promise<Response> {
  try {
    const response = await axios.get<Response>(url, data);
    return response.data;
  } catch (error) {
    return helpers.handleNetworkError(error as ProductsAPIErrorResponse);
  }
}

/**
 * Provides a custom hook `useFetchProducts` for fetching a list of products from a specified URL
 * and managing the query's state using React Query.
 *
 * This module integrates with Axios for HTTP requests and React Query for state management
 * of asynchronous queries. It is designed to fetch a list of products from a server endpoint
 * and handle the response or errors accordingly.
 *
 * Types:
 * - `Data`: Represents the type of data sent in the request. It is `undefined` for this query as no data is sent.
 * - `Response`: Wraps the array of `Product` entities in a `ProductsAPIResponse` to handle both successful and error responses uniformly.
 *
 * Functions:
 * - `fetchProducts`: An asynchronous function that takes a URL and optional data, sends a GET request,
 *   and returns the server's response or handles errors.
 *
 * Hooks:
 * - `useFetchProducts`: A custom hook that takes a URL, optional data, and query options. It returns a query object
 *   from React Query's `useQuery` hook, configured to fetch the products from the provided URL and manage the query state.
 *
 * Usage:
 * - Import the hook into a React component.
 * - Call `useFetchProducts` with the required URL and any custom query options.
 * - Use the returned query object to access the fetched products and track the query's status.
 *
 * @module useFetchProducts
 */

export const useFetchProducts = ({
  url,
  data,
  options,
}: {
  url: string;
  data?: Data;
  options?: CustomQueryOptions<Response, Error>;
}) => {
  const queryKey = ["fetchProducts", url, data];
  const queryOptions = options ?? {};
  return useQuery<Response, Error>({
    queryKey,
    queryFn: () => fetchProducts(url, data),
    ...queryOptions,
  });
};
