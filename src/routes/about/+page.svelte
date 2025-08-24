<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import about from '$lib/data/about';
</script>

<svelte:head>
	<title>About Us • SVYEP</title>
</svelte:head>

<div class="relative flex h-full flex-col items-center gap-20 pt-40">
	<StarsBackground className="-z-10" starDensity={0.00008} />
	<div class="flex w-[1200px] flex-col bg-zinc-950 text-white">
		<h1 class="text-shadow-glow-white font-serif text-7xl leading-loose tracking-tighter">
			Our Vision<span class="text-indigo-600 text-shadow-none">.</span>
		</h1>
		<p class=" text-justify text-5xl font-extralight tracking-tight">
			At SVYEP, we <span class="font-serif font-medium text-indigo-600 italic">empower</span> high
			school students by providing
			<span class="font-serif font-medium text-indigo-600 italic">access</span>
			to real-world business
			<span class="font-serif font-medium text-indigo-600 italic">resources</span>, creating
			meaningful
			<span class="font-serif font-medium text-indigo-600 italic">connections</span>
			with
			<span class="font-serif font-medium text-indigo-600 italic">entrepreneurs</span>
			and <span class="font-serif font-medium text-indigo-600 italic">industry professionals</span>,
			and supporting every step of their professional and career development
			<span class="font-serif font-medium text-indigo-600 italic">journey</span>.
		</p>
	</div>
	<div class=" flex h-full flex-col items-center text-white">
		<h1 class="text-shadow-glow-white font-serif text-9xl leading-loose tracking-tighter">
			Meet the Team<span class="text-indigo-600 text-shadow-none">.</span>
		</h1>
		<div class="grid max-w-[1200px] grid-cols-3 gap-12">
			{#each about.team as member}
				<div class="flex flex-col items-center bg-zinc-950">
					<div class="mb-4 size-56 rounded-full bg-gray-400"></div>
					<h1 class="font-serif text-2xl tracking-tighter">{member.name}</h1>
					<h2 class="font-semibold tracking-tighter text-indigo-600">{member.position}</h2>
					<p class="mt-4 text-justify text-sm font-extralight text-gray-400">
						{member.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="mb-32 flex h-full w-10/12 flex-col items-center text-white">
		<h1 class="font-serif text-9xl leading-loose tracking-tighter">
			Advisors<span class="text-indigo-600">.</span>
		</h1>
		<div class="grid max-w-[1200px] grid-cols-3 gap-12">
			{#each about.advisors as advisor}
				<div class="flex flex-col items-center">
					<div class="mb-4 size-56 rounded-full bg-gray-400"></div>
					<h1 class="font-serif text-2xl tracking-tighter">{advisor.name}</h1>
					<h2 class="font-semibold tracking-tighter text-indigo-600">{advisor.position}</h2>
					<p class="mt-4 text-justify text-sm font-extralight text-gray-400">
						{advisor.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</div>
