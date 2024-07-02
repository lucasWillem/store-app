import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import {
  type CustomStrapiError,
  type StrapiServerResponse,
  handleNetworkError,
  type CustomMutationOptions,
} from "@/networking";

type Data = {
  username: string;
  email: string;
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
}>;

export const mutationKey = ["SignUpUser"];

async function signUpUser(url: string, data: Data): Promise<Response> {
  try {
    const response = await axios.post<Response>(url, data);
    return response.data;
  } catch (error) {
    return handleNetworkError(error as CustomStrapiError);
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
