import { posts } from '$lib/data/posts';
import { tags } from '$lib/data/tags';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	if (!posts) {
		throw error(404, 'No post found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		posts: posts,
		tags: tags
	};
}
