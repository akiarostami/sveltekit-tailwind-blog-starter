<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';

	let commentsLoaded = false;
	const COMMENTS_ID = 'disqus_thread';

	export let slug = $page.params.slug;
	export let config = {};

	function LoadComments() {
		commentsLoaded = true;

		window.disqus_config = function () {
			this.page.url = $page.url.pathname;
			this.page.identifier = slug;
		};
		if (window.DISQUS === undefined) {
			const script = document.createElement('script');
			script.src = 'https://' + config.shortname + '.disqus.com/embed.js';
			script.setAttribute('data-timestamp', +new Date());
			// script.setAttribute('crossorigin', 'anonymous');
			script.strategy = 'lazyOnload';
			script.type = 'text/javascript';
			script.async = true;
			document.body.appendChild(script);
		} else {
			window.DISQUS.reset({ reload: true });
		}
	}
</script>

<svelte:head>
	{#if dev}
		<script type="text/javascript">
			var disqus_developer = 1;
		</script>
	{/if}
</svelte:head>

<div class="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
	{#if !commentsLoaded}
		<button on:click={LoadComments}>Load Comments</button>
	{/if}
	<div class="disqus-frame" id={COMMENTS_ID} />
</div>
