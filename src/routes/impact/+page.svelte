<script lang="ts">
	import { onMount } from 'svelte';

	let globeElement: HTMLElement;

	const N = 300;
	const gData = [...Array(N).keys()].map(() => ({
		lat: (Math.random() - 0.5) * 180,
		lng: (Math.random() - 0.5) * 360,
		size: Math.random() / 3,
		color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
	}));

	onMount(async () => {
		// Import only on the client
		const Globe = (await import('globe.gl')).default;

		const globe = new Globe(globeElement)
			.globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
			.pointsData(gData)
			.pointAltitude('size')
			.pointColor('color')
			.backgroundColor('#09090b');

		console.log(globe.controls());
	});
</script>

<div bind:this={globeElement}></div>
