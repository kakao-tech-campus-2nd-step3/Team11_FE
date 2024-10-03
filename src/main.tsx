import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/router';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 0, staleTime: 1000 * 60 },
  },
});

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: '#EDEDED',
        fontFamily: 'NanumSquareOTF_ac, sans-serif',
      },
      '@font-face': [
        {
          fontFamily: 'NanumSquareOTF_ac',
          src: 'url(/src/assets/fonts/NanumSquareOTF_acR.otf) format("opentype")',
          fontWeight: 400,
          fontStyle: 'normal',
        },
        {
          fontFamily: 'NanumSquareOTF_ac',
          src: 'url(/src/assets/fonts/NanumSquareOTF_acB.otf) format("opentype")',
          fontWeight: 700,
          fontStyle: 'normal',
        },
        {
          fontFamily: 'NanumSquareOTF_ac',
          src: 'url(/src/assets/fonts/NanumSquareOTF_acEB.otf) format("opentype")',
          fontWeight: 800,
          fontStyle: 'normal',
        },
      ],
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
);
