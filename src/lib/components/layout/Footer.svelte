<script>
	import { config } from '$lib/config';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	let year = new Date().getFullYear();
</script>

<footer>
	<div class="mt-16 flex flex-col items-center">
		{#if config?.newsletter?.provider}
			<Newsletter />
		{/if}
		<div class="mb-8 flex space-x-2 text-sm text-gray-500">
			<div>
				<a href="/about">درباره رو به رو</a> &nbsp; •
			</div>
			<div dir="ltr">
				<a href="/rss.xml">RSS Feed</a> &nbsp; • &nbsp; © {year} &nbsp;
			</div>
		</div>
	</div>
</footer>
