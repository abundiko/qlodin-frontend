import { QueryClient } from "@tanstack/react-query";

let queryClient: QueryClient | undefined;
export function getQueryClient() {
  if (!queryClient) {
    queryClient = new QueryClient({
      //   defaultOptions: {
      //     queries: {
      //       refetchOnWindowFocus: false,
      //     },
      //   },
    });
  }

  return queryClient;
}
