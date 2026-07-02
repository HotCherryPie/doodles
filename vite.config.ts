import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig((config) => ({
  base: config.command === 'build' ? '/doodles' : '/',
  plugins: [vue()],
}));
