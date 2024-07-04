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
