import { error } from '@sveltejs/kit';
import { getEntries } from '$utils/entries.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const posts = getEntries('posts');
	const { article } = params;
	const post = posts.find((p) => p.slug === article);

	if (!post) {
		throw error(404, 'No article found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		post: post	
	};
}
