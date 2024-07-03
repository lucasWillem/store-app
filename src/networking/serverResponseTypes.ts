import { type AxiosError } from "axios";

export type StrapiAPIErrorResponse = AxiosError<{
  error: StrapiAPIResponse["error"];
}>;

export type ProductsAPIErrorResponse = AxiosError<undefined>;

export type StrapiAPIResponse<SuccessResponseBody = unknown> =
  SuccessResponseBody & {
    error?: {
      status: number;
      message: string;
      name: string;
    };
  };

export type ProductsAPIResponse<Body = undefined> = Body;
