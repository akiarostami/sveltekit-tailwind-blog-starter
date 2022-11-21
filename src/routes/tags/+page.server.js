import { tags } from '$lib/data/tags';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	if (!tags) {
		throw error(404, 'No tag found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		tags: tags
	};
}
