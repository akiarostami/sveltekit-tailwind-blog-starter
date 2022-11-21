<script>
	import Head from '$lib/Head.svelte';
	import formatDate from '$utils/formatDate';
	import Tag from '$lib/components/Tag.svelte';
	import Blog from '$lib/components/Blog.svelte';

	export let data;
	const post = data.post;
</script>

<Head title={post.title} />

<Blog {post} />
