interface Config {
  strapiUrl: string;
  storeUrl: string;
}

const strapiUrl = import.meta.env.VITE_STRAPI_URL as string;
const storeUrl = import.meta.env.VITE_STORE_API_URL as string;

export const config: Config = {
  strapiUrl,
  storeUrl,
};
