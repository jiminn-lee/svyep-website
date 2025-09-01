<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import ArrowLeft from 'phosphor-svelte/lib/ArrowLeft';

	let { data } = $props();
	const { metadata, article: Article } = data;
</script>

<StarsBackground class="-z-10" starDensity={0.00003} />
<article
	class="prose prose-lg prose-h1:font-serif prose-zinc dark:prose-invert mr-auto mb-32 ml-auto min-h-screen max-w-[900px] px-8 pt-40"
>
	<a
		href="/articles"
		class="mb-10 flex items-center gap-2 text-gray-400 no-underline hover:underline"
		><ArrowLeft size={20} weight="bold" />Back</a
	>
	<div class="flex font-serif text-2xl font-semibold text-indigo-600">
		{metadata.type}
	</div>
	<h1>
		{metadata.title}
		<div class="flex justify-between font-sans text-lg font-normal text-gray-400">
			<p>By {metadata.author}</p>
			<p>
				{new Date('2024-02-14').toLocaleDateString('en-us', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</p>
		</div>
	</h1>
	<Article />
</article>
