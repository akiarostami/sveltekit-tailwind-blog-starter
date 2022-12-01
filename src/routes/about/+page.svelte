<script>
	import Head from '$lib/Head.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import Title from '$lib/components/Title.svelte';

	const info = {
		id: 'admin',
		name: 'John Doe',
		avatar: '/img/avatar.jpg',
		occupation: 'Professor of Atmospheric Science',
		company: 'Stanford University',
		email: 'address@yoursite.com',
		twitter: 'https://twitter.com/Twitter',
		linkedin: 'https://www.linkedin.com',
		github: 'https://github.com',
		about: `
			<p>
				Tails Azimuth is a professor of atmospheric sciences at the Stanford AI Lab. His research
				interests includes complexity modelling of tailwinds, headwinds and crosswinds.
			</p>
			<p>
				He leads the clean energy group which develops 3D air pollution-climate models, writes
				differential equation solvers, and manufactures titanium plated air ballons. In his free
				time he bakes raspberry pi.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat
				feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu
				pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.
			</p>`
	};
</script>

<Head title="About" />

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<Title title="About" />
	</div>
	<div class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
		<div class="flex flex-col items-center pt-8">
			<img src={info.avatar} alt="avatar" class="h-48 w-48 rounded-full" />
			<h3 class="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{info.name}</h3>
			<div class="text-gray-500 dark:text-gray-400">{info.occupation}</div>
			<div class="text-gray-500 dark:text-gray-400">{info.company}</div>
			<div class="flex space-x-3 pt-6">
				<SocialIcon icon="mail" url={`mailto:${info.email}`} />
				<SocialIcon icon="github" url={info.github} />
				<SocialIcon icon="linkedin" url={info.linkedin} />
				<SocialIcon icon="twitter" url={info.twitter} />
			</div>
		</div>
		<div class="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{@html info.about}</div>
	</div>
</div>
