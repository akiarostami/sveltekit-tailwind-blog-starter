<script>
	import siteConfig from '$settings/siteConfig';
	import GoogleAnalytics from './analytics/GoogleAnalytics.svelte';
	import Plausible from './analytics/Plausible.svelte';
	import SimpleAnalytics from './analytics/SimpleAnalytics.svelte';

	const GoogleAnalyticsId = siteConfig.analytics.googleAnalyticsId;
	const PlausibleDomain = siteConfig.analytics.plausibleDomain;
	const simpleAnalytics = siteConfig.analytics.simpleAnalytics;
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
