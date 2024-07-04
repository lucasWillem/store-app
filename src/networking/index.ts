export { NetworkProvider } from "./NetworkProvider";
export { config } from "./config";

export {
  type StrapiAPIErrorResponse,
  type StrapiAPIResponse,
  type ProductsAPIResponse,
  type ProductsAPIErrorResponse,
} from "./serverResponseTypes";

export {
  type CustomMutationOptions,
  type CustomQueryOptions,
} from "./reactQueryTypes";

// These will be extended in time, so rather export like this
export * as entities from "./entityTypes";

// These will be extended in time, so rather export like this

export * as helpers from "./helpers";
