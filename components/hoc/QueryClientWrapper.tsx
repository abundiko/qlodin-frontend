'use client'

import { getQueryClient } from "@/lib/tanstack-query";
import { AppLayoutProps } from "@/types";
import { QueryClientProvider } from "@tanstack/react-query";

export default function QueryClientWrapper({ children }: AppLayoutProps) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      {children}
    </QueryClientProvider>
  );
}
