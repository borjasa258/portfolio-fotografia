import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://portfolio-fotografia-seven.vercel.app/',
	base: '/',
	vite: {
		plugins: [tailwindcss()],
	},
});
