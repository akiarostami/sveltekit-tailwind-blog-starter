import { dev } from '$app/environment';
import siteConfig from '$settings/siteConfig';

import GAInit from './GoogleAnalytics';
import PlausibleInit from './Plausible';
import SAInit from './SimpleAnalytics';

const Analytics = () => {
	// don't install the analytics script if we're in dev mode
	if (dev) return;

	if (siteConfig.analytics.googleAnalyticsId) GAInit();
	if (siteConfig.analytics.plausibleDataDomain) PlausibleInit();
	if (siteConfig.analytics.simpleAnalytics) SAInit();
};

export default Analytics;
