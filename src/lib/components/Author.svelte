<script>
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import formatDate from '$utils/formatDate';

	export let author = '';
	export let avatar = '';
	export let twitter = '';
	export let postDate = '';
</script>

{#if avatar}
	<img src={avatar} width="38px" height="38px" alt="avatar" class="h-10 w-10 rounded-lg" />
{/if}
<dl class="whitespace-nowrap text-sm font-medium leading-5">
	<dt class="sr-only">Author</dt>
	<dd class="text-base font-bold leading-6 text-gray-600 dark:text-gray-300">{author}</dd>
	{#if twitter}
		<dt class="sr-only">Twitter</dt>
		<dd>
			<SocialIcon icon="twitter" url={twitter} small>
				{twitter?.replace('https://twitter.com/', '@')}
			</SocialIcon>
		</dd>
	{/if}
	{#if postDate}
		<dt class="sr-only">Published on</dt>
		<dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
			<time dateTime={postDate}>{formatDate(postDate)}</time>
		</dd>
	{/if}
</dl>
