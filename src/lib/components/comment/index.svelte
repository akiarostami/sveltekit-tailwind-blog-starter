<script>
	import siteConfig from '$settings/siteConfig';
	import Giscus from './Giscus.svelte';
	import Utterances from './Utterances.svelte';

	const commentProvider = siteConfig.comment.provider;
</script>

{#if commentProvider}
	<div class="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300 border-t">
		{#if commentProvider === 'giscus'}
			<Giscus config={siteConfig.comment.giscusConfig} />
		{:else if commentProvider === 'utterances'}
			<Utterances config={siteConfig.comment.utterancesConfig} />
		{/if}
	</div>
{/if}
