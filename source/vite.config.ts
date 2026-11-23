import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: { assetsInlineLimit: 100 * 1024 * 1024 },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
