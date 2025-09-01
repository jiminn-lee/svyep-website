<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import donate from '$lib/data/donate';
</script>

<svelte:head>
	<title>Donate • SVYEP</title>
</svelte:head>

<div class="relative flex flex-col items-center py-40">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<h1 class="text-shadow-glow-white text-9xl tracking-tighter text-white select-none">
		Become a <span class="text-shadow-glow-blue font-serif text-indigo-600 italic">donor.</span>
	</h1>
	<p class="w-[900px] text-center text-gray-400">
		The money we raise goes directly into running our events and programs, covering the venues,
		materials, and resources that we use to help bring students’ ideas to life. We provide students
		with real experience, mentorship, and the chance to work directly with entrepreneurs and
		industry leaders. Every dollar donated directly goes toward supporting the next generation of
		youth entrepreneurs and giving them the opportunities they need to succeed.
	</p>
	<h1 class="mt-40 text-[10rem] leading-32 font-black tracking-tighter text-white">
		{donate.amount_raised}
	</h1>
	<h2
		class="font-serif text-7xl font-medium tracking-tighter text-indigo-600 italic
			"
	>
		raised.
	</h2>
	<Button size="lg" class="mt-10">Donate now</Button>
</div>
