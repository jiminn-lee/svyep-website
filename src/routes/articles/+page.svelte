<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';

	let { data } = $props();
</script>

<StarsBackground starDensity={0.00003} />
<div class="mr-auto ml-auto flex min-h-screen flex-col items-center pt-40 text-white">
	<div class="flex flex-col items-center gap-4">
		<h1 class="font-articles text-shadow-glow-white text-center text-7xl">The SVYEP Chronicle</h1>
		<div class="flex gap-8 text-gray-400">
			<button>All Articles</button>
			|
			<button>Events</button>
			|
			<button>Stories</button>
		</div>
		<div class="flex flex-col gap-1">
			<hr class="w-[1200px] text-indigo-600" />
			<hr class="w-[1200px] text-indigo-600" />
		</div>
	</div>
	<div class="flex flex-col">
		{#each data.articles as article}
			<div class="flex">
				<div class="flex flex-col">
					<h1>{article.metadata.title}</h1>
				</div>
			</div>
		{/each}
	</div>
</div>
