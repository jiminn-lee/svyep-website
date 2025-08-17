<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import { onMount } from 'svelte';
	import impact from '$lib/data/impact';

	let globeElement: HTMLElement;

	let globeData = [];
	Object.values(impact.locations).forEach((location) => {
		globeData.push(
			Object.values(location)
				.flat()
				.map(({ school, lat, long }) => ({
					school,
					lat,
					long,
					alt: Math.random() / 6,
					color: 'red'
				}))
		);
	});
	// const globeData = Object.values(impact.locations.united_states)
	// 	.flat()
	// 	.map(({ school, lat, long }) => ({
	// 		school,
	// 		lat,
	// 		long,
	// 		alt: Math.random() / 6,
	// 		color: 'red'
	// 	}));

	$inspect(globeData);
	// const gData = [...Array(N).keys()].map(() => ({
	// 	lat: (Math.random() - 0.5) * 180,
	// 	lng: (Math.random() - 0.5) * 360,
	// 	size: Math.random() / 3,
	// 	color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
	// }));

	onMount(async () => {
		// Import only on the client
		const Globe = (await import('globe.gl')).default;

		const globe = new Globe(globeElement)
			.globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
			.pointsData(globeData)
			.pointLat('lat')
			.pointLng('long')
			.pointAltitude('alt')
			.pointColor('color')
			.pointRadius(0.1)
			.backgroundColor('#00000000')
			.atmosphereColor('#4338ca');
		globe.controls().enableZoom = false;
	});
</script>

<svelte:head>
	<title>Impact • SVYEP</title>
</svelte:head>

<StarsBackground />
<div class="flex justify-center">
	<div bind:this={globeElement}></div>
</div>
