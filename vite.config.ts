import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // يستخدم متغير بيئة لتحديد المسار الأساسي
  // هذا يسمح لك بالتبديل بين مسار GitHub Pages والمسار المحلي (Electron)
  base: process.env.VITE_BASE_PATH || '/', 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './index.html',
    },
  },
});
