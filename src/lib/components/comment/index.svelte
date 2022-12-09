<script>
	import { comment } from '$lib/config';
	import Giscus from './Giscus.svelte';
	import Utterances from './Utterances.svelte';

	const commentProvider = comment.provider;
</script>

{#if commentProvider}
	<div class="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300 border-t">
		{#if commentProvider === 'giscus'}
			<Giscus config={comment.giscus} />
		{:else if commentProvider === 'utterances'}
			<Utterances config={comment.utterances} />
		{/if}
	</div>
{/if}
