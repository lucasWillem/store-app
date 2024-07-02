import { FC, memo, ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "./queryClient";

export type NetworkProviderProps = {
  children: ReactNode;
};

const _NetworkProvider: FC<NetworkProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export const NetworkProvider = memo(_NetworkProvider);
