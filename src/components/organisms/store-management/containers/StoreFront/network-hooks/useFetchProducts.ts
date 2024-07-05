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
