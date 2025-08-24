<script lang="ts">
	import StarsBackground from '$lib/components/StarsBackground.svelte';
	import type { PageData } from './$types';

	let { data } = $props();
	const { metadata, article: Article } = data;
</script>

<StarsBackground className="-z-10" starDensity={0.00003} />
<article
	class="prose prose-xl prose-h1:font-serif prose-zinc dark:prose-invert mr-auto mb-32 ml-auto min-h-screen max-w-[900px] px-8 pt-40"
>
	<div class="flex justify-between font-serif text-2xl leading-loose font-semibold text-indigo-600">
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
