<script>
	import siteConfig from '$settings/siteConfig';
	import SocialIcon from '$lib/components/SocialIcon.svelte';

	let year = new Date().getFullYear();
</script>

<footer>
	<div class="mt-16 flex flex-col items-center">
		<div class="mb-3 flex space-x-4">
			<SocialIcon icon="mail" url={siteConfig.email ? `mailto:${siteConfig.email}` : ''} />
			<SocialIcon icon="github" url={siteConfig.github} />
			<SocialIcon icon="facebook" url={siteConfig.facebook} />
			<SocialIcon icon="youtube" url={siteConfig.youtube} />
			<SocialIcon icon="linkedin" url={siteConfig.linkedin} />
			<SocialIcon icon="twitter" url={siteConfig.twitter} />
		</div>
		<div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
			<a href="/">{siteConfig.title}</a> &nbsp; • &nbsp; © {year}
			{siteConfig.author}
		</div>
	</div>
</footer>
