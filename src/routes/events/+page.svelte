<script>
	import Button from '$lib/components/Button.svelte';
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import events from '$lib/data/events';
	import { CaretRight } from 'phosphor-svelte';
</script>

<svelte:head>
	<title>Events • SVYEP</title>
</svelte:head>

<div class="relative flex flex-col items-center gap-10">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<div
		class="relative h-full w-full bg-linear-to-b bg-[url(/images/events/featured/thumbnail.webp)] bg-center py-52"
	>
		<div class="absolute inset-0 bg-black/80"></div>
		<div class="relative z-10 flex flex-col items-center">
			<h1 class="font-serif text-lg font-medium tracking-tighter text-indigo-600">FEATURED</h1>
			<h1 class="text-8xl font-semibold tracking-tighter text-white">
				{events.featured_event.name}
			</h1>
			<p class="w-[900px] text-center text-gray-400">
				{events.featured_event.description}
			</p>
			<Button class="mt-8">See details</Button>
		</div>
	</div>
	<div class="flex flex-col items-center">
		<h1 class="text-5xl font-medium tracking-tighter text-white">Past Events</h1>
		<div class="grid grid-cols-4">
			{#each events.past_events as event}
				<div
					class="shadow-glow-gray z-10 flex w-[300px] flex-col items-center justify-center gap-2 rounded-3xl border-2 border-white/5 bg-gray-800/80 text-white transition-all hover:border-white/50 hover:bg-gray-700"
				>
					{#if event.thumbnail != ''}
						<img src="" alt="" />
					{:else}
						<div class="h-[200px] w-full rounded-t-3xl bg-gray-400"></div>
					{/if}
					<div class="flex flex-col items-center p-6">
						<h2 class="text-sm text-gray-400">{event.date}</h2>
						<h1 class="font-semiboldJ text-center text-2xl">
							{event.name}
						</h1>
						<button
							class="mt-4 flex cursor-pointer items-center gap-1 text-sm font-light text-white hover:underline"
							>Learn More<CaretRight />
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
