<script lang="ts">
	import BlueButton from '$lib/components/BlueButton.svelte';
</script>

<header class="flex w-full justify-center">
	<nav
		class="shadow-glow-blue/5 fixed z-50 mx-auto mt-10 flex w-10/12 items-center justify-between rounded-full border-2 border-white/5 bg-gray-500/5 px-10 py-2 text-white backdrop-blur-xl"
	>
		<div class="flex w-1/4 justify-start">
			<a class=" flex items-center gap-2" href="/">
				<img src="/svyep.png" alt="" class="size-14" />
				<div>
					<h1 class="font-display text-3xl leading-7 tracking-tight">SVYEP</h1>
					<p class=" text-[0.5rem] leading-tight font-extralight">
						SILICON VALLEY YOUTH <br /> ENTREPRENEURSHIP PROGRAM
					</p>
				</div>
			</a>
		</div>
		<div class="flex gap-8 text-gray-300">
			<a href="/impact" class="hover:text-shadow-glow-white transition hover:text-white">Impact</a>
			<a href="/events" class="hover:text-shadow-glow-white transition hover:text-white">Events</a>
			<a href="/articles" class="hover:text-shadow-glow-white transition hover:text-white"
				>Articles</a
			>
			<a href="/about" class="hover:text-shadow-glow-white transition hover:text-white">About Us</a>
			<a href="/donate" class="hover:text-shadow-glow-white transition hover:text-white">Donate</a>
			<a href="/merchandise" class="hover:text-shadow-glow-white transition hover:text-white"
				>Merchandise</a
			>
		</div>
		<div class="flex w-1/4 justify-end gap-2">
			<a
				href="/partner"
				class="shadow-glow-gray rounded-xl border-2 border-white/5 bg-gray-800 px-4 py-1 font-medium text-gray-300 transition-all active:scale-[0.96] active:border-white/50 active:duration-200"
				>Partner With Us</a
			>
			<BlueButton href="/join">Join Us</BlueButton>
		</div>
	</nav>
</header>
