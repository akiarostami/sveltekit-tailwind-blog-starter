import { error } from '@sveltejs/kit';
import { getEntries } from '$utils/entries.js';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { author } = params;
	const posts = getEntries('posts');
	const filteredPosts = posts.filter((p) => p.author === author);

	if (!filteredPosts) {
		throw error(404, 'No post found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		author: author,
		posts: filteredPosts
	};
}
