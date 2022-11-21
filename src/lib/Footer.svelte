<script>
	import siteMetadata from '$settings/siteMetadata';
	import SocialIcon from '$lib/components/SocialIcon.svelte';

	let year = new Date().getFullYear();
</script>

<footer>
	<div class="mt-16 flex flex-col items-center">
		<div class="mb-3 flex space-x-4">
			<SocialIcon icon="mail" url={`mailto:${siteMetadata.email}`} />
			<SocialIcon icon="github" url={siteMetadata.github} />
			<SocialIcon icon="facebook" url={siteMetadata.facebook} />
			<SocialIcon icon="youtube" url={siteMetadata.youtube} />
			<SocialIcon icon="linkedin" url={siteMetadata.linkedin} />
			<SocialIcon icon="twitter" url={siteMetadata.twitter} />
		</div>
		<div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
			{siteMetadata.author} &nbsp; • &nbsp; © {year} &nbsp; • &nbsp;
			<a href="/">{siteMetadata.title}</a>
		</div>
	</div>
</footer>
