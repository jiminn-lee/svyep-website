<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import { onMount } from 'svelte';

	let globeElement: HTMLElement;

	const N = 300;
	const gData = [...Array(N).keys()].map(() => ({
		lat: (Math.random() - 0.5) * 180,
		lng: (Math.random() - 0.5) * 360,
		size: Math.random() / 3,
		color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
	}));

	const data = [
		{
			lat: 37.109722,
			long: -122.577778,
			size: 0.1,
			color: 'red'
		},

		{
			lat: 37.64361,
			long: -122.06028,
			size: 0.1,
			color: 'red'
		},

		{
			lat: 37.7036722,
			long: -122.078275,
			size: 0.1,
			color: 'red'
		},
		{
			lat: 37.109722,
			long: -122.577778,
			size: 0.1,
			color: 'red'
		}
	];

	onMount(async () => {
		// Import only on the client
		const Globe = (await import('globe.gl')).default;

		const globe = new Globe(globeElement)
			.globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
			.pointsData(data)
			.pointLat('lat')
			.pointLng('long')
			.pointAltitude('size')
			.pointColor('color')
			.backgroundColor('#00000000')
			.atmosphereColor('#4338ca');
		// globe.controls().enableZoom = false;
	});
</script>

<StarsBackground />
<div class="flex justify-center">
	<div bind:this={globeElement}></div>
</div>
