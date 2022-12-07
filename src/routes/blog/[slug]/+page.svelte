<script>
	import Head from '$lib/Head.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Comments from '$lib/components/comments/index.svelte';

	export let data;
	const post = data.post;
	const author = data.author;
</script>

<Head title={post.title} />

<Blog {post} {author} />
<Comments />
