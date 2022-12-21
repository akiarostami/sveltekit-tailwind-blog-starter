<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Comments from '$lib/components/comment/index.svelte';

	export let data;
	const post = data.post;
</script>

<Head title={post.title} />

<Blog {post} />
<Comments />
