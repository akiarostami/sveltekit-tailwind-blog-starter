<script>
	import siteMetadata from '$settings/siteMetadata.js';

	export let title = 'Official Website';
	export let description = siteMetadata.description;
	export let author = siteMetadata.author;
	export let url = siteMetadata.siteUrl;
	export let domain = siteMetadata.domain;
	export let rtl = false;
	let titleFromUrl = url.split('/').pop().replace('-', ' ');
	export let img = `${url}/og?message=${rtl ? titleFromUrl : title}`;
</script>

<svelte:head>
	<title>{title} | {siteMetadata.title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={img} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={domain} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={img} />
</svelte:head>
