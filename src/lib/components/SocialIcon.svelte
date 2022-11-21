<script>
	import IconMail from '$lib/icons/mail.svg';
	import IconGithub from '$lib/icons/github.svg';
	import IconFacebook from '$lib/icons/facebook.svg';
	import IconYoutube from '$lib/icons/youtube.svg';
	import IconLinkedin from '$lib/icons/linkedin.svg';
	import IconTwitter from '$lib/icons/twitter.svg';

	export let url = '';
	export let icon = '';
	export let popup = false;

	const options = [
		{ caption: 'mail', component: IconMail },
		{ caption: 'github', component: IconGithub },
		{ caption: 'facebook', component: IconFacebook },
		{ caption: 'youtube', component: IconYoutube },
		{ caption: 'linkedin', component: IconLinkedin },
		{ caption: 'twitter', component: IconTwitter }
	];

	let disabled = !url;

	let svg = options.find((option) => option.caption === icon)?.component;
</script>

<a href={url || '#'} {disabled} target={popup ? '_blank' : ''} rel="noreferrer">
	<span class="sr-only">{icon}</span>
	<svelte:component this={svg} class="w-7 text-gray-500 transition hover:text-primary-600" />
	<slot />
</a>
