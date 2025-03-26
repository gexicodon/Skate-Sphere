import { sveltekit } from '@sveltejs/kit/vite';

export default {
  plugins: [sveltekit()],
  server: {
    hmr: true
  },
  build: {
    assetsInlineLimit: 0
  },
  base: './'
};
