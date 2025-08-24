<script>
	import StarFour from 'phosphor-svelte/lib/StarFour';

	let { location, number_of_schools } = $props();
</script>

<div class="pointer-events-auto flex cursor-pointer flex-col items-center">
	<StarFour
		weight="fill"
		size={Math.min(8 + Math.log1p(number_of_schools) * 10, 50)}
		class="peer z-0 text-indigo-200 
		   drop-shadow-2xl drop-shadow-indigo-600 transition hover:text-indigo-600"
	/>
	<div
		class="invisible absolute -top-12 z-50 flex flex-col items-center text-center text-nowrap text-white peer-hover:visible"
	>
		<h1 class="tracking-tigher w-fit bg-indigo-600 p-1 font-serif text-xl leading-5 italic">
			{location}
		</h1>
		<h2 class="text-shadow-md/60">
			{number_of_schools}
			{number_of_schools > 1 ? 'schools' : 'school'}
		</h2>
	</div>
</div>
