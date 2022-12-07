<script>
	import siteConfig from '$settings/siteConfig';
	import GoogleAnalytics from './GoogleAnalytics.svelte';
	import Plausible from './Plausible.svelte';
	import SimpleAnalytics from './SimpleAnalytics.svelte';

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
