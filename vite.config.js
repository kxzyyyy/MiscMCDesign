import { defineConfig } from 'vite';

export default defineConfig({
  root: 'pages',
  publicDir: '../assets',
  server: {
    port: 3000,
    open: 'index-preview.html'
  },
  build: {
    outDir: '../dist'
  }
});
