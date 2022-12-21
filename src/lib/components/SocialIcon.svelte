<script>
	import IconMail from '$lib/icons/mail.svg';
	import IconGithub from '$lib/icons/github.svg';
	import IconFacebook from '$lib/icons/facebook.svg';
	import IconYoutube from '$lib/icons/youtube.svg';
	import IconLinkedin from '$lib/icons/linkedin.svg';
	import IconTwitter from '$lib/icons/twitter.svg';
	import IconInstagram from '$lib/icons/instagram.svg';

	export let url = '';
	export let icon = '';
	export let popup = false;
	export let small = false;

	let size = small ? 'w-5' : 'w-7';

	const options = [
		{ caption: 'mail', component: IconMail },
		{ caption: 'github', component: IconGithub },
		{ caption: 'facebook', component: IconFacebook },
		{ caption: 'youtube', component: IconYoutube },
		{ caption: 'linkedin', component: IconLinkedin },
		{ caption: 'twitter', component: IconTwitter },
		{ caption: 'instagram', component: IconInstagram }
	];

	let svg = options.find((option) => option.caption === icon)?.component;
</script>

{#if url}
	<a
		class="flex gap-x-2 text-gray-500 transition hover:text-primary-600"
		href={url || '#'}
		target={popup ? '_blank' : ''}
		rel="noreferrer"
	>
		<span class="sr-only">{icon}</span>
		<svelte:component this={svg} class="{size} " />
		<span>
			<slot />
		</span>
	</a>
{/if}
