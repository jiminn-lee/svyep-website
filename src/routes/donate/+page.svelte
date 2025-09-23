<script lang="ts">
	import AnimateNumber from '$lib/components/AnimateNumber.svelte';
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
	<h1
		class="text-shadow-glow-white text-center text-7xl tracking-tighter text-white select-none sm:text-9xl"
	>
		Become a <span class="text-shadow-glow-blue font-serif text-indigo-600 italic">donor.</span>
	</h1>
	<p class="mt-4 w-full max-w-[900px] px-2 text-center text-gray-400">
		The money we raise goes directly into running our events and programs, covering the venues,
		materials, and resources that we use to help bring students’ ideas to life. We provide students
		with real experience, mentorship, and the chance to work directly with entrepreneurs and
		industry leaders. Every dollar donated directly goes toward supporting the next generation of
		youth entrepreneurs and giving them the opportunities they need to succeed.
	</p>
	<h1
		class="mt-40 flex text-[6rem] leading-32 font-black tracking-tighter text-white sm:text-[10rem]"
	>
		$<AnimateNumber value={donate.amount_raised} />+
	</h1>
	<h2
		class="font-serif text-5xl font-medium tracking-tighter text-indigo-600 italic sm:text-7xl
			"
	>
		raised.
	</h2>
	<Button size="lg" class="mt-10">Donate now</Button>
</div>
