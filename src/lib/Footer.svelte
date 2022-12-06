<script>
	import siteConfig from '$settings/siteConfig';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	let year = new Date().getFullYear();
</script>

<footer>
	<div class="mt-16 flex flex-col items-center border-t pt-6 gap-2">
		<div class="mb-3 flex space-x-2">
			<SocialIcon icon="mail" url={siteConfig.email ? `mailto:${siteConfig.email}` : ''} />
			<SocialIcon icon="github" url={siteConfig.github} />
			<SocialIcon icon="facebook" url={siteConfig.facebook} />
			<SocialIcon icon="youtube" url={siteConfig.youtube} />
			<SocialIcon icon="linkedin" url={siteConfig.linkedin} />
			<SocialIcon icon="twitter" url={siteConfig.twitter} />
		</div>
		{#if siteConfig.newsletter.provider}
			<Newsletter />
		{/if}
		<div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
			<a href="/">{siteConfig.title}</a> &nbsp; • &nbsp; © {year}
			{siteConfig.author} &nbsp; • &nbsp; <a href="/rss.xml">rss feed</a>
		</div>
	</div>
</footer>
