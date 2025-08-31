<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { cn } from '$lib/utils/cn';
	import List from 'phosphor-svelte/lib/List';
	import X from 'phosphor-svelte/lib/X';

	let isMenuOpen = $state(false);
</script>

<header class="flex w-full justify-center">
	<nav
		class="shadow-glow-blue/5 fixed z-50 mt-10 hidden w-10/12 max-w-[1600px] items-center justify-between rounded-full border-2 border-white/5 bg-indigo-400/5 px-6 py-1 text-white backdrop-blur-xl sm:flex"
	>
		<div class="flex w-fit justify-start">
			<a class="flex w-fit items-center gap-2 xl:w-[250px]" href="/">
				<img src="/logo.png" alt="" class="mb-1 size-12" />
				<div class="hidden sm:block">
					<h1 class="font-display mt-0.5 text-3xl leading-6 tracking-tight">SVYEP</h1>
					<p class=" text-[0.5rem] leading-tight font-extralight text-gray-300">
						SILICON VALLEY YOUTH <br /> ENTREPRENEURSHIP PROGRAM
					</p>
				</div>
			</a>
		</div>
		<div class="hidden gap-6 text-gray-400 xl:flex">
			<a href="/about" class="hover:text-shadow-glow-white transition hover:text-white">About Us</a>
			<a href="/impact" class="hover:text-shadow-glow-white transition hover:text-white">Impact</a>
			<a href="/events" class="hover:text-shadow-glow-white transition hover:text-white">Events</a>
			<a href="/articles" class="hover:text-shadow-glow-white transition hover:text-white"
				>Articles</a
			>
			<!-- <a href="/donate" class="hover:text-shadow-glow-white transition hover:text-white">Merch</a> -->
			<a href="/donate" class="hover:text-shadow-glow-white transition hover:text-white">Donate</a>
		</div>
		<div class=" flex w-fit justify-end gap-2 xl:w-[250px]">
			<Button variant="secondary" href="/partner" class="hidden sm:block">Partnerships</Button>
			<Button href="/join" class="hidden sm:block">Join Us</Button>
			<Button
				variant="outline"
				size="icon"
				class="hidden sm:block xl:hidden"
				onclick={() => {
					isMenuOpen = !isMenuOpen;
				}}
			>
				{#if !isMenuOpen}
					<List size={24} />
				{:else}
					<X size={24} />
				{/if}</Button
			>
			<div
				class={cn(
					'shadow-glow-blue/5 absolute top-[70px] right-6  flex items-center rounded-2xl border-2 border-white/5 bg-indigo-400/50 p-8 text-white backdrop-blur-xl transition-opacity xl:hidden',
					`${isMenuOpen ? 'block' : 'hidden'}`
				)}
			>
				<div class="flex w-full flex-col gap-4 text-center text-gray-400">
					<a href="/about" class="hover:text-shadow-glow-white transition hover:text-white"
						>About Us</a
					>
					<a href="/impact" class="hover:text-shadow-glow-white transition hover:text-white"
						>Impact</a
					>
					<a href="/events" class="hover:text-shadow-glow-white transition hover:text-white"
						>Events</a
					>
					<a href="/articles" class="hover:text-shadow-glow-white transition hover:text-white"
						>Articles</a
					>
					<!-- <a href="/donate" class="hover:text-shadow-glow-white transition hover:text-white"
						>Merch</a
					> -->
					<a href="/donate" class="hover:text-shadow-glow-white transition hover:text-white"
						>Donate</a
					>
				</div>
			</div>
		</div>
	</nav>
</header>
<header class="flex w-full justify-end">
	<Button class="fixed z-10 m-8 block sm:hidden" size="icon">
		<List size={32} />
	</Button>
</header>
