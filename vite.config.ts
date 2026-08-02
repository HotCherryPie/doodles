import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// TODO: try to use import from '@(67)/vite-plugin-file-meta'
import { pluginFileMeta } from './plugins/vite-plugin-file-meta/lib/plugin.ts';

// https://vite.dev/config/
export default defineConfig((config) => ({
  base: config.command === 'build' ? '/doodles' : '/',
  plugins: [vue(), pluginFileMeta()],
}));
