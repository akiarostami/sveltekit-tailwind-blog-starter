<script>
	import siteConfig from '$settings/siteConfig';
	import Disqus from './Disqus.svelte';

	const commentProvider = siteConfig.comment.provider;

	console.log('>>> commentProvider: ', commentProvider);
</script>

{#if commentProvider === 'disqus'}
	<h1>COMMENT</h1>
	<Disqus config={siteConfig.comment.disqusConfig} />
{/if}
