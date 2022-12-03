<script>
	export let card;
</script>

<div class="md p-4 md:w-1/2" style="max-width: '544px'">
	<div
		class={`${
			card.image && 'h-full'
		}  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
	>
		{#if card.image}
			{#if card.href}
				<a
					href={card.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`Link to ${card.title}`}
				>
					<img
						alt={card.title}
						src={card.image}
						class="object-cover object-center aspect-video w-full"
					/>
				</a>
			{:else}
				<img
					alt={card.title}
					src={card.image}
					class="object-cover object-center aspect-video w-full"
				/>
			{/if}
		{/if}
		<div class="p-6">
			<h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight">
				{#if card.href}
					<a href={card.href} aria-label={`Link to ${card.title}`}>
						{card.title}
					</a>
				{:else}
					{card.title}
				{/if}
			</h2>
			<p class="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{card.description}</p>
			{#if card.href}
				<a
					href={card.href}
					target="_blank"
					rel="noopener noreferrer"
					class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
					aria-label={`Link to ${card.title}`}
				>
					Learn more &rarr;
				</a>
			{/if}
		</div>
	</div>
</div>
