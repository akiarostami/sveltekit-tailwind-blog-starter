<script>
	import { dev } from '$app/environment';
	import siteConfig from '$settings/siteConfig';

	let domain = '';
</script>

<svelte:head>
	{#if !dev && domain}
		<script defer data-domain={domain} src="https://plausible.io/js/script.js"></script>
	{/if}
</svelte:head>
