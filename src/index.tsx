import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from '@/reportWebVitals';
import { RouterProvider } from 'react-router';
import { router } from '@/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);

reportWebVitals();
