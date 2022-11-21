<script>
	import { slug } from 'github-slugger';

	export let text = '';
	export let url = slug(text);
</script>

<a
	href={`/tags/${url}`}
	class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
>
	{text}
</a>
