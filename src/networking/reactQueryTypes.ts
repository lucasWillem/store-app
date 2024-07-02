import {
  type UseMutationOptions,
  type UseQueryOptions,
} from "@tanstack/react-query";

export type CustomMutationOptions<Response, Data> = Omit<
  UseMutationOptions<Response, unknown, Data>,
  "mutationKey" | "mutationFn"
>;

export type CustomQueryOptions<Response, Error> = Omit<
  UseQueryOptions<Response, Error>,
  "queryKey" | "queryFn"
>;
