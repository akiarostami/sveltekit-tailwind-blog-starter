import { projects } from '$lib/data/projects';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { slug } = params;
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		project
	};
}
