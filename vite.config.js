import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from 'vite-plugin-legacy';
import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  server: {
    middleware: [
      createProxyMiddleware('/api', {
        target: 'http://apiweb.urbandiners.com',
        changeOrigin: true,
        secure: false,
      }),
    ],
  },
});
