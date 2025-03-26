import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess({		  scss: {
		prependData: `@use 'src/styles/variables.scss' as *;`}
	  })
		
	],

	kit: {
		adapter: adapter(),
		paths: {
			base: '',  // Пустой для корня сайта
		  }
	}
};

export default config;
