import { projects } from '$lib/data/projects';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	if (!projects) {
		throw error(404, 'No project found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		projects: projects
	};
}
