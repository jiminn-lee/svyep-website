<script>
	import Circle from 'phosphor-svelte/lib/Circle';

	let { location, number_of_schools } = $props();
</script>

<div class="pointer-events-auto flex cursor-pointer flex-col items-center">
	<Circle
		weight="fill"
		size={Math.min(5 + Math.log1p(number_of_schools) * 10, 40)}
		class="peer z-0 text-indigo-200 blur-xs
		  drop-shadow-orange-100 transition hover:text-indigo-600 hover:blur-none hover:drop-shadow-none"
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
