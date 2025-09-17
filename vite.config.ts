import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // هذا المسار خاص بمشروعك على GitHub Pages
  base: '/school-appt/',
  plugins: [react()],
});
