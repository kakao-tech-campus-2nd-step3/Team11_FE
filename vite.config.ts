import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    createHtmlPlugin({
      inject: {
        data: {
          preloadFonts: [
            {
              rel: 'preload',
              href: '/assets/fonts/NanumSquareOTF_acR.otf',
              as: 'font',
              type: 'font/otf',
              crossorigin: 'anonymous',
            },
            {
              rel: 'preload',
              href: '/assets/fonts/NanumSquareOTF_acB.otf',
              as: 'font',
              type: 'font/otf',
              crossorigin: 'anonymous',
            },
            {
              rel: 'preload',
              href: '/assets/fonts/NanumSquareOTF_acEB.otf',
              as: 'font',
              type: 'font/otf',
              crossorigin: 'anonymous',
            },
          ],
        },
      },
    }),
  ],
});
