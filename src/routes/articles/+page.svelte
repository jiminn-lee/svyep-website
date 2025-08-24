<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import { cn } from '$lib/utils/cn.js';

	let { data } = $props();
	let selectedTab = $state('All');
</script>

<StarsBackground starDensity={0.00003} className="-z-10" />
<div class="mr-auto ml-auto flex min-h-screen flex-col items-center pt-40 text-white">
	<div class="flex flex-col items-center gap-4">
		<h1 class="font-articles text-shadow-glow-white text-center text-8xl">The SVYEP Chronicle</h1>
		<div class="flex gap-8 text-gray-400 select-none">
			<button
				class={cn(
					'hover:text-shadow-glow-white cursor-pointer transition hover:text-white',
					selectedTab === 'All' ? 'text-shadow-glow-white text-white' : ''
				)}
				onclick={() => {
					selectedTab = 'All';
				}}>All Articles</button
			>
			|
			<button
				class={cn(
					'hover:text-shadow-glow-white cursor-pointer transition hover:text-white',
					selectedTab === 'Events' ? 'text-shadow-glow-white text-white' : ''
				)}
				onclick={() => {
					selectedTab = 'Events';
				}}>Events</button
			>
			|
			<button
				class={cn(
					'hover:text-shadow-glow-white cursor-pointer transition hover:text-white',
					selectedTab === 'Stories' ? 'text-shadow-glow-white text-white' : ''
				)}
				onclick={() => {
					selectedTab = 'Stories';
				}}>Stories</button
			>
		</div>
		<div class="flex flex-col gap-1">
			<hr class="w-[1200px] text-indigo-600" />
			<hr class="w-[1200px] text-indigo-600" />
		</div>
	</div>
	<div class="flex max-w-[1200px] flex-col gap-10 p-10">
		{#each data.articles as article, index}
			{#if selectedTab === 'All' || article.metadata.type === selectedTab}
				<div
					class={cn('flex items-center gap-10', index % 2 === 0 ? 'flex-row' : 'flex-row-reverse')}
				>
					<a
						href={`/articles/${article.slug}`}
						class="group flex cursor-pointer flex-col transition"
					>
						<div class="flex font-serif text-xl font-semibold text-indigo-600">
							{article.metadata.type}
						</div>
						<h1 class="font-serif text-5xl font-semibold transition group-hover:text-indigo-600">
							{article.metadata.title}
						</h1>
						<div class="mt-1 flex justify-between font-sans text-lg font-normal text-gray-400">
							<p>By {article.metadata.author}</p>
							<p>
								{new Date('2024-02-14').toLocaleDateString('en-us', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}
							</p>
						</div>
						<h2 class="mt-2">{article.metadata.subtitle}</h2>
					</a>
					<a href={`/articles/${article.slug}`} class="h-full w-1/2 cursor-pointer">
						<img
							src={article.metadata.imgUrls[0]}
							alt={article.metadata.title}
							class="hover:shadow-glow-blue-hover rounded-3xl outline-1 outline-indigo-600 transition"
						/>
					</a>
				</div>
				<hr class="text-gray-400/20" />
			{/if}
		{/each}
	</div>
</div>
