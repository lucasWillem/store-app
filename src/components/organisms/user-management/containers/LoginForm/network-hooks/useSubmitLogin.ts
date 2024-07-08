import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import {
  type StrapiAPIErrorResponse,
  type StrapiAPIResponse,
  type CustomMutationOptions,
  helpers,
} from "@/networking";

interface Data {
  identifier: string;
  password: string;
}

type Response = StrapiAPIResponse<{
  jwt?: string;
  user?: {
    id: number;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  } | null;
}>;

export const mutationKey = ["SubmitLogin"];

async function submitLogin(url: string, data: Data): Promise<Response> {
  try {
    const response = await axios.post<Response>(url, data);
    return response.data;
  } catch (error) {
    return helpers.handleNetworkError(error as StrapiAPIErrorResponse);
  }
}

/**
 * Provides functionality for submitting login credentials to a specified URL and handling the response using React Query's `useMutation` hook. It is designed to work with a Strapi backend, but can be adapted for other APIs.

 * **Imports:**
   - `axios` for making HTTP requests.
   - `useMutation` from `@tanstack/react-query` for managing mutations.
   - Various types (`StrapiAPIErrorResponse`, `StrapiAPIResponse`, `CustomMutationOptions`) and helpers from a local networking module for handling responses and errors.

 * **Types:**
   - `Data`: Interface for the login request payload, containing `identifier` (username or email) and `password`.
   - `Response`: Type extending `StrapiAPIResponse` to include the expected response structure, potentially containing a JWT token and user information.

 * **Constants:**
   - `mutationKey`: Array containing a single string `["SubmitLogin"]`, used as a unique key for the mutation. This key is crucial for caching and invalidation strategies within React Query, allowing for efficient data management and re-fetching strategies.

 * **Functions:**
   - `submitLogin`: Asynchronous function that takes a `url` and `data` (login credentials), sends a POST request using `axios`, and returns the response data. It handles errors by calling `helpers.handleNetworkError`.

 * **Hooks:**
   - `useSubmitLogin`: Custom hook that takes an object with `url` (endpoint for login) and optional `options` (custom mutation options). It returns a mutation object from `useMutation`, configured with the `mutationKey`, a mutation function (`mutationFn`) that calls `submitLogin`, and any additional options provided. The `mutationKey` is used by React Query to cache and manage the mutation's state and side effects, enhancing the performance and user experience.

 * **Usage:**
   - Import `useSubmitLogin` in a React component to create a login functionality. Provide the login endpoint URL and optionally, custom mutation options. Use the returned mutation object to trigger the login operation and manage its state and side effects.
*/

export const useSubmitLogin = ({
  url,
  options,
}: {
  url: string;
  options?: CustomMutationOptions<Response, Data>;
}) => {
  const mutationOptions = options ?? {};

  return useMutation({
    mutationKey,
    mutationFn: (data: Data) => submitLogin(url, data),
    ...mutationOptions,
  });
};
