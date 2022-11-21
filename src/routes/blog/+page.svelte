<script>
	import Head from '$lib/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	const posts = data.posts;
</script>

<Head title="Blog" />

<Blogs title="All Posts" {posts} />
