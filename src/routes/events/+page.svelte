<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import events from '$lib/data/events';
	import { cn } from '$lib/utils/cn';
	import { CaretLeft, CaretRight } from 'phosphor-svelte';

	let eventsContainer = $state() as HTMLElement;
	let focusedEvent = $state(1);

	let firstEvent = $state() as HTMLElement;
	let secondEvent = $state() as HTMLElement;
	let thirdEvent = $state() as HTMLElement;

	$effect(() => {
		if (focusedEvent === 0) eventsContainer.style.left = '500px';
		else if (focusedEvent === 1) eventsContainer.style.left = '0px';
		else if (focusedEvent === 2) eventsContainer.style.left = '-500px';
	});
</script>

<svelte:head>
	<title>Events • SVYEP</title>
</svelte:head>

<div class="relative flex flex-col items-center gap-10 pt-30 sm:pt-40">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<div class="relative flex items-center" bind:this={eventsContainer}>
		<button
			class={cn(
				'relative flex h-[650px] w-[350px] scale-0 flex-col rounded-3xl border-2 border-white/50 bg-gray-800 transition duration-500 sm:w-[500px]',
				focusedEvent === 1
					? 'hover:shadow-glow-blue-hover left-10 scale-70 skew-y-6 opacity-30'
					: focusedEvent === 2
						? 'opacity-0'
						: focusedEvent === 0
							? 'shadow-glow-blue-hover scale-100'
							: ''
			)}
			onclick={() => {
				focusedEvent = 0;
			}}
		>
			{#if events.featured_events[0].video}
				<iframe
					title={events.featured_events[0].title}
					src={events.featured_events[0].video}
					allowfullscreen
					allow="encrypted-media *;"
					class="aspect-video h-auto w-full rounded-t-3xl border-2 border-white/5 object-cover"
				></iframe>
			{:else}
				<img
					src={events.featured_events[0].thumbnail}
					alt=""
					class="h-[300px] w-full rounded-t-3xl border-2 border-white/5 object-cover"
				/>
			{/if}
			<div class="-mt-4 flex h-full flex-col justify-center p-4">
				<h2 class="font-serif text-xs font-light tracking-tighter text-indigo-400">
					{events.featured_events[0].subtitle}
				</h2>
				<h1 class="z-10 mt-2 text-4xl font-semibold tracking-tighter text-white">
					{events.featured_events[0].title}
				</h1>
				<p class="pt-4 font-light text-gray-400">
					{events.featured_events[0].description}
				</p>
			</div>
		</button>
		<button
			class={cn(
				'relative flex h-[650px] w-[350px] scale-0 flex-col rounded-3xl border-2 border-white/50 bg-gray-800 transition duration-500 sm:w-[500px]',
				focusedEvent === 0
					? 'hover:shadow-glow-blue-hover right-10 scale-70 -skew-y-6 opacity-30'
					: focusedEvent === 2
						? 'hover:shadow-glow-blue-hover left-10 scale-70 skew-y-6 opacity-30'
						: focusedEvent === 1
							? 'shadow-glow-blue-hover scale-100'
							: ''
			)}
			onclick={() => {
				focusedEvent = 1;
			}}
		>
			{#if events.featured_events[1].video}
				<iframe
					title={events.featured_events[1].title}
					src={events.featured_events[1].video}
					allowfullscreen
					allow="encrypted-media *;"
					class="aspect-video h-auto w-full rounded-t-3xl border-2 border-white/5 object-cover"
				></iframe>
			{:else}
				<img
					src={events.featured_events[1].thumbnail}
					alt=""
					class=" h-[300px] w-full rounded-t-3xl border-2 border-white/5 object-cover"
				/>
			{/if}
			<div class="-mt-4 flex h-full flex-col justify-center p-4">
				<h2 class="font-serif text-xs font-light tracking-tighter text-indigo-400">
					{events.featured_events[1].subtitle}
				</h2>
				<h1 class="z-10 mt-2 text-4xl font-semibold tracking-tighter text-white">
					{events.featured_events[1].title}
				</h1>
				<p class="pt-4 font-light text-gray-400">
					{events.featured_events[1].description}
				</p>
			</div>
		</button>
		<button
			class={cn(
				'relative flex h-[650px] w-[350px] scale-0 flex-col rounded-3xl border-2 border-white/50 bg-gray-800 transition duration-500 sm:w-[500px]',
				focusedEvent === 1
					? 'hover:shadow-glow-blue-hover right-10 scale-70 -skew-y-6 opacity-30'
					: focusedEvent === 0
						? 'opacity-0'
						: focusedEvent === 2
							? 'shadow-glow-blue-hover scale-100'
							: ''
			)}
			onclick={() => {
				focusedEvent = 2;
			}}
		>
			{#if events.featured_events[2].video}
				<iframe
					title={events.featured_events[2].title}
					src={events.featured_events[2].video}
					allowfullscreen
					allow="encrypted-media *;"
					class="aspect-video h-auto w-full rounded-t-3xl border-2 border-white/5 object-cover"
				></iframe>
			{:else}
				<img
					src={events.featured_events[2].thumbnail}
					alt=""
					class=" h-[300px] w-full rounded-t-3xl border-2 border-white/5 object-cover"
				/>
			{/if}
			<div class="-mt-4 flex h-full flex-col justify-center p-4">
				<h2 class="font-serif text-xs font-light tracking-tighter text-indigo-400">
					{events.featured_events[2].subtitle}
				</h2>
				<h1 class="z-10 mt-2 text-4xl font-semibold tracking-tighter text-white">
					{events.featured_events[2].title}
				</h1>
				<p class="pt-4 font-light text-gray-400">
					{events.featured_events[2].description}
				</p>
			</div>
		</button>
	</div>
	<div class="flex gap-2">
		<Button
			size="icon"
			disabled={focusedEvent === 0}
			onclick={() => {
				focusedEvent--;
			}}><CaretLeft weight="bold" size={24} /></Button
		>
		<Button
			size="icon"
			disabled={focusedEvent === 2}
			onclick={() => {
				focusedEvent++;
			}}><CaretRight weight="bold" size={24} /></Button
		>
	</div>
	<div class="flex max-w-[1200px] flex-col gap-10 p-10">
		{#each events.past_events as event, index}
			<div
				class={cn(
					'flex flex-wrap items-center justify-center gap-10 md:flex-nowrap',
					index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
				)}
			>
				<div>
					<h2 class="font-serif font-light text-indigo-400">
						{event.subtitle}
					</h2>
					<h1 class="z-10 mt-2 text-4xl font-semibold tracking-tighter text-white">
						{event.title}
					</h1>
					<p class="pt-4 font-light text-gray-400">
						{event.description}
					</p>
				</div>
				{#if event.thumbnail}
					<!-- content here -->
					<img
						src={event.thumbnail}
						alt={event.title}
						class="hover:shadow-glow-blue-hover h-[300px] w-auto rounded-3xl outline-1 outline-indigo-600 transition"
					/>
				{/if}
			</div>
			<hr class="text-gray-400/20" />
		{/each}
	</div>
</div>

<!-- make cards larger, especially middle, text for events larger -->
