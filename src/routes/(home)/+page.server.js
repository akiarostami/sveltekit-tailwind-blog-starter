import { getEntries } from '$utils/entries.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const posts = getEntries('posts');
	if (!posts) {
		throw error(404, 'No post found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		posts: posts
	};
}
