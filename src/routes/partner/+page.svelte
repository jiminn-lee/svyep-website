<script lang="ts">
	import Marquee from '$lib/components/Marquee.svelte';
	import StarsBackground from '$lib/components/StarsBackground.svelte';

	const companiesAndOrganizations = Object.values(
		import.meta.glob('/src/lib/logos/companies-and-organizations/*.png', {
			eager: true,
			import: 'default'
		})
	);
</script>

<div class="flex flex-col items-center gap-20 pt-40">
	<StarsBackground className="-z-10 fixed" starDensity={0.00003} />
	<StarsBackground starDensity={0.00003} className="-z-10" />
	<h1 class="text-shadow-glow-white text-center text-8xl tracking-tighter text-white">
		<span class="text-shadow-glow-blue font-bold text-indigo-600">PARTNER</span> with us.
	</h1>
	<div class="flex flex-col items-center gap-4">
		<h1
			class="mb-4 font-serif text-6xl font-medium tracking-tighter text-white underline decoration-indigo-600 decoration-wavy decoration-[5px] underline-offset-8"
		>
			Companies & Organizations
		</h1>
		<p class="text-md mb-4 w-[900px] text-center text-gray-400">
			The following companies and organizations are ones SVYEP has had the privilege of engaging
			with in a variety of ways, including partnering with them to co-host events, featuring their
			founders and leaders in interviews and Zoom webinars, and participation of their
			representatives in SVYEP hosted events.
		</p>
		<div class="flex flex-col gap-4 opacity-50">
			<Marquee className="[--duration:60s]">
				{#each companiesAndOrganizations as url, index}
					{#if index < companiesAndOrganizations.length / 3}
						<img src={url} alt="" class="mx-6 h-[50px] select-none" />
					{/if}
				{/each}
			</Marquee>
			<Marquee className="[--duration:60s]" reverse={true}>
				{#each companiesAndOrganizations as url, index}
					{#if index >= companiesAndOrganizations.length / 3 && index < (companiesAndOrganizations.length / 3) * 2}
						<img src={url} alt="" class="mx-6 h-[50px] select-none" />
					{/if}
				{/each}
			</Marquee>
			<Marquee className="[--duration:60s]">
				{#each companiesAndOrganizations as url, index}
					{#if index >= (companiesAndOrganizations.length / 3) * 2 && index < companiesAndOrganizations.length}
						<img src={url} alt="" class="mx-6 h-[50px] select-none" />
					{/if}
				{/each}
			</Marquee>
		</div>
	</div>
	<div class="flex flex-col items-center gap-4">
		<h1
			class="mb-4 font-serif text-6xl font-medium tracking-tighter text-white underline decoration-indigo-600 decoration-wavy decoration-[5px] underline-offset-8"
		>
			Community Initiatives
		</h1>
		<div class="flex flex-col gap-4 opacity-50"></div>
	</div>
</div>
