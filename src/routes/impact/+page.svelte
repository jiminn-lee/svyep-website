<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import { mount, onMount } from 'svelte';
	import impact from '$lib/data/impact';
	import GlobeMarker from '$lib/components/GlobeMarker.svelte';
	import { HandPointing, MouseScroll } from 'phosphor-svelte';
	import { selectedLocation } from './state.svelte';

	let globeElement: HTMLElement;

	$inspect(selectedLocation);

	onMount(async () => {
		const Globe = (await import('globe.gl')).default;
		const globe = new Globe(globeElement)
			.globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
			.pointOfView({ lat: 36, lng: -95 })
			.htmlElementsData(impact.locations)
			.htmlElement((location) => {
				const globeMarkerContainer = document.createElement('div');
				globeMarkerContainer.style.transition = 'opacity 250ms';
				mount(GlobeMarker, {
					target: globeMarkerContainer,
					props: {
						location: location
					}
				});
				return globeMarkerContainer;
			})
			.htmlElementVisibilityModifier((el, isVisible) => {
				if (isVisible) {
					el.style.opacity = '1';
				} else {
					el.style.opacity = '0';
				}
			})
			.backgroundColor('#00000000')
			.atmosphereColor('#4338ca');
		globe.controls().enableZoom = false;
		globe.controls().maxDistance = 250;
	});
</script>

<svelte:head>
	<title>Impact • SVYEP</title>
</svelte:head>

<div class="relative flex flex-col items-center justify-center pt-40">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<h2 class="flex items-center gap-1 text-gray-400">
		<MouseScroll size={20} /> Drag to move around<span class="mx-2"></span>
		<HandPointing /> Hover & click on starred locations
	</h2>
	<h2 class="mt-4 text-4xl font-medium tracking-tighter text-white">
		<span class="font-serif text-5xl text-indigo-600 italic">18</span> states,
		<span class="font-serif text-5xl text-indigo-600 italic">9</span> countries
	</h2>
	<h1 class="text-shadow-glow-white -mb-10 text-9xl tracking-tighter text-white select-none">
		SVYEP is <span class="text-shadow-glow-blue font-serif text-indigo-600 italic">global.</span>
	</h1>
	<div bind:this={globeElement}></div>
	{#if selectedLocation.location}
		<p class="z-10 -mt-20 mb-40 w-10/12 text-center text-sm text-gray-400">
			{#each selectedLocation.location.schools as school}
				{school},{' '}
			{/each}
		</p>
	{/if}
</div>
