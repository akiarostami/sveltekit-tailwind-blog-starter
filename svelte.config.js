import autoAdapter from '@sveltejs/adapter-auto'; // Switched from Adapter to autoAdaptor since we are importing netlifyAdapter, you cannot have two Adapters
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import netlifyAdapter from '@sveltejs/adapter-netlify'; // Added for better netlify adaption(see notes below)

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  kit: {
    adapter: autoAdapter(), // or netlifyAdapter()
    csp: { mode: 'auto' } // remove this if you're not using comment system
  },
  preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
};

export default config;


// Notes
// You cannot have two imports with the same name in the same file. In your current code, you are importing two adapters with the same name adapter, which is not allowed.
// To resolve this, you can rename one of the imported adapters using the as keyword during the import statement. For example, you can rename adapter-auto as autoAdapter and adapter-netlify as netlifyAdapter.
// Then, in your SvelteKit configuration, you can specify the adapter to use by passing in the adapter you want to use as an argument to the adapter property. For example, you can pass in autoAdapter() or netlifyAdapter() depending on the adapter you want to use.
