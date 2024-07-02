import { type AxiosError } from "axios";

export type CustomStrapiError = AxiosError<
  StrapiServerResponse["errorResponse"]
>;

export type StrapiServerResponse<SuccessResponseBody = unknown> =
  SuccessResponseBody & {
    errorResponse?: {
      error?: {
        status: number;
        message: string;
        name: string;
      };
    };
  };
