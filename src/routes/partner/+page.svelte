<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import { ArrowDown, ArrowUp } from 'phosphor-svelte';
	import { fade } from 'svelte/transition';

	const companiesAndOrganizations = Object.values(
		import.meta.glob('/src/lib/logos/companies-and-organizations/*.png', {
			eager: true,
			import: 'default'
		})
	);

	const communityInitiatives = Object.values(
		import.meta.glob('/src/lib/logos/community-initiatives/*.png', {
			eager: true,
			import: 'default'
		})
	);

	let isFormOpen = $state(false);
</script>

<svelte:head>
	<title>Partner • SVYEP</title>
</svelte:head>

<div class="relative flex flex-col items-center pt-40">
	<StarsBackground class="fixed -z-10" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} class="-z-10" />
	<h1 class="text-shadow-glow-white text-center text-6xl tracking-tighter text-white sm:text-8xl">
		<span class="text-shadow-glow-blue font-bold text-indigo-600">PARTNER</span> with us.
	</h1>
	<Button
		size="lg"
		class="mt-4 mb-20 flex items-center gap-2"
		onclick={() => {
			isFormOpen = !isFormOpen;
		}}
	>
		{#if isFormOpen}
			<ArrowUp />
		{:else}
			<ArrowDown />
		{/if}
		Interest Form
		{#if isFormOpen}
			<ArrowUp />
		{:else}
			<ArrowDown />
		{/if}
	</Button>
	{#if isFormOpen}
		<iframe
			in:fade={{ duration: 800 }}
			class="opacity-90"
			title="SVYEP Student Enrollment Form"
			src="https://docs.google.com/forms/d/e/1FAIpQLSdQCc0DtoD2cA7en22z78AKhd9buIx81cVk6AUlDE62KwgN1w/viewform?embedded=true"
			width="840"
			height="3600"
			frameborder="0"
			marginheight="0"
			marginwidth="0">Loading...</iframe
		>
	{/if}
	<div class="my-10 flex flex-col items-center gap-4">
		<h1
			class="mb-4 max-w-full font-serif text-6xl font-medium tracking-tighter text-white underline decoration-indigo-600 decoration-[5px] underline-offset-8"
		>
			Companies & Organizations
		</h1>
		<p class="text-md mb-4 max-w-[900px] text-center text-gray-400">
			The following companies and organizations are ones SVYEP has had the privilege of engaging
			with in a variety of ways, including partnering with them to co-host events, featuring their
			founders and leaders in interviews and Zoom webinars, and participation of their
			representatives in SVYEP hosted events.
		</p>
		<div class="flex flex-col gap-4 opacity-50">
			<Marquee class="[--duration:60s]">
				{#each companiesAndOrganizations as url, index}
					{#if index < companiesAndOrganizations.length / 3}
						<img src={url as string} alt="" class="mx-6 h-[50px] select-none" />
					{/if}
				{/each}
			</Marquee>
			<Marquee class="[--duration:60s]" reverse={true}>
				{#each companiesAndOrganizations as url, index}
					{#if index >= companiesAndOrganizations.length / 3 && index < (companiesAndOrganizations.length / 3) * 2}
						<img src={url as string} alt="" class="mx-6 h-[50px] select-none" />
					{/if}
				{/each}
			</Marquee>
			<Marquee class="[--duration:60s]">
				{#each companiesAndOrganizations as url, index}
					{#if index >= (companiesAndOrganizations.length / 3) * 2 && index < companiesAndOrganizations.length}
						<img src={url as string} alt="" class="mx-6 h-[50px] select-none" />
					{/if}
				{/each}
			</Marquee>
		</div>
	</div>
	<div class="my-10 flex flex-col items-center gap-4">
		<h1
			class="mb-4 font-serif text-6xl font-medium tracking-tighter text-white underline decoration-indigo-600 decoration-[5px] underline-offset-8"
		>
			Community Initiatives
		</h1>
		<p class="text-md mb-4 w-[900px] text-center text-gray-400">
			We have supported these organizations through donation.
		</p>
		<div class="flex gap-12 opacity-50">
			{#each communityInitiatives as url}
				<img src={url as string} alt={url as string} class="h-[100px] select-none" />
			{/each}
		</div>
	</div>
	<div class="my-10 flex flex-col items-center gap-4">
		<h1
			class="mb-4 font-serif text-6xl font-medium tracking-tighter text-white underline decoration-indigo-600 decoration-[5px] underline-offset-8"
		>
			Charitable Causes
		</h1>
		<p class="text-md mb-4 w-[900px] text-center text-gray-400">
			We have supported these causes through donations.
		</p>
		<div class="flex gap-12 opacity-50">
			<h1 class="text-5xl font-bold text-white">2025 LA Wildfires</h1>
		</div>
	</div>
</div>
