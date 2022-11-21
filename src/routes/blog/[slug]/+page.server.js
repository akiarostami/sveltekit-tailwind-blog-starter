import { posts } from '$lib/data/posts';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { slug } = params;
	const post = posts.find((p) => p.slug === slug);

	if (!post) {
		throw error(404, 'No post found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		post: post
	};
}
