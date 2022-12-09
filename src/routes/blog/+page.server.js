import { getEntries, getTags } from '$utils/entries.js';
// import { tags } from '$lib/data/tags';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const posts = getEntries('posts');
	if (!posts) {
		throw error(404, 'No post found');
	}

	const tags = getTags();

	return {
		// eslint-disable-next-line no-unused-vars
		posts: posts,
		tags: tags
	};
}
