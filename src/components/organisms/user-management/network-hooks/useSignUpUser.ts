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
