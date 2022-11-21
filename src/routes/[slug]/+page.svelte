<script>
	import siteMetadata from '$lib/siteMetadata.js';
	import Head from '$lib/Head.svelte';
	import Entry from '$lib/components/Entry.svelte';

	export let data;
	const project = data.project;
	const url = `${SITE_URL}/${project.slug}`;
</script>

<Head title={project.title} description={project.excerpt} {url} rtl={project.rtl} />

<Entry entry={project} />
