import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import {
  type CustomStrapiError,
  type StrapiServerResponse,
  handleNetworkError,
  type CustomMutationOptions,
} from "@/networking";

type Data = {
  identifier: string;
  password: string;
};

type Response = StrapiServerResponse<{
  jwt?: string;
  user?: {
    id: number;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  } | null;
  error?: CustomStrapiError;
}>;

export const mutationKey = ["SubmitLogin"];

async function submitLogin(url: string, data: Data): Promise<Response> {
  try {
    const response = await axios.post<Response>(url, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return handleNetworkError(error as CustomStrapiError);
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
