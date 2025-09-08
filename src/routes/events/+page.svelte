<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import events from '$lib/data/events';
	import { cn } from '$lib/utils/cn';
	import { CaretRight } from 'phosphor-svelte';

	let eventsContainer: HTMLElement = $state();
	let focusedEvent = $state(1);
</script>

<svelte:head>
	<title>Events • SVYEP</title>
</svelte:head>

<div class="relative flex flex-col items-center gap-10 pt-40">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<h1 class="text-6xl font-medium tracking-tighter text-white">Featured Events</h1>
	<div class="relative flex items-center" bind:this={eventsContainer}>
		<button
			class={cn(
				'relative h-[400px] w-[600px] scale-0 rounded-3xl bg-[url(/images/events/featured/thumbnail.webp)] bg-cover p-4 transition duration-500',
				focusedEvent != 0
					? 'hover:shadow-glow-blue-hover scale-60 -skew-y-12 opacity-50'
					: 'shadow-glow-blue-hover scale-100'
			)}
			onclick={() => {
				focusedEvent = 0;
				eventsContainer.style.left = '600px';
			}}
		>
			<div class="absolute inset-0 -z-10 rounded-3xl bg-black/80"></div>
			<h2 class="font-serif text-xs font-light tracking-tighter text-indigo-400">
				{events.featured_events[0].subtitle}
			</h2>
			<h1 class="z-10 mt-2 text-4xl font-semibold tracking-tighter text-white">
				{events.featured_events[0].title}
			</h1>
			<p class="pt-4 text-sm font-light text-gray-400">
				{events.featured_events[0].description}
			</p>
		</button>
		<button
			class={cn(
				'relative h-[400px] w-[600px] scale-0 rounded-3xl bg-[url(/images/events/featured/thumbnail.webp)] bg-cover p-4 transition duration-500',
				focusedEvent === 0
					? 'hover:shadow-glow-blue-hover scale-60 skew-y-12 opacity-50'
					: focusedEvent === 2
						? 'hover:shadow-glow-blue-hover scale-60 -skew-y-12 opacity-50'
						: focusedEvent === 1
							? 'shadow-glow-blue-hover scale-100'
							: ''
			)}
			onclick={() => {
				focusedEvent = 1;
				eventsContainer.style.left = '0px';
			}}
		>
			<div class="absolute inset-0 -z-10 rounded-3xl bg-black/80"></div>
			<h2 class="font-serif text-xs font-light tracking-tighter text-indigo-400">
				{events.featured_events[1].subtitle}
			</h2>
			<h1 class="z-10 mt-2 text-4xl font-semibold tracking-tighter text-white">
				{events.featured_events[1].title}
			</h1>
			<p class="pt-4 text-sm font-light text-gray-400">
				{events.featured_events[1].description}
			</p>
		</button>
		<button
			class={cn(
				'relative h-[400px] w-[600px] scale-0 rounded-3xl bg-[url(/images/events/featured/thumbnail.webp)] bg-cover p-4 transition duration-500',
				focusedEvent != 2
					? 'hover:shadow-glow-blue-hover scale-60 skew-y-12 opacity-50'
					: 'shadow-glow-blue-hover scale-100'
			)}
			onclick={() => {
				focusedEvent = 2;
				eventsContainer.style.left = '-600px';
			}}
		>
			<div class="absolute inset-0 -z-10 rounded-3xl bg-black/80"></div>
			<h2 class="font-serif text-xs font-light tracking-tighter text-indigo-400">
				{events.featured_events[2].subtitle}
			</h2>
			<h1 class="z-10 mt-2 text-4xl font-semibold tracking-tighter text-white">
				{events.featured_events[2].title}
			</h1>
			<p class="pt-4 text-sm font-light text-gray-400">
				{events.featured_events[2].description}
			</p>
		</button>
	</div>
</div>
