import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '3000', 10),
    // Catch-all redirect to index.html for SPA client-side routing
    // This ensures page refreshes on any route work correctly in Replit
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '3000', 10),
  },
  build: {
    outDir: 'dist',
  },
});
