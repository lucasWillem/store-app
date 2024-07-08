import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import {
  type StrapiAPIErrorResponse,
  type StrapiAPIResponse,
  type CustomMutationOptions,
  helpers,
} from "@/networking";

interface Data {
  username: string;
  email: string;
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

export const mutationKey = ["SignUpUser"];

async function signUpUser(url: string, data: Data): Promise<Response> {
  try {
    const response = await axios.post<Response>(url, data);
    return response.data;
  } catch (error) {
    return helpers.handleNetworkError(error as StrapiAPIErrorResponse);
  }
}

/**
 * This TypeScript module provides functionality for submitting user signup data to a specified URL and handling the response using React Query's `useMutation` hook. It is designed to work with a Strapi backend, but can be adapted for use with other APIs.

 * **Imports:**
   - `axios` for making HTTP requests.
   - `useMutation` from `@tanstack/react-query` for managing mutations.
   - Various types (`StrapiAPIErrorResponse`, `StrapiAPIResponse`, `CustomMutationOptions`) and helpers from a local networking module for handling responses and errors.

 * **Types:**
   - `Data`: Interface for the signup request payload, containing `username`, `email`, and `password`.
   - `Response`: Type extending `StrapiAPIResponse` to include the expected response structure, potentially containing a JWT token and user information.

 * **Constants:**
   - `mutationKey`: Array containing a single string `["SignUpUser"]`, used as a unique key for the mutation. This key is crucial for caching and invalidation strategies within React Query, allowing for efficient data management and re-fetching strategies.

 * **Functions:**
   - `signUpUser`: Asynchronous function that takes a `url` and `data` (signup credentials), sends a POST request using `axios`, and returns the response data. It handles errors by calling `helpers.handleNetworkError`.

 * **Hooks:**
   - `useSignUpUser`: Custom hook that takes an object with `url` (endpoint for signup) and optional `options` (custom mutation options). It returns a mutation object from `useMutation`, configured with the `mutationKey`, a mutation function (`mutationFn`) that calls `signUpUser`, and any additional options provided. The `mutationKey` is used by React Query to cache and manage the mutation's state and side effects, enhancing the performance and user experience.

 * **Usage:**
   - Import `useSignUpUser` in a React component to create a signup functionality. Provide the signup endpoint URL and optionally, custom mutation options. Use the returned mutation object to trigger the signup operation and manage its state and side effects.
*/

export const useSignUpUser = ({
  url,
  options,
}: {
  url: string;
  options?: CustomMutationOptions<Response, Data>;
}) => {
  const mutationOptions = options ?? {};

  return useMutation({
    mutationKey,
    mutationFn: (data: Data) => signUpUser(url, data),
    ...mutationOptions,
  });
};
