import { type AxiosError } from "axios";

export type CustomStrapiError = AxiosError<StrapiServerResponse["error"]>;

export type StrapiServerResponse<SuccessResponseBody = unknown> =
  SuccessResponseBody & {
    error?: {
      status: number;
      name: string;
      message: string;
    };
  };
