import { json } from '@sveltejs/kit';
import type { MarkdownPost } from '../../../types';

async function getArticles() {
	let articles: Omit<MarkdownPost, 'default'>[] = [];

	const paths = import.meta.glob('/src/lib/articles/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const article = {
				metadata: file.metadata as MarkdownPost['metadata'],
				slug: slug
			} satisfies Omit<MarkdownPost, 'default'>;
			articles.push(article);
		}
	}

	articles = articles.sort(
		(first, second) =>
			new Date(second.metadata.date).getTime() - new Date(first.metadata.date).getTime()
	);

	return articles;
}

export async function GET() {
	const articles = await getArticles();
	return json(articles);
}
