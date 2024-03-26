import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
		  output: {
			manualChunks(id) {
			  if (id.includes("@sveltejs/kit")) {
				return "sveltekit"
			  }
			  if (id.includes("svelte/")) {
				return "svelte"
			  }
			  if (id.includes("lib/stores/")) {
				return "stores"
			  }
			  if (id.includes("revolt") || id.includes("revkit")) {
				return "revolt"
			  }
			  if (id.includes("boxicons")) {
				return "icons"
			  }
			  if (id.includes("prism")) {
				return "prism"
			  }
			  
			}
		  }
		}
	  },
	plugins: [sveltekit()]
	
});
