<script>
	import siteConfig from '$settings/siteConfig';
	import Disqus from './Disqus.svelte';

	const commentProvider = siteConfig.comment.provider;
</script>

{#if commentProvider === 'disqus'}
	<h1>COMMENT</h1>
	<Disqus config={siteConfig.comment.disqusConfig} />
{/if}
