'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"
import { useState } from 'react';

export default function ReactQueryProviders({ children }) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, 
          refetchOnMount: false, 
          retry: 1, 
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        {children}
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}