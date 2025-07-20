<script lang="ts">
	import BlueButton from '$lib/components/BlueButton.svelte';
	import Spotlight from '$lib/components/Spotlight.svelte';

	import ArrowDown from 'phosphor-svelte/lib/ArrowDown';
</script>

<main class="relative min-h-screen overflow-y-auto bg-zinc-950">
	<Spotlight />
	<div
		class="flex h-screen flex-col items-center justify-between
  "
	>
		<img
			src="/svyep.png"
			alt=""
			class="pointer-events-none absolute mt-56 ml-14 size-[400px] object-cover opacity-[0.03]"
		/>
		<div class="mt-[350px] flex w-fit flex-col items-center justify-between gap-8">
			<h1
				class="text-shadow-glow-white text-center text-7xl font-medium tracking-tighter text-white"
			>
				Empowering the <span class="text-shadow-glow-blue font-serif text-indigo-700 italic"
					>future</span
				> <br /> of entrepreneurs.
			</h1>
			<BlueButton href="/join">Join Us</BlueButton>
		</div>
		<p class="my-6 flex items-center gap-2 font-medium text-gray-500">Learn More <ArrowDown /></p>
	</div>
</main>
<div class="h-[1000px] bg-zinc-950"></div>
