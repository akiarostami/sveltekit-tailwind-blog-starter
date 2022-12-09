<script>
	import { analytics } from '$lib/config';
	import GoogleAnalytics from './GoogleAnalytics.svelte';
	import Plausible from './Plausible.svelte';
	import SimpleAnalytics from './SimpleAnalytics.svelte';

	const GoogleAnalyticsId = analytics.googleAnalyticsId;
	const PlausibleDomain = analytics.plausibleDomain;
	const simpleAnalytics = analytics.simpleAnalytics;
</script>

{#if GoogleAnalyticsId}
	<GoogleAnalytics id={GoogleAnalyticsId} />
{/if}

{#if PlausibleDomain}
	<Plausible domain={PlausibleDomain} />
{/if}

{#if simpleAnalytics}
	<SimpleAnalytics />
{/if}
