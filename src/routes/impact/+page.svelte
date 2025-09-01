<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import { mount, onMount } from 'svelte';
	import impact from '$lib/data/impact';
	import GlobeMarker from '$lib/components/GlobeMarker.svelte';

	let globeElement: HTMLElement;

	onMount(async () => {
		const Globe = (await import('globe.gl')).default;
		const globe = new Globe(globeElement)
			.globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
			.htmlElementsData(impact.locations)
			.htmlElement((location) => {
				const globeMarkerContainer = document.createElement('div');
				globeMarkerContainer.style.transition = 'opacity 250ms';
				mount(GlobeMarker, {
					target: globeMarkerContainer,
					props: { location: location.location, number_of_schools: location.number_of_schools }
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
		// globe.controls().enableZoom = false;
	});
</script>

<svelte:head>
	<title>Impact • SVYEP</title>
</svelte:head>

<div class="relative flex flex-col items-center justify-center pt-40">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<h1 class="text-shadow-glow-white -mb-40 text-9xl tracking-tighter text-white select-none">
		SVYEP is <span class="text-shadow-glow-blue font-serif text-indigo-600 italic">global.</span>
	</h1>
	<div bind:this={globeElement}></div>
</div>

<!-- click marker, list of schools pop up on the left -->
<!-- instructions -->

<!-- events, parrtner, join, donate -->
