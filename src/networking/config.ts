//TODO: Update env.VITE_API_URL and localhost to the actual values appropriate for the project

type Config = {
  apiUrl: string;
};

const apiUrl = import.meta.env.VITE_API_URL as string | undefined;

export const config: Config = {
  apiUrl: apiUrl ?? "http://localhost:2000",
};
