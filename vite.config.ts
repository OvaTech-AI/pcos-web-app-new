import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pcos-web-app-new/',
  plugins: [react()],
});
